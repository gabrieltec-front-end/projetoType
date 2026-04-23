import styled from 'styled-components'
import { Avatar, Box, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import Rem from '@/utils/pxToRem'
import { StyledLogo } from './Logo'
import { Theme } from 'styled-components'

const StyledHeader = styled.header<{ theme?: Theme }>`
  background-color: ${(props) => props.theme.appBackground};
  border-bottom: ${Rem(1)} solid ${(props) => props.theme.appDefaultStroke};
  margin-bottom: ${Rem(37)};
  width: 100%;
`

function Header() {
  return (
    <StyledHeader>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'space-between',

            height: Rem(64),
          }}
        >
          <Link to="/home">
            <StyledLogo height={37} width={95} />
          </Link>
          <Link to="/perfil">
            <Avatar
              alt="DNC Avatar"
              src="/dnc-perfil.svg"
              sx={{ width: Rem(40), height: Rem(40) }}
            />
          </Link>
        </Box>
      </Container>
    </StyledHeader>
  )
}

export default Header
