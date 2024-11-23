/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../../firebase/setup"; // Adjust path as needed

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required.";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone Number is required.";
    if (!formData.password.trim()) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    return newErrors;
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            hl: "en", // Explicitly set the language to English
          }
        );
      }

      const appVerifier = window.recaptchaVerifier;

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        `+${formData.phoneNumber}`,
        appVerifier
      );

      setVerificationId(confirmationResult.verificationId);
      setOtpSent(true);
      alert("OTP sent to your phone!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      setErrors({ phoneNumber: "Failed to send OTP. Try again." });
    } finally {
      setLoading(false);
    }
  };

  const verifyOtpAndSubmit = async (e) => {
    e.preventDefault();
    if (!otp.trim()) {
      setErrors({ otp: "Please enter the OTP." });
      return;
    }

    setLoading(true);

    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithCredential(auth, credential);
      alert("OTP verified successfully!");
      onSubmit(formData);
    } catch (error) {
      console.error("OTP Verification failed:", error);
      setErrors({ otp: "Invalid OTP. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">User Form</h2>
      <form onSubmit={otpSent ? verifyOtpAndSubmit : sendOtp}>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-600 font-medium mb-1"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            className="w-full border  rounded-lg p-3"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-600 font-medium mb-1"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            className="w-full border  rounded-lg p-3"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 font-medium mb-1"
          >
            Email (Optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full border  rounded-lg p-3"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-600 font-medium mb-1"
          >
            Phone Number
          </label>
          <PhoneInput
            country={"us"}
            value={formData.phoneNumber}
            onChange={(value) =>
              setFormData({ ...formData, phoneNumber: value })
            }
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 font-medium mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full border  rounded-lg p-3"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>
        {otpSent && (
          <div className="mb-4">
            <label
              htmlFor="otp"
              className="block text-gray-600 font-medium mb-1"
            >
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full border  rounded-lg p-3"
            />
            {errors.otp && <p className="text-red-500 text-sm">{errors.otp}</p>}
          </div>
        )}
        <div id="recaptcha-container"></div>
        <button
          type="submit"
          className={`w-full py-3 rounded-lg text-white ${
            loading ? "bg-gray-400" : "bg-indigo-500 hover:bg-indigo-600"
          }`}
          disabled={loading}
        >
          {otpSent ? "Verify OTP" : "Send OTP"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
