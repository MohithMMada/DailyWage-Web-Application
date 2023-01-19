import React from 'react'
import '../Jobdetails/Jobdetails.css'
import { Link, useParams,useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'


function Jobdetails() {
  const {id}= useParams()
  let navigate = useNavigate()
  let [Jobs, setJobs] = useState('')

 useEffect(()=>{
  axios
    .get(`http://localhost:8000/user/${id}`)
    .then(res=>{
      setJobs(res.data)
    })
    .catch(err=> {console.log(err.data)})
  },[id])
  const job = Jobs  

 const onDeleteClick = (id)=>{
    axios
    .delete(`http://localhost:8000/user/${id}`)
    .then(res=>{console.log(res.data)})
    .catch(err=> {console.log(err.data)})
    navigate('/')
  }

  let details =<div>
                  <table>
                    <thead>
                      <th>Si.No</th>
                      <th>Topic</th>
                      <th>Details</th>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>User Name</td>
                        <td>{job.username}</td>
                      </tr>
                      <tr>
                        <th>2</th>
                        <td>Mobile Number</td>
                        <td>{job.phone}</td>
                      </tr>
                      <tr>
                        <th>3</th>
                        <td>Daily Wage</td>
                        <td>{job.wage}</td>
                      </tr> 
                      <tr>
                        <th>4</th>
                        <td>Gender</td>
                        <td>{job.gender}</td>
                      </tr> 
                      <tr>
                        <th>5</th>
                        <td>Skills</td>
                        <td>{job.skills}</td>
                      </tr> 
                      <tr>
                        <th>6</th>
                        <td>Age</td>
                        <td>{job.age}</td>
                      </tr> 
                    </tbody>
                  </table>
               </div>
  return (
    <section>
      <br/>
      <div className='table-button'>
            {details}
            <Link to={`/ej/${job._id}`}><button>Update</button></Link>
            <button type= 'button' onClick={()=>onDeleteClick(job._id)}>Delete</button>
      </div>
    </section>

  )
}

export default Jobdetails