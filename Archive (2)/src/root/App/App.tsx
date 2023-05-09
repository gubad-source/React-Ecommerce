import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from '../Routes'
import Catalog from 'components/pages/Catalog'
import 'assets/styles/index.css'
import Main from 'components/pages/Main'
import SignIn from 'components/pages/SignIn'
import EditAccount from 'components/pages/EditAccount'

const App = () => {
  return (
    <EditAccount />
    //<SignIn />
    //<Catalog />
    //<Main />
    // <BrowserRouter>
    //   <Routes />
    // </BrowserRouter>
  )
}

export default App
