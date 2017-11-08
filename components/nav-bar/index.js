import React, { Component } from 'react'
const _ = require('lodash')

const initialState = require('../../state')

class NavBar extends Component {

  render () {

    const dispatch = this.props.dispatch

    const state = this.props.state || initialState
    const { navSections } = state

    return (
      <div
        style={{color: 'white'}}
      >
        <div className=''>thing1</div>
        <div>thing2</div>
        <div>thing3</div>

      </div>
    )
  }

}

module.exports = NavBar
