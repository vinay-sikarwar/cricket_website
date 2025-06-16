import React from "react";
import backgroundImage from "../../../image/logo.png"; // Adjust path if needed

const formatTournament = (code) => {
  switch (code) {
    case "test":
      return "September 29, 2024 - Format: TEST";
    case "odi":
      return "October 17, 2024 - Format: ODI";
    case "t20":
      return "November 5, 2024 - Format: T20";
    default:
      return code;
  }
};

const Ticket = ({ formData, onRegisterAnother }) => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 py-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <div className="w-full max-w-2xl bg-black/70 backdrop-blur-md text-white rounded-2xl border border-gray-400 p-8 shadow-xl">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-[#00FF66]">
            🎟 Registration Confirmed
          </h2>
          <p className="text-sm text-gray-300 mt-1">
            Here’s your team registration ticket
          </p>
        </div>

        {/* Table */}
        <table className="w-full table-auto border-separate border-spacing-y-3 text-left">
          <tbody className="text-base text-gray-100">
            <tr>
              <td className="font-semibold text-[#00FF66]">Full Name:</td>
              <td>{formData.name}</td>
            </tr>
            <tr>
              <td className="font-semibold text-[#00FF66]">Email:</td>
              <td>{formData.email}</td>
            </tr>
            <tr>
              <td className="font-semibold text-[#00FF66]">Phone:</td>
              <td>{formData.phone}</td>
            </tr>
            <tr>
              <td className="font-semibold text-[#00FF66]">Team Name:</td>
              <td>{formData.teamName}</td>
            </tr>
            <tr>
              <td className="font-semibold text-[#00FF66]">Team Members:</td>
              <td>{formData.teamMembers}</td>
            </tr>
            <tr>
              <td className="font-semibold text-[#00FF66]">Tournament:</td>
              <td>{formatTournament(formData.tournament)}</td>
            </tr>
          </tbody>
        </table>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-gradient-to-r from-[#00FF66] to-[#00cc66] text-black px-6 py-2 rounded-lg font-semibold shadow hover:shadow-[0_0_12px_#00FF66] transition"
          >
            Go to Home
          </button>
          <button
            onClick={onRegisterAnother}
            className="bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition"
          >
            Register Another
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
