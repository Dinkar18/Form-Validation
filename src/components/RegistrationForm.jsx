import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "./FormField";
import PasswordField from "./PasswordField";
import PhoneField from "./PhoneField";
import CountryCitySelector from "./CountryCitySelector";

function RegistrationForm() {
  const navigate = useNavigate();
 const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  countryCode: "", // ✅ NEW
  phone: "",
  country: "",
  city: "",
  pan: "",
  aadhar: ""
});

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
  const newErrors = {};
  Object.entries(formData).forEach(([key, value]) => {
    if (!value.trim()) newErrors[key] = "This field is required";
  });
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const isFormValid = () => {
  return Object.values(formData).every((val) => val.trim() !== "");
};


const handleSubmit = (e) => {
  e.preventDefault();
  if (validate()) {
    navigate("/success", { state: formData });  // <-- correct
  }
};
  return (
    
    <div className=".container mt-4 main"   >
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {[
          ["First Name", "firstName"],
          ["Last Name", "lastName"],
          ["Username", "username"],
          ["Email", "email"],
          ["PAN No", "pan"],
          ["Aadhar No", "aadhar"]
        ].map(([label, name]) => (
          <FormField
            key={name}
            label={label}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            error={errors[name]}
          />
        ))}

        <PasswordField
          value={formData.password}
          onChange={handleChange}
          showPassword={showPassword}
          toggleShow={() => setShowPassword(prev => !prev)}
          error={errors.password}
        />

      <PhoneField
  value={{ countryCode: formData.countryCode, phone: formData.phone }}
  error={{ countryCode: errors.countryCode, phone: errors.phone }}
  onChange={handleChange}
/>


        <CountryCitySelector
          country={formData.country}
          city={formData.city}
          onChange={handleChange}
          errors={errors}
        />

       <button type="submit" className="btn btn-primary" disabled={!isFormValid()}>
  Submit
</button>

      </form>
    </div>
  );
}

export default RegistrationForm;
