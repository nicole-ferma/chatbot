import React, { useState } from 'react'

import Messages from './Messages'
import SendNewMessage from './SendNewMessage'

const initialState = [{ message: '' }]

function App() {
  const [messages, setMessages] = useState(initialState)

  function handleAddMessage(newMessage) {
    setMessages([...messages, newMessage])
  }

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
        </main>
      </div>
    </>

  )
}

export default App
