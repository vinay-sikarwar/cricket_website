import { CalendarPlus } from "lucide-react";

export default function HostMatch() {
  return (
    <section className="min-h-screen px-4 py-24 md:py-32 flex flex-col items-center justify-center bg-[#0e0e0e]">
      <CalendarPlus className="w-14 h-14 mb-6 text-green-400 animate-bounce" />

      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Host a Cricket Match
      </h1>

      <p className="text-gray-400 max-w-xl mb-10 text-center">
        Set up your own cricket exhibition. Pitch your venue and let fans join
        the fun!
      </p>

      <form className="bg-[#1e1e1e] backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-md p-8 flex flex-col gap-6 transition-all">
        <input
          type="text"
          placeholder="Venue Name"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-transparent placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="date"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="Host Name"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-transparent placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full transition"
        >
          Submit Proposal
        </button>
      </form>

      <span className="text-gray-500 text-xs mt-6 italic">
        * Just for fun! No real backend :)
      </span>
    </section>
  );
}
