import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//PAGE

import { Login, Cadastro } from './page'

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
        <Route path="/home" element={<>HOME</>}>
          HOME
        </Route>
        <Route path="/leads" element={<>LEADS</>}>
          LEADS
        </Route>
        <Route path="/perfil" element={<>PERFIL</>}>
          PERFIL
        </Route>
      </Routes>
    </Router>
  )
}

export default App
