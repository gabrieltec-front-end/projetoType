import { TypeGraphiesComp } from '@/types'
import styled from 'styled-components'
import Rem from '@/utils/pxToRem'

export const StyledH1 = styled.h1<TypeGraphiesComp>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => Rem(props.size || 24)};
  font-weight: ${(props) => props.weight || 600};
  line-height: ${(props) => Rem(props.lineHeight || 36)};
  letter-spacing: ${Rem(-1)};
`

export const StyledH2 = styled.h2<TypeGraphiesComp>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => Rem(props.size || 16)};
  font-weight: ${(props) => props.weight || 600};
  line-height: ${(props) => Rem(props.lineHeight || 24)};
  letter-spacing: ${Rem(-1)};
`

export const StyledH3 = styled.h3<TypeGraphiesComp>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => Rem(props.size || 16)};
  font-weight: ${(props) => props.weight || 400};
  line-height: ${(props) => Rem(props.lineHeight || 24)};
`

export const StyledUl = styled.ul<TypeGraphiesComp>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => Rem(props.size || 16)};
  font-weight: ${(props) => props.weight || 400};
  line-height: ${(props) => Rem(props.lineHeight || 24)};
  list-style-position: 'inside';
  li {
    list-style-postion: 'outside';
    margin-left: ${Rem(15)};
  }
`
