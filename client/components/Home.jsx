import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { chooseChat } from '../actions/index.js'
import { createVisitor, personaliseReply } from '../apiClient.js'
function Home() {  
  const dispatch = useDispatch()

  const [name, setName] = useState('')

  function handleChange(evt) {
    setName(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    dispatch(chooseChat('chat'))
    createVisitor(name)
    personaliseReply(name)
  }

  return (
    <div className="context">
      <main>
        <form onSubmit={handleSubmit}>
            <label htmlFor="user">What is your name?</label>
            <input
              type="text"
              name="user"
              id="user"
              value={name}
              onChange={handleChange}
              placeholder="friend"
              required
            />
          <button type="submit"><Link to ={`/chat`}>Chat</Link></button>
        </form>
      </main>
    </div>
  )
}

export default Home
