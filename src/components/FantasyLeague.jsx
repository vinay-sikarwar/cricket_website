import React, { useEffect, useState } from "react";

function FantasyLeague() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMatches() {
      try {
        const key = import.meta.env.VITE_CRICKET_API_KEY;
        const res = await fetch(
          `https://api.cricapi.com/v1/matches?apikey=${key}`
        );
        const json = await res.json();

        const matchList =
          json?.data?.filter((m) => m?.teams?.length === 2)?.slice(0, 10) || [];

        setMatches(matchList);
        localStorage.setItem("fantasyMatches", JSON.stringify(matchList));
        localStorage.setItem("fantasyFetchedTime", Date.now().toString());
      } catch (e) {
        console.error("Failed to fetch fantasy league data", e);
      } finally {
        setLoading(false);
      }
    }

    const cached = localStorage.getItem("fantasyMatches");
    const lastFetched = localStorage.getItem("fantasyFetchedTime");
    const twentyMinutes = 20 * 60 * 1000;
    const now = Date.now();

    if (cached && lastFetched && now - parseInt(lastFetched) < twentyMinutes) {
      setMatches(JSON.parse(cached));
      setLoading(false);
    } else {
      fetchMatches();
    }
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#0b0b0b] via-[#0e0e0e] to-[#121212] text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] via-white to-[#00FF66]">
          Fantasy League Matches
        </h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading matches…</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-[#1a1a1a]/80 rounded-xl border border-[#2a2a2a] shadow-lg">
              <thead>
                <tr className="bg-[#00FF66]/10 text-[#00FF66] text-sm uppercase">
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Teams</th>
                  <th className="py-3 px-4 text-left">Type</th>
                  <th className="py-3 px-4 text-left">Status</th>
                  <th className="py-3 px-4 text-left">Venue</th>
                </tr>
              </thead>
              <tbody>
                {matches.map((m) => (
                  <tr
                    key={m.id}
                    className="border-b border-[#2a2a2a] hover:bg-[#00FF6610] transition"
                  >
                    <td className="py-3 px-4 text-sm text-gray-300">
                      {m.dateTimeGMT
                        ? new Date(m.dateTimeGMT).toLocaleDateString()
                        : "—"}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-white">
                      {m.teams?.[0]} vs {m.teams?.[1]}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-400 uppercase">
                      {m.matchType || "—"}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-400">
                      {m.status || "—"}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500 italic">
                      {m.venue || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

export default FantasyLeague;
