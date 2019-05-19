import React from "react";
import "./style.scss";
export default function MenuButton({ onClick, isClicked }) {
  return (
    <div className="button_wrapper" onClick={onClick}>
      <div className={isClicked ? "line_x1" : "line"} />
      <div className={isClicked ? "line_x2" : "line"} />
      <div className={isClicked ? "line_x3" : "line"} />
    </div>
  );
}
