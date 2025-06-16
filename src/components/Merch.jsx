import { ShoppingBag } from "lucide-react";
import jersy1 from "../../image/jersy1.jpg"
import jersy2 from "../../image/jersy2.jpg";
import jersy3 from "../../image/MERCH1.jpg";
export default function Merch() {
  return (
    <section className="min-h-screen bg-[#f9f9f9] dark:bg-[#0e0e0e] px-4 py-24 md:py-32 flex flex-col items-center justify-center text-center">
      <ShoppingBag className="w-14 h-14 mb-6 text-green-500 dark:text-green-400 animate-bounce" />

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
        Cricket League Merch
      </h1>

      <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-12">
        Sport your love for the game. Grab exclusive jerseys, caps, bats, and
        more—crafted for true fans.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {[jersy1, jersy2, jersy3].map((img, i) => (
          <div
            key={i}
            className="bg-white dark:bg-[#1c1c1c] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 group"
          >
            <img
              src={img}
              alt={`Official Jersey ${i}`}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Official Jersey {i}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Elevate your fan game with top-tier cricket gear.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-all text-sm font-medium">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
