import React from 'react'

function Messages(props) {
  const { messages } = props

  return (
    <div class="messages">
      <p id="bot-msg">...</p>
      {messages.map((a, i) => (
        <p id="user-msg" key={i}>
          {a.message}
        </p>
      ))}
    </div>
  )
}

export default Messages