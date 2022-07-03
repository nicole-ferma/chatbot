const responses = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_RESPONSE':
      return [...state, payload]
    default:
      return state
  }
}

export default responses
