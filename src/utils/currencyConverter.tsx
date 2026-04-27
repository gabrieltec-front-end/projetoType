/**
 * Convert number currency BRL
 * @value number convert
 * @return convert currency in BRL
 */

function CurrentBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export default CurrentBRL
