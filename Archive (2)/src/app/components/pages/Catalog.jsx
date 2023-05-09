import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Catalog = () => {
  return (
    <div id="catalog-products">
      <section id="shoping-limits-catalog1">
        <div className="limits">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="info">
                  <h1>shoping without limits</h1>
                  <h5>
                    Choose the best option for you and it <br />
                    does not matter wheter you are.
                  </h5>
                  <button className="shop-btn-transparent">skip now</button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section id="catalog-select">
        <Container>
          <Col lg={12}>
            <Row>
              <span>Home/Women Dress/Best Choose</span>
              <select name="" id="">
                <option value="low">low price</option>
                <option value="medium">medium price</option>
                <option value="high">high price</option>
              </select>
            </Row>
          </Col>
        </Container>
      </section>

      <Container fluid>
        <Row>
          <Col lg={3}>
            <div className="brand">
              <div className="brand__header">
                <h1>brand</h1>
                <h1>+</h1>
              </div>

              <ul>
                <li>
                  <input type="checkbox" name="" id="" /> state
                </li>
                <li>
                  <input type="checkbox" name="" id="" /> cooper
                </li>
                <li>
                  <input type="checkbox" name="" id="" /> bardot
                </li>
                <li>
                  <input type="checkbox" name="" id="" /> alfani
                </li>
                <li>
                  <input type="checkbox" name="" id="" /> gucci
                </li>
                <li>
                  <input type="checkbox" name="" id="" /> donna ricco
                </li>
              </ul>
            </div>
            <div className="size">
              <div className="size__header">
                <h1>size(inches)</h1>
                <h1>+</h1>
              </div>
              <div className="size__body">
                <ul>
                  <li>
                    <a href="#">
                      <img src="./images/Component 2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/Component 2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/Component 2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/Component 2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/Component 2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/Component 2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/Component 2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/Component 2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/Component 2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/Component 2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/Component 2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/Component 2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/Component 2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/Component 2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/Component 2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/Component 2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/Component 2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/Component 2.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dress">
              <div className="dress__header">
                <h1>dress length</h1>
                <h1>+</h1>
              </div>

              <ul>
                <li>
                  <input type="checkbox" name="" id="" /> short
                </li>
                <li>
                  <input type="checkbox" name="" id="" /> knee length
                </li>
                <li>
                  <input type="checkbox" name="" id="" /> hight low
                </li>
                <li>
                  <input type="checkbox" name="" id="" /> long
                </li>
                <li>
                  <input type="checkbox" name="" id="" /> midi
                </li>
              </ul>
            </div>
            <div className="color"></div>
            <div className="about">
              <h1>about dresses</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet maiores laboriosam voluptas obcaecati delectus saepe
                architecto laudantium qui culpa distinctio.Eveniet maiores
                laboriosam voluptas obcaecati delectus saepe architecto
                laudantium qui culpa distinctio.
              </p>
            </div>
          </Col>
          <Col lg={9}>
            <div className="catalog-products">
              <Col lg={3} xs={6}>
                <div className="product">
                  <img
                    src="./images/Rectangle 7.png"
                    alt=""
                    className="img-fluid"
                  />
                  <span className="top-product">TOP women</span>
                  <p>Angels malu zip jeans slim black used</p>
                  <div className="price">
                    <span className="low-price">235,00 EUR</span>
                    <span className="discount-price">
                      <del>35,00 EUR</del>
                    </span>
                  </div>
                  <ul>
                    <li className="red"></li>
                    <li className="green"></li>
                    <li className="blue"></li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} xs={6}>
                <div className="product">
                  <span className="discount">-30%</span>
                  <img
                    src="./images/Rectangle 7.png"
                    alt=""
                    className="img-fluid"
                  />
                  <span className="top-product">TOP women</span>
                  <p>Angels malu zip jeans slim black used</p>
                  <div className="price">
                    <span className="current-price">235,00 EUR</span>
                  </div>
                  <ul>
                    <li className="red"></li>
                    <li className="green"></li>
                    <li className="blue"></li>
                  </ul>
                </div>
              </Col>
            </div>
            <div className="catalog-background">
              <Col lg={12}>
                <div className="info-background">
                  <div className="info">
                    <h1>shoping without limits</h1>
                    <h5>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda iste maxime qui esse, mollitia perferendis.
                    </h5>
                    <button className="shop-btn">skip now</button>
                  </div>
                </div>
              </Col>
            </div>
            <div className="catalog-products">
              <Col lg={3} xs={6}>
                <div className="product">
                  <img
                    src="./images/Rectangle 7.png"
                    alt=""
                    className="img-fluid"
                  />
                  <span className="top-product">TOP women</span>
                  <p>Angels malu zip jeans slim black used</p>
                  <div className="price">
                    <span className="low-price">235,00 EUR</span>
                    <span className="discount-price">
                      <del>35,00 EUR</del>
                    </span>
                  </div>
                  <ul>
                    <li className="red"></li>
                    <li className="green"></li>
                    <li className="blue"></li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} xs={6}>
                <div className="product">
                  <img
                    src="./images/Rectangle 7.png"
                    alt=""
                    className="img-fluid"
                  />
                  <span className="top-product">TOP women</span>
                  <p>Angels malu zip jeans slim black used</p>
                  <div className="price">
                    <span className="low-price">235,00 EUR</span>
                    <span className="discount-price">
                      <del>35,00 EUR</del>
                    </span>
                  </div>
                  <ul>
                    <li className="red"></li>
                    <li className="green"></li>
                    <li className="blue"></li>
                  </ul>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Catalog
