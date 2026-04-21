import { Buttonprops } from '@/types'
import { Theme } from 'styled-components'
import styled from 'styled-components'
import Rem from '@/utils/pxToRem'

export const StyledButton = styled.button<{ theme?: Theme } & Buttonprops>`
  border-radius: ${Rem(8)};
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  font-size: ${Rem(16)};
  font-weight: bold;
  height: ${Rem(50)};
  padding: 0 ${Rem(16)};
  transition: background-color 0.3s;
  width: 100%;

  &.primary {
    background-color: ${(props) => props.theme.buttons.primary};
    color: ${(props) => props.theme.buttons.primaryColor};

    &:hover {
      background-color: ${(props) => props.theme.buttons.primaryHover};
    }
  }

  &.alert {
    background-color: ${(props) => props.theme.buttons.alert};
    color: ${(props) => props.theme.buttons.alertColor};

    &:hover {
      background-color: ${(props) => props.theme.buttons.alertHover};
    }
  }

  &.borderless-alert {
    background-color: transparent;
    color: ${(props) => props.theme.buttons.alert};
    padding: 0;
    width: auto;

    &:hover {
      color: ${(props) => props.theme.buttons.alertHover};
    }
  }

  &:disabled {
    background-color: ${(props) => props.theme.buttons.disabledColor};
    cursor: not-allowed;

    &:hover {
      background-color: ${(props) => props.theme.buttons.disabledColor};
    }
  }
`
