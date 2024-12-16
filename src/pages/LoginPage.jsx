import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/google-icon.svg"; // Adjust the path as needed
import Logo from "../assets/logo.png"; // Adjust the path as needed

const images = [
  "https://cdn.pixabay.com/photo/2022/06/28/10/04/graduation-7289345_1280.png",
  "https://cdn.pixabay.com/photo/2023/11/05/08/01/charity-8366471_1280.png",
  "https://cdn.pixabay.com/photo/2024/05/01/03/27/hands-8731277_1280.png",
];

const LoginPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [email, setEmail] = useState(""); // state for email input
  const [password, setPassword] = useState(""); // state for password input

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Handle input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-3/4 md:w-2/3 lg:w-3/4 bg-gray-600-300 shadow-lg rounded-lg overflow-hidden">
        {/* Top section */}
        <div className="flex">
          {/* Image Animation Section */}
          <div className="w-1/2 p-4">
            <div className="flex items-center mb-6">
              <img
                src={Logo} // Replace with the actual path to your logo
                alt="Logo"
                className="h-20"
              />
              <h1 className="ml-4 text-2xl font-semibold text-gray-800">
                CrowdFunding For Ethiopian Students
              </h1>
            </div>

            <div className="h-72 w-full bg-black relative border-red-800 rounded-xl lg:block hidden">
              {/* Image with object-fit */}
              <img
                src={images[currentImage]}
                alt="Slide"
                className="object-cover h-full w-full absolute top-0 left-0 rounded-xl"
              />
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-10 rounded-xl"></div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-1/2 p-4 flex flex-col justify-center">
            <h5 className="text-lg font-semibold text-gray-800 mb-3">Login</h5>
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
              <div className="mb-4">
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

            <div className="flex items-center mt-4">
              <h1 className="pr-2 text-sm">{`Don't have an account?`}</h1>
              <Link
                to="/signup"
                className="text-blue-500 text-sm hover:underline"
              >
                Create one
              </Link>
            </div>

            <button className="flex items-center justify-center bg-[#0e5d44] text-white p-3 rounded-full hover:bg-red-600 mt-4 w-full">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <img
                  src={GoogleIcon}
                  alt="Google"
                  className="w-4 h-4 object-contain"
                />
              </div>
              <span className="ml-2">Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
