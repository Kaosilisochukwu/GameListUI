import React from "react";

const Input = ({ placeholder, label, handleChange, type, value }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        placeholder={placeholder}
        className="input-field"
        onChange={handleChange}
        type={type}
        value={value}
      />
    </div>
  );
};

export default Input;
