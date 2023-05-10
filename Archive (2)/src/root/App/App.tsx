import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from '../Routes'
import Catalog from 'components/pages/Catalog'
import 'assets/styles/index.css'
import Main from 'components/pages/Main'
import SignIn from 'components/pages/SignIn'
import EditAccount from 'components/pages/EditAccount'
import Dashboard from 'components/pages/Dashboard'
import Blog from 'components/pages/Blog'
import Wishlist from 'components/pages/Wishlist'

const App = () => {
  return (
    <Wishlist />
    //<Blog />
    // <Dashboard />
    // <EditAccount />
    //<SignIn />
    //<Catalog />
    //<Main />
    // <BrowserRouter>
    //   <Routes />
    // </BrowserRouter>
  )
}

export default App
