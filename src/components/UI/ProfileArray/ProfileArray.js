import React from "react";
import { getCourseName } from "../../../utils/helper/coursesName";
import './style.scss'

export default function ProfileArray({ label, array }) {
  return (
    <div>
      <b className='label'>{label}</b>
      {array.map((item, index) => (
        <div key={index} className='label'>
          &ensp;
          {index + 1}.{getCourseName(item)}
        </div>
      ))}
    </div>
  );
}
