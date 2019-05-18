import React from "react";
import { getCurseName } from "../Profile/utils/curssesName";
import "./style.scss";

const Student = ({ profile }) => {
  return (
    <div className="student">
      <div className="image">
        <img src={profile.image ? profile.image : ""} />
      </div>
      <div className="information">
        <div>ID:{profile.sid}</div>
        <div>
          Full name: {profile.first_name} {profile.last_name}
        </div>
        <hr />
        <div>Email: {profile.email}</div>
        <div>Gender: {profile.gender}</div>
        <div>From: {profile.country}</div>
        <div>
          Study:
          {profile.courses.map((curse, idx) => (
            <div key={idx}>
              {idx + 1}.{getCurseName(curse)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Student;
