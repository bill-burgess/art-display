import React, { Component } from 'react'


class NavBar extends Component {

  render () {

    return (
      <div
        id='navBar'
        className='navBar'
      >
      <div
        id='navAbout'
        className='navBar'
      >
        contact
      </div>
        <div
          id='navAbout'
          className='navBar'
        >
          about
        </div>
        <div
          id='navAbout'
          className='navBar'
        >
          gallery
        </div>
      </div>
    )
  }

}

module.exports = NavBar
