import React, { useEffect, useLayoutEffect, useState } from 'react'
import { translateListData } from 'store/actions/translate'
import { connect } from 'react-redux'
import { useScrollYPosition } from 'react-use-scroll-position'
import { Link, useLocation, NavLink } from 'react-router-dom'
import { useActions } from 'hooks/useActions'
//import { useHistory } from 'react-router'
import logo from '../../../assets/images/Group 4.png'
import logo_responsive from '../../../assets/images/crisp.svg'
import storage_responsive from '../../../assets/images/cart.svg'
import liked from '../../../assets/images/heart.svg'
import storage from '../../../assets/images/card.svg'
import { useSelector, useDispatch } from 'react-redux'
import { changeLanguage } from '../../../redux/languageSwitcher'
import type { RootState } from '../../../redux/store'
import Menu from '../../../constants/header'

const HeaderComponent: React.FC<any> = ({ translate }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  const defaultPriceCart = useSelector(
    (state: RootState) => state.cardPriceCounter.defaultPriceCart
  )

  const defaultCart = useSelector(
    (state: RootState) => state.cardCounter.defaultCart
  )

  const defaultWish = useSelector(
    (state: RootState) => state.wishCounter.defaultWish
  )

  const loadedLanguage = localStorage.getItem('language')
  const defaultLang = useSelector(
    (state: RootState) => state.lngSwitcher.value ?? 'az'
  )
  const dispatch = useDispatch()

  const languageLoading = () => {
    const loadedLanguage = localStorage.getItem('language') ?? 'az'
    console.log(loadedLanguage)
    dispatch(changeLanguage(loadedLanguage))
  }
  const languageStoring = (e) => {
    dispatch(changeLanguage(e.target.value))
    localStorage.setItem('language', `${e.target.value}`)
  }

  let ii = JSON.parse(localStorage.getItem('storedProducts'))
    ? JSON.parse(localStorage.getItem('storedProducts')).total
    : 0
  const showStoragePrice = () => {
    let yy = document.querySelector('.storage-info__price__span')
    yy.innerHTML = ii
  }
  useEffect(() => {
    showHaert()
    languageLoading()
    showUser()
    showStorageCount()

    showStoragePrice()
  }, [])

  const showStorageCount = () => {
    let storage = JSON.parse(localStorage.getItem('storedProducts')) ?? 0
    let storageCount = document.querySelector('.storage-count')

    if (storageCount != null && storage.count != null) {
      storageCount.innerHTML = storage.count
    }
  }
  const showHaert = () => {
    let aa = JSON.parse(localStorage.getItem('likedProducts') ?? '0')
    document.querySelector('.wish-count').innerHTML =
      aa.length ?? '0'.toString()
    console.log(aa.length)
  }
  const toggleNavActive = () => {
    const nav = document.querySelector('nav')
    nav?.classList.toggle('nav-active')
  }
  const showUser = () => {
    if (localStorage.getItem('login') != null) {
      const mm = JSON.parse(localStorage.getItem('user'))
      const ff = mm.firstname ?? 'sign-in'
      const ll = document.querySelector('.sign-in')
      ll.innerHTML = ff
    }
  }
  const signOutModalOpen = () => {
    if (localStorage.getItem('login') != null) {
      const signOutModal = document.querySelector('.sign-out-modal')
      signOutModal.style.display = 'block'
    }
  }
  const signOutModalClose = () => {
    const signOutModal = document.querySelector('.sign-out-modal')
    signOutModal.style.display = 'none'
  }
  const signOutAccount = () => {
    localStorage.removeItem('login')
    const signOutModal = document.querySelector('.sign-out-modal')
    signOutModal.style.display = 'none'
    location.reload()
  }
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <Link to="/">{Menu[defaultLang as keyof typeof Menu][0].home}</Link>
          </li>
          <li>
            <a href="#">{Menu[defaultLang as keyof typeof Menu][1].shop}</a>
          </li>
          <li>
            <Link to="/blog">
              {Menu[defaultLang as keyof typeof Menu][2].blog}
            </Link>
          </li>
          <li>
            <Link to="/catalog">
              {Menu[defaultLang as keyof typeof Menu][3].catalog}
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <a href="#">
                {Menu[defaultLang as keyof typeof Menu][4].contact}
              </a>
            </Link>
          </li>
          <li>
            <a href="#">{Menu[defaultLang as keyof typeof Menu][5].search}</a>
          </li>
          <li>
            <Link to="/product">
              {Menu[defaultLang as keyof typeof Menu][6].products}
            </Link>
          </li>
        </ul>

        <ul className="account-cart">
          <li className="sign-in" onClick={signOutModalOpen}>
            <Link to="/login">Sign-in</Link>
          </li>
          <li className="create-account">
            {' '}
            <Link to="/sign-in">Create an account</Link>
          </li>
          <li className="liked">
            <Link to="/wishlist">
              <img src={liked} alt="" />
              <span className="wish-count">{defaultWish}</span>
            </Link>
          </li>
          <li className="storage">
            <img src={storage} alt="" />
          </li>
          <li className="storage-info">
            <div className="storage-info__text">
              <Link to="/storage">
                Storage <span className="storage-count">{defaultCart}</span>
              </Link>
            </div>
            <div className="storage-info__price">
              <span className="storage-info__price__span">
                {defaultPriceCart}
              </span>{' '}
              eur
            </div>
          </li>
          <li style={{ color: '#000000' }}>
            {/* <select onChange={(e) => dispatch(changeLanguage(e.target.value))}> */}
            <select onChange={(e) => languageStoring(e)}>
              <option selected disabled>
                Language
              </option>
              <option value={'en'}>Eng</option>
              <option value={'az'}>Aze</option>
            </select>
          </li>
        </ul>
      </nav>
      <div className="sign-out-modal">
        <h1>Are you sure you want to quit</h1>
        <div className="sign-out-modal__buttons">
          <button className="sign-out-yes" onClick={signOutAccount}>
            Yes
          </button>
          <button className="sign-out-no" onClick={signOutModalClose}>
            No
          </button>
        </div>
      </div>
      <section id="mobile-nav">
        <div className="hamburger" onClick={toggleNavActive}>
          <i className="fa-solid fa-bars text-light"></i>
        </div>
        <div className="logo">
          <img src={logo_responsive} alt="" />
        </div>
        <ul className="search-cart">
          <li>
            <a href="#">
              <i className="text-light fa-solid fa-magnifying-glass"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={storage_responsive} alt="" />
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}

// const mapDispatchToProps = { translateListData }

// const mapStateToProps = (state: any) => {
//   return {
//     translate: state.translate.translateData?.result,
//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)

export default HeaderComponent
