import React, { useState, useEffect } from 'react'

import Circles from './Circles'
import Conversation from './Conversation'
import SendNewMessage from './SendNewMessage'

function App() {
  // user messages
  const [messages, setMessages] = useState([])

  // bot responses
  const [responses, setResponses] = useState([])

  function handleAddMessage(newMessage) {
    const newResponse = respondToMessage(newMessage)[0]
    
    setMessages([...messages, newMessage])
    setResponses([...responses, newResponse])

    console.log('messages', messages)
    console.log('newResponse', newResponse)
    console.log('responses', responses)
  } 

  function respondToMessage(newMessage) {
    const greeting = /h[ea]llo|hi|howdy/i
    if(greeting.test(newMessage)) {
      return ['greetings, friend']
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
          <Conversation messages={messages} responses={responses} />
          <SendNewMessage onAddMessage={handleAddMessage} />
        </main>
      </div>
    </>
  )
}

export default App
