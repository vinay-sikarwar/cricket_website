import React from "react";

// Import images
import image1 from "../../image/pexels-john-mwaniki-3891426-27118179.jpg";
import image2 from "../../image/pexels-yogendras31-10987828.jpg";
import image3 from "../../image/pexels-yogendras31-11204757.jpg";
import image4 from "../../image/pexels-lesandu-alokabandara-670648380-21415108.jpg";
import image5 from "../../image/pexels-usbofphotography-12732864.jpg";
import image6 from "../../image/pexels-suzyhazelwood-4219639.jpg";

const galleryImages = [
  {
    src: image1,
    title: "Cricket in Action",
    description: "Experience the thrill of a live match.",
  },
  {
    src: image2,
    title: "Power Hit",
    description: "Witness the boundaries and sixes.",
  },
  {
    src: image3,
    title: "Top Players",
    description: "Follow the journey of star players.",
  },
  {
    src: image4,
    title: "Winning Moments",
    description: "Relive the best moments in cricket history.",
  },
  {
    src: image5,
    title: "Match 5",
    description: "Another exciting match.",
  },
  {
    src: image6,
    title: "Cricket Action 6",
    description: "A thrilling conclusion.",
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-20 px-4 bg-gradient-to-b from-[#f9f9f9] to-[#e7f9ec] dark:from-[#0e0e0e] dark:to-[#1a1a1a]"
    >
      <div className="container mx-auto w-[80%]">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          Cricket Gallery
        </h2>

        <div
          id="slider"
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-4"
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-2 snap-center"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-48 object-cover rounded-t-2xl"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
