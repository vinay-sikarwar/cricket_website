import { Calendar, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-40 text-center overflow-hidden bg-gradient-to-b from-[#0d0d0d] to-[#050505]">
      <div className=" w-[80%] mx-auto">
        {/* Subtle grid background */}
        <div className="absolute -inset-40 bg-[url('/grid.svg')] opacity-5 [mask-image:radial-gradient(#fff,transparent_75%)] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            Cricket Champions League
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-400 animate-fade-in-up animation-delay-300">
            The ultimate clash of titans begins. Witness legendary plays, fierce
            rivalries, and the crowning of a new champion.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-600">
            {/* Neon green button */}
            <a
              href="#tournaments"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-bold text-black bg-[#00FF66] hover:bg-[#00e65c] shadow-[0_0_20px_#00FF66] transition-all duration-300 transform hover:scale-105 rounded"
            >
              <Calendar className="w-5 h-5" />
              View Schedule
            </a>

            {/* Outline neon button */}
            <a
              href="/fantasy"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-bold text-white border border-[#00FF66] hover:bg-[#00ff6620] shadow-[0_0_10px_#00FF66] transition-all duration-300 transform hover:scale-105 rounded"
            >
              <Shield className="w-5 h-5 text-[#00FF66]" />
              Leagues
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
