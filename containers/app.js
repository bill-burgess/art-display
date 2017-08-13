import React, { Component } from 'react'

const Banner = require('../components/banner')
const Footer = require('../components/footer')

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Banner {...this.props}/>
        <Footer {...this.props}/>
      </div>
    )
  }

}

export default App
