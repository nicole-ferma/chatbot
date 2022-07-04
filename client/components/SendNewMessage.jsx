import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addMessage, addResponse } from '../actions/index.js'

function SendNewMessage(props) {
  const dispatch = useDispatch()

  const [newMessage, setNewMessage] = useState('')

  function handleSubmit(evt) {
    evt.preventDefault()
    dispatch(addMessage(newMessage))
    respondToMessage(newMessage)
  }

  function handleChange(evt) {
    setNewMessage( evt.target.value)
  }

  function respondToMessage(newMessage) {
    const greeting = /h[ea]llo|hi|howdy/i
    if(greeting.test(newMessage)) {
      dispatch(addResponse('greetings, friend'))
    } 
    return 
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

