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
    <main>
      <h1>Chatbot</h1>
      <h2>Messages</h2>
      <Messages messages={messages} />
      <h2>Send new message:</h2>
      <SendNewMessage onAddMessage={handleAddMessage} />
    </main>
  )
}

export default App
