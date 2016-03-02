import React, { Component, PropTypes } from 'react'

export default class Product extends Component {
  render() {
    const {params: {id}} = this.props

    return <div>
      <h1>Product {id}</h1>
    </div>
  }
}
