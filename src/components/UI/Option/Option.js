import React from "react";
import Button from "../Button/Button";

export default function Option({ label, onClickPlus, onClickMinus }) {
  return (
    <div className="col">
      <p><b>{label}</b></p>
      <Button label={"+"} onClick={onClickPlus} />
      <Button label={"-"} onClick={onClickMinus} />
    </div>
  );
}
