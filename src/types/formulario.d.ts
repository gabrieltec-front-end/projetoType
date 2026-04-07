import React, { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'

export type Inputprops = React.InputHTMLAttributes<HTMLInputElement>
export type Buttonprops = React.ButtonHTMLAttributes<HTMLButtonElement>

export type mensagem = {
  type: 'success' | 'failed'
  msg: string
}

export interface Formulario {
  input: Inputprops[]
  button: Buttonprops[]
  mensagem: mensagem
}
