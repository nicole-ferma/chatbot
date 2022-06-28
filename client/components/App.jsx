import React, { useState, useEffect } from 'react'

import Circles from './Circles'
import Conversation from './Conversation'
import SendNewMessage from './SendNewMessage'

const initialState = [{ message: '' }]

function App() {
  // user messages
  const [messages, setMessages] = useState(initialState)
  // const [newMessage, setNewMessage] = useState('')
  // bot responses
  const [responses, setResponses] = useState([{ response: '' }])

  function handleAddMessage(newMessage) {
    const newResponse = respondToMessage(newMessage)[0].response
    console.log('newResponse', newResponse)
    // console.log('potato', newResponse[0].response)
    // setNewMessage(newMessage.message)
    // console.log('pineapple', newMessage)
    setMessages([...messages, newMessage])
    console.log('messages', messages)
    setResponses({
      ...responses, ...newResponse
    })
    console.log('responses', responses)
  } 

  function respondToMessage(newMessage) {
    const greeting = /h[ea]llo|hi|howdy/i
    if(greeting.test(newMessage.message)) {
      return [{ response: 'greetings, friend'}]
    }
    return ['nothing']
  }
  
  return (
    <>
      <div className="area" >
        <Circles />
      </div >
      <div className="context">
        <main>
          <Conversation messages={messages} />
          <SendNewMessage onAddMessage={handleAddMessage} />
        </main>
      </div>
    </>
  )
}

export default App
