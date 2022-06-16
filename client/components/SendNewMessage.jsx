import React, { useState } from 'react'

function SendNewMessage(props) {
  const [newMessage, setNewMessage] = useState({
    message: '',
  })

  function handleSubmit(evt) {
    evt.preventDefault()

    props.onAddMessage(newMessage)

    setNewMessage({
      message: '',
    })
  }

  function handleChange(evt) {
    setNewMessage({
      ...newMessage,
      [evt.target.name]: evt.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Message: </label>
        <input
          type="text"
          name="message"
          id="message"
          value={newMessage.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Send</button>
    </form>
  )
}

export default SendNewMessage