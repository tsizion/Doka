import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { auth } from "../../firebase/setup"; // Adjust path as needed
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";

const GoogleSignIn = ({ setFormData, setLoading, onSubmit }) => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      setFormData({
        firstName: user.displayName.split(" ")[0] || "",
        lastName: user.displayName.split(" ").slice(1).join(" ") || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
      });

      toast.success("Signed in with Google successfully!");
      onSubmit({
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

  return (
    <div className="mt-4">
      <GoogleLogin
        onSuccess={handleGoogleSignIn}
        onError={(error) => console.error("Google Login Failed:", error)}
        useOneTap
      />
    </div>
  );
};

export default GoogleSignIn;
