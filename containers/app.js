import React, { Component } from 'react'

const Banner = require('../components/banner')

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Banner {...this.props}/>
      </div>
    )
  }

}

export default App
