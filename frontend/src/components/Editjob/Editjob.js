import React from 'react'
import '../Editjob/Editjob.css'
import {useParams,useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form';
import axios from 'axios'

function Editjob() {
  const {id}= useParams()       //it's used to get the value of the id from which the details are updated
  // console.log(id)
  const navigate = useNavigate()
  const {register, handleSubmit,reset} = useForm()
  const onFormUpdate = data => { 
    axios
    .put(`http://localhost:8000/user/${id}`,data)
    .then(res=> {console.log(res.data)})
    .catch(err=> {console.log(err.data)})
     reset();  
     navigate('/') 
  }
  
  return (
    <section>
    <br/>
    <div className='editjob'>
         <h2>Update Records</h2>
         <form onSubmit={handleSubmit(onFormUpdate)}>
          <input type='text'  placeholder='User Name'  name='username'{...register('username')}/>
          <input type='tel' placeholder='Mobile Number' pattern='[0-9]{10}' name='phone'{...register('phone')}/>
          <input type='number' placeholder='Daily Wage' name='wage'{...register('wage')}/>
          <select name='gender'{...register('gender')}>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='others'>Others</option>
          </select>
          <input type='text' placeholder='Skills' name='skills'{...register('skills')}/>
          <input type='number' placeholder='Age' name='age'{...register('age')}/>
          <button type='submit' value='submit'>Update</button>
         </form> 
    </div>
  </section>
)
}

export default Editjob