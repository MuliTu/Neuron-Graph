import React from "react";
import "./style.scss";

export default function Button({ label, onClick }) {
  return (
    <button className="button" onClick={onClick}>
     <div>{label}</div>
    </button>
  );
}
