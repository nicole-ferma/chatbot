import { combineReducers } from 'redux'

import botResponses from './botResponses'
import messages from './messages'

export default combineReducers({
  botResponses,
  messages,
})
