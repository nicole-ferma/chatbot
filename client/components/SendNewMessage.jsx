import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addMessage } from '../actions/index.js'

function SendNewMessage(props) {
  const dispatch = useDispatch()

  const [newMessage, setNewMessage] = useState('')

  function handleSubmit(evt) {
    evt.preventDefault()
    dispatch(addMessage(newMessage))
    setNewMessage('')
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