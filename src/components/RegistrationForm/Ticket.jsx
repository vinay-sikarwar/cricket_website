import React from 'react';
import backgroundImage from '../../../image/ticket.png'; // Ensure the path is correct

const Ticket = ({ formData, onRegisterAnother }) => (
  <div className="container mx-auto px-4 py-10 flex justify-center"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
    borderRadius: '20px', // Adjust the value for desired roundness
    overflow: 'hidden' // Ensure the background and content stay within the rounded edges
  }}>
    <div
      className="ticket-container w-full md:w-1/2 bg-transparent rounded-lg shadow-lg border-2 border-gray-200 p-6 relative "
    >
      {/* Add a gradient overlay to improve text readability */}
      <div className="absolute inset-0 opacity-50 rounded-lg"></div>

      <div className="relative ticket-header text-center mb-4">
        <h2 className="text-3xl font-bold text-black pt-6 pb-4 ">Registration Confirmed</h2>
      </div>
      <div className="relative ticket-details text-lg text-yellow-950 space-y-4">
        <div><strong className="text-black">Full Name:</strong> {formData.name}</div>
        <div><strong className="text-black">Email:</strong> {formData.email}</div>
        <div><strong className="text-black">Phone Number:</strong> {formData.phone}</div>
        <div><strong className="text-black">Team Name:</strong> {formData.teamName}</div>
        <div><strong className="text-black">Number of Team Members:</strong> {formData.teamMembers}</div>
        <div><strong className="text-black">Tournament Date:</strong> {formData.tournament}</div>
      </div>
      <div className="relative ticket-footer mt-8 flex justify-center space-x-4">
        <button onClick={() => window.location.href = '/'} className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600">Go to Home</button>
        <button onClick={onRegisterAnother} className="bg-gray-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-gray-600">Register Another</button>
      </div>
    </div>
  </div>
);

export default Ticket;
