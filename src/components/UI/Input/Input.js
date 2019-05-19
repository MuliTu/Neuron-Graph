import React from "react";
import './style.scss'
export default function Input({ label, value, onChange }) {
  return (
    <div className="col">
      <p><b>{label}</b></p>
      <input min={0} type={"number"} value={value} onChange={onChange} />
    </div>
  );
}
