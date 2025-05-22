import React from "react";

function FormField({ label, name, value, onChange, error }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type="text"
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
}

export default FormField;
