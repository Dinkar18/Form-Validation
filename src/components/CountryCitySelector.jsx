import React from "react";
import { countries } from "../data/countryCity";

function CountryCitySelector({ country, city, onChange, errors }) {
  const selectedCountry = countries.find(c => c.name === country);

  return (
    <div className="row mb-3">
      <div className="col">
        <label className="form-label">Country</label>
        <select
          className="form-select"
          name="country"
          value={country}
          onChange={onChange}
        >
          <option value="">Select Country</option>
          {countries.map(c => (
            <option key={c.name} value={c.name}>{c.name}</option>
          ))}
        </select>
        {errors.country && <div className="text-danger">{errors.country}</div>}
      </div>

      <div className="col">
        <label className="form-label">City</label>
        <select
          className="form-select"
          name="city"
          value={city}
          onChange={onChange}
        >
          <option value="">Select City</option>
          {(selectedCountry?.cities || []).map(cityName => (
            <option key={cityName} value={cityName}>{cityName}</option>
          ))}
        </select>
        {errors.city && <div className="text-danger">{errors.city}</div>}
      </div>
    </div>
  );
}

export default CountryCitySelector;
