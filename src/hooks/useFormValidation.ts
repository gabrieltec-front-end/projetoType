import { useState, useEffect } from 'react'
import { Inputprops } from '@/types'

export const useFormValidation = (inputs: Inputprops[]) => {
  // Recebendo os tipos de arquivos apenas de inputsno caso passo como array
  const [formValues, setFormValues] = useState(
    inputs.map((input) => input.value || '') //Inicializando os valores recebibos por meio do parametro,caso não tenha nhada do value do input fica vazio ,já que value é do input tipo  o placeholder
  )

  const [formValid, setFormValid] = useState(false) // valor para definir a validaçao dos inputs incialmente é false pois ainda não passou pelo evento ainda

  useEffect(() => {
    // useEffect por conta de captrura de change já que quando tiver alteração do valor do input de maneira digitada no caso ele é ativado este hook
    const setAllValid = inputs.every((input, index) => {
      // every função que retorna true ou false de uma condição especifica,otimo para este tipo de situação de validação
      const value = formValues[index] || '' // armazenado o valor de acordo  com o espaço do array alocado exemplo 0 é o email e 1 o password demonstra o numero de volta da função,este que irei passar
      if (input.type == 'email') {
        // condição para validação do email
        return /\S+@\S+\.\S+/.test(String(value)) // uso do regex para validação do input email  recebe apenas valores de string
      }
      if (input.type === 'password') {
        //Valor de validação do password, apenas string
        return String(value).length > 7
      }
      return true // Valor retornado caso as condições de cima sejam true se não sera retornado false
    })
    setFormValid(setAllValid) // passando o retorna da função para o state
  }, [formValues, inputs]) //Valores  passado para referência do useEffect,caso haja alterçao nessas duas variaveis ,eles são acionados

  const handleChange = (index: number, value: string) => {
    //Aqui é o ponto de tudo,no qual faz a captura do valor digitado no input e passa como parametro do hook que armazena o valor
    setFormValues((prevValues) => {
      //Aqui eu retorno o valor já no hoos
      const newValues = [...prevValues] //Aqui estou salvando o valor da variavel do hook mais o novo valor passado
      newValues[index] = value //Aqui estou passando o novo valor digitando para dentro da variavel do hook atuazliado de acordo com sua posição,no caso o typo de input né,isso por conta do newValue recebe ...prevValue o ... não substitui mas concatena
      return newValues //Retorna o novo valor para o hook assim atualizando sempre o valor da variavel do hooks que está recebendo este parametro
    })
  }

  return { handleChange, formValid, formValues } // retornado as variaveis da função para disponibilizar para aplicação
}
