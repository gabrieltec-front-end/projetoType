import { Header, StyledCard } from '@/components'
import { Container } from '@mui/material'
import { AvatarComp, Graphie } from '@/components'
import CurrentBRL from '@/utils/currencyConverter'
import TableComponente from '@/components/TableComponente'

function Home() {
  const listCompAvatar = [
    {
      avatar: 'Avatar.png',
      name: 'Jorge Fonseca',
      subtitle: CurrentBRL(2000.3222),
    },
    {
      avatar: 'Avatar.png',
      name: 'Gabriel Fonseca',
      subtitle: CurrentBRL(2000.3222),
    },
    {
      avatar: 'Avatar.png',
      name: 'Matheus Fonseca',
      subtitle: CurrentBRL(2000.3222),
    },
  ]
  const mocleTable = {
    headers: ['Nome', 'Email', 'Buttons'],
    rows: [
      [
        <span>Nome1</span>,
        <span>Email1@gmail.com</span>,
        <button>Action</button>,
      ],
      [
        <span>Nome2</span>,
        <span>Email2@gmail.com</span>,
        <button>Action</button>,
      ],
      [
        <span>Nome3</span>,
        <span>Email3@gmail.com</span>,
        <button>Action</button>,
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
        <StyledCard>
          <Graphie
            labels={['Jan', 'Fev', 'Març']}
            data={[21345, 2456, 5000]}
            type="bar"
          />
        </StyledCard>
      </Container>
    </>
  )
}

export default Home
