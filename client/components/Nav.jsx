import React from 'react'

import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <NavLink to="/"><button>Home</button></NavLink>
      <NavLink to="/visitors"><button>Visitors</button></NavLink>
    </nav>
  )
}
