import React, { useState } from 'react'

import { createUser } from '../apiClient.js'

function Form() {
  const [name, setName] = useState('')

  function handleChange(evt) {
    setName( evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    createUser(name)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user">What is your name?</label>
          <input
            type="text"
            name="user"
            id="user"
            value={name}
            onChange={handleChange}
            placeholder="friend"
          />
        </div>
        <button type="submit">send</button>
      </form>
    </>
  )
}

export default Form

