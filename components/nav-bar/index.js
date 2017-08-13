import React, { Component } from 'react'

const NavAbout = require('./nav-about')

class NavBar extends Component {

  render () {

    const dispatch = this.props.dispatch

    return (
      <div
        id='navBar'
        className='navBar'
      >
      <div
        id='navContact'
        className='navBar'
        onMouseEnter={()=>dispatch({type: 'SHOW_DROPDOWN', payload: 'contact'})}
        onMouseLeave={()=>dispatch({type: 'SHOW_DROPDOWN', payload: null})}
      >
        contact
      </div>
        <NavAbout dispatch={dispatch}/>
        <div
          id='navGallery'
          className='navBar'
        >
          gallery
        </div>
      </div>
    )
  }

}

module.exports = NavBar
