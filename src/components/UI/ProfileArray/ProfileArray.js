import React from "react";
import { getCourseName } from "../../../utils/helper/coursesName";
export default function ProfileArray({ label, array }) {
  return (
    <div>
      <b>{label}</b>
      {array.map((item, index) => (
        <div key={index}>
          &ensp;
          {index + 1}.{getCourseName(item)}
        </div>
      ))}
    </div>
  );
}
