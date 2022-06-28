import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { addMessage } from '../actions/index.js'

function SendNewMessage(props) {
  // user messages
  const messages = useSelector(state => state.messages)

  function handleSubmit(evt) {
    evt.preventDefault()

    dispatch(addMessage(newMessage))
    setNewMessage('')
    console.log('newMessage', newMessage)
  }

  function handleChange(evt) {
    setNewMessage( evt.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="message"
          id="message"
          value={newMessage}
          onChange={handleChange}
          placeholder="write new message"
        />
      </div>
      <button type="submit">send</button>
    </form>
  )
}

export default SendNewMessage