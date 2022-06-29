const messages = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_MESSAGE':
      return [...state, payload]
    default:
      return state
  }
}

export default messages
