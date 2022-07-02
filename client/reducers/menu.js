const menu = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case 'CHOOSE_CHAT':
      return { choice: payload }
    default:
      return state
  }
}

export default menu
