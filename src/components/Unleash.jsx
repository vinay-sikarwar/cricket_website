import React from 'react'
import { Link } from "react-router-dom";
import { ShoppingBag, Gauge, CalendarPlus, Crown, Camera } from "lucide-react";
const funFeatures = [
  {
    icon: (
      <ShoppingBag className="w-7 h-7 mb-2 text-primary group-hover:scale-125 transition-transform" />
    ),
    title: "Buy Merch",
    desc: "Official League shirts, caps, bats and more. Support your team in style.",
    to: "/merch",
  },
  {
    icon: <Gauge className="w-7 h-7 mb-2 text-primary animate-pulse" />,
    title: "Live Scores",
    desc: "Real-time thrills and action. See who's on top right now.",
    to: "/scores",
  },
  {
    icon: <CalendarPlus className="w-7 h-7 mb-2 text-primary" />,
    title: "Host a Match",
    desc: "Pitch your own game, create rivalries and book a venue.",
    to: "/host",
  },
  {
    icon: <Crown className="w-7 h-7 mb-2 text-primary" />,
    title: "Fantasy League",
    desc: "Draft a dream team and compete for ultimate glory.",
    to: "/fantasy",
  },
  {
    icon: <Camera className="w-7 h-7 mb-2 text-primary animate-pulse" />,
    title: "Fan Gallery",
    desc: "Show your support, see highlights from fellow cricket fans.",
    to: "/gallery",
  },
];
function Unleash() {
  return (
    <div>
      <section className="py-16 px-4 bg-gradient-to-b from-[#0b0b0b] via-[#0e0e0e] to-[#121212] text-white">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] via-white to-[#00FF66]">
            Unleash the Cricket Universe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-6xl">
            {funFeatures.map((feature) => (
              <Link
                to={feature.to}
                key={feature.title}
                className="group rounded-2xl bg-[#1a1a1a]/80 border border-[#2a2a2a] p-6 flex flex-col items-center shadow-lg hover:shadow-[0_0_20px_#00FF6690] hover:border-[#00FF66] transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-[#00FF66] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="font-bold text-lg text-white text-center">
                  {feature.title}
                </div>
                <div className="text-sm text-gray-400 text-center mt-1">
                  {feature.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Unleash
