import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.css'
import cookies from '../../../assets/images/cookies.png'
import brand from '../../../assets/images/Rectangle 7.png'
import girl_in_glasses from '../../../assets/images/image 2.19.png'
import girl_in_glasses2 from '../../../assets/images/image 2.1.png'
import logo_brand from '../../../assets/images/chose your brand.png'
import slider_background from '../../../assets/styles/images/slider-background.png'
import { useEffect, useState } from 'react'
import products from '../../../constants/products'

import { Carousel } from 'antd'
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}
// const products = [
//   {
//     id: 1,
//     image: brand,
//     title: 'Angels malu zip jeans slim black used',
//     category: 'TOP WOMEN',
//     low_price: '235,00',
//     discount_price: '35,00',
//   },
//   {
//     id: 2,
//     image: brand,
//     title: 'Angels malu zip jeans slim black used',
//     category: 'TOP WOMEN',
//     low_price: '235,00',
//     discount_price: '35,00',
//   },
//   {
//     id: 3,
//     image: brand,
//     title: 'Angels malu zip jeans slim black used',
//     category: 'TOP WOMEN',
//     low_price: '235,00',
//     discount_price: '35,00',
//   },
// ]
const Main = () => {
  const localFunc = () => {
    localStorage.setItem('cookie', 'green')
    document.querySelector('.cookie-wrapper').style.display = 'none'
  }
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

  useEffect(() => {
    console.log('test2')
    let cookie = localStorage.getItem('cookie')
    if (cookie != null) {
      document.querySelector('.cookie-wrapper').style.display = 'none'
    }
  }, [])
  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }
  return (
    <>
      <Carousel afterChange={onChange} autoplay={true}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <div class="cookie-wrapper">
        <Image src={cookies} />
        <div class="cookie-wrapper__content">
          <h1>cookies constent</h1>
          <p>
            This website use cookies to ensure you <br />
            get the best experience on our website
          </p>
          <div class="button">
            <button onClick={localFunc}>I understand</button>
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>

      <section id="brands">
        <Container fluid>
          <Row>
            <Col lg={12}>
              <div class="brand-tabs">
                <div class="brand-tabs__logo">
                  <Image src={logo_brand} />
                </div>
                <ul>
                  <a href="#" class="activee" data-source="1">
                    <span>chanel</span>
                  </a>
                  <a href="#" data-source="2">
                    <span>burberry</span>
                  </a>
                  <a href="#" data-source="3">
                    <span>dior</span>
                  </a>
                  <a href="#" data-source="4">
                    <span>fendi</span>
                  </a>
                  <a href="#" data-source="3">
                    <span>versace</span>
                  </a>
                  <a href="#" data-source="4">
                    <span>gucci</span>
                  </a>
                  <a href="#" data-source="4">
                    <span>armani</span>
                  </a>
                </ul>
              </div>
              <div class="brand-items">
                <div class="item item1">
                  <div class="info1">
                    <h1>choose your look</h1>
                    <p>popular clothing collections</p>
                    <button class="shop-btn-transparent">see offers</button>
                  </div>
                </div>
                <div class="item item2">
                  <div class="info2">
                    <h1>
                      up to <br />
                      40% off
                    </h1>
                    <p>special offers and great deals</p>

                    <button class="shop-btn-transparent">see offers</button>
                  </div>
                </div>
                <div class="item item3">
                  <div class="info3">
                    <h1>brand new style</h1>
                    <p>popular clothing collections</p>
                    <button class="shop-btn-transparent">see offers</button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="products">
        <Container fluid>
          <Row>
            <Col lg={3}>
              <div className="wear">
                <h1>shop some wear:</h1>
                <ul>
                  <li>
                    <input type="checkbox" name="" id="" /> best sellers
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" /> new arrivals
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" /> top women
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" /> collection summer
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" /> collection spring
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" /> trending
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={9}>
              <div className="products">
                {products.map((product) => {
                  return (
                    <Col lg={3} xs={6}>
                      <div className="product" data-productid={product.id}>
                        <div className="liked-basket">
                          <span>
                            <i
                              className="fa-solid fa-heart text-danger"
                              onClick={() => addToLiked(product.id)}
                            ></i>
                          </span>
                          <span>
                            <i
                              className="fa-solid fa-basket-shopping text-info"
                              onClick={() => addToStorage(product.id)}
                            ></i>
                          </span>
                        </div>
                        <Image
                          fluid
                          src={product.image}
                          style={{ width: '100%' }}
                        />
                        <span className="top-product">{product.category}</span>
                        <p>{product.title}</p>
                        <div className="price">
                          <span className="low-price">
                            {product.low_price} EUR
                          </span>
                          <span className="discount-price">
                            <del>{product.discount_price} EUR</del>
                          </span>
                        </div>
                      </div>
                    </Col>
                  )
                })}

                <Col xs={12}>
                  <button className="see-more">see more</button>
                </Col>
              </div>
              {/* <div className="liked-products products">
                <h1>Liked</h1>
                {liked?.map((productId) => {
                  let product = products.find((row) => row.id == productId)
                  console.log(productId)
                  return (
                    <Col lg={3} xs={6}>
                      <div className="product" data-productid={product.id}>
                        <div className="liked-basket">
                          <span>
                            <i
                              className="fa-solid fa-heart text-danger"
                              onClick={() => addToLiked(product.id)}
                            ></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-basket-shopping text-info"></i>
                          </span>
                        </div>
                        <Image
                          fluid
                          src={product.image}
                          style={{ width: '100%' }}
                        />
                        <span className="top-product">{product.category}</span>
                        <p>{product.title}</p>
                        <div className="price">
                          <span className="low-price">
                            {product.low_price} EUR
                          </span>
                          <span className="discount-price">
                            <del>{product.discount_price} EUR</del>
                          </span>
                        </div>
                      </div>
                    </Col>
                  )
                })}
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>

      <section id="shoping-limits">
        <div class="limits">
          <Container>
            <Row>
              <Col lg={6}>
                <div class="info">
                  <h1>shoping without limits</h1>
                  <h5>
                    Choose the best option for you and it <br />
                    does not wheter you are.
                  </h5>
                  <button class="shop-btn-transparent">skip now</button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section id="explore">
        <Container fluid>
          <Row>
            <Col lg={12}>
              <div className="explore">
                <img
                  src={girl_in_glasses}
                  alt=""
                  className="img-fluid responsive-image"
                />
                <Col lg={7} xs={12}>
                  <div className="explore-image">
                    <Image src={girl_in_glasses2} style={{ width: '100%' }} />
                  </div>
                </Col>
                <Col lg={4} className="ml-5">
                  <div className="explore-info">
                    <h2>EXPLORE THE BEST OF YOU.</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Inventore culpa nulla perferendis laborum asperiores totam
                      doloremque. Laboriosam esse nisi nobis.
                    </p>
                    <button className="shop-btn">shop now</button>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="blogs">
        <Container fluid>
          <Row>
            <Col lg={12}>
              <div className="blog-title">
                <h1>Blog</h1>
              </div>
            </Col>
            <Col lg={3}>
              <div className="article-tips">
                <span className="info">TIPS</span>
                <h1>
                  Exactly What To Wear To Every Type Of Wedding This Summer
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia ut molestiae quidem reprehenderit voluptates vero
                  distinctio dolore vel, ipsa qui?
                </p>

                <span className="date">21 January 2018 by guido</span>
              </div>
            </Col>
            <Col lg={3}>
              <div className="article-tips">
                <span className="info">TIPS</span>
                <h1>
                  Exactly What To Wear To Every Type Of Wedding This Summer
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia ut molestiae quidem reprehenderit voluptates vero
                  distinctio dolore vel, ipsa qui?
                </p>

                <span className="date">21 January 2018 by guido</span>
              </div>
            </Col>
            <Col lg={3}>
              <div className="article-tips">
                <span className="info">TIPS</span>
                <h1>
                  Exactly What To Wear To Every Type Of Wedding This Summer
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia ut molestiae quidem reprehenderit voluptates vero
                  distinctio dolore vel, ipsa qui?
                </p>

                <span className="date">21 January 2018 by guido</span>
              </div>
            </Col>
            <Col lg={3}>
              <div className="article-tips">
                <span className="info">TIPS</span>
                <h1>
                  Exactly What To Wear To Every Type Of Wedding This Summer
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia ut molestiae quidem reprehenderit voluptates vero
                  distinctio dolore vel, ipsa qui?
                </p>

                <span className="date">21 January 2018 by guido</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
export default Main
