import React, { useEffect, useLayoutEffect, useState } from 'react'
import { translateListData } from 'store/actions/translate'
import { connect } from 'react-redux'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useActions } from 'hooks/useActions'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import tick from '../../../assets/images/tick.png'
import logo_footer from '../../../assets/images/Group 4.1.png'

const FooterComponent: React.FC<any> = ({ translate }) => {
  const { translateListData } = useActions()
  //   const location = useLocation()
  //   const pathname = location.pathname

  useLayoutEffect(() => {
    translateListData()
  }, [])

  useEffect(() => {}, [translate])

  return (
    <footer>
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
    </footer>
  )
}

const mapDispatchToProps = { translateListData }

const mapStateToProps = (state: any) => {
  return {
    translate: state.translate.translateData?.result,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent)
