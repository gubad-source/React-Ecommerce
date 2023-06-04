import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './root/App/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import '../src/assets/styles/index.scss'

import store from '../config/store'

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
