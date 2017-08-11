import React, { Component } from 'react'

class Banner extends Component {

  render () {

    return (
      <div id='bannerBar' >
        <a>
          <img
            id='bannerName'
            className='banner'
            src='http://txt-dynamic.static.1001fonts.net/txt/dHRmLjI0MC5lYmU1ZTUuUTJoc2IyVWdVM1Z0YldWeWFHRjVaWE0sLjAA/otto.medium.png'
          >
          </img>
          <h1
            id='bannerTitle'
            className='banner'
          >
            fine artist
          </h1>
        </a>
      </div>
    )
  }

}

module.exports = Banner

//temp font: otto font http://www.1001fonts.com/otto-font.html#styles
