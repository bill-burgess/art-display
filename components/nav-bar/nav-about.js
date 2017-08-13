import React, { Component } from 'react'


class NavAbout extends Component {

  render () {

    const dispatch = this.props.dispatch

    return (
      <div>
        <div
          id='navAbout'
          className='navBar'
          onMouseEnter={()=>dispatch({type: 'SHOW_DROPDOWN', payload: 'about'})}
          onMouseLeave={()=>dispatch({type: 'SHOW_DROPDOWN', payload: null})}
        >
          about
        </div>
        <div>
          <ul className='navDropdown' id='navDropdownAbout'>
            <li className='navDropdownOpt'>
              Chloe
            </li>
            <li className='navDropdownOpt'>
              blog
            </li>
          </ul>
        </div>
      </div>
    )
  }

}

module.exports = NavAbout
