import { getReply } from '../apiClient.js'

export function chooseChat(choice) {
  return {
    type: 'CHOOSE_CHAT',
    payload: choice,
  }
}

export function addMessage(message) {
  return {
    type: 'ADD_MESSAGE',
    payload: message,
  }
}

export function addReply(reply) {
  return {
    type: 'ADD_REPLY',
    payload: reply,
  }
}

// time to thunk!
export function getReplyThunk(message) {
  return (dispatch) => {
    return getReply(message).then((reply) => {
      dispatch(addReply(reply))
    })
  }
}
