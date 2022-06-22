import React, { useState, useEffect } from 'react'

import Messages from './Messages'
import SendNewMessage from './SendNewMessage'
import request from 'superagent'

const initialState = [{ message: '' }]

function App() {
  const [messages, setMessages] = useState(initialState)

  function handleAddMessage(newMessage) {
    const responses = respondToMessage(newMessage)
    console.log('responses', responses)
    setMessages([...messages, newMessage, ...responses])
    console.log('messages', messages)
  }

  function respondToMessage(newMessage) {
    const greeting = /h[ea]llo|hi|howdy/i
    if(greeting.test(newMessage.message)) {
      return ['greetings, friend']
    }
    return ['nothing']
  }
  // experiment using fox api
  // const [image, setImage] = useState('')
  // useEffect(() => {
  //   request.get('https://randomfox.ca/floof/').then(response => {
  //     setImage(`"${response.body.image}"`)
  //   })
  // }, [])
  
  return (
    <>
      <div class="area" >
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
      <div class="context">
        <main>
          <Messages messages={messages} />
          <SendNewMessage onAddMessage={handleAddMessage} />
          {/* <image src={image} alt="a fox"></image> */}
          {/* {console.log(image)} */}
        </main>
      </div>
    </>
  )
}

export default App
