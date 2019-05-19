import React from "react";
import { getCourseName } from "../Profile/utils/coursesName";
import "./style.scss";
import ProfileRow from "../ProfileRow/ProfileRow";
import Image from '../Image/Image'

const Student = ({ profile }) => {
  return (
    <div className="student">
      <Image path={profile.image}/>
      <div className="information">
        <hr />
        <div className="small">ID:{profile.sid}</div>
        <ProfileRow labelName={'Full name'} data={`${profile.first_name} ${profile.last_name}`} />
        <ProfileRow labelName={'Email'} data={profile.email} />
        <ProfileRow labelName={'Gender'} data={profile.gender} />
        <ProfileRow labelName={'From'} data={profile.country} />
          <b>Study:</b>
          {profile.courses.map((curse, idx) => (
            <div key={idx}>
              &ensp;{idx + 1}.{getCourseName(curse)}
            </div>
          ))}
        </div>
    </div>
  );
};
export default Student;
