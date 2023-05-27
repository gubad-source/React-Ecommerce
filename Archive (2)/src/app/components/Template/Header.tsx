import React, { useEffect, useLayoutEffect, useState } from 'react'
import { translateListData } from 'store/actions/translate'
import { connect } from 'react-redux'
import { useScrollYPosition } from 'react-use-scroll-position'
import { Link, useLocation, NavLink } from 'react-router-dom'
import { useActions } from 'hooks/useActions'
//import { useHistory } from 'react-router'
import logo from '../../../assets/images/Group 4.png'
import liked from '../../../assets/images/heart.svg'
import storage from '../../../assets/images/card.svg'

const HeaderComponent: React.FC<any> = ({ translate }) => {
  const { translateListData } = useActions()
  //   const location = useLocation()
  //   const navigate = useHistory()
  //   const pathname = location.pathname
  //   const scrollY = useScrollYPosition()

  useLayoutEffect(() => {
    translateListData()
  }, [])

  useEffect(() => {}, [translate])

  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
        </ul>

        <ul className="account-cart">
          <li className="sign-in">Sign-in</li>
          <li className="create-account">Create an account</li>
          <li className="liked">
            <img src={liked} alt="" />
          </li>
          <li className="storage">
            <img src={storage} alt="" />
          </li>
          <li className="storage-info">
            <div className="storage-info__text"><Link to="/storage">Storage</Link></div>
            <div className="storage-info__price">0,00 eur</div>
          </li>
        </ul>
      </nav>

      <section id="mobile-nav">
        <div className="hamburger">
          <i className="fa-solid fa-bars text-light"></i>
        </div>
        <div className="logo">
          <img src="./images/crisp.svg" alt="" />
        </div>
        <ul className="search-cart">
          <li>
            <a href="#">
              <i className="text-light fa-solid fa-magnifying-glass"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/cart.svg" alt="" />
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}

const mapDispatchToProps = { translateListData }

const mapStateToProps = (state: any) => {
  return {
    translate: state.translate.translateData?.result,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
