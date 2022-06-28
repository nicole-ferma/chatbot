import React from 'react'

function Conversation(props) {
  const { messages, responses } = props

  return (
    <div className="messages">
      {messages.map((a, i) => (
        <p id="user-msg" key={i}>
          {a.message}
        </p>
      ))}
      {/* {responses.map((b, index) => (
        <p id="bot-msg" key={index}>
          {b.response}
        </p>
      ))} */}
    </div>
  )
}

export default Conversation