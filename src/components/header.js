import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dingtea'>Ding Tea</Link></li>
        <li><Link to='/teatop'>TeaTop</Link></li>
        <li><Link to='/bobaguys'>BobaGuys</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
