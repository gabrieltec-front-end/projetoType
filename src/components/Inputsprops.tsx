import { Inputprops } from '@/types'
import { Theme } from 'styled-components'
import styled from 'styled-components'
import Rem from '@/utils/pxToRem'

export const StyledInput = styled.input<{ theme?: Theme } & Inputprops>`
  background-color: ${(props) => props.theme.textInput.active};
  color: ${(props) => props.theme.textInput.activeColor};
  border-radius: ${Rem(8)};
  border: ${Rem(1)} solid ${(props) => props.theme.textInput.borderColor};
  padding: ${Rem(8)} ${Rem(16)};
  font-size: ${Rem(18)};
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: ${Rem(16)};
  padding: ${Rem(8)} ${Rem(16)};
  transition: background-color 0.3s;
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme.textInput.placeholderColor};
  }
`
