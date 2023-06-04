import { Container, Row, Col } from 'react-grid-system'
const LogIn = () => {
  const signedUser = (e) => {
    e.preventDefault()
    const signed = JSON.parse(localStorage.getItem('user'))
    const loginEmail = document.querySelector('.loginEmail').value
    const loginPassword = document.querySelector('.loginPassword').value
    if (
      signed != null &&
      signed.email == loginEmail &&
      signed.password == loginPassword
    ) {
      const sign_in = document.querySelector('.sign-in')
      localStorage.setItem('login', 'logged in')
      sign_in.innerHTML = signed.firstname
      alert('login olduz')
    } else {
      alert('sefdir')
    }
  }
  return (
    <Container>
      <Row>
        <Col lg={9}>
          <form onSubmit={signedUser} className="login-form">
            <h1>Log in</h1>
            <input
              type="email"
              name=""
              id=""
              className="loginEmail"
              placeholder="email..."
            />
            <input
              type="password"
              name=""
              id=""
              className="loginPassword"
              placeholder="password..."
            />
            <button type="submit">Click</button>
          </form>
        </Col>
      </Row>
    </Container>
  )
}
export default LogIn
