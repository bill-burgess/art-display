const initialState = require('../state')
module.exports = function navDropdown (state = initialState.navDropdown, action) {
  switch (action.type) {

    case 'SHOW_DROPDOWN':
      return action.payload

      break;

    default:
      return state
  }
}
