import React, { Component, PropTypes } from 'react'

export default class NameViewer extends Component {

  static contextTypes = {
    name : PropTypes.string
  };

  render() {
    const {name} = this.context

    return <h1>Hello {name}</h1>
  }
}
