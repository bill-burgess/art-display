import React, { Component } from 'react'

function generateNavDropDown (navSection, navMouseOver, dispatch){
  const listItems = navSection.subHeaders.map(listItem => {
    const backgroundColor = (navMouseOver === listItem)
      ? '#222'
      : null
    return (
      <li
        className='navDropdownOpt'
        key={listItem}
        style={{backgroundColor: backgroundColor}}
        onMouseEnter={()=>dispatch({type: 'NAV_MOUSE_OVER', payload: listItem})}
        onMouseLeave={()=>dispatch({type: 'NAV_MOUSE_OVER', payload: null})}
      >
        {listItem}
      </li>
    )
  })
  return (
    <div>
      <ul
        className='navDropdown'
        id={`navDropdown${navSection.name}`}
      >
        {listItems}
      </ul>
    </div>
  )
}

module.exports = generateNavDropDown
