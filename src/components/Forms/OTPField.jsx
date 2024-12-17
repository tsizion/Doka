import React from "react";

const OTPField = ({ otp, setOtp, error }) => (
  <div>
    <label htmlFor="otp" className="block text-sm text-gray-600">
      Enter OTP
    </label>
    <input
      type="text"
      id="otp"
      value={otp}
      onChange={(e) => setOtp(e.target.value)}
      placeholder="Enter OTP"
      className="w-full border rounded-lg p-2 text-sm"
    />
    {error && <p className="text-red-500 text-xs">{error}</p>}
  </div>
);

export default OTPField;
