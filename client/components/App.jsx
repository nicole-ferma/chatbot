import React, { useState, useEffect } from 'react'

import Messages from './Messages'
import SendNewMessage from './SendNewMessage'
import request from 'superagent'

const initialState = [{ message: '' }]

function App() {
  const [messages, setMessages] = useState(initialState)
  const [image, setImage] = useState('')
  function handleAddMessage(newMessage) {
    setMessages([...messages, newMessage])
    console.log(messages)
  }
  // experiment using fox api
  useEffect(() => {
    request.get('https://randomfox.ca/floof/').then(response => {
      setImage(`"${response.body.image}"`)
    })
  }, [])
  
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
          <image src={image} alt="a fox"></image>
          {console.log(image)}
        </main>
      </div>
    </>
  )
}

export default App
