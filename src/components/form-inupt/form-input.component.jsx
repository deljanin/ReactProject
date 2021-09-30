import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...props }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...props} required />
    {label ? (
      <label
        className={`${props.value.leangt ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;