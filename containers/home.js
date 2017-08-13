import React, { Component } from 'react'
import App from './app'

const DescriptionPanel = require('../components/description-panel')

class Home extends Component {

  render () {
    console.log(this.props.state);
    return (
      <div>
        <App {...this.props}/>
        <DescriptionPanel {...this.props}/>
      </div>
    )
  }

}

module.exports = Home
