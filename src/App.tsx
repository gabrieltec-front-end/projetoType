import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//PAGE

import { Login, Cadastro, Leads, Perfil, Home } from './page'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}>
          HOME
        </Route>
        <Route path="/cadastro" element={<Cadastro />}>
          CADASTRO
        </Route>
        <Route path="/home" element={<Home />}>
          HOME
        </Route>
        <Route path="/leads" element={<Leads />}>
          LEADS
        </Route>
        <Route path="/perfil" element={<Perfil />}>
          PERFIL
        </Route>
      </Routes>
    </Router>
  )
}

export default App
