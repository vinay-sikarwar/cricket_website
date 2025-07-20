import React from "react";
import Slider from "react-slick";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image imports
import image1 from "../assets/gallary/pexels-john-mwaniki-3891426-27118179.jpg";
import image2 from "../assets/gallary/pexels-yogendras31-10987828.jpg";
import image3 from "../assets/gallary/pexels-yogendras31-11204757.jpg";
import image4 from "../assets/gallary/pexels-lesandu-alokabandara-670648380-21415108.jpg";
import image5 from "../assets/gallary/pexels-usbofphotography-12732864.jpg";
import image6 from "../assets/gallary/pexels-suzyhazelwood-4219639.jpg";

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-[#0e0e0e] text-white">
      <div className="container mx-auto w-[90%]">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
          Cricket Gallery
        </h2>

        <Slider {...settings}>
          {galleryImages.map((image, index) => (
            <div key={index} className="px-2">
              <div className="bg-[#1a1a1a] rounded-2xl shadow-xl hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-white">
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
