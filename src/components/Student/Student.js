import React from 'react';
import { getCourseName } from '../Profile/utils/coursesName';
import './style.scss';

const Student = ({ profile }) => {
  return (
    <div className='student'>
      <div className='image'>
        <img src={profile.image} alt=''  />
      </div>
      <div className='information'>
      <hr />
        <div className='small'>ID:{profile.sid}</div>
        <div>
          <b>Full name:</b> {profile.first_name} {profile.last_name}
        </div>
        <hr />
        <div><b>Email:</b> {profile.email}</div>
        <div><b>Gender:</b> {profile.gender}</div>
        <div><b>From:</b> {profile.country}</div>
        <div>
          <b>Study:</b>
          {profile.courses.map((curse, idx) => (
            <div key={idx}>&ensp;{idx + 1}.{getCourseName(curse)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Student;
