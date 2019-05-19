import React from "react";
import "./style.scss";
import ProfileRow from "../UI/ProfileRow/ProfileRow";
import Image from '../UI/Image/Image'
import ProfileArray from '../UI/ProfileArray/ProfileArray'

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
        <ProfileArray label={'Studying'} array={profile.courses}/>

        </div>
    </div>
  );
};
export default Student;
