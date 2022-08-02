const messages = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_MESSAGE':
      return payload
    default:
      return state
  }
}

export default messages
