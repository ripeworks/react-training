import React, { Component, PropTypes } from 'react'
import NameEditor from '../components/NameEditor'
import NameViewer from '../components/NameViewer'
import Nav from '../components/Nav'

export default class App extends Component {
  static childContextTypes = {
    name : PropTypes.string
  };

  state = {
    name: 'bob'
  };

  getChildContext() {
    return {
      name: this.state.name
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  componentWillReceiveProps(props) {
    console.log(props)
  }

  onChangeName(e) {
    e.preventDefault()
    this.setState({name: 'George'})
  }

  render() {
    const {name} = this.state

    return <div>
      <NameViewer />
      <NameEditor onChange={this.onChangeName.bind(this)} />
      <Nav />
      {this.props.children}
    </div>
  }
}
