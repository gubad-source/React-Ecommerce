import { Container, Row, Col } from 'react-grid-system'
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
import slider_info2 from '../../../assets/images/slider-info2.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Carousel } from 'antd'
import TopToScroll from 'components/Template/TopToScroll'

import type { RootState } from '../../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { incrementByAmount } from '../../../redux/wishCounter'
import { incrementCart } from '../../../redux/cardCounter'

const Main = () => {
  const dispatch3 = useDispatch()
  const defaultCart = useSelector(
    (state: RootState) => state.cardCounter.defaultCart
  )

  const dispatch2 = useDispatch()
  const defaultWish = useSelector(
    (state: RootState) => state.wishCounter.defaultWish
  )
  const showStorageCount = () => {
    let storageCount = document.querySelector('.storage-count')

    if (storageCount != null && storage.count != null) {
      storageCount.innerHTML = storage.count
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
        let wishStore = JSON.parse(localStorage.getItem('likedProducts')) ?? []
        dispatch2(incrementByAmount(wishStore.length))
        console.log(`jdjdjdj: ${defaultWish}`)
        toast.success('elave edildi', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
        return new_array
      })
    } else {
      setLiked((old_data) => {
        let new_array = old_data.filter((row) => row !== productId)
        localStorage.setItem('likedProducts', JSON.stringify(new_array))
        let wishStore = JSON.parse(localStorage.getItem('likedProducts')) ?? []
        dispatch2(incrementByAmount(wishStore.length))
        console.log(`jdjdjdj: ${defaultWish}`)
        toast.error('cixarildi', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
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

  function calcTotalAndCount(product) {
    product.count = 0
    product.total = 0
    product.items?.forEach((item) => {
      product.total += item.qty * item.price
      product.count++
    })
    return product
  }
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
        //old_data = calcTotalAndCount(old_data)
        new_object = calcTotalAndCount(new_object)
        localStorage.setItem('storedProducts', JSON.stringify(new_object))

        let cardStore =
          JSON.parse(localStorage.getItem('storedProducts')).count ?? 0
        dispatch3(incrementCart(cardStore))
        console.log(`jdjdjdj: ${defaultCart}`)

        toast.success('elave edildi', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })

        return new_object
      })
    } else {
      setStorage((old_data) => {
        old_data.items[storeIndex].qty++

        old_data = calcTotalAndCount(old_data)

        let cardStore =
          JSON.parse(localStorage.getItem('storedProducts')).count ?? 0
        dispatch3(incrementCart(cardStore))
        console.log(`jdjdjdj: ${defaultCart}`)

        toast.warning('artirildi', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
        return (old_data = calcTotalAndCount(old_data))
      })

      localStorage.setItem('storedProducts', JSON.stringify(storage))
    }
  }

  useEffect(() => {
    showStorageCount()
    //signedUser()
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
      <ToastContainer />
      <TopToScroll />
      <Carousel
        className="carousel-frame"
        afterChange={onChange}
        autoplay={true}
        style={{ overflow: 'hidden' }}
      >
        <div className="slider-content">
          <div className="slider-info">
            <h1>
              summer sale <br />
              get 30% off <br />
              on all dress
            </h1>
            <button className="shop-btn-transparent">shop now</button>
          </div>
          <Image src={slider_info2} />
        </div>
        <div className="slider-content">
          <div className="slider-info">
            <h1>
              summer sale <br />
              get 30% off <br />
              on all dress
            </h1>
            <button className="shop-btn-transparent">shop now</button>
          </div>
          <Image src={slider_info2} />
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
