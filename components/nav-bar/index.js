import React, { Component } from 'react'

const _ = require('lodash')

const generateNavSection = require('../../operations/generate-nav-section')
const initialState = require('../../state')

class NavBar extends Component {

  render () {

    const dispatch = this.props.dispatch

    const state = this.props.state || initialState
    const { navSections, navDropdown, navMouseOver } = state

    const display = _.map(navSections, (navSection) => {
      return generateNavSection(navSection, navDropdown, navMouseOver, dispatch)
    })

    return (
      <div
        id='navBar'
        className='navBar'
      >
      {display}
      </div>
    )
  }

}

module.exports = NavBar
