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
import Product from 'components/post/Product'
import LogIn from 'components/pages/LogIn'
import Contact from 'components/pages/Contact'
import Order from 'components/pages/Order'
import Error from 'components/pages/Error'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
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
          <Route path="/product" component={Product} />
          <Route path="/login" component={LogIn} />
          <Route path="/contact" component={Contact} />
          <Route path="/orders" component={Order} />
          <Route path="*" component={Error} />
        </Switch>
      </Provider>
      <Footer />
    </BrowserRouter>
  )
}

export default App
