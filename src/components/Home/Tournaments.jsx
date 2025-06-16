import React from "react";
import { NavLink } from "react-router-dom";
import { CalendarDays, BadgeCheck } from "lucide-react";

import image1 from "../../../image/1.jpg";
import image2 from "../../../image/2.jpg";
import image3 from "../../../image/3.jpg";

const tournaments = [
  {
    name: "The XYZ Trophy",
    date: "September 29, 2024",
    format: "TEST",
    image: image1,
  },
  {
    name: "XYZ ODI Cup",
    date: "October 17, 2024",
    format: "ODI",
    image: image2,
  },
  {
    name: "XYZ Twenty20 League",
    date: "November 5, 2024",
    format: "T20",
    image: image3,
  },
];

const Tournaments = () => {
  return (
    <section
      id="tournaments"
      className="py-16 px-4 bg-gradient-to-b from-[#0b0b0b] via-[#111111] to-[#1a1a1a] text-white"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] to-white">
            Upcoming Tournaments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {tournaments.map((tournament, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg border border-[#2a2a2a] hover:border-[#00FF66] hover:shadow-[0_0_12px_#00FF66] transition-all duration-300 w-80"
            >
              <img
                src={tournament.image}
                alt={tournament.name}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  {tournament.name}
                </h3>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                  <CalendarDays className="w-4 h-4 text-[#00FF66]" />
                  <span>{tournament.date}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <BadgeCheck className="w-4 h-4 text-[#00FF66]" />
                  <span>{tournament.format}</span>
                </div>

                <NavLink
                  to="/registration"
                  className="inline-block px-4 py-1.5 rounded-md text-sm font-semibold bg-[#00FF66] text-black hover:bg-[#00ff66cc] transition-all shadow hover:shadow-[0_0_8px_#00FF66]"
                >
                  Register
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tournaments;
