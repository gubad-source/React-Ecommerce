import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Routes from '../Routes'
import Catalog from 'components/pages/Catalog'
import 'assets/styles/index.css'
import Main from 'components/pages/Main'
import SignIn from 'components/pages/SignIn'
import EditAccount from 'components/pages/EditAccount'
import Dashboard from 'components/pages/Dashboard'
import Blog from 'components/pages/Blog'
import Wishlist from 'components/pages/Wishlist'
import Storage from 'components/pages/Card'
import Header from 'components/Template/Header'
import Footer from 'components/Template/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/edit-account" component={EditAccount} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/blog" component={Blog} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/storage" component={Storage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
