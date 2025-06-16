import React, { useEffect, useState } from "react";
import { Gauge } from "lucide-react";

export default function LiveScore() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLive() {
      try {
        const key = "f3ee6201-d56e-403f-8c46-92fe077f4708";
        const res = await fetch(
          `https://cricketdata.org/api/v1/currentMatches?apikey=${key}`
        );
        console.log(res)
        const json = await res.json();
        console.log(json);
        const matchList = json?.data?.slice(0, 5) || [];
        

        setMatches(matchList);
        setLoading(false);

        // Save to localStorage
        localStorage.setItem("liveScoreData", JSON.stringify(matchList));
        localStorage.setItem("lastFetchedTime", Date.now().toString());
      } catch (e) {
        console.error("Failed to fetch live scores", e);
        setLoading(false);
      }
    }

    const cached = localStorage.getItem("liveScoreData");
    const lastFetched = localStorage.getItem("lastFetchedTime");
    const twentyMinutes = 20 * 60 * 1000;
    const now = Date.now();

    if (cached && lastFetched && now - parseInt(lastFetched) < twentyMinutes) {
      setMatches(JSON.parse(cached));
      setLoading(false);
    } else {
      fetchLive();
    }
  }, []);
  

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#0b0b0b] via-[rgb(14,14,14)] to-[#121212] text-white min-h-[60vh]">
      <div className="container mx-auto flex flex-col items-center">
        <Gauge className="w-10 h-10 text-[#00FF66] animate-pulse mb-4" />
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] via-white to-[#00FF66]">
          Live Cricket Scores
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl">
          Stay updated with real-time match action — updated every 30 seconds.
        </p>

        {loading ? (
          <div className="text-gray-400 text-sm">Loading live scores…</div>
        ) : matches.length === 0 ? (
          <div className="text-gray-400 text-sm">
            No live matches at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {matches.map((match, i) => {
              const score1 = match.score1
                ? `${match.score1}/${match.wicket1 || "--"} (${
                    match.overs1 || "--"
                  } ovs)`
                : "Yet to begin";
              const score2 = match.score2
                ? `${match.score2}/${match.wicket2 || "--"} (${
                    match.overs2 || "--"
                  } ovs)`
                : "";

              const isLive =
                match.status?.toLowerCase().includes("live") ||
                match.status?.toLowerCase().includes("won");

              return (
                <div
                  key={i}
                  className={`rounded-2xl p-6 border shadow-md transition-all transform hover:-translate-y-2 ${
                    isLive
                      ? "bg-[#1a1a1a] border-[#00FF66] shadow-[0_0_20px_#00FF6690]"
                      : "bg-[#1a1a1a]/80 border-[#2a2a2a] hover:border-[#00FF66] hover:shadow-[0_0_15px_#00FF6655]"
                  }`}
                >
                  <div className="font-semibold text-lg text-white mb-2">
                    {match.name}
                  </div>
                  <div className="text-[#00FF66] font-mono text-md">
                    {score1}
                    {score2 ? ` & ${score2}` : ""}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {match.status}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 italic">
                    {match.venue}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
