import styled from 'styled-components'
import Rem from '../utils/pxToRem'
import { Inputprops } from '../types'
import { Theme } from 'styled-components'

export const StyledInput = styled.input<
  { theme?: Theme } & Inputprops
>` background-color: ${(props) => props.theme.textInput.active};
    color:${(props) => {
      props.theme.textInput.activeColor
    }};
    border-radius:${Rem(8)};
    border: ${Rem(1)} solid ${(props) => props.theme.textInput.borderColor};
    box-sizing:border-box;
    cursor: pointer;
    font-size:${Rem(14)};
    height:${Rem(40)};
    width:100%;
    font-weight:500;
    padding: ${Rem(8)} ${Rem(16)}
    transition: background-color 0.3s

     &.disabled {
    background-color: ${(props) => props.theme.textInput.disabled};
    border:${Rem(1)} solid;
    color: ${(props) => props.theme.textInput.disabledColor};
    cursor:not-allowed;
  
    &.hover {
      color: ${(props) => props.theme.buttons.disabled};
  }


  &::placeholder{

  color:${(props) => props.theme.textInput.placeholderColor};
  }

    
    
    }
`
