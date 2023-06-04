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
  const loadedLanguage = localStorage.getItem('language')
  const defaultLang = useSelector(
    (state: RootState) => state.lngSwitcher.value ?? 'az'
  )
  const dispatch = useDispatch()

  // const languageLoading = () => {
  //   const loadedLanguage = localStorage.getItem('language') ?? 'az'
  //   console.log(loadedLanguage)
  //   dispatch(changeLanguage(loadedLanguage))
  // }
  const languageStoring = (e) => {
    dispatch(changeLanguage(e.target.value))
    localStorage.setItem('language', e.target.value)
  }

  useEffect(() => {
    showHaert()
  }, [])
  const showHaert = () => {
    let aa = JSON.parse(localStorage.getItem('likedProducts') ?? '0')
    document.querySelector('.wish-count').innerHTML =
      aa[aa.length - 1] ?? '0'.toString()
    console.log(aa.length)
  }
  const toggleNavActive = () => {
    const nav = document.querySelector('nav')
    nav?.classList.toggle('nav-active')
  }
  // const [storage, setStoragee] = useState(
  //   JSON.parse(
  //     localStorage.getItem('storedProducts') ??
  //       '{"items":[],"count":0,"total":0}'
  //   )
  // )

  //const { translateListData } = useActions()

  // const location = useLocation()
  // const navigate = useHistory()
  // const pathname = location.pathname
  // const scrollY = useScrollYPosition()

  // useLayoutEffect(() => {
  //   translateListData()
  // }, [])

  // useEffect(() => {}, [translate])

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
            <a href="#">{Menu[defaultLang as keyof typeof Menu][4].contact}</a>
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
          <li className="sign-in">Sign-in</li>
          <li className="create-account">
            {' '}
            <Link to="/sign-in">Create an account</Link>
          </li>
          <li className="liked">
            <img src={liked} alt="" />
            <span className="wish-count">0</span>
          </li>
          <li className="storage">
            <img src={storage} alt="" />
          </li>
          <li className="storage-info">
            <div className="storage-info__text">
              <Link to="/storage">
                Storage <span className="storage-count">0</span>
              </Link>
            </div>
            <div className="storage-info__price">0,00 eur</div>
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
