const { combineReducers } = require('redux')

const route = require('./route')
const navDropdown = require('./nav-dropdown')
const navMouseOver = require('./nav-mouse-over')
const navSections = require('./nav-sections')

module.exports = combineReducers({
  route,
  navDropdown,
  navMouseOver,
  navSections
})
