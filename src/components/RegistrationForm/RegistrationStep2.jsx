import React from 'react';

function RegistrationStep2({ formData, handleInputChange, onNext, onPrevious }) {
  
  // Validation function to check team name, team members, and tournament
  const validateInputs = () => {
    if (!formData.teamName.trim()) {
      alert('Please enter your team name.');
      return false;
    }

    if (!formData.teamMembers.trim() || isNaN(formData.teamMembers) || formData.teamMembers <= 0) {
      alert('Please enter a valid number of team members.');
      return false;
    }

    if (!formData.tournament) {
      alert('Please select a tournament.');
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
      <label htmlFor="teamName" className="block font-semibold text-gray-700">Team Name</label>
      <input
        type="text"
        id="teamName"
        name="teamName"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        placeholder="Enter your team name"
        value={formData.teamName}
        onChange={handleInputChange}
      />

      <label htmlFor="teamMembers" className="block font-semibold text-gray-700">Team Members</label>
      <input
        type="text"
        id="teamMembers"
        name="teamMembers"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        placeholder="Enter number of team members"
        value={formData.teamMembers}
        onChange={handleInputChange}
      />

      <label htmlFor="tournament" className="block font-semibold text-gray-700">Select Tournament</label>
      <select
        id="tournament"
        name="tournament"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        value={formData.tournament} // Controlled component
        onChange={handleInputChange}
      >
        <option value="" disabled>Select a tournament</option>
        <option value="test">September 29, 2024 - Format: TEST</option>
        <option value="odi">October 17, 2024 - Format: ODI</option>
        <option value="t20">November 5, 2024 - Format: T20</option>
      </select>


      <button 
        type="button" 
        className="bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 mr-2" 
        onClick={onPrevious}
      >
        Back
      </button>
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

export default RegistrationStep2;
