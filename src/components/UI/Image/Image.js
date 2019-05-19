import React from "react";
import './style.scss'

export default function Image({ path }) {
  return <img className="image" src={path} alt="" />;
}
