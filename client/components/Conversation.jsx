import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Conversation() {
  const messages = useSelector(state => state.messages)
  const responses = useSelector(state => state.responses)

  const userMessage = document.getElementById('user-msg')
  const botMessage = document.getElementById('bot-msg')

  useEffect(() => {
    messages.map((message, i) => (
      userMessage.innerHTML = message 
    ))
  }, [messages])

  return (
    <div className="messages">
      <p id="user-msg"></p>
      {responses.map((response, i) => (
        <p id="bot-msg" key={i}>
          {response}
        </p>
      ))}
    </div>
  )
}

export default Conversation