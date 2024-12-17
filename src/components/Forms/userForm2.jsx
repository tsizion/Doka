/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebase/setup"; // Adjust path as needed
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Logo from "../../assets/logo.png"; // Adjust path as needed
import { signInWithRedirect, getRedirectResult } from "firebase/auth";

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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone Number is required.";
    if (!formData.password.trim()) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (!formData.profession.trim())
      newErrors.profession = "Profession is required.";
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

      // For development, disable app verification
      auth.settings.appVerificationDisabledForTesting = true;

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        `+${formData.phoneNumber}`,
        appVerifier
      );

      setVerificationId(confirmationResult.verificationId);
      setOtpSent(true);
      toast.success("OTP sent to your phone!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      setErrors({ phoneNumber: "Failed to send OTP. Try again." });
      toast.error("Failed to send OTP. Please try again.");
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
      toast.success("OTP verified successfully!");
      onSubmit(formData);
    } catch (error) {
      console.error("OTP Verification failed:", error);
      toast.error("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn2 = async (credentialResponse) => {
    console.log(credentialResponse);
    const provider = new GoogleAuthProvider();
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      setFormData({
        ...formData,
        firstName: user.displayName.split(" ")[0] || "",
        lastName: user.displayName.split(" ").slice(1).join(" ") || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
      });

      toast.success("Signed in with Google successfully!");
      onSubmit({
        ...formData,
        firstName: user.displayName.split(" ")[0] || "",
        lastName: user.displayName.split(" ").slice(1).join(" ") || "",
        email: user.email || "",
      });
    } catch (error) {
      console.error("Google Sign-In failed:", error);
      toast.error("Google Sign-In failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async (credentialResponse) => {
    console.log(credentialResponse); // This logs the response from Google OAuth
    const provider = new GoogleAuthProvider();
    setLoading(true);

    try {
      // Start the sign-in process using redirect flow
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("Google Sign-In failed:", error);
      toast.error("Google Sign-In failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <GoogleOAuthProvider clientId="19393764387-ugj97uf2hc7k02mv57bko1ga1fngd90r.apps.googleusercontent.com">
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
          {/* Logo Section */}
          <div className="flex items-center justify-center mb-4">
            <img src={Logo} alt="Logo" className="h-12" />
          </div>

          <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">
            Create Account
          </h2>

          <form
            onSubmit={otpSent ? verifyOtpAndSubmit : sendOtp}
            className="space-y-4"
          >
            {/* Input Fields */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 text-sm"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 text-sm"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs">{errors.lastName}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm text-gray-600"
              >
                Phone Number
              </label>
              <PhoneInput
                country={"us"}
                value={formData.phoneNumber}
                onChange={(value) =>
                  setFormData({ ...formData, phoneNumber: value })
                }
                inputClass="w-full border rounded-lg text-sm"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs">{errors.phoneNumber}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 text-sm"
              />
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="profession"
                className="block text-sm text-gray-600"
              >
                Profession
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 text-sm"
              />
              {errors.profession && (
                <p className="text-red-500 text-xs">{errors.profession}</p>
              )}
            </div>

            {/* OTP Section */}
            {otpSent && (
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
                {errors.otp && (
                  <p className="text-red-500 text-xs">{errors.otp}</p>
                )}
              </div>
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

          {/* Google Sign-In */}
          <div className="mt-4">
            <GoogleLogin
              onSuccess={handleGoogleSignIn}
              onError={(error) => console.error("Google Login Failed:", error)}
              useOneTap
            />
          </div>
        </div>

        <ToastContainer />
      </div>
    </GoogleOAuthProvider>
  );
};

export default UserForm;
