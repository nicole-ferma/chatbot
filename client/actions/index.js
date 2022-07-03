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

export function chooseChat(choice) {
  return {
    type: 'CHOOSE_CHAT',
    payload: choice,
  }
}
