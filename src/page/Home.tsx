import { Header, StyledCard } from '@/components'
import { Container } from '@mui/material'
import { AvatarComp } from '@/components'
import CurrentBRL from '@/utils/currencyConverter'

function Home() {
  const listCompAvatar = [
    {
      avatar: 'Avatar.png',
      name: 'Gabriel Fonseca',
      subtitle: CurrentBRL(4000.78721),
    },

    {
      avatar: 'Avatar.png',
      name: 'Matheus Fonseca',
      subtitle: CurrentBRL(3000.12312),
    },

    {
      avatar: 'Avatar.png',
      name: 'Jorge Fonseca',
      subtitle: CurrentBRL(2000.3222),
    },
  ]
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <StyledCard>CARD</StyledCard>
        <StyledCard>
          <AvatarComp listDate={listCompAvatar} />
        </StyledCard>
      </Container>
    </>
  )
}

export default Home
