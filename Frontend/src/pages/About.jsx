import React from "react";

function About() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            About <span className="text-green-400">Manoj Automobile</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A trusted name for farmers and vehicle owners in our region.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Manoj Automobile is a locally trusted automobile spare parts shop
              specializing in <span className="text-green-400 font-semibold">
              genuine tractor spare parts</span> and long-lasting batteries.
              We understand the needs of farmers and vehicle owners and provide
              reliable products at fair prices.
            </p>

            <p className="mt-5 text-gray-300 text-lg leading-relaxed">
              Our focus is on quality, honesty, and customer satisfaction.
              Farmers depend on their tractors every day, and we make sure they
              get the right parts without delay.
            </p>
          </div>

          {/* Right Highlights */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-green-400 mb-6">
              Why Customers Trust Us
            </h3>

            <ul className="space-y-4 text-gray-300 text-lg">
              <li>✔ Genuine Tractor Spare Parts</li>
              <li>✔ High Quality Batteries</li>
              <li>✔ Farmer-Friendly Service</li>
              <li>✔ Honest Pricing</li>
              <li>✔ Local & Reliable Support</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
