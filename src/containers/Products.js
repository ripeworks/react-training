import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../modules/products'
import ProductItem from '../components/ProductItem'

@connect(state => {
  return {
    products: state.products.data
  }
})
export default class Products extends Component {
  componentDidMount() {
    this.props.dispatch(getProducts())
  }

  componentWillReceiveProps(props) {
    console.log(props)
  }

  render() {
    const {products} = this.props

    return <div>
      <h1>Products!</h1>
      {products.map(product => {
        return <ProductItem key={product.id} product={product} />
      })}
    </div>
  }
}
