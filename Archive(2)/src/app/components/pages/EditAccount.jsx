import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const EditAccount = () => {
  return (
    <section id="edit-account">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="edit-account__title">
              <span>home/my dashboard</span>
              <h1>edit account information</h1>
              <select name="" id="">
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
            </div>
            <div className="edit-account__body">
              <Col lg={4}>
                <div className="dashboard-list">
                  <ul>
                    <li>
                      <a href="#" className="active">
                        account dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#">account information</a>
                    </li>
                    <li>
                      <a href="#">address book</a>
                    </li>
                    <li>
                      <a href="#">my orders</a>
                    </li>
                    <li>
                      <a href="#">my wishlist</a>
                    </li>
                    <li>
                      <a href="#">newsletter subscriptions</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={8}>
                <form action="#">
                  <h3>account information</h3>
                  <div className="input-field">
                    <label for="firstname">
                      first name <span className="text-danger ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Alex"
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
                      placeholder="Driver"
                    />
                  </div>
                  <div className="input-field-checkbox">
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      required
                    />
                    <label for="checkbox">change email</label>
                  </div>
                  <div className="input-field-checkbox">
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      required
                    />
                    <label for="checkbox">change password</label>
                  </div>
                  <button className="shop-btn-black">save</button>
                </form>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default EditAccount
