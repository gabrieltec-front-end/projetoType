import styled from 'styled-components'

import { Theme } from 'styled-components'
import Rem from '@/utils/pxToRem'

export const StyledCard = styled.div<{ theme?: Theme }>`
  background-color: ${(props) => props.theme.card.background};
  border: ${Rem(1)} solid ${(props) => props.theme.card.border};
  border-radius: ${Rem(8)};
  box-sizing: border-box;
  padding: ${Rem(24)};
  width: 100%;

  &.alert {
    background-color: ${(props) => props.theme.card.alert};
    border-color: ${(props) => props.theme.card.alert};
  }
  &.success {
    background-color: ${(props) => props.theme.card.success};
    border-color: ${(props) => props.theme.card.success};
  }
  &.warning {
    background-color: ${(props) => props.theme.card.warning};
    border-color: ${(props) => props.theme.card.warning};
  }
`
