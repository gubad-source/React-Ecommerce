import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Dashboard = () => {
  return (
    <section id="dashboard">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="dashboard-title">
              <span>home/create new customer account</span>
              <select name="" id="">
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
              <h1>my dashboard</h1>
            </div>
            <div className="dashboard-body">
              <Col lg={3}>
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
              <Col lg={9}>
                <div className="account-address">
                  <div className="account mb-5">
                    <div className="account-title">
                      <h3>account information</h3>
                    </div>
                    <div className="account-information">
                      <div className="account-information__contact">
                        <h3>contact information</h3>
                        <p>alex driver</p>
                        <p className="mb-2">exampleaddress@gmail.com</p>
                        <span className="dashboard-btn">change password</span>
                      </div>
                      <div className="account-information__newsletters">
                        <h3>newsletters</h3>
                        <p className="mb-2">
                          you don't subscribe to our newsletters
                        </p>
                        <span className="dashboard-btn">edit</span>
                      </div>
                    </div>
                  </div>

                  <div className="address">
                    <div className="address-title">
                      <h3>
                        address book
                        <img
                          className="ml-2"
                          src="./images/pencil.svg"
                          alt=""
                        />
                      </h3>
                    </div>
                    <div className="address-book">
                      <div className="address-book__billing">
                        <h3>default billing address</h3>
                        <p>you have not set default billing address</p>
                      </div>
                      <div className="address-book__shipping">
                        <h3>default shipping address</h3>
                        <p className="mb-2">
                          you have not set default shipping address
                        </p>
                        <span className="dashboard-btn">edit address</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Dashboard
