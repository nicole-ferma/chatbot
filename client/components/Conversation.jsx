import React from 'react'
import { useSelector } from 'react-redux'

function Conversation() {
  const messages = useSelector(state => state.messages)
  const responses = useSelector(state => state.responses)

  return (
    <div className="messages">
      {messages.map((message, i) => (
        <>
          <p id="user-msg" key={i}>
            {message}
          </p>
          <p id="bot-msg" key={i}>
            {responses[i]}
          </p>
        </>
      ))}
    </div>
  )
}

export default Conversation