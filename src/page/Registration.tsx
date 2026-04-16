import { Box, Grid, Container } from '@mui/material'

import { BannerImage, StyledLogo } from '../components'
import Rem from '../utils/pxToRem'
import { StyledH1, StyledH3, StyledUl, StyledSpan } from '../components'

import { FormularioComponentes } from '../components'

function Resgistration() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <Container maxWidth="sm">
              <Box sx={{ marginBottom: Rem(24) }}>
                <StyledLogo />
              </Box>
              <Box sx={{ marginBottom: Rem(24) }}>
                <StyledH1>Faça seu cadastro</StyledH1>
                <StyledH3>Sua senha deve ter:</StyledH3>
                <StyledUl>
                  <li>Entre 8 e 16 caracteres;</li>
                  <li>Pelo menos uma letra maiúscula;</li>
                  <li>Pelo menos um caractere especial.</li>
                  <li>Pelo menos um número</li>
                </StyledUl>
              </Box>
              <FormularioComponentes
                input={[
                  { type: 'email', placeholder: 'E-mail' },
                  { type: 'password', placeholder: 'Senha' },
                ]}
                button={[
                  { className: 'primary', type: 'submit', children: 'Enviar' },
                ]}
                mensagem={{ type: 'success', msg: 'SUCESSO!!!!' }}
              />
            </Container>
          </Grid>
          <Grid size={{ sm: 6 }} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Container maxWidth="sm">
              <BannerImage />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Resgistration
