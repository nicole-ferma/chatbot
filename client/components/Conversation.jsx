import React from 'react'
import { useSelector } from 'react-redux'

function Conversation() {
  const messages = useSelector(state => state.messages)
  const replies = useSelector(state => state.replies)

  return (
    <>
      <div className="messages">
        {messages.map((message, i) => (
          <div key={i}>
            <p id="user-msg">
              {message}
            </p>
            <p id="bot-msg">
              {replies[i]}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Conversation