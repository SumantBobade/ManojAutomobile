import React, { useEffect, useState } from "react";
import battre from "../assets/battre.png"
import tractor from "../assets/tactor.png"
import shop from "../assets/shop.png"

const slides = [
  {
    image: tractor,
    title: "Genuine Tractor Parts",
    subtitle: "Reliable & Long Lasting",
  },
  {
    image: battre,
    title: "High Quality Batteries",
    subtitle: "For Tractors & Vehicles",
  },
  {
    image: shop,
    title: "Trusted Local Shop",
    subtitle: "Serving Farmers with Honesty",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
            <h3 className="text-xl md:text-2xl font-bold text-green-400">
              {slide.title}
            </h3>
            <p className="text-gray-200">{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroSlider;
