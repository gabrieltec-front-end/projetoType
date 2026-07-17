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
        <StyledButton onClick={contextTheme?.toggleTheme}>
          Trocar Tema {contextTheme?.appTheme === 'light' ? 'Escuro' : 'Claro'}
        </StyledButton>
      </StyledCard>
    </>
  )
}

export default Perfil
