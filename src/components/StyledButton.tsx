import styled from 'styled-components'
import Rem from '../utils/pxToRem'
import { Theme } from 'styled-components'

import { Buttonprops } from '../types'
//Tipando com o meu Buttonprops que ele recebe apenas valores de button no caso também valores css
export const StyledButton = styled.button<{ theme?: Theme } & Buttonprops>`
  border-radius: ${Rem(8)};
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  font-size: ${Rem(16)};
  font-weight: bold;
  height: ${Rem(50)};
  padding: 0 ${Rem(16)};
  transition: background-color 0.3s;
  width: 100%;

  &.primary {
    background-color: ${(props) => props.theme.buttons.primary};
    color: ${(props) => props.theme.buttons.primaryColor};
      &.hover {
      background-color: ${(props) => props.theme.buttons.primaryHover};
    }
  }

  &.alert {
    background-color: ${(props) => props.theme.buttons.alert};
    color: ${(props) => props.theme.buttons.alertColor};

    &.hover {
      background-color: ${(props) => props.theme.buttons.alertHover};
    }
  }

  &.borderless-alert {
    background-color: none;
    color: ${(props) => props.theme.buttons.alert};
    height: 0;
    padding: 0 0;

    &.hover {
      color: ${(props) => props.theme.buttons.alertHover};
    }
  }

  &.disabled {
    background-color: ${(props) => props.theme.buttons.disabled};
    color: ${(props) => props.theme.buttons.disabledColor};
    cursor:not-allowed;
  
    &.hover {
      color: ${(props) => props.theme.buttons.disabled};
  }
`
