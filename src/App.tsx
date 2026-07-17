import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom'

//PAGE

import { Login, Cadastro, Home, Leads, Perfil } from './page'
//Cookies
import Cookies from 'js-cookie'

function App() {
  const ProtectRouter = () => {
    const cookiesAuth = Cookies.get('authorization')
    if (!cookiesAuth) {
      alert('Login necessario')
      return <Navigate to={'/'} replace />
    }

    return <Outlet />
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}>
          HOME
        </Route>
        <Route path="/cadastro" element={<Cadastro />}>
          CADASTRO
        </Route>
        <Route element={<ProtectRouter />}>
          <Route path="/home" element={<Home />}>
            HOME
          </Route>
          <Route path="/leads" element={<Leads />}>
            LEADS
          </Route>
          <Route path="/perfil" element={<Perfil />}>
            PERFIL
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
