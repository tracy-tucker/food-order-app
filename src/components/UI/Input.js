import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;

// ...props.input ensures that all key/value pairs in this input object are added as props to input
// Ex: type="text" would be added, the id will be added, etc.
// this is a convenient way to make this input highly configurable outsid the input comp
