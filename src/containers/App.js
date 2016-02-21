import React, { Component, PropTypes } from 'react'

export default class App extends Component {
  static propTypes = {
    name : PropTypes.string.isRequired,
    onChange : PropTypes.func
  };

  componentDidMount() {
    console.log(this.props)
  }

  componentWillReceiveProps(props) {
    console.log(props)
  }

  onButtonClick(e) {
    e.preventDefault()
    console.log('CRAP')
    this.props.onChange(e)
  }

  render() {
    const {name, onChange} = this.props

    return <div>
      <h1>Hello {name}</h1>
      <button onClick={this.onButtonClick.bind(this)}>BLAM</button>
    </div>
  }
}
