import React from 'react'
import { useSelector } from 'react-redux'

function Conversation() {
  const messages = useSelector(state => state.messages)
  const responses = useSelector(state => state.responses)

  return (
    <div className="messages">
      {messages.map((message, i) => (
        <p id="user-msg" key={i}>
          {message}
        </p>
      ))}
      {responses.map((response, i) => (
        <p id="bot-msg" key={i}>
          {response}
        </p>
      ))}
    </div>
  )
}

export default Conversation