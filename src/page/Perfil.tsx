import { Header } from '@/components'
import { StyledCard } from '@/components'
import { StyledButton } from '@/components'
import { useContext } from 'react'
import { AppThemeContext } from '@/contexts/ThemeContext'

function Perfil() {
  const contextTheme = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <StyledCard>
        <StyledButton className="primary" onClick={contextTheme?.toggleTheme}>
          trocar tema para{' '}
          {contextTheme?.appTheme === 'light' ? 'escuro' : 'claro'}
        </StyledButton>
      </StyledCard>
    </>
  )
}

export default Perfil
