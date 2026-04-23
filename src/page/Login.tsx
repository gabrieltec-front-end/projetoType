import Grid from '@mui/material/Grid'

import { Box, Container } from '@mui/material'

import { BannerImage, StyledLogo } from '../components'
import Rem from '../utils/pxToRem'

import { StyledH1, StyledH3 } from '../components'
import FormularioComponente from '../components/FormularioComp'

function Login() {
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
              <StyledLogo height={42} width={100} />
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
              input={[
                { type: 'email', className: 'primary', placeholder: 'Email' },
                { type: 'password', placeholder: 'Senha' },
              ]}
              button={[{ type: 'submit', children: 'Enviar' }]}
              mensagem={{ msg: 'Sucesso', type: 'success' }}
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
