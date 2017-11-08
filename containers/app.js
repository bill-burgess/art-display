import React, { Component } from 'react'

const Banner = require('../components/banner')
const Footer = require('../components/footer')

class App extends Component {

  render () {
    return (
      <div>
        <Banner {...this.props}/>
        <Footer {...this.props}/>
      </div>
    )
  }

}

module.exports = App
