import React, { Component } from 'react'

const initialState = require('../../state')

class NavAbout extends Component {

  render () {

    const dispatch = this.props.dispatch

    const state = this.props.state || initialState
    const { navDropdown } = state

    const display = (navDropdown === 'about')
      ? (
        <div>
          <ul
            className='navDropdown'
            id='navDropdownAbout'
          >
            <li className='navDropdownOpt'>
              Chloe
            </li>
            <li className='navDropdownOpt'>
              blog
            </li>
          </ul>
        </div>
      )
      : null


    return (
      <div
        onMouseEnter={()=>dispatch({type: 'SHOW_DROPDOWN', payload: 'about'})}
        onMouseLeave={()=>dispatch({type: 'SHOW_DROPDOWN', payload: null})}
      >
        <div
          id='navAbout'
          className='navBar'
        >
          about
        </div>
        {display}
      </div>
    )
  }

}

module.exports = NavAbout
