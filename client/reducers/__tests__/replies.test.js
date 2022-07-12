import replies from '../replies'

import { addReply } from '../../actions/index'

describe('messages reducer', () => {
  it('adds new reply into the store', () => {
    const oldState = ''
    const action = addReply('storms!')
    const newState = replies(oldState, action)
    expect(newState).toContain(action.payload)
  })
})
