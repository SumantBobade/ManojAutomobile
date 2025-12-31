import React from "react";

function Products() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Our <span className="text-green-400">Products</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Quality products designed for farmers and vehicle owners.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Batteries */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-green-500/10 transition">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Batteries
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              We supply high-quality batteries suitable for all
              <span className="text-green-400 font-semibold">
                {" "}tractors, bikes, and vehicles
              </span>.
              Our batteries are reliable, long-lasting, and designed to perform
              well in tough working conditions.
            </p>

            <ul className="mt-5 space-y-2 text-gray-300 text-lg">
              <li>✔ Tractor Batteries</li>
              <li>✔ Bike Batteries</li>
              <li>✔ Automotive Batteries</li>
              <li>✔ Long Life & Warranty Support</li>
            </ul>
          </div>

          {/* Tractor Spare Parts */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-green-500/10 transition">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              M&M Tractor Spare Parts
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              We deal in
              <span className="text-green-400 font-semibold">
                {" "}genuine spare parts for M&M tractors
              </span>,
              ensuring perfect fit, durability, and smooth performance for
              your tractor.
            </p>

            <ul className="mt-5 space-y-2 text-gray-300 text-lg">
              <li>✔ Engine Parts</li>
              <li>✔ Clutch & Gear Parts</li>
              <li>✔ Filters & Electrical Parts</li>
              <li>✔ Original & Trusted Quality</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Products;
