import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addMessage, getReplyThunk } from '../actions/index.js'

function SendNewMessage() {
  const dispatch = useDispatch()

  const [newMessage, setNewMessage] = useState('')

  function handleSubmit(evt) {
    evt.preventDefault()
    dispatch(addMessage(newMessage))
    dispatch(getReplyThunk(newMessage))
  }

  function handleChange(evt) {
    setNewMessage( evt.target.value)
  }

  return (
    <>
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
    </>
  )
}

export default SendNewMessage

