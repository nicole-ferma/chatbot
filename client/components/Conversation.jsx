import React from 'react'

function Conversation(props) {
  const { messages, responses } = props

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