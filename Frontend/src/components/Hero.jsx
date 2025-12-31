import React from "react";
import HeroSlider from "./HeroSlider";

function Hero() {
  return (
    <section className="bg-black text-white h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Amaron <span className="text-green-400">Batteries</span> &
              <br />
              Genuine Mahindra and Mahindra<span className="text-green-400">Tractor Parts</span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg max-w-xl">
              Manoj Automobile provides high-quality Amaron batteries and genuine Mahindra and Mahindra
              tractor spare parts you can trust. Serving farmers with honest
              pricing and dependable products.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+919049967133"
                className="bg-green-500 text-black px-6 py-3 rounded-full font-bold hover:bg-green-400 transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919049967133"
                className="border border-green-400 text-green-400 px-6 py-3 rounded-full font-bold hover:bg-green-400 hover:text-black transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <HeroSlider/>

        </div>
      </div>
    </section>
  );
}

export default Hero;
