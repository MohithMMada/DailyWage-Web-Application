import React from 'react';
import Jobcard from '../Jobcard/Jobcard';
import Navbar from '../Navbar/Navbar';
import {useState, useEffect} from 'react';
import axios from 'axios';
import '../Home/Home.css'

function Home() {
  let [Jobs, setJobs] = useState('')
  console.log(Jobs)
  //axios call using useEffect to get the data
 useEffect(()=>{
  axios
    .get(`http://localhost:8000/user/`)
    .then(res=>{
      // console.log(res)
      setJobs(res.data)
      // console.log(setJobs)
    })
    .catch(err=> {console.log(err.data)})
  },[])
  const job = Jobs     //storing the data i.e in Jobs in the job variable
  // console.log(job)
  
  let joblist;             // creating an empty variable joblist
  if(!job){
    joblist = `no job entries`
  }else{
    joblist = job.map((job)=>{              
      return(
        <Jobcard                            //creating props and using them in Jobcard.js
          username={job.username}
          phone={job.phone}
          skills={job.skills}
          gender={job.gender}
          age={job.age}
          id ={job._id}
          wage ={job.wage}
        />
      )
    })
  }
  return (
    <div>
      <Navbar/>
      <div className='joblist'>
        {joblist}
      </div>
    </div>
  )
}

export default Home