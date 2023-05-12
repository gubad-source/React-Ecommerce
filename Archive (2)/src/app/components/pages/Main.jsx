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
import { useEffect } from 'react'

const Main = () => {
  const localFunc = () => {
    localStorage.setItem('cookie', 'green')
    document.querySelector('.cookie-wrapper').style.display = 'none'
  }
  useEffect(() => {
    console.log('test2')
    let cookie = localStorage.getItem('cookie')
    if (cookie != null) {
      document.querySelector('.cookie-wrapper').style.display = 'none'
    }
  })
  return (
    <>
      {/* <nav>
        <div class="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Sale</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
        </ul>

        <ul class="account-cart">
          <li class="sign-in">Sign-in</li>
          <li class="create-account">Create an account</li>
          <li class="liked">
            <img src={liked} alt="" />
          </li>
          <li class="storage">
            <img src={storage} alt="" />
          </li>
          <li class="storage-info">
            <div class="storage-info__text">Shopping Cart</div>
            <div class="storage-info__price">0,00 eur</div>
          </li>
        </ul>
      </nav>

      <section id="mobile-nav">
        <div class="hamburger">
          <i class="fa-solid fa-bars text-light"></i>
        </div>
        <div class="logo">
          <img src="./images/crisp.svg" alt="" />
        </div>
        <ul class="search-cart">
          <li>
            <a href="#">
              <i class="text-light fa-solid fa-magnifying-glass"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/cart.svg" alt="" />
            </a>
          </li>
        </ul>
      </section> */}

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
                <Col lg={3} xs={6}>
                  <div className="product">
                    <div className="liked-basket">
                      <span>
                        <i className="fa-solid fa-heart text-danger"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-basket-shopping text-info"></i>
                      </span>
                    </div>
                    <Image fluid src={brand} style={{ width: '100%' }} />
                    <span className="top-product">TOP women</span>
                    <p>Angels malu zip jeans slim black used</p>
                    <div className="price">
                      <span className="low-price">235,00 EUR</span>
                      <span className="discount-price">
                        <del>35,00 EUR</del>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg={3} xs={6}>
                  <div className="product">
                    <span className="discount">-30%</span>
                    <div className="liked-basket">
                      <span>
                        <i className="fa-solid fa-heart text-danger"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-basket-shopping text-info"></i>
                      </span>
                    </div>
                    <Image fluid src={brand} style={{ width: '100%' }} />
                    <span className="top-product">TOP women</span>
                    <p>Angels malu zip jeans slim black used</p>
                    <div className="price">
                      <span className="current-price">235,00 EUR</span>
                    </div>
                  </div>
                </Col>
                <Col lg={3} xs={6}>
                  <div className="product">
                    <div className="liked-basket">
                      <span>
                        <i className="fa-solid fa-heart text-danger"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-basket-shopping text-info"></i>
                      </span>
                    </div>
                    <Image fluid src={brand} style={{ width: '100%' }} />
                    <span className="top-product">TOP women</span>
                    <p>Angels malu zip jeans slim black used</p>
                    <div className="price">
                      <span className="low-price">235,00 EUR</span>
                      <span className="discount-price">
                        <del>35,00 EUR</del>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg={3} xs={6}>
                  <div className="product">
                    <span className="discount">-30%</span>
                    <div className="liked-basket">
                      <span>
                        <i className="fa-solid fa-heart text-danger"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-basket-shopping text-info"></i>
                      </span>
                    </div>
                    <Image fluid src={brand} style={{ width: '100%' }} />
                    <span className="top-product">TOP women</span>
                    <p>Angels malu zip jeans slim black used</p>
                    <div className="price">
                      <span className="current-price">235,00 EUR</span>
                    </div>
                  </div>
                </Col>
                <Col lg={3} xs={6}>
                  <div className="product">
                    <div className="liked-basket">
                      <span>
                        <i className="fa-solid fa-heart text-danger"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-basket-shopping text-info"></i>
                      </span>
                    </div>
                    <Image fluid src={brand} style={{ width: '100%' }} />
                    <span className="top-product">TOP women</span>
                    <p>Angels malu zip jeans slim black used</p>
                    <div className="price">
                      <span className="low-price">235,00 EUR</span>
                      <span className="discount-price">
                        <del>35,00 EUR</del>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg={3} xs={6}>
                  <div className="product">
                    <span className="discount">-30%</span>
                    <div className="liked-basket">
                      <span>
                        <i className="fa-solid fa-heart text-danger"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-basket-shopping text-info"></i>
                      </span>
                    </div>
                    <Image fluid src={brand} style={{ width: '100%' }} />
                    <span className="top-product">TOP women</span>
                    <p>Angels malu zip jeans slim black used</p>
                    <div className="price">
                      <span className="current-price">235,00 EUR</span>
                    </div>
                  </div>
                </Col>
                <Col lg={3} xs={6}>
                  <div className="product">
                    <div className="liked-basket">
                      <span>
                        <i className="fa-solid fa-heart text-danger"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-basket-shopping text-info"></i>
                      </span>
                    </div>
                    <Image fluid src={brand} style={{ width: '100%' }} />
                    <span className="top-product">TOP women</span>
                    <p>Angels malu zip jeans slim black used</p>
                    <div className="price">
                      <span className="low-price">235,00 EUR</span>
                      <span className="discount-price">
                        <del>35,00 EUR</del>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg={3} xs={6}>
                  <div className="product">
                    <span className="discount">-30%</span>
                    <div className="liked-basket">
                      <span>
                        <i className="fa-solid fa-heart text-danger"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-basket-shopping text-info"></i>
                      </span>
                    </div>
                    <Image fluid src={brand} style={{ width: '100%' }} />
                    <span className="top-product">TOP women</span>
                    <p>Angels malu zip jeans slim black used</p>
                    <div className="price">
                      <span className="current-price">235,00 EUR</span>
                    </div>
                  </div>
                </Col>
                <Col xs={12}>
                  <button className="see-more">see more</button>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
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
          </div>
          <div className="col-12 col-sm-6 col-md-9">
            <div className="row g-5">
              <div className="col-12 col-sm-6 col-md-3">
                <div className="card">
                  <Image fluid src={brand} style={{ width: '100%' }} />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <div className="card">
                  <Image fluid src={brand} style={{ width: '100%' }} />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <div className="card">
                  <Image fluid src={brand} style={{ width: '100%' }} />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <div className="card">
                  <Image fluid src={brand} style={{ width: '100%' }} />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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

      {/* <footer>
        <section id="footer-top">
          <ul className="footer-top__list">
            <li className="footer-top__list__checked">
              <img src={tick} alt="" /> duties and taxes guaranteed
            </li>
            <li className="footer-top__list__checked">
              <img src={tick} alt="" /> duties
            </li>
            <li className="footer-top__list__checked">
              <img src={tick} alt="" /> notified
            </li>
            <li className="footer-top__list__checked">
              <img src={tick} alt="" /> taxes guaranteed
            </li>
            <li className="footer-top__list__checked">
              <img src={tick} alt="" /> duties and taxes guaranteed
            </li>
          </ul>
        </section>
        <section id="crisp-footer">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <div className="crisp-foot">
                  <img src={logo_footer} alt="" />
                </div>
              </Col>
              <Col lg={12}>
                <ul className="foot-col">
                  <div className="foot-col__header">
                    <h3>FEATURES</h3>
                    <i className="text-light fa-solid fa-plus"></i>
                  </div>

                  <li>
                    <a href="#">MEN</a>
                  </li>
                  <li>
                    <a href="#">WOMEN</a>
                  </li>
                  <li>
                    <a href="#">BOYS</a>
                  </li>
                  <li>
                    <a href="#">GIRLS</a>
                  </li>
                  <li>
                    <a href="#">NEW ARRIVALS</a>
                  </li>
                  <li>
                    <a href="#">SHOES</a>
                  </li>
                  <li>
                    <a href="#">CLOTHES</a>
                  </li>
                  <li>
                    <a href="#">ACCESSORIES</a>
                  </li>
                </ul>
              </Col>
              <Col lg={2}>
                <ul className="foot-col">
                  <div className="foot-col__header">
                    <h3>Menu</h3>
                    <i className="text-light fa-solid fa-plus"></i>
                  </div>
                  <li>
                    <a href="#">ABOUT US</a>
                  </li>
                  <li>
                    <a href="#">CONTACT US</a>
                  </li>
                  <li>
                    <a href="#">MY ACCOUNT</a>
                  </li>
                  <li>
                    <a href="#">ORDERS HISTORY</a>
                  </li>
                  <li>
                    <a href="#">NEW ARRIVALS</a>
                  </li>
                  <li>
                    <a href="#">MY WISHLIST</a>
                  </li>
                  <li>
                    <a href="#">BLOG</a>
                  </li>
                  <li>
                    <a href="#">LOGIN</a>
                  </li>
                </ul>
              </Col>
              <Col lg={2}>
                <ul className="foot-col">
                  <div className="foot-col__header">
                    <h3>Contact us</h3>
                    <i className="text-light fa-solid fa-plus"></i>
                  </div>
                  <li>
                    <div className="content">
                      <p>ADDRESS:</p>
                      <span>123 STREET NAME,CITY,ENGLAND</span>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <p>PHONE:</p>
                      <span>0503785664</span>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <p>EMAIL:</p>
                      <span>MAIL@EXAMPLE.COM</span>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <p>wORKING DAYS/HOURS:</p>
                      <span>MON-SUN/09:00AM-08:00PM</span>
                    </div>
                  </li>
                </ul>
              </Col>

              <Col lg={2}>
                <ul className="foot-col">
                  <div className="foot-col__header">
                    <h3>Follow us</h3>
                    <i className="text-light fa-solid fa-plus"></i>
                  </div>
                  <li>
                    <a href="#">FACEBOOK</a>
                  </li>
                  <li>
                    <a href="#">TWITTER</a>
                  </li>
                  <li>
                    <a href="#">INSTAGRAM</a>
                  </li>
                </ul>
              </Col>

              <Col lg={2}>
                <div className="foot-subscribe">
                  <h3>JOIN US</h3>
                  <p>SUBSCRIBE TO OUR NEWSLETTERS</p>
                  <form>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Email Address"
                      className="subscribe-input"
                    />
                    <button type="submit" className="subscribe-button">
                      SUBSCRIBE
                    </button>
                  </form>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="copyright">
                  <p>© 2019. Crisp theme Developed by Belvg</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </footer> */}
    </>
  )
}
export default Main
