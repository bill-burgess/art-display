import React, { Component } from 'react'

class DesciptionPanel extends Component {

  render () {

    return (
      <div
        id='descriptionPanel'
        className='descriptionPanel'
      >
        <div
          id='homeTitle'
        >
          "Painting Title"
        </div>
        <div
          id='homeDescription'
        >
        <p>Posted: August 13, 2017</p>
        <p>Category: Still life</p>
        <p id='panelHeader'>Description</p>
        <p>Copyright ©2017 Chloe Summerhayes</p>
        <p className='panelStrong'>Painting Title</p>
        <p>12x24</p>
        <p>Oil/Canvas</p>
        <p>$1600</p>
        <a
          href='#'
        >
          <p id='panelAvailability'>Arrange a viewing</p>
        </a>
        </div>
      </div>
    )
  }

}

module.exports = DesciptionPanel
