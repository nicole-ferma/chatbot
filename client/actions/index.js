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
