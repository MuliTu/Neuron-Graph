import React from "react";
import ProfileRow from "../UI/ProfileRow/ProfileRow";
import Image from "../UI/Image/Image";
import ProfileArray from "../UI/ProfileArray/ProfileArray";
import "./style.scss";

const Teacher = ({ profile }) => {
  return (
    <div className="teacher">
      <Image path={profile.image} />
      <div className="information">
        <hr />
        <div className="small">ID:{profile.sid}</div>
        <ProfileRow labelName={"Full name"} data={profile.full_name} />
        <ProfileRow labelName={"Email"} data={profile.email} />
        <ProfileRow labelName={"Gender"} data={profile.gender} />
        <ProfileArray label={"Teaching"} array={profile.courses} />
      </div>
    </div>
  );
};
export default Teacher;
