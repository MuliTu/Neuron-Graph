import React from "react";

export default function Input({ label, value, onChange }) {
  return (
    <div className="col">
      <p>{label}</p>
      <input min={0} type={"number"} value={value} onChange={onChange} />
    </div>
  );
}
