import React from 'react'

import Conversation from './Conversation'
import SendNewMessage from './SendNewMessage'

import Nav from './Nav'

function Chat() {  
  return (
  <>
    <div>
      <Nav />
    </div>
    <div className='container'>
      <Conversation />
      <SendNewMessage />
    </div>
  </>
  )
}

export default Chat
