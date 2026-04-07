import { Box, Grid, Container } from '@mui/material'

import { BannerImage } from '../components'

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
              <FormularioComponentes
                input={[
                  { type: 'email', placeholder: 'E-mail' },
                  { type: 'password', placeholder: 'Senha' },
                ]}
                button={[
                  { type: 'submit', children: 'Enviar', className: 'primary' },
                ]}
                mensagem={{ type: 'success', msg: 'SUCESSO!!!!' }}
              />
            </Container>
          </Grid>
          <Grid size={{ sm: 6 }} sx={{ display: { sx: 'none', sm: 'block' } }}>
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
