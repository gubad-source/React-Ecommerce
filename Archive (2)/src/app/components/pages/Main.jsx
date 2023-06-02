import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.css'
import cookies from '../../../assets/images/cookies.png'
import girl_in_glasses from '../../../assets/images/image 2.19.png'
import girl_in_glasses2 from '../../../assets/images/image 2.1.png'
import logo_brand from '../../../assets/images/chose your brand.png'
import { useEffect, useState } from 'react'
import products from '../../../constants/products'
import regex from '../../../constants/regex'
import slider_image from '../../../assets/styles/images/slider-background.png'
import slider_info from '../../../assets/styles/images/slider-info.png'

import { Carousel } from 'antd'
const contentStyle = {
  margin: 0,
  textAlign: 'center',
  height: '50rem',
  width: '100%',
  backgroundImage: `url(${slider_image})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}
const sliderImageStyle = {
  width: '80%',
  height: '100%',
  margin: '0 15rem 0',
}

const Main = () => {
  const signedUser = () => {
    const signed = JSON.parse(localStorage.getItem('user'))
    if (signed != null) {
      const sign_in = document.querySelector('.sign-in')
      sign_in.innerHTML = signed.firstname
    }
  }
  const localFunc = () => {
    localStorage.setItem('cookie', 'green')
    document.querySelector('.cookie-wrapper').style.display = 'none'
  }
  const [liked, setLiked] = useState(
    JSON.parse(localStorage.getItem('likedProducts') ?? '[]')
  )
  function addToLiked(productId) {
    let likedIndex = liked.indexOf(productId)
    if (likedIndex == -1) {
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
  const [storage, setStorage] = useState(
    JSON.parse(
      localStorage.getItem('storedProducts') ??
        '{"items":[],"count":0,"total":0}'
    )
  )
  function addToStorage(productId) {
    let storeIndex = storage.items?.findIndex((item) => {
      return item.id == productId
    })
    const price_items = document
      .querySelector('.product .price .low-price')
      .innerHTML.match(regex)
    const items = storage.items
    if (storeIndex == -1) {
      console.log('test' + productId + ' ' + storeIndex)
      let productid = productId
      let product = {
        id: productid,
        title: document.querySelector('.product p').innerHTML,
        category: document.querySelector('.product .top-product').innerHTML,
        image: document.querySelector('.product img').getAttribute('src'),
        price: +price_items[0],
        qty: 1,
      }

      setStorage((old_data) => {
        let new_object = { ...old_data, items: [...items, product] }
        localStorage.setItem('storedProducts', JSON.stringify(new_object))
        return new_object
      })
    } else {
      setStorage((old_data) => {
        let new_object2 = {
          ...old_data,
          items: [...items, items[storeIndex].qty++],
        }

        localStorage.setItem('storedProducts', JSON.stringify(new_object2))
        return new_object2
      })
    }
  }
  function calcTotalAndCount(product) {
    product.count = 0
    product.total = 0
    product.items?.forEach((item) => {
      product.total += item.qty * item.price
      product.count++
    })
    return product
  }
  useEffect(() => {
    signedUser()
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
          <div style={contentStyle}>
            <Image src={slider_info} style={sliderImageStyle} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <Image src={slider_info} style={sliderImageStyle} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <Image src={slider_info} style={sliderImageStyle} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <Image src={slider_info} style={sliderImageStyle} />
          </div>
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