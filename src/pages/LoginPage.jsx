import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/google-icon.svg"; // Adjust the path as needed
import Logo from "../assets/logo.png"; // Adjust the path as needed
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const [email, setEmail] = useState(""); // state for email input
  const [password, setPassword] = useState(""); // state for password input

  // Handle input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGoogleLogin = (response) => {
    // Handle Google login success here (response contains the credential)
    console.log(response);
  };

  return (
    <GoogleOAuthProvider clientId="19393764387-ugj97uf2hc7k02mv57bko1ga1fngd90r.apps.googleusercontent.com">
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="w-3/4 md:w-2/3 lg:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden p-6">
          {/* Logo Section */}
          <div className="flex items-center justify-center mb-6">
            <img
              src={Logo} // Replace with the actual path to your logo
              alt="Logo"
              className="h-16"
            />
          </div>

          <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">
            CrowdFunding For Ethiopian Students
          </h1>

          {/* Login Form */}
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Email or Phone
              </label>
              <input
                type="text"
                id="email"
                value={email} // bind value to the state
                onChange={handleEmailChange} // handle change
                placeholder="Enter email or phone"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#119101] font-extralight"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password} // bind value to the state
                onChange={handlePasswordChange} // handle change
                placeholder="Enter password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#119101] font-extralight"
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-[#00df9a] text-white font-semibold rounded-md hover:bg-[#30b651] transition-all"
            >
              Login
            </button>
          </form>

          {/* Link to Signup */}
          <div className="flex items-center justify-center mt-4">
            <h1 className="pr-2 text-sm">{`Don't have an account?`}</h1>
            <Link
              to="/signup"
              className="text-blue-500 text-sm hover:underline"
            >
              Create one
            </Link>
          </div>

          {/* Google Login Button */}
          <div className="mt-6">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={(error) => console.log(error)}
              useOneTap
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
