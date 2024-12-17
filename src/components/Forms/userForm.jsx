/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Logo from "../../assets/logo.png"; // Adjust path as needed
import { ToastContainer } from "react-toastify";
import PhoneInputField from "./PhoneInputField";
import InputField from "./InputField";
import OTPField from "./OTPField";
import ProfessionField from "./PhoneInputField";
import GoogleSignIn from "./GoogleSignIn";
import { validateForm, sendOtp, verifyOtpAndSubmit } from "./formUtils";

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    profession: "",
    status: "Active",
  });
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [verificationId, setVerificationId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleOtp = async (e) => {
    e.preventDefault();
    if (otpSent) {
      await verifyOtpAndSubmit(
        e,
        otp,
        verificationId,
        setLoading,
        onSubmit,
        formData
      );
    } else {
      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      await sendOtp(
        formData.phoneNumber,
        setErrors,
        setLoading,
        setOtpSent,
        setVerificationId
      );
    }
  };

  return (
    <GoogleOAuthProvider clientId="19393764387-ugj97uf2hc7k02mv57bko1ga1fngd90r.apps.googleusercontent.com">
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
          <div className="flex items-center justify-center mb-4">
            <img src={Logo} alt="Logo" className="h-12" />
          </div>
          <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">
            Create Account
          </h2>
          <form onSubmit={handleOtp} className="space-y-4">
            <InputField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <InputField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
            <InputField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <PhoneInputField
              value={formData.phoneNumber}
              onChange={(value) =>
                setFormData({ ...formData, phoneNumber: value })
              }
              error={errors.phoneNumber}
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
            <ProfessionField
              value={formData.profession}
              onChange={handleChange}
              error={errors.profession}
            />
            {otpSent && (
              <OTPField otp={otp} setOtp={setOtp} error={errors.otp} />
            )}
            <div id="recaptcha-container"></div>
            <button
              type="submit"
              className={`w-full py-2 rounded-lg text-white text-sm ${
                loading ? "bg-gray-400" : "bg-indigo-500 hover:bg-indigo-600"
              }`}
              disabled={loading}
            >
              {otpSent ? "Verify OTP" : "Send OTP"}
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
          <GoogleSignIn
            setFormData={setFormData}
            setLoading={setLoading}
            onSubmit={onSubmit}
          />
        </div>
        <ToastContainer />
      </div>
    </GoogleOAuthProvider>
  );
};

export default UserForm;
