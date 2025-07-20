import React, { useEffect, useState } from "react";
import { Gauge } from "lucide-react";

export default function LiveScore() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedMatchId, setExpandedMatchId] = useState(null);

  useEffect(() => {
    async function fetchLiveScores() {
      try {
        const key = import.meta.env.VITE_CRICKET_API_KEY;
        const res = await fetch(
          `https://api.cricapi.com/v1/currentMatches?apikey=${key}`
        );
        const data = await res.json();

        if (!data || !data.data) throw new Error("Invalid API response");

        const liveMatches = data.data
          .filter((match) => match.score && match.score.length > 0)
          .slice(0, 6);

        setMatches(liveMatches);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching live matches:", err);
        setLoading(false);
      }
    }

    fetchLiveScores();
  }, []);

  const toggleMatchDetails = (matchId) => {
    setExpandedMatchId((prev) => (prev === matchId ? null : matchId));
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#0b0b0b] via-[#0e0e0e] to-[#121212] text-white min-h-[60vh]">
      <div className="container mx-auto flex flex-col items-center">
        <Gauge className="w-10 h-10 text-[#00FF66] animate-pulse mb-4" />
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] via-white to-[#00FF66]">
          Live Cricket Scores
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl">
          Stay updated with real-time match action.
        </p>

        {loading ? (
          <div className="text-gray-400 text-sm">Loading live scores…</div>
        ) : matches.length === 0 ? (
          <div className="text-gray-400 text-sm">
            No live matches with score available.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {matches.map((match) => {
              const [score1, score2] = match.score;

              const formattedScore = (score) => {
                return score
                  ? `${score.r}/${score.w} (${score.o} ovs)`
                  : "Yet to bat";
              };

              return (
                <div
                  key={match.id}
                  className="rounded-2xl p-6 border border-[#2a2a2a] bg-[#1a1a1a]/80 shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:border-[#00FF66] hover:shadow-[0_0_20px_#00FF6690] cursor-pointer"
                  onClick={() => toggleMatchDetails(match.id)}
                >
                  <div className="font-semibold text-lg mb-2">{match.name}</div>

                  <div className="text-[#00FF66] font-mono">
                    {formattedScore(score1)}
                    {score2 ? ` & ${formattedScore(score2)}` : ""}
                  </div>

                  <div className="text-sm text-gray-400 mt-1">
                    {match.status}
                  </div>
                  <div className="text-xs italic text-gray-500 mt-1">
                    {match.venue}
                  </div>

                  {match.date && (
                    <div className="text-xs text-gray-500 mt-1">
                      {formatDate(match.date)}
                    </div>
                  )}

                  {expandedMatchId === match.id && (
                    <div className="mt-4 p-4 border border-[#333] rounded-lg bg-[#101010] text-sm space-y-2">
                      <div>
                        <strong>Teams:</strong>{" "}
                        {match.teams?.join(" vs ") || "N/A"}
                      </div>
                      <div>
                        <strong>Score 1:</strong> {formattedScore(score1)}
                      </div>
                      <div>
                        <strong>Score 2:</strong>{" "}
                        {score2 ? formattedScore(score2) : "Yet to bat"}
                      </div>
                      <div>
                        <strong>Match Type:</strong> {match.matchType}
                      </div>
                      <div>
                        <strong>Date:</strong>{" "}
                        {match.date ? formatDate(match.date) : "N/A"}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
