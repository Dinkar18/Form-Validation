import React from "react";

function PhoneField({ value, error, onChange }) {
  return (
    <div className="mb-3 row">
      <div className="col-4">
        <label className="form-label">Country Code</label>
        <input
          type="text"
          className="form-control"
          name="countryCode"
          value={value.countryCode}
          onChange={onChange}
        />
        {error.countryCode && <div className="text-danger">{error.countryCode}</div>}
      </div>

      <div className="col-8">
        <label className="form-label">Phone Number</label>
        <input
          type="text"
          className="form-control"
          name="phone"
          value={value.phone}
          onChange={onChange}
        />
        {error.phone && <div className="text-danger">{error.phone}</div>}
      </div>
    </div>
  );
}

export default PhoneField;
