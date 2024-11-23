/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./styles.css"; // Importing the CSS file from the same folder

const ReferralForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    referrerPhone: "",
    studentName: "",
    studentEmail: "",
    studentPhone: "",
    studentAddress: "",
    needDescription: "",
    documents: [],
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, documents: files });
    setErrors({ ...errors, documents: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.referrerName.trim())
      newErrors.referrerName = "Your name is required.";
    if (!formData.referrerEmail.trim())
      newErrors.referrerEmail = "Your email is required.";
    if (!formData.referrerPhone.trim())
      newErrors.referrerPhone = "Your phone number is required.";
    if (!formData.studentName.trim())
      newErrors.studentName = "Student's name is required.";
    if (!formData.needDescription.trim())
      newErrors.needDescription = "Description of the need is required.";
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
      alert("Referral submitted successfully!");
      setLoading(false);
      if (onSubmit) onSubmit(formData);
    }, 1000);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Referral Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Referrer Details */}
        <div className="mb-4">
          <label
            htmlFor="referrerName"
            className="block text-gray-600 font-medium mb-1"
          >
            Your Name
          </label>
          <input
            type="text"
            id="referrerName"
            name="referrerName"
            value={formData.referrerName}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border  rounded-lg p-3"
          />
          {errors.referrerName && (
            <p className="text-red-500 text-sm">{errors.referrerName}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="referrerEmail"
            className="block text-gray-600 font-medium mb-1"
          >
            Your Email
          </label>
          <input
            type="email"
            id="referrerEmail"
            name="referrerEmail"
            value={formData.referrerEmail}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border  rounded-lg p-3"
          />
          {errors.referrerEmail && (
            <p className="text-red-500 text-sm">{errors.referrerEmail}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="referrerPhone"
            className="block text-gray-600 font-medium mb-1"
          >
            Your Phone
          </label>
          <input
            type="tel"
            id="referrerPhone"
            name="referrerPhone"
            value={formData.referrerPhone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full border  rounded-lg p-3"
          />
          {errors.referrerPhone && (
            <p className="text-red-500 text-sm">{errors.referrerPhone}</p>
          )}
        </div>

        {/* Student Details */}
        <div className="mb-4">
          <label
            htmlFor="studentName"
            className="block text-gray-600 font-medium mb-1"
          >
            {`Student 's Name`}
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Enter student's name"
            className="w-full border  rounded-lg p-3"
          />
          {errors.studentName && (
            <p className="text-red-500 text-sm">{errors.studentName}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="needDescription"
            className="block text-gray-600 font-medium mb-1"
          >
            Description of Need
          </label>
          <textarea
            id="needDescription"
            name="needDescription"
            value={formData.needDescription}
            onChange={handleChange}
            placeholder="Describe the student's need (max 1200 characters)"
            maxLength="1200"
            className="w-full border  rounded-lg p-3 overflow-y-scroll resize-none custom-scroll"
            style={{ height: "150px" }}
          />
          {errors.needDescription && (
            <p className="text-red-500 text-sm">{errors.needDescription}</p>
          )}
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label
            htmlFor="documents"
            className="block text-gray-600 font-medium mb-1"
          >
            Upload Documents (Optional)
          </label>
          <input
            type="file"
            id="documents"
            name="documents"
            multiple
            onChange={handleFileChange}
            className="w-full border  rounded-lg p-3"
          />
        </div>

        <button
          type="submit"
          className={`w-full py-3 rounded-lg text-white ${
            loading ? "bg-gray-400" : "bg-indigo-500 hover:bg-indigo-600"
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Referral"}
        </button>
      </form>
    </div>
  );
};

export default ReferralForm;
