const initialState = require('../state')
module.exports = function navMouseOver (state = initialState.navMouseOver, action) {
  switch (action.type) {

    case 'NAV_MOUSE_OVER':
      return action.payload

      break;

    default:
      return state
  }
}
