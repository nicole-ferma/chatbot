import React from 'react'

function Chat() {
  return (
    <>
      <div className="input">
        <input type="text" id='input' placeholder='Enter your message'/>
      </div>
      <button>
        Send
      </button>
    </>
  )
}

export default Chat