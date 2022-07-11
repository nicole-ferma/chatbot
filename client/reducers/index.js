import { combineReducers } from 'redux'

import messages from './messages'
import replies from './replies'
import menu from './menu'

export default combineReducers({
  messages,
  replies,
  menu,
})
