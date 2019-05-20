import React from "react";
import "./style.scss";

export default function Button({ label, onClick }) {
  return (
    // <button className="button" onClick={onClick}>
    <i className={`button fas ${label === '-'? 'fa-minus-circle' : 'fa-plus-circle'}`} onClick={onClick}></i>
    //  </button>
  );
}
