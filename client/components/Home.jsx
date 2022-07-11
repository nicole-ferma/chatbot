import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import Bot from './Bot'

import { chooseChat } from '../actions/index.js'
import { createUser, personaliseReply } from '../apiClient.js'
function Home() {  
  const dispatch = useDispatch()

  const [name, setName] = useState('')

  function handleChange(evt) {
    setName( evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    dispatch(chooseChat('chat'))
    // adds user name into db
    createUser(name)
    personaliseReply(name)
  }

  return (
    <>
      <div className="area" >
        <Bot />
      </div >
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
            <button type="submit">Chat</button>
          </form>
        </main>
      </div>
    </>
  )
}

export default Home
