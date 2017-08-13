import React, { Component } from 'react'
import App from './app'


class Home extends Component {

  render () {
    console.log(this.props.state);
    return (
      <div>
        <App />
        <div id='test'>TEST HERE</div>
      </div>
    )
  }

}

module.exports = Home
