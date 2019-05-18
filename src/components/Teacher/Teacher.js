import React from 'react'
import { getCurseName } from '../Profile/utils/curssesName'
import './style.scss'

 const  Teacher = ({profile}) => {
  return (
    <div className="teacher">
      <div className="image">
        <img src={profile.image} />
      </div>
      <div className="information">
        <div>ID: {profile.tid}</div>
        <div>
          Full name: {profile.full_name}
        </div>
        <hr />
        <div>Email: {profile.email}</div>
        <div>Gender: {profile.gender}</div>
        <div>From: {profile.country}</div>
        <div>
          Teaching:
          {
              profile.courses.map((curse, idx) => (
            <div key={idx}>
              {idx + 1}.{getCurseName(curse)}
            </div>
          ))
          }
        </div>
      </div>
      </div>
  )
}
export default Teacher
