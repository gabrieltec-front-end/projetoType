import styled from 'styled-components'

const LoginArea = styled.div`
  background-color: red;
`
const LoginImage = styled.div`
  background-image: url(/login-fundo.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

function Login() {
  return (
    <>
      <LoginArea>Login</LoginArea>
      <LoginImage />
    </>
  )
}

export default Login
