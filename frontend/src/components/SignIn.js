import React from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <section>
      <br/>
      <div className='signin'>
        <h2>SignIn</h2>
        <form>
          <input type='text'  placeholder='User Name'/>
          <input type='password' placeholder='Password'/>
          <Link to='/jd'><button>SignIn</button></Link>
        </form>
      </div>
    </section>

  )
}

export default SignIn