import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { addMessage, addResponse } from '../actions/index.js'

import { getResponses } from '../apiClient.js'

function SendNewMessage(props) {
  const dispatch = useDispatch()

  const [newMessage, setNewMessage] = useState('')
  const[response, setNewResponse] = useState('')

  function handleSubmit(evt) {
    evt.preventDefault()
    dispatch(addMessage(newMessage))
    respondToMessage(newMessage)
  }

  function handleChange(evt) {
    setNewMessage( evt.target.value)
  }

// eventually move logic to backend 
  function respondToMessage(newMessage) {
    const greeting = /h[ea]llo|hi|howdy/i
    const farewell = /bye|see.you|goodbye/i
    const randomIndex = Math.floor(Math.random() * 3)
    if(greeting.test(newMessage)) {
      response && dispatch(addResponse(JSON.parse(response[0].responseArray)[randomIndex]))
    } else if (farewell.test(newMessage)) {
      response && dispatch(addResponse(JSON.parse(response[1].responseArray)[randomIndex]))
    }
    return 
  }

  // this currently gets ALL responses from db -- refactor!!!
  useEffect(() => {
    getResponses()
      .then(response => {
        setNewResponse(response)
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

