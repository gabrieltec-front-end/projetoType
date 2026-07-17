/**
 * Convert data de expiração do jwt token em dias
 * @exp parametro para conveter exp do jwt em dias
 * @return função do valor convertido em dias do exp jwt
 */

function ConvertJwtTokenExp(exp: number): number {
  const currenTime = Math.floor(Date.now() / 1000)
  const secondUntilExpiration = exp - currenTime
  const secondInDay = 60 * 60 * 24
  const daysUntilExpiration = secondUntilExpiration / secondInDay
  return daysUntilExpiration
}

export default ConvertJwtTokenExp
