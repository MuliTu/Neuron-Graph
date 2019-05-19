import React from "react";

export default function Checkbox({ label, onChange, value }) {
  return (
    <div className="col">
      <p><b>{label}</b></p>
      <input onChange={onChange} type="checkbox" value={value} />
    </div>
  );
}
