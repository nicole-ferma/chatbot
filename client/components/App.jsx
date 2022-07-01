import React from 'react'
import { useSelector } from 'react-redux'

import Home from './Home'
import Circles from './Circles'
import Conversation from './Conversation'
import SendNewMessage from './SendNewMessage'

function App() {  
      /* const dice = useSelector((state) => state.dice)
  return (
    <div className="container">{dice.rolled ? <Results /> : <Initial />}</div>
  ) */

  const choice = useSelector(state => state.menu.choice)
    console.log(choice)
  return (
      <>
        {choice ? <><Circles/><Conversation /><SendNewMessage /></>: <Home />}
      </>
  )
}

export default App
