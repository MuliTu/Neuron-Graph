import React from "react";
import './style.scss'
export default function Checkbox({ label, onChange, value }) {
  return (
    <div className="col">
      <p><b>{label}</b></p>
      <input className='input' onChange={onChange} type="checkbox" value={value} />
    </div>
  );
}
