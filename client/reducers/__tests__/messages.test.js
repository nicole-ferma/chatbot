import messages from '../messages'

import { addMessage } from '../../actions/index'

describe('messages reducer', () => {
  it('adds new message into the store', () => {
    const oldState = ''
    const action = addMessage('ohana means family')
    const newState = messages(oldState, action)
    expect(newState).toContain(action.payload)
  })
})
