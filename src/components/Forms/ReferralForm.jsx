import React, { useState } from "react";

const ReferralForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentEmail: "",
    studentPhone: "",
    studentGuardianPhone: "",
    studentAddress: "",
    institution: "",
    universityYear: "",
    department: "",
    hasDisability: false,
    disabilityDetails: "",
    hasFamilySupport: false,
    studentPhoto: null,
    document: null,
    needDescription: "",
    relationToStudent: "Other",
    studentPictures: [], // Initialize as an empty array
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to Array
    setFormData((prevData) => {
      return {
        ...prevData,
        studentPictures: [...prevData.studentPictures, ...files],
      };
    });
  };

  const handleRemovePicture = (index) => {
    const updatedPictures = formData.studentPictures.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, studentPictures: updatedPictures });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.studentName.trim())
      newErrors.studentName = "Student's name is required.";
    if (!formData.studentPhone.trim())
      newErrors.studentPhone = "Student's phone number is required.";
    if (!formData.studentAddress.trim())
      newErrors.studentAddress = "Student's address is required.";
    if (!formData.institution.trim())
      newErrors.institution = "Institution name is required.";
    if (!formData.universityYear.trim())
      newErrors.universityYear = "University year is required.";
    if (!formData.department.trim())
      newErrors.department = "Department is required.";
    if (!formData.needDescription.trim())
      newErrors.needDescription = "Description of need is required.";
    if (formData.hasDisability && !formData.disabilityDetails.trim()) {
      newErrors.disabilityDetails = "Disability details are required.";
    }
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
        {/* Student Name */}
        <div className="mb-4">
          <label
            htmlFor="studentName"
            className="block text-gray-600 font-medium mb-1"
          >
            {`Student's Name`}
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

        {/* Student Phone */}
        <div className="mb-4">
          <label
            htmlFor="studentPhone"
            className="block text-gray-600 font-medium mb-1"
          >
            {`Student's Phone`}
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

        {/* Student Address */}
        <div className="mb-4">
          <label
            htmlFor="studentAddress"
            className="block text-gray-600 font-medium mb-1"
          >
            {`Student's Address`}
          </label>
          <input
            type="text"
            id="studentAddress"
            name="studentAddress"
            value={formData.studentAddress}
            onChange={handleChange}
            placeholder="Enter student's address"
            className="w-full border rounded-lg p-3"
          />
          {errors.studentAddress && (
            <p className="text-red-500 text-sm">{errors.studentAddress}</p>
          )}
        </div>

        {/* Student Pictures */}
        <div className="mb-4">
          <label
            htmlFor="studentPictures"
            className="block text-gray-600 font-medium mb-1"
          >
            Student Pictures (up to 3)
          </label>
          <input
            type="file"
            id="studentPictures"
            name="studentPictures"
            onChange={handleFileChange}
            accept="image/*"
            multiple
            className="w-full border rounded-lg p-3"
          />
          {formData.studentPictures.length > 0 && (
            <div className="mt-2">
              {formData.studentPictures.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-2"
                >
                  <span>{file.name}</span>
                  <button
                    type="button"
                    onClick={() => handleRemovePicture(index)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Institution */}
        <div className="mb-4">
          <label
            htmlFor="institution"
            className="block text-gray-600 font-medium mb-1"
          >
            Institution Name
          </label>
          <input
            type="text"
            id="institution"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            placeholder="Enter institution name"
            className="w-full border rounded-lg p-3"
          />
          {errors.institution && (
            <p className="text-red-500 text-sm">{errors.institution}</p>
          )}
        </div>

        {/* University Year */}
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

        {/* Department */}
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

        {/* Disability Details */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">
            Has Disability
          </label>
          <input
            type="checkbox"
            id="hasDisability"
            name="hasDisability"
            checked={formData.hasDisability}
            onChange={handleChange}
            className="mr-2"
          />
          {formData.hasDisability && (
            <div>
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
                placeholder="Describe disability details"
                className="w-full border rounded-lg p-3"
              />
              {errors.disabilityDetails && (
                <p className="text-red-500 text-sm">
                  {errors.disabilityDetails}
                </p>
              )}
            </div>
          )}
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
            placeholder="Describe the student's needs"
            className="w-full border rounded-lg p-3"
          />
          {errors.needDescription && (
            <p className="text-red-500 text-sm">{errors.needDescription}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReferralForm;
