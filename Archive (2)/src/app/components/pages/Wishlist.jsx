import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react'
import products from '../../../constants/products'
import wishlistImage from '../../../assets/images/Rectangle 7.png'
const Wishlist = () => {
  const [liked, setLiked] = useState(
    JSON.parse(localStorage.getItem('likedProducts') ?? '[]')
  )
  function addToLiked(productId) {
    let findIndex = liked.indexOf(productId)
    if (findIndex == -1) {
      setLiked((old_data) => {
        let new_array = [...old_data, productId]
        localStorage.setItem('likedProducts', JSON.stringify(new_array))
        return new_array
      })
    } else {
      setLiked((old_data) => {
        let new_array = old_data.filter((row) => row !== productId)
        localStorage.setItem('likedProducts', JSON.stringify(new_array))
        return new_array
      })
    }
  }
  return (
    <section id="wishlist">
      <span className="contact-side">contact us</span>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="wishlist__title">
              <span>home/my dashboard</span>
              <select name="" id="">
                <option value="">low price</option>
                <option value="">medium price</option>
                <option value="">high price</option>
              </select>
              <h1>my wishlist</h1>
            </div>
            <div className="wishlist__body">
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
                <div className="wishlist__body__items">
                  {liked?.map((productId) => {
                    let product = products.find((row) => row.id == productId)
                    console.log(productId)
                    return (
                      <Col lg={4} xs={6}>
                        <div
                          className="wishlist__body__items__frame"
                          data-productid={product.id}
                        >
                          <div className="item">
                            <img
                              className="img-fluid"
                              style={{ width: '100%' }}
                              src={product.image}
                              alt=""
                            />
                            <p>{product.title}</p>
                            <div className="price">
                              <span className="current-price">
                                {product.low_price} eur
                              </span>
                            </div>
                            <div className="count-cart">
                              <span>1</span>
                              <div className="add-to-cart shop-btn-black">
                                add to cart
                              </div>
                            </div>
                          </div>
                          <div className="buttons">
                            <button className="ml-2 mb-2">
                              <img src="./images/close.svg" alt="" />
                            </button>
                            <button className="ml-2 mb-2">
                              <img src="./images/edit.svg" alt="" />
                            </button>
                          </div>
                        </div>
                      </Col>
                    )
                  })}

                  {/* <Col lg={4} xs={6}>
                    <div className="wishlist__body__items__frame">
                      <div className="item">
                        <img
                          className="img-fluid"
                          style={{ width: '100%' }}
                          src={wishlistImage}
                          alt=""
                        />
                        <p>Angels malu zip jeans slim black used</p>
                        <div className="price">
                          <span className="current-price">235,00 eur</span>
                        </div>
                        <div className="count-cart">
                          <span>1</span>
                          <div className="add-to-cart shop-btn-black">
                            add to cart
                          </div>
                        </div>
                      </div>
                      <div className="buttons">
                        <button className="ml-2 mb-2">
                          <img src="./images/close.svg" alt="" />
                        </button>
                        <button className="ml-2 mb-2">
                          <img src="./images/edit.svg" alt="" />
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} xs={6}>
                    <div className="wishlist__body__items__frame">
                      <div className="item">
                        <img
                          className="img-fluid"
                          style={{ width: '100%' }}
                          src={wishlistImage}
                          alt=""
                        />
                        <p>Angels malu zip jeans slim black used</p>
                        <div className="price">
                          <span className="current-price">235,00 eur</span>
                        </div>
                        <div className="count-cart">
                          <span>1</span>
                          <div className="add-to-cart shop-btn-black">
                            add to cart
                          </div>
                        </div>
                      </div>
                      <div className="buttons">
                        <button className="ml-2 mb-2">
                          <img src="./images/close.svg" alt="" />
                        </button>
                        <button className="ml-2 mb-2">
                          <img src="./images/edit.svg" alt="" />
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} xs={6}>
                    <div className="wishlist__body__items__frame">
                      <div className="item">
                        <img
                          className="img-fluid"
                          style={{ width: '100%' }}
                          src={wishlistImage}
                          alt=""
                        />
                        <p>Angels malu zip jeans slim black used</p>
                        <div className="price">
                          <span className="current-price">235,00 eur</span>
                        </div>
                        <div className="count-cart">
                          <span>1</span>
                          <div className="add-to-cart shop-btn-black">
                            add to cart
                          </div>
                        </div>
                      </div>
                      <div className="buttons">
                        <button className="ml-2 mb-2">
                          <img src="./images/close.svg" alt="" />
                        </button>
                        <button className="ml-2 mb-2">
                          <img src="./images/edit.svg" alt="" />
                        </button>
                      </div>
                    </div>
                  </Col> */}
                </div>
                <div className="wishlist__footer">
                  <Col lg={3}>
                    <div className="wishlist__footer__item">
                      share wish list
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className="wishlist__footer__item">
                      update wish list
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className="wishlist__footer__item">
                      add all to cart
                    </div>
                  </Col>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Wishlist
