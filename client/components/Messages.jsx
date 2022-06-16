import React from 'react'

function Messages(props) {
  const { messages } = props
  return (
    <section>
      <ul>
        {messages.map((a, i) => (
          <li key={i}>
            user: {a.message}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Messages