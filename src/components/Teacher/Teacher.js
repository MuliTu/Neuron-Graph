import React from 'react'
import { getCourseName } from '../Profile/utils/coursesName'
import ProfileRow from '../ProfileRow/ProfileRow'
import Image from '../Image/Image'
import './style.scss'

 const  Teacher = ({profile}) => {
  return (
    <div className="teacher">
      <Image path={profile.image}/>
      <div className="information">
        <hr />
        <div className="small">ID:{profile.sid}</div>
        <ProfileRow labelName={'Full name'} data={profile.full_name} />
        <ProfileRow labelName={'Email'} data={profile.email} />
        <ProfileRow labelName={'Gender'} data={profile.gender} />
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
