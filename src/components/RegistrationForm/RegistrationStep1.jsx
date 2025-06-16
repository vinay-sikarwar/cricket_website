import React from "react";

function RegistrationStep1({ formData, handleInputChange, onNext }) {
  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!formData.name.trim()) {
      alert("Please enter your full name.");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateInputs()) {
      onNext();
    }
  };

  return (
    <div className="form-step space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF66] transition"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF66] transition"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-300"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 block w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF66] transition"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>

      <button
        type="button"
        onClick={handleNext}
        className="mt-6 w-full py-2 px-4 text-white bg-gradient-to-r from-[#00FF66] to-[#00cc66] rounded-lg shadow-md hover:shadow-[0_0_12px_#00FF66] transition"
      >
        Next
      </button>
    </div>
  );
}

export default RegistrationStep1;
