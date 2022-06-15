import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Chat from './Chat.jsx'
import Messages from './Messages.jsx'

function App() {
  return (
    <div className="container">
      <div className="title">
        <h1>Chatbot</h1>
      </div>
      <div>
        <Messages />
      </div>
      <div>
        <Chat />
      </div>
    </div>
  )
}

export default App
