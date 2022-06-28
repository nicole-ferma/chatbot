import React, { useState } from 'react'

function SendNewMessage(props) {
  const [newMessage, setNewMessage] = useState('')

  function handleSubmit(evt) {
    evt.preventDefault()

    props.onAddMessage(newMessage)

    setNewMessage('')
    console.log('newMessage', newMessage)
  }

  function handleChange(evt) {
    setNewMessage( evt.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="message"
          id="message"
          value={newMessage}
          onChange={handleChange}
          placeholder="write new message"
        />
      </div>
      <button type="submit">send</button>
    </form>
  )
}

export default SendNewMessage