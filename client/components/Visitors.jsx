import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getVisitors } from '../apiClient.js'

function Visitors() {
const [visitors, setVisitors] = useState([])

useEffect(() => {
  getVisitors()
    .then((res) => setVisitors(res))
    .catch((err) => {
      console.error(err.message)
    })
}, [])

  return (
    <>
      <div className="container v">
        <h1>Log Book</h1>
        <div className="messages">
          <ul>
            {visitors && visitors.map((visitor) => {
              return <li key={visitor.id}>{visitor.name} </li>
            })}
          </ul>
        </div>
      </div>
      <div>
        <Link to={`/`}><button>Home</button></Link>
      </div>
    </>
  )
}

export default Visitors