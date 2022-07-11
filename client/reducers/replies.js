const replies = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_REPLY':
      return [...state, payload]
    default:
      return state
  }
}

export default replies
