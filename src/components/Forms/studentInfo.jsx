/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./styles.css"; // Importing the CSS file from the same folder

const StudentInfoForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentEmail: "",
    studentPhone: "",
    studentAddress: "",
    educationLevel: "",
    grade: "",
    institution: "",
    universityYear: "",
    department: "",
    hasDisability: false,
    disabilityDetails: "",
    hasFamilySupport: true,
    familyDetails: "",
    fundingNeeds: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: fieldValue });
    setErrors({ ...errors, [name]: "" }); // Clear errors on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.studentName.trim())
      newErrors.studentName = "Student's name is required.";
    if (!formData.studentPhone.trim())
      newErrors.studentPhone = "Student's phone number is required.";
    if (!formData.studentAddress.trim())
      newErrors.studentAddress = "Student's address is required.";
    if (!formData.educationLevel.trim())
      newErrors.educationLevel = "Education level is required.";
    if (formData.educationLevel === "High School" && !formData.grade.trim())
      newErrors.grade = "Grade level is required for high school students.";
    if (
      formData.educationLevel === "University" &&
      !formData.universityYear.trim()
    )
      newErrors.universityYear =
        "University year is required for university students.";
    if (formData.educationLevel === "University" && !formData.department.trim())
      newErrors.department = "Department is required for university students.";
    if (!formData.institution.trim())
      newErrors.institution = "Institution name is required.";
    if (formData.hasDisability && !formData.disabilityDetails.trim())
      newErrors.disabilityDetails =
        "Disability details are required if the student has a disability.";
    if (!formData.hasFamilySupport && !formData.familyDetails.trim())
      newErrors.familyDetails =
        "Family details are required if the student has no family support.";
    if (!formData.fundingNeeds.trim())
      newErrors.fundingNeeds = "Funding needs must be specified.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (onSubmit) onSubmit(formData);
    alert("Form submitted successfully!");
    setFormData({
      studentName: "",
      studentEmail: "",
      studentPhone: "",
      studentAddress: "",
      educationLevel: "",
      grade: "",
      institution: "",
      universityYear: "",
      department: "",
      hasDisability: false,
      disabilityDetails: "",
      hasFamilySupport: true,
      familyDetails: "",
      fundingNeeds: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Student Information Form
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Student Name */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">
            Student Name
          </label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Enter student's name"
            className="w-full border  rounded-lg p-3 "
          />
          {errors.studentName && (
            <p className="text-red-500 text-sm">{errors.studentName}</p>
          )}
        </div>

        {/* Student Email */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">
            Student Email
          </label>
          <input
            type="email"
            name="studentEmail"
            value={formData.studentEmail}
            onChange={handleChange}
            placeholder="Enter student's email"
            className="w-full border  rounded-lg p-3 "
          />
        </div>

        {/* Student Phone */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">
            Student Phone
          </label>
          <input
            type="tel"
            name="studentPhone"
            value={formData.studentPhone}
            onChange={handleChange}
            placeholder="Enter student's phone number"
            className="w-full border  rounded-lg p-3 "
          />
          {errors.studentPhone && (
            <p className="text-red-500 text-sm">{errors.studentPhone}</p>
          )}
        </div>

        {/* Student Address */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">
            Student Address
          </label>
          <input
            type="text"
            name="studentAddress"
            value={formData.studentAddress}
            onChange={handleChange}
            placeholder="Enter student's address"
            className="w-full border  rounded-lg p-3 "
          />
          {errors.studentAddress && (
            <p className="text-red-500 text-sm">{errors.studentAddress}</p>
          )}
        </div>

        {/* Education Level */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">
            Education Level
          </label>
          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            className="w-full border  rounded-lg p-3 "
          >
            <option value="">Select education level</option>
            <option value="High School">High School</option>
            <option value="University">University</option>
          </select>
          {errors.educationLevel && (
            <p className="text-red-500 text-sm">{errors.educationLevel}</p>
          )}
        </div>

        {/* Grade (Conditional) */}
        {formData.educationLevel === "High School" && (
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Grade
            </label>
            <input
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              placeholder="Enter grade"
              className="w-full border  rounded-lg p-3 "
            />
            {errors.grade && (
              <p className="text-red-500 text-sm">{errors.grade}</p>
            )}
          </div>
        )}

        {/* Institution */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">
            Institution
          </label>
          <input
            type="text"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            placeholder="Enter institution name"
            className="w-full border  rounded-lg p-3 "
          />
          {errors.institution && (
            <p className="text-red-500 text-sm">{errors.institution}</p>
          )}
        </div>

        {/* University Year */}
        {formData.educationLevel === "University" && (
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              University Year
            </label>
            <input
              type="text"
              name="universityYear"
              value={formData.universityYear}
              onChange={handleChange}
              placeholder="Enter year of study (e.g., Freshman)"
              className="w-full border  rounded-lg p-3 "
            />
            {errors.universityYear && (
              <p className="text-red-500 text-sm">{errors.universityYear}</p>
            )}
          </div>
        )}

        {/* Department */}
        {formData.educationLevel === "University" && (
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Department
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter department"
              className="w-full border  rounded-lg p-3 "
            />
            {errors.department && (
              <p className="text-red-500 text-sm">{errors.department}</p>
            )}
          </div>
        )}

        {/* Has Disability */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">
            Has Disability
          </label>
          <input
            type="checkbox"
            name="hasDisability"
            checked={formData.hasDisability}
            onChange={handleChange}
            className="mr-2"
          />
          <span>{formData.hasDisability ? "Yes" : "No"}</span>
        </div>

        {/* Disability Details */}
        {formData.hasDisability && (
          <div className="mb-4">
            <label
              htmlFor="disabilityDetails"
              className="block text-gray-600 font-medium mb-1"
            >
              Disability Details
            </label>
            <textarea
              id="disabilityDetails"
              name="disabilityDetails"
              value={formData.disabilityDetails}
              onChange={handleChange}
              placeholder="Provide details about the disability (max 1200 characters)"
              maxLength="360"
              className="w-full border  rounded-lg p-3 overflow-y-scroll resize-none custom-scroll"
              style={{ height: "90px" }}
            />
            {errors.disabilityDetails && (
              <p className="text-red-500 text-sm">{errors.disabilityDetails}</p>
            )}
          </div>
        )}

        {/* Has Family Support */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">
            Has Family Support
          </label>
          <input
            type="checkbox"
            name="hasFamilySupport"
            checked={formData.hasFamilySupport}
            onChange={handleChange}
            className="mr-2"
          />
          <span>{formData.hasFamilySupport ? "Yes" : "No"}</span>
        </div>

        {/* Family Details */}
        {!formData.hasFamilySupport && (
          <div className="mb-4">
            <label
              htmlFor="familyDetails"
              className="block text-gray-600 font-medium mb-1"
            >
              Family Details
            </label>
            <textarea
              id="familyDetails"
              name="familyDetails"
              value={formData.familyDetails}
              onChange={handleChange}
              placeholder="Provide details about family situation (max 1200 characters)"
              maxLength="360"
              className="w-full border  rounded-lg p-3 overflow-y-scroll resize-none custom-scroll"
              style={{ height: "90px" }}
            />
            {errors.familyDetails && (
              <p className="text-red-500 text-sm">{errors.familyDetails}</p>
            )}
          </div>
        )}

        {/* Funding Needs */}
        <div className="mb-4">
          <label
            htmlFor="needDescription"
            className="block text-gray-600 font-medium "
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
            className="w-full border rounded-lg overflow-y-scroll resize-none custom-scroll"
            style={{ height: "90px" }}
          />
          {errors.needDescription && (
            <p className="text-red-500 text-sm">{errors.needDescription}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentInfoForm;
