import React, { useState, useEffect } from 'react'

import Circles from './Circles'
import Conversation from './Conversation'
import SendNewMessage from './SendNewMessage'

function App() {  
  return (
    <>
      <div className="area" >
        <Circles />
      </div >
      <div className="context">
        <main>
          <Conversation />
          <SendNewMessage />
        </main>
      </div>
    </>
  )
}

export default App
