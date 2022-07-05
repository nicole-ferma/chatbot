import { getResponse } from '../apiClient.js'

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

export function addResponse(response) {
  return {
    type: 'ADD_RESPONSE',
    payload: response,
  }
}

// export function fetchFruits() {
//   return (dispatch) => {
//     return getFruits().then((fruits) => {
//       dispatch(setFruits(fruits))
//       return null
//     })
//   }
// }

// time to thunk!
export function getReply(message) {
  return (dispatch) => {
    return getResponse(message).then((reply) => {
      dispatch(addResponse(reply))
    })
  }
}
