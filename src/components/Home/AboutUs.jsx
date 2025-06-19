import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-20 px-5 bg-gradient-to-b from-[#0b0b0b] via-[#0f0f0f] to-[#141414] text-white"
    >
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] via-white to-[#00FF66]">
          About PV Organization
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          PV Organization is dedicated to promoting cricket across all formats
          — from electrifying T20s to classic Test matches. We provide a stage
          for amateur and professional talent to shine, compete, and grow within
          the vibrant cricketing community. Our mission is to make cricket
          accessible, exciting, and inclusive for fans and players alike.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
