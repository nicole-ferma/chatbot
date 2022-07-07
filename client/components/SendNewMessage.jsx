import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { addMessage, addResponse, getReply } from '../actions/index.js'

import { getResponses, getResponse } from '../apiClient.js'

function SendNewMessage(props) {
  const dispatch = useDispatch()

  const [newMessage, setNewMessage] = useState('')
  const[response, setNewResponse] = useState('')

  function handleSubmit(evt) {
    evt.preventDefault()
    dispatch(addMessage(newMessage))
    // call thunk function with newMessage param
    dispatch(getReply(newMessage))
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

