import React from "react";
import "./style.scss";
import Image from "../UI/Image/Image";
import ProfileArray from "../UI/ProfileArray/ProfileArray";

const Student = ({ profile }) => {
  return (
    <div className="student">
      <div className="image-content-wrapper">
        <Image path={profile.image} />
        <div className="information">
          <div className="small">ID:{profile.sid}</div>
            <b>{`${profile.first_name} ${profile.last_name}`}</b>
            <div className='small_font'>{profile.email}</div>
            <div className='small_font divider'>{profile.type} | {profile.country} | {profile.gender}</div>
          <ProfileArray label={"Studying"} array={profile.courses} />
        </div>
      </div>
    </div>
  );
};
export default Student;
