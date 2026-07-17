import Grid from '@mui/material/Grid'

import { Box, Container } from '@mui/material'

import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'

import { BannerImage, StyledLogo } from '../components'
import Rem from '../utils/pxToRem'

import { StyledH1, StyledH3 } from '../components'
import FormularioComponente from '../components/FormularioComp'
import { mensagem, decodeJWT } from '@/types'
import ConvertJwtTokenExp from '@/utils/convertExpJwtTime'

//HOOKS

import { usePost, useFormValidation } from '@/hooks'
import { LoginData, LoginPostData } from '@/types/loginData'
import { ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate = useNavigate()
  const input = [
    {
      type: 'email',
      placeholder: 'Email',
    },
    {
      type: 'password',
      placeholder: 'Senha',
    },
  ]
  const { data, postData, error, loading } = usePost<LoginData, LoginPostData>(
    'login'
  )
  const { formValues, formValid, handleChange } = useFormValidation(input)

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await postData({
      email: String(formValues[0]),
      password: String(formValues[1]),
    })
  }

  const HandleMensagem = (): mensagem => {
    if (!error) return { type: 'success', msg: '' }
    switch (error) {
      case 401:
        return {
          type: 'error',
          msg: 'Email ou senha invalidos',
        }
      default:
        return {
          msg: 'Não foi possivel esta operação',
          type: 'error',
        }
    }
  }
  useEffect(() => {
    console.log('data:', data)
  }, [data])

  useEffect(() => {
    if (!data) return
    const token = data.authorization.replace('Bearer', '')
    const decode = jwtDecode<decodeJWT>(token)
    Cookies.set('authorization', token, {
      expires: ConvertJwtTokenExp(decode.exp),
      secure: true,
      sameSite: 'Strict',
    })
    if (Cookies.get('authorization')) {
      navigate('/home', { replace: true })
    }
  }, [data, navigate])

  return (
    <Box>
      <Grid container>
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}
        >
          <Container maxWidth="sm">
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{
                marginBottom: Rem(24),
                display: 'flex',
                justifyContent: { sm: 'left', xs: 'center' },
              }}
            >
              <StyledLogo height={42} width={82} />
            </Grid>

            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{
                marginBottom: Rem(24),

                textAlign: { sm: 'left', xs: 'center' },
              }}
            >
              <StyledH1>Bem-vindo</StyledH1>
              <StyledH3> Digite sua senha e email para logar</StyledH3>
            </Grid>
            <FormularioComponente
              input={input.map((input, index) => ({
                type: input.type,
                placeholder: input.placeholder,
                value: formValues[index],
                onChange: (e: ChangeEvent<HTMLInputElement>) => {
                  handleChange(index, (e.target as HTMLInputElement).value)
                },
              }))}
              button={[
                {
                  className: 'primary',
                  type: 'submit',
                  onClick: HandleSubmit,
                  disabled: !formValid || loading,
                  children: loading ? 'Aguarde...' : 'Enviar',
                },
              ]}
              mensagem={HandleMensagem()}
            />
          </Container>
        </Grid>
        <Grid size={{ sm: 6 }} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <BannerImage />
        </Grid>
      </Grid>
    </Box>
  )
}
export default Login
