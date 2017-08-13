import React from 'react'

const generateNavDropdown = require('./generate-nav-dropdown')

function generateNavSection (navSection, navDropdown, navMouseOver, dispatch){

  const display = (navDropdown === navSection.id)
    ? generateNavDropdown(navSection, navMouseOver, dispatch)
    : null


  return (
    <div
      onMouseEnter={()=>dispatch({type: 'SHOW_DROPDOWN', payload: navSection.id})}
      onMouseLeave={()=>dispatch({type: 'SHOW_DROPDOWN', payload: null})}
      key={navSection.id}
    >
      <div
        id={`nav${navSection.name}`}
        className='navBar'
      >
        {navSection.id}
      </div>
      {display}
    </div>
  )
}

module.exports = generateNavSection
