import React, { useState, useEffect } from 'react'

import Conversation from './Conversation'
import SendNewMessage from './SendNewMessage'
import request from 'superagent'

const initialState = [{ message: '' }]

function App() {
  // user messages
  const [messages, setMessages] = useState(initialState)
  // bot responses
  const [responses, setResponses] = useState([{ response: '' }])

  function handleAddMessage(newMessage) {
    const newResponse = respondToMessage(newMessage)
    console.log('newResponse', newResponse)
    setMessages([...messages, newMessage])
    console.log('messages', messages)
    setResponses({
      ...responses, ...newResponse
    })
    console.log('responses', responses)
  } 

  function respondToMessage(newMessage) {
    const greeting = /h[ea]llo|hi|howdy/i
    if(greeting.test(newMessage.message)) {
      return [{ response: 'greetings, friend'}]
    }
    return ['nothing']
  }
  // experiment using fox api
  // const [image, setImage] = useState('')
  // useEffect(() => {
  //   request.get('https://randomfox.ca/floof/').then(response => {
  //     setImage(`"${response.body.image}"`)
  //   })
  // }, [])
  
  return (
    <>
      <div class="area" >
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
      <div class="context">
        <main>
          <Conversation messages={messages} responses={responses}/>
          <SendNewMessage onAddMessage={handleAddMessage} />
          {/* <image src={image} alt="a fox"></image> */}
          {/* {console.log(image)} */}
        </main>
      </div>
    </>
  )
}

export default App
