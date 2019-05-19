import React from "react";
import ProfileRow from "../UI/ProfileRow/ProfileRow";
import Image from "../UI/Image/Image";
import ProfileArray from "../UI/ProfileArray/ProfileArray";
import "./style.scss";

const Teacher = ({ profile }) => {
  return (
    <div className="teacher">
      <div className="image_content_wrapper">
        <Image path={profile.image} />
        <div className="information">
          <div className="small">ID:{profile.tid}</div>
          <ProfileRow labelName={"Full name"} data={profile.full_name} />
          <ProfileRow labelName={"Email"} data={profile.email} />
          <ProfileRow labelName={"Gender"} data={profile.gender} />
          <ProfileArray label={"Teaching"} array={profile.courses} />
        </div>
      </div>
    </div>
  );
};
export default Teacher;
