import { Formulario } from '../types'
import { StyledInput } from './Inputsprops'
import { StyledButton } from './Buttonsprops'

function FormularioComponente(props: Formulario) {
  const { input, button, mensagem } = props

  return (
    <form>
      {input.map((inputProps, index) => (
        <StyledInput key={index} {...inputProps} />
      ))}

      {button.map((buttonProps, index) => (
        <StyledButton className="primary" key={index} {...buttonProps} />
      ))}

      {mensagem && (
        <div style={{ color: mensagem.type == 'success' ? 'green' : 'red' }}>
          {mensagem.msg}
        </div>
      )}
    </form>
  )
}

export default FormularioComponente
