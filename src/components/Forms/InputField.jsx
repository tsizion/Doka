import React from "react";

const InputField = ({ label, name, value, onChange, error, type = "text" }) => (
  <div>
    <label htmlFor={name} className="block text-sm text-gray-600">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border rounded-lg p-2 text-sm"
    />
    {error && <p className="text-red-500 text-xs">{error}</p>}
  </div>
);

export default InputField;
