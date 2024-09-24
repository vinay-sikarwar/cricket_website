import React from 'react';

const TeamInfo = ({ onPrev, onNext }) => (
  <div className="form-step hidden">
    <label htmlFor="teamName" className="block font-semibold text-gray-700">Team Name</label>
    <input type="text" id="teamName" className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4" placeholder="Enter your team name" />

    <label htmlFor="teamMembers" className="block font-semibold text-gray-700">Team Members</label>
    <input type="text" id="teamMembers" className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4" placeholder="Enter team members" />

    <label htmlFor="tournament" className="block font-semibold text-gray-700">Select Tournament</label>
    <select id="tournament" className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4">
      <option value="" disabled selected>Select a tournament</option>
      <option value="test">Date: September 29, 2024 - Format: TEST</option>
      <option value="odi">Date: October 17, 2024 - Format: ODI</option>
      <option value="t20">Date: November 5, 2024 - Format: T20</option>
    </select>

    <button type="button" className="bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 mr-2" onClick={() => onPrev(2)}>Back</button>
    <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={() => onNext(2)}>Next</button>
  </div>
);

export default TeamInfo;
