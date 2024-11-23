import React, { useState } from "react";
import "./styles.css";
const StudentNeedForm = () => {
  const [formData, setFormData] = useState({
    student: "",
    needName: "",
    goalAmount: "",
    description: "",
    status: "Pending",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form (you can add more complex validation if needed)
    const newErrors = {};
    if (!formData.student)
      newErrors.student = "Student information is required";
    if (!formData.needName) newErrors.needName = "Need name is required";
    if (!formData.goalAmount) newErrors.goalAmount = "Goal amount is required";
    if (!formData.description)
      newErrors.description = "Description of the need is required";
    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted", formData);
      // You can add logic here to submit data to the backend, e.g., using fetch or axios
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          Student Need Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Student */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Student
            </label>
            <input
              type="text"
              name="student"
              value={formData.student}
              onChange={handleChange}
              placeholder="Enter student ID"
              className="w-full border  rounded-lg p-3 "
            />
            {errors.student && (
              <p className="text-red-500 text-sm">{errors.student}</p>
            )}
          </div>

          {/* Need Name */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Need Name
            </label>
            <input
              type="text"
              name="needName"
              value={formData.needName}
              onChange={handleChange}
              placeholder="Enter need name"
              className="w-full border  rounded-lg p-3 "
            />
            {errors.needName && (
              <p className="text-red-500 text-sm">{errors.needName}</p>
            )}
          </div>

          {/* Goal Amount */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Goal Amount
            </label>
            <input
              type="number"
              name="goalAmount"
              value={formData.goalAmount}
              onChange={handleChange}
              placeholder="Enter goal amount"
              className="w-full border  rounded-lg p-3 "
            />
            {errors.goalAmount && (
              <p className="text-red-500 text-sm">{errors.goalAmount}</p>
            )}
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-600 font-medium mb-1"
            >
              Description of Need
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the student's need (max 1200 characters)"
              maxLength="1200"
              className="w-full border  rounded-lg p-3 overflow-y-scroll resize-none custom-scroll"
              style={{ height: "150px" }}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>

          {/* Status */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border  rounded-lg p-3 "
            >
              <option value="Pending">Pending</option>
              <option value="Fundraising">Fundraising</option>
              <option value="Completed">Completed</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm">{errors.status}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-medium py-3 rounded-lg "
            >
              Submit Need
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentNeedForm;
