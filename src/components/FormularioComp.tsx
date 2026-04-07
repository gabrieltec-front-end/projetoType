import { Formulario } from '../types'

function FormularioComponente(props: Formulario) {
  const { input, button, mensagem } = props

  return (
    <form>
      {input.map((inputProps, index) => (
        <input key={index} {...inputProps}></input>
      ))}

      {button.map((buttonProps, index) => (
        <button key={index} {...buttonProps}></button>
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
