import React from "react";
import { ShieldCheck, Trophy, BarChart3 } from "lucide-react";

const topTeams = [
  {
    icon: (
      <ShieldCheck className="w-7 h-7 mb-2 text-primary group-hover:scale-125 transition-transform" />
    ),
    title: "Hunters XI",
    desc: "6-Time XYZ Trophy Winners. Fierce and dominant on the pitch.",
    rank: "#1",
    to: "top1",
  },
  {
    icon: <Trophy className="w-7 h-7 mb-2 text-primary animate-pulse" />,
    title: "Gladiators",
    desc: "4-Time Champions. Balanced, bold, and brilliant in clutch moments.",
    rank: "#2",
    to: "top2",
  },
  {
    icon: <BarChart3 className="w-7 h-7 mb-2 text-primary" />,
    title: "Warriors XI",
    desc: "Resilient and strategic. 3-Time winners climbing the ranks.",
    rank: "#3",
    to: "top3",
  },
];

function TopTeams({ openModal }) {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#0b0b0b] via-[#0e0e0e] to-[#121212] text-white">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] via-white to-[#00FF66]">
          Top Teams of the League
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {topTeams.map((team) => (
            <div
              key={team.title}
              className="group rounded-2xl bg-[#1a1a1a]/80 border border-[#2a2a2a] p-6 flex flex-col items-center text-center shadow-lg hover:shadow-[0_0_20px_#00FF6690] hover:border-[#00FF66] transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-[#00FF66] mb-4 group-hover:scale-110 transition-transform duration-300">
                {team.icon}
              </div>
              <div className="font-bold text-xl text-white mb-1">
                {team.title}
              </div>
              <div className="text-sm text-gray-400 mb-2">{team.desc}</div>
              <div className="text-xs text-gray-500 italic">
                Rank: {team.rank}
              </div>
              <button
                className="mt-4 px-4 py-1 rounded-full bg-[#00FF66]/10 text-[#00FF66] font-medium border border-[#00FF66]/40 hover:bg-[#00FF66]/20 transition-colors duration-200"
                onClick={() => openModal(team.to)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopTeams;
