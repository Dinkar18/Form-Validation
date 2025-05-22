import React from "react";

function PasswordField({ value, onChange, showPassword, toggleShow, error }) {
  return (
    <div className="mb-3">
      <label className="form-label">Password</label>
      <div className="input-group">
        <input
          type={showPassword ? "text" : "password"}
          className="form-control"
          name="password"
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={toggleShow}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
}

export default PasswordField;
