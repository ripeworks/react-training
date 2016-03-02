import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default function ProductItem(props) {
  const {product} = props

  return <div className='item'>
    <h4><Link to={`/products/${product.id}`}>{product.name}</Link></h4>
    <p>${product.price}</p>
  </div>
}

ProductItem.propTypes = {
  product : PropTypes.object.isRequired
}
