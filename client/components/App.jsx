import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Circles from './Circles'
import Bot from './Bot'
// import Conversation from './Conversation'
// import SendNewMessage from './SendNewMessage'

import Chat from './Chat'
import Visitors from './Visitors'

function App() {  
  const choice = useSelector(state => state.menu.choice)

  return (
      // <>
      //   {choice ? <><div className='area'><Circles/></div><div className='context'><main><div className='container'><Conversation /><SendNewMessage /></div></main></div></>: <Home />}
      // </>
      <>
        <div className="area" >
          {/* {choice ? <Circles/> : <Bot />} */}
          <Bot />
        </div >
        <div className='context'>
          <main>
            {
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/visitors" element={<Visitors />} />         
              </Routes>
            }
          </main>
        </div>
      </>
  )
}

export default App
