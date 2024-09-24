import React from 'react';

function RegistrationStep1({ formData, handleInputChange, onNext }) {
  
  // Validation function to check email and phone
  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    const phoneRegex = /^\d{10}$/; // Validates a 10-digit phone number

    if (!formData.name.trim()) {
      alert('Please enter your full name.');
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (!phoneRegex.test(formData.phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (validateInputs()) {
      onNext(); // Proceed to the next step if validation passes
    }
  };

  return (
    <div className="form-step">
      <label htmlFor="name" className="block font-semibold text-gray-700">Full Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        placeholder="Enter your full name"
        value={formData.name} // Bind to formData
        onChange={handleInputChange} // Use handleInputChange to update parent state
      />

      <label htmlFor="email" className="block font-semibold text-gray-700">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        placeholder="Enter your email"
        value={formData.email} // Bind to formData
        onChange={handleInputChange} // Use handleInputChange to update parent state
      />

      <label htmlFor="phone" className="block font-semibold text-gray-700">Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        placeholder="Enter your phone number"
        value={formData.phone} // Bind to formData
        onChange={handleInputChange} // Use handleInputChange to update parent state
      />

      <button 
        type="button" 
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" 
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}

export default RegistrationStep1;
