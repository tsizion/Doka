/* eslint-disable no-undef */
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase/setup"; // Adjust path as needed

export const validateForm = (formData) => {
  const newErrors = {};
  if (!formData.firstName.trim())
    newErrors.firstName = "First Name is required.";
  if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required.";
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

export const sendOtp = async (
  phoneNumber,
  setErrors,
  setLoading,
  setOtpSent,
  setVerificationId
) => {
  setLoading(true);
  try {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        { hl: "en" }
      );
    }
    const appVerifier = window.recaptchaVerifier;
    auth.settings.appVerificationDisabledForTesting = true;

    const confirmationResult = await signInWithPhoneNumber(
      auth,
      `+${phoneNumber}`,
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

export const verifyOtpAndSubmit = async (
  e,
  otp,
  verificationId,
  setLoading,
  onSubmit,
  formData
) => {
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
