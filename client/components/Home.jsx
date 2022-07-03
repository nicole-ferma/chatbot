import React from 'react'
import { useDispatch } from 'react-redux'

import Bot from './Bot'

import { chooseChat } from '../actions/index.js'

function Home() {  
  const dispatch = useDispatch()

  function handleClick(event) {
    event.preventDefault()
    dispatch(chooseChat('chat'))
  }

  return (
    <>
      <div className="area" >
        <Bot />
      </div >
      <div className="context">
        <main>
          <button onClick={handleClick}>Chat</button>
        </main>
      </div>
    </>
  )
}

export default Home
