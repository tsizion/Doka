/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import "./styles.css"; // Importing the CSS file from the same folder

const ReferralForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentEmail: "",
    studentPhone: "",
    studentAddress: "",
    needDescription: "",
    studentGuardianPhone: "", // Added guardian phone
    documents: [], // Keeping the documents field optional
    hasDisability: "No", // Changed to Yes/No option
    disabilityDetails: "",
    hasFamilySupport: false, // Default to No (false)
    familyDetails: "",
    educationLevel: "High School", // Default to high school
    grade: "",
    institution: "",
    universityYear: "",
    department: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Reset errors when form data changes
    setErrors({});
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, documents: files });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate required fields
    if (!formData.studentName.trim())
      newErrors.studentName = "Student's name is required.";
    if (!formData.needDescription.trim())
      newErrors.needDescription = "Description of the need is required.";
    if (!formData.studentPhone.trim())
      newErrors.studentPhone = "Student's phone number is required.";
    if (formData.educationLevel === "High School" && !formData.grade.trim())
      newErrors.grade = "Grade is required for high school students.";
    if (
      formData.educationLevel === "University" &&
      !formData.institution.trim()
    )
      newErrors.institution =
        "Institution name is required for university students.";
    if (
      formData.educationLevel === "University" &&
      !formData.universityYear.trim()
    )
      newErrors.universityYear =
        "University year is required for university students.";
    if (formData.educationLevel === "University" && !formData.department.trim())
      newErrors.department = "Department is required for university students.";

    // Conditional validation for disability
    if (formData.hasDisability === "Yes" && !formData.disabilityDetails.trim())
      newErrors.disabilityDetails = "Disability details are required.";

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
        {/* Student Details */}
        <div className="mb-4">
          <label
            htmlFor="studentName"
            className="block text-gray-600 font-medium mb-1"
          >
            {` Student's Name`}
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Enter student's name"
            className="w-full border rounded-lg p-3"
          />
          {errors.studentName && (
            <p className="text-red-500 text-sm">{errors.studentName}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="studentEmail"
            className="block text-gray-600 font-medium mb-1"
          >
            {`Student's Email`} (Optional)
          </label>
          <input
            type="email"
            id="studentEmail"
            name="studentEmail"
            value={formData.studentEmail}
            onChange={handleChange}
            placeholder="Enter student's email"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="studentPhone"
            className="block text-gray-600 font-medium mb-1"
          >
            {` Student's Phone`}
          </label>
          <input
            type="tel"
            id="studentPhone"
            name="studentPhone"
            value={formData.studentPhone}
            onChange={handleChange}
            placeholder="Enter student's phone number"
            className="w-full border rounded-lg p-3"
          />
          {errors.studentPhone && (
            <p className="text-red-500 text-sm">{errors.studentPhone}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="studentGuardianPhone"
            className="block text-gray-600 font-medium mb-1"
          >
            {` Student's Guardian Phone `}(Optional)
          </label>
          <input
            type="tel"
            id="studentGuardianPhone"
            name="studentGuardianPhone"
            value={formData.studentGuardianPhone}
            onChange={handleChange}
            placeholder="Enter student's guardian phone number"
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Education Level */}
        <div className="mb-4">
          <label
            htmlFor="educationLevel"
            className="block text-gray-600 font-medium mb-1"
          >
            Education Level
          </label>
          <select
            id="educationLevel"
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="High School">High School</option>
            <option value="University">University</option>
          </select>
        </div>

        {/* Conditional Fields */}
        {formData.educationLevel === "High School" && (
          <div className="mb-4">
            <label
              htmlFor="grade"
              className="block text-gray-600 font-medium mb-1"
            >
              Grade
            </label>
            <input
              type="text"
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              placeholder="Enter grade"
              className="w-full border rounded-lg p-3"
            />
            {errors.grade && (
              <p className="text-red-500 text-sm">{errors.grade}</p>
            )}
          </div>
        )}

        {formData.educationLevel === "University" && (
          <>
            <div className="mb-4">
              <label
                htmlFor="institution"
                className="block text-gray-600 font-medium mb-1"
              >
                Institution
              </label>
              <input
                type="text"
                id="institution"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                placeholder="Enter institution"
                className="w-full border rounded-lg p-3"
              />
              {errors.institution && (
                <p className="text-red-500 text-sm">{errors.institution}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="universityYear"
                className="block text-gray-600 font-medium mb-1"
              >
                University Year
              </label>
              <input
                type="text"
                id="universityYear"
                name="universityYear"
                value={formData.universityYear}
                onChange={handleChange}
                placeholder="Enter university year"
                className="w-full border rounded-lg p-3"
              />
              {errors.universityYear && (
                <p className="text-red-500 text-sm">{errors.universityYear}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="department"
                className="block text-gray-600 font-medium mb-1"
              >
                Department
              </label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Enter department"
                className="w-full border rounded-lg p-3"
              />
              {errors.department && (
                <p className="text-red-500 text-sm">{errors.department}</p>
              )}
            </div>
          </>
        )}

        {/* Disability Information */}
        <div className="mb-4">
          <label
            htmlFor="hasDisability"
            className="block text-gray-600 font-medium mb-1"
          >
            Does the student have a disability?
          </label>
          <select
            id="hasDisability"
            name="hasDisability"
            value={formData.hasDisability}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        {formData.hasDisability === "Yes" && (
          <div className="mb-4">
            <label
              htmlFor="disabilityDetails"
              className="block text-gray-600 font-medium mb-1"
            >
              Disability Details
            </label>
            <input
              type="text"
              id="disabilityDetails"
              name="disabilityDetails"
              value={formData.disabilityDetails}
              onChange={handleChange}
              placeholder="Enter disability details"
              className="w-full border rounded-lg p-3"
            />
            {errors.disabilityDetails && (
              <p className="text-red-500 text-sm">{errors.disabilityDetails}</p>
            )}
          </div>
        )}

        {/* Family Support */}
        <div className="mb-4">
          <label
            htmlFor="hasFamilySupport"
            className="block text-gray-600 font-medium mb-1"
          >
            Does the student have family support?
          </label>
          <input
            type="checkbox"
            id="hasFamilySupport"
            name="hasFamilySupport"
            checked={formData.hasFamilySupport}
            onChange={handleChange}
            className="mr-2"
          />
          <span>Yes</span>
        </div>

        {/* Upload Documents */}
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
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Need Description */}
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

        {/* Submit Button */}
        <div className="mb-4 text-center">
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white rounded-lg py-3 ${
              loading ? "opacity-50" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Referral"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReferralForm;
