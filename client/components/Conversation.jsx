import React from 'react'
import { useSelector } from 'react-redux'

function Conversation() {
  const messages = useSelector(state => state.messages)
  const replies = useSelector(state => state.replies)

  return (
    <>
      <div className="messages">
          <div>
            <p key={replies} id="bot-msg">
              {replies}
            </p>
            <p id="user-msg">
              {messages}
            </p>
          </div>
      </div>
    </>
  )
}

export default Conversation