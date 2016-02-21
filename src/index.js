import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import App from './containers/App'

let name = "Bob"

const onChange = (e) => {
  e.preventDefault()
  name = "George"
  main()
}

const main = () => {
  render(<App name={name} onChange={onChange} />, document.getElementById('app'))
}

main()
