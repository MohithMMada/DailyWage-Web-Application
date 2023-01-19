import React from 'react';
import '../Register/Register.css';
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form';
import axios from 'axios';
 
function Register() {
  let navigate = useNavigate()
  const {register, handleSubmit,reset} = useForm()
  const onFormSubmit = data => {
    axios
    .post('http://localhost:8000/user',data)
    .then(res=> {console.log(res.data)})
    .catch(err=> {console.log(err.data)})
     reset();      //reset the form
     navigate('/')
     
  }
  return (
    <section>
      <br/>
      <div className='register'>
           <h2>Register</h2>
           <span>Register and start working</span>
           <form onSubmit={handleSubmit(onFormSubmit)}>
            <input type='text'  placeholder='User Name' name='username'{...register('username')}/>
            <input type='tel' placeholder='Mobile Number' pattern='[0-9]{10}' name='phone'{...register('phone')}/>
            <input type='number' placeholder='Daily Wage' name='wage'{...register('wage')}/>
            <select name='gender'{...register('gender')}> 
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='others'>Others</option>
            </select>
            <input type='text' placeholder='Skills' name='skills'{...register('skills')}/>
            <input type='number' placeholder='Age' name='age'{...register('age')}/>
            {/* <input type='password' placeholder='Password' name='password'{...register('password')}/> */}
            <button type='submit' value='submit'>Register</button>
           </form> 
      </div>
    </section>
  )
}

export default Register