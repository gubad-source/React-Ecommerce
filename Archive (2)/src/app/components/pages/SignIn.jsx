import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SignIn = () => {
  const signIn = () => {
    let firstname = document.querySelector('#firstname').value
    let lastname = document.querySelector('#lastname').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let repeatPassword = document.querySelector('#repeat-password').value
    let checkbox = document.querySelector('#checkbox')

    if (checkbox.checked == true && password == repeatPassword) {
      const user = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      }
      localStorage.setItem('user', JSON.stringify(user))
    }
  }

  return (
    <section id="sign-in">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="sign-in">
              <div className="sign-in__title">
                <span>home/create /new customer account</span>
                <h1>create new customer account</h1>
              </div>

              <form method="#" onSubmit={() => signIn()}>
                <div className="form-title">
                  <h3>personal information</h3>
                </div>

                <div className="input-field">
                  <label for="firstname">
                    first name <span className="text-danger ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="firstname"
                    id="firstname"
                    placeholder="Mabus"
                    required
                  />
                </div>

                <div className="input-field">
                  <label for="lastname">
                    last name <span className="text-danger ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Quinsey"
                    required
                  />
                </div>

                <div className="input-field-checkbox">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    required
                  />
                  <label for="checkbox">sign up for news letter</label>
                </div>
                <div className="form-title">
                  <h3>sign up for newsletter</h3>
                </div>

                <div className="input-field">
                  <label for="email">
                    email <span className="text-danger ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="mabusquinsey@gmail.com"
                    required
                  />
                </div>

                <div className="input-field">
                  <label for="password">
                    password <span class="text-danger ml-1">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    required
                  />
                </div>

                <div className="input-field">
                  <label for="repeat-password">confirm password</label>

                  <input
                    type="password"
                    name="repeat-password"
                    id="repeat-password"
                    placeholder="repeat-password"
                    required
                  />
                </div>

                <div className="input-field">
                  <button className="shop-btn-black" type="submit">
                    create an account
                  </button>
                  <p>back</p>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default SignIn
