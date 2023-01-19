import React from 'react'
import '../Jobcard/Jobcard.css'
import { Link} from 'react-router-dom'

function Jobcard(props) {
   return (
    <div>
      <section className="jobc-section">
        <div className='jobc-div'>
          <h3>Name: {props.username}</h3>
          <h4>Phone: {props.phone}</h4>
          <p>Skills: {props.skills}</p>
          <h4>Gender: {props.gender}</h4>
          <h4>Age: {props.age}</h4>
          <Link to={`/jd/${props.id}`}><button>Edit Details</button></Link>
        </div>
      </section>
    </div>
  )
}
 
export default Jobcard
