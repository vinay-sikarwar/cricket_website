import React from "react";
import { Link, NavLink } from "react-router-dom";

const tournaments = [
  {
    name: "The XYZ Trophy",
    date: "September 29, 2024",
    format: "TEST",
    image: "/image/1.jpg"
  },
  {
    name: "XYZ ODI Cup",
    date: "October 17, 2024",
    format: "ODI",
    image: "/image/2.jpg"
  },
  {
    name: "XYZ Twenty20 League",
    date: "November 5, 2024",
    format: "T20",
    image: "/image/3.jpg"
  }
];

const Tournaments = () => {
  return (
    <section id="tournaments" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Upcoming Tournaments</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tournaments.map((tournament, index) => (
            <div key={index} className="card bg-gray-100 p-8 rounded-lg shadow-lg">
              <img src={tournament.image} alt={tournament.name} className="mb-4 rounded-lg" />
              <h3 className="text-2xl font-semibold">{tournament.name}</h3>
              <p className="mt-2 text-gray-700">Date: {tournament.date}</p>
              <p className="text-gray-700">Format: {tournament.format}</p>
              <NavLink to="registration" className="btn mt-4 inline-block text-white bg-green-500 hover:bg-green-600">Register Now</NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tournaments;
