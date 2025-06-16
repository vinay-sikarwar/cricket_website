import React from "react";

function RegistrationStep2({
  formData,
  handleInputChange,
  onNext,
  onPrevious,
}) {
  const validateInputs = () => {
    if (!formData.teamName.trim()) {
      alert("Please enter your team name.");
      return false;
    }

    if (
      !formData.teamMembers.trim() ||
      isNaN(formData.teamMembers) ||
      formData.teamMembers <= 0
    ) {
      alert("Please enter a valid number of team members.");
      return false;
    }

    if (!formData.tournament) {
      alert("Please select a tournament.");
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
          htmlFor="teamName"
          className="block text-sm font-medium text-gray-300"
        >
          Team Name
        </label>
        <input
          type="text"
          id="teamName"
          name="teamName"
          className="mt-1 block w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF66] transition"
          placeholder="Enter your team name"
          value={formData.teamName}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label
          htmlFor="teamMembers"
          className="block text-sm font-medium text-gray-300"
        >
          Team Members
        </label>
        <input
          type="text"
          id="teamMembers"
          name="teamMembers"
          className="mt-1 block w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF66] transition"
          placeholder="Enter number of team members"
          value={formData.teamMembers}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label
          htmlFor="tournament"
          className="block text-sm font-medium text-gray-300"
        >
          Select Tournament
        </label>
        <select
          id="tournament"
          name="tournament"
          className="mt-1 block w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF66] transition"
          value={formData.tournament}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Select a tournament
          </option>
          <option value="test">September 29, 2024 - Format: TEST</option>
          <option value="odi">October 17, 2024 - Format: ODI</option>
          <option value="t20">November 5, 2024 - Format: T20</option>
        </select>
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={onPrevious}
          className="py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="py-2 px-6 text-white bg-gradient-to-r from-[#00FF66] to-[#00cc66] rounded-lg shadow-md hover:shadow-[0_0_12px_#00FF66] transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default RegistrationStep2;
