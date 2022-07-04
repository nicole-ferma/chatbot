import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { addMessage, addResponse } from '../actions/index.js'

import { getResponses } from '../apiClient.js'

function SendNewMessage(props) {
  const dispatch = useDispatch()

  const [newMessage, setNewMessage] = useState('')

  const[response, setNewResponse] = useState('')
  response && console.log('response from db', response.responseArray)

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
    const randomIndex = Math.floor(Math.random() * 4)
    if(greeting.test(newMessage)) {
      response && dispatch(addResponse(JSON.parse(response.responseArray)[randomIndex]))
    } 
    return 
  }

  useEffect(() => {
    getResponses()
      .then(response => {
        setNewResponse(response[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

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

