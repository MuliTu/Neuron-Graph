import React from "react";
import Button from "../Button/Button";

export default function Option({ label, onClickPlus, onClickMinus }) {
  return (
    <div className="col">
      <p>{label}</p>
      <Button label={"+"} onClick={onClickPlus} />
      <Button label={"-"} onClick={onClickMinus} />
    </div>
  );
}
