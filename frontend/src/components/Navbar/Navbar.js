import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
      <p className='nav-title'>DailyWage</p>
      <Link to='/abt'>About</Link>
      <Link to='cont'>Contact</Link>
      <span>
        <Link to='/reg'><button>Register</button></Link>
        {/* <Link to='/signin'><button>SignIn</button></Link> */}
      </span>
    </nav>
  )
}

export default Navbar