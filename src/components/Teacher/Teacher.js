import React from 'react'
import { getCourseName } from '../Profile/utils/coursesName'
import './style.scss'

 const  Teacher = ({profile}) => {
  return (
    <div className="teacher">
      <div className="image">
        <img src={profile.image} alt=''/>
      </div>
    
      <div className="information">
      <hr />
        <div className='small'>ID: {profile.tid}</div>
      
        <div>
          <b>Full name:</b> {profile.full_name}
        </div>
       
        <div><b>Email:</b> {profile.email}</div>
        <div><b>Gender:</b> {profile.gender}</div>
        <div>
          <b>Teaching:</b>
          {
              profile.courses.map((curse, idx) => (
            <div key={idx}>&ensp;
              {idx + 1}.{getCourseName(curse)}
            </div>
          ))
          }
        </div>
      </div>
      </div>
  )
}
export default Teacher
