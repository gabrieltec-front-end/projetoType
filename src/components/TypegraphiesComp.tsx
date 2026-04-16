import styled from 'styled-components'
import Rem from '../utils/pxToRem'

import { TypegraphiesProps } from '../types'

export const StyledH1 = styled.h1<TypegraphiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => Rem(props.size || 24)};
  font-weight: ${(props) => Rem(props.weight || 600)};
  letter-spacing: ${Rem(-1)};
  line-height: ${(props) => Rem(props.lineheight || 36)};
`

export const StyledH2 = styled.h2<TypegraphiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => Rem(props.size || 16)};
  font-weight: ${(props) => Rem(props.weight || 600)};
  letter-spacing: ${Rem(-1)};
  line-height: ${(props) => Rem(props.lineheight || 24)};
`

export const StyledH3 = styled.p<TypegraphiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => Rem(props.size || 16)};
  font-weight: ${(props) => Rem(props.weight || 400)};
  letter-spacing: ${Rem(-1)};
  line-height: ${(props) => Rem(props.lineheight || 24)};
`

export const StyledSpan = styled.span<TypegraphiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => Rem(props.size || 16)};
  font-weight: ${(props) => Rem(props.weight || 600)};
  letter-spacing: ${Rem(-1)};
  line-height: ${(props) => Rem(props.lineheight || 24)};
`

export const StyledUl = styled.ul<TypegraphiesProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => Rem(props.size || 16)};
  font-weight: ${(props) => Rem(props.weight || 600)};
  letter-spacing: ${Rem(-1)};
  line-height: ${(props) => Rem(props.lineheight || 24)};
  line-style-position: inside;
  li {
    list-style-position: outise;
    margin-left: ${Rem(15)};
  }
`
