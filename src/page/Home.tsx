import { Header, StyledCard } from '@/components'
import { Container } from '@mui/material'
import { AvatarComp } from '@/components'
import CurrentBRL from '@/utils/currencyConverter'
import TableComponente from '@/components/TableComponente'

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
  const mocleTable = {
    headers: ['Name', 'Email', 'Buttons'],
    rows: [
      [
        <span>Name1</span>,
        <span>Email1@gmail.com</span>,
        <button>Emviar</button>,
      ],
      [
        <span>Name2</span>,
        <span>Email2@gmail.com</span>,
        <button>Emviar</button>,
      ],
      [
        <span>Name3</span>,
        <span>Email3@gmail.com</span>,
        <button>Emviar</button>,
      ],
    ],
  }
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <StyledCard>CARD</StyledCard>
        <StyledCard>
          <AvatarComp listDate={listCompAvatar} />
        </StyledCard>
        <StyledCard>
          <TableComponente
            headers={mocleTable.headers}
            rows={mocleTable.rows}
          />
        </StyledCard>
      </Container>
    </>
  )
}

export default Home
