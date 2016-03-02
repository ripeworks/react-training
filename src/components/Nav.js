import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component {
  render() {
    return <nav>
      <Link to='/'>Shop Products</Link>
      <Link to='/cart'>Cart</Link>
    </nav>
  }
}
