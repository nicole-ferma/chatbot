import { combineReducers } from 'redux'

import messages from './messages'
import responses from './responses'
import menu from './menu'

export default combineReducers({
  messages,
  responses,
  menu,
})
