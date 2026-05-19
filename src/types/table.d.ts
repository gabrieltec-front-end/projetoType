export interface TableComp {
  headers: string[] //Especifica os titulos que seram recebeidos pela tavela em formato de array no caso que iram dentro do th
  rows: React.ReactNode[][] //Aqui especifica que pode ser recebido todo tipo de valor ou tipo de variavel
}
