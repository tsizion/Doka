import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInputField = ({ value, onChange, error }) => (
  <div>
    <label htmlFor="phoneNumber" className="block text-sm text-gray-600">
      Phone Number
    </label>
    <PhoneInput
      country={"us"}
      value={value}
      onChange={onChange}
      inputClass="w-full border rounded-lg text-sm"
    />
    {error && <p className="text-red-500 text-xs">{error}</p>}
  </div>
);

export default PhoneInputField;
