import React from "react";
import Image from "../UI/Image/Image";
import ProfileArray from "../UI/ProfileArray/ProfileArray";
import "../../styles/card.scss";

const Teacher = ({ profile }) => {
  return (
    <div className="card teacher">
      <div className="image-content-wrapper">
        <Image path={profile.image} />
        <div className="information">
            <b>{profile.full_name}</b>
            <div className="small_font">ID:{profile.tid}</div>
            <div className='small_font'>{profile.email}</div>
            <div className='small_font divider'>{profile.type} | {profile.gender}</div>
          <ProfileArray label={"Teaching"} array={profile.courses} />
        </div>
      </div>
    </div>
  );
};
export default Teacher;
