import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import Products from './containers/Products'
import Product from './containers/Product'
import Cart from './containers/Cart'

import products from './modules/products'

const reducer = combineReducers({
  products
})

const store = createStore(reducer)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Products} />
        <Route path='products/:id' component={Product} />
        <Route path='cart' component={Cart} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app')
)
