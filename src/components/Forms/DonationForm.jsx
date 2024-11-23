/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./styles.css"; // Importing the CSS file from the same folder

const DonorForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    isAnonymous: false,
    status: "Active",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required.";
    if (!formData.isAnonymous && !formData.fullName.trim())
      newErrors.fullName = "Full name is required.";
    if (!formData.isAnonymous && !formData.email.trim())
      newErrors.email = "Email is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      alert("Donor information submitted successfully!");
      setLoading(false);
      if (onSubmit) onSubmit(formData);
    }, 1000);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Donor Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Donor Details */}
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-600 font-medium mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full border rounded-lg p-3"
            disabled={formData.isAnonymous}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 font-medium mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full border rounded-lg p-3"
            disabled={formData.isAnonymous}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-600 font-medium mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="w-full border rounded-lg p-3"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
          )}
        </div>

        {/* Anonymous Option */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="isAnonymous"
            name="isAnonymous"
            checked={formData.isAnonymous}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="isAnonymous" className="text-gray-600 font-medium">
            Stay Anonymous
          </label>
        </div>

        {/* Status */}
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-gray-600 font-medium mb-1"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <button
          type="submit"
          className={`w-full py-3 rounded-lg text-white ${
            loading ? "bg-gray-400" : "bg-indigo-500 hover:bg-indigo-600"
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Donor"}
        </button>
      </form>
    </div>
  );
};

export default DonorForm;
