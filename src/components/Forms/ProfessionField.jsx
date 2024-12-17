import React from "react";

const ProfessionField = ({ value, onChange, error }) => (
  <div>
    <label htmlFor="profession" className="block text-sm text-gray-600">
      Profession
    </label>
    <input
      type="text"
      id="profession"
      name="profession"
      value={value}
      onChange={onChange}
      className="w-full border rounded-lg p-2 text-sm"
    />
    {error && <p className="text-red-500 text-xs">{error}</p>}
  </div>
);

export default ProfessionField;
