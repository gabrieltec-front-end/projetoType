import Grid from '@mui/material/Grid'

import { Box, Container } from '@mui/material'

import { BannerImage } from '../components'

function Login() {
  return (
    <Box>
      <Grid container>
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}
        >
          <Container maxWidth="sm">
            <h1>Login</h1>
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
