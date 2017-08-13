const { combineReducers } = require('redux')

const route = require('./route')
const navDropdown = require('./nav-dropdown')

module.exports = combineReducers({
  route,
  navDropdown
})
