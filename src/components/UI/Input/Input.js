import React from "react";

const Input = (props) => {
  return (
    <div style={{ display: "inline", marginRight: "5px" }}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
