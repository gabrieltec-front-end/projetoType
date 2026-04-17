import styled, { Theme } from 'styled-components'
import Rem from '../utils/pxToRem'

export const StyledLogo = styled.div<{ theme?: Theme }>`
  background-image: ${(props) => props.theme.background};

  width: ${Rem(100)};
  height: ${Rem(42)};
`
