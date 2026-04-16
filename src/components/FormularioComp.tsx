import { Formulario } from '../types'
import Rem from '../utils/pxToRem'
import { StyledButton } from './StyledButton'
import { StyledInput } from './StyledInput'
import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${Rem(16)};
`

function FormularioComponente(props: Formulario) {
  const { input, button, mensagem } = props

  return (
    <StyledForm>
      {input.map((inputProps, index) => (
        <StyledInput key={index} {...inputProps} />
      ))}

      {button.map((buttonProps, index) => (
        <StyledButton key={index} {...buttonProps} />
      ))}

      {mensagem && (
        <div style={{ color: mensagem.type == 'success' ? 'green' : 'red' }}>
          {mensagem.msg}
        </div>
      )}
    </StyledForm>
  )
}

export default FormularioComponente
