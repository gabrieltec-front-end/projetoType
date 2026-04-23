import { Header, StyledCard } from '@/components'
import { Container } from '@mui/material'

function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <StyledCard>CARD</StyledCard>
      </Container>
    </>
  )
}

export default Home
