import { Container, Row, Col } from 'react-grid-system'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
      toast.success('login olduz', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
    } else {
      toast.error('sefhdir', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
    }
  }
  return (
    <Container>
      <Row style={{ justifyContent: 'center' }}>
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
          <ToastContainer />
        </Col>
      </Row>
    </Container>
  )
}
export default LogIn
