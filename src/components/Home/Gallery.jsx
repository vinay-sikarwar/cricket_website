import React from "react";

const galleryImages = [
  {
    src: "/image/pexels-john-mwaniki-3891426-27118179.jpg",
    title: "Cricket in Action",
    description: "Experience the thrill of a live match."
  },
  {
    src: "/image/pexels-yogendras31-10987828.jpg",
    title: "Power Hit",
    description: "Witness the boundaries and sixes."
  },
  {
    src: "/image/pexels-yogendras31-11204757.jpg",
    title: "Top Players",
    description: "Follow the journey of star players."
  },
  {
    src: "/image/pexels-lesandu-alokabandara-670648380-21415108.jpg",
    title: "Winning Moments",
    description: "Relive the best moments in cricket history."
  },
  {
    src: "/image/pexels-usbofphotography-12732864.jpg",
    title: "Match 5",
    description: "Another exciting match."
  },
  {
    src: "/image/pexels-suzyhazelwood-4219639.jpg",
    title: "Cricket Action 6",
    description: "A thrilling conclusion."
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          Gallery
        </h2>

        <div id="slider" className="flex space-x-6 overflow-x-scroll scrollbar-hide">
          {galleryImages.map((image, index) => (
            <div key={index} className="min-w-[300px] rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-48 object-cover rounded-lg"
                loading="lazy" // Lazy load images
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold">{image.title}</h3>
                <p className="text-gray-700 mt-2">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
