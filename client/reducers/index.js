import { combineReducers } from 'redux'

import messages from './messages'
import responses from './responses'

export default combineReducers({
  messages,
  responses,
})
