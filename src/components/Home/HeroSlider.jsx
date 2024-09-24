import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "/image/pexels-stewphotography-9828070.jpg",
    title: "T20 World Cup Super 8 Matches",
    description: "Catch the excitement of the Super 8 matches from the T20 World Cup!"
  },
  {
    image: "/image/pexels-riccardo-parretti-145996493-10469894.jpg",
    title: "Exciting Match Highlights",
    description: "View the most thrilling moments from recent cricket matches."
  },
  {
    image: "/image/pexels-suzyhazelwood-4219639.jpg",
    title: "Cricket Championship Final",
    description: "Relive the final match of the championship with all its key moments."
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Adjust the timing here (3000 ms = 3 seconds)
    return () => clearInterval(interval);
  }, []);

  const showSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="slider relative h-[500px]"> {/* Increased height */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-6">
            <h3 className="text-3xl font-bold">{slide.title}</h3>
            <p className="text-lg">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => showSlide(index)}
            className={`p-2 rounded-full transition-colors duration-300 ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
