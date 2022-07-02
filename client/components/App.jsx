import React from 'react'
import { useSelector } from 'react-redux'

import Home from './Home'
import Circles from './Circles'
import Conversation from './Conversation'
import SendNewMessage from './SendNewMessage'

function App() {  
  const choice = useSelector(state => state.menu.choice)

  return (
      <>
        {choice ? <><div className='area'><Circles/></div><div className='context'><main><div className='container'><Conversation /><SendNewMessage /></div></main></div></>: <Home />}
      </>
  )
}

export default App
