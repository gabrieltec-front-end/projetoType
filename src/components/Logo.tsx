import styled, { Theme } from 'styled-components'
import Rem from '../utils/pxToRem'

interface LogoProps {
  height: number
  width: number
}

export const StyledLogo = styled.div<LogoProps & { theme?: Theme }>`
  background-image: ${(props) => props.theme.background};
  background-size: cover;

  height: ${(props) => Rem(props.height)};
  width: ${(props) => Rem(props.width)};
`
