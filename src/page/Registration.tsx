import { Box, Grid, Container } from '@mui/material'

import { BannerImage } from '../components'

function Resgistration() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}
          >
            <Container maxWidth="sm">Cadastro</Container>
          </Grid>

          <Grid size={{ sm: 6 }} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Resgistration
