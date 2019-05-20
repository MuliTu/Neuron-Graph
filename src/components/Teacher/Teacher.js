import React from "react";
import ProfileRow from "../UI/ProfileRow/ProfileRow";
import Image from "../UI/Image/Image";
import ProfileArray from "../UI/ProfileArray/ProfileArray";
import "./style.scss";

const Teacher = ({ profile }) => {
  return (
    <div className="teacher">
      <div className="image-content-wrapper">
        <Image path={profile.image} />
        <div className="information">
        <div className="small">ID:{profile.tid}</div>
            <b>{profile.full_name}</b>
            <div className='small_font'>{profile.email}</div>
            <div className='small_font divider'>{profile.type} | {profile.gender}</div>
          <ProfileArray label={"Teaching"} array={profile.courses} />
        </div>
      </div>
    </div>
  );
};
export default Teacher;
