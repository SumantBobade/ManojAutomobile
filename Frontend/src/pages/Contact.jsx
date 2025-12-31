import React from "react";

function Contact() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Contact <span className="text-green-400">Manoj Automobile</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Call or visit us for batteries and genuine M&M tractor spare parts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Details */}
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Get in Touch
              </h3>

              <p className="text-gray-300 text-lg">
                📞 Phone:
                <a
                  href="tel:+919049967133"
                  className="text-green-400 font-semibold ml-2"
                >
                  +91 90499 67133
                </a>
              </p>

              <p className="text-gray-300 text-lg mt-3">
                💬 WhatsApp:
                <a
                  href="https://wa.me/919049967133"
                  className="text-green-400 font-semibold ml-2"
                >
                  Chat Now
                </a>
              </p>

              <p className="text-gray-300 text-lg mt-3">
                📍 Address:
                <span className="block text-gray-400 mt-1">
                  Main Road, Near Nagar Panchayat,
                  <br />
                  Seloo / Wardha
                </span>
              </p>

              <p className="text-gray-300 text-lg mt-3">
                ⏰ Business Hours:
                <span className="block text-gray-400 mt-1">
                  Mon – Sat: 9:00 AM – 7:00 PM
                  <br />
                  Sunday: Open
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
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

          {/* Right: Map + Quick Form */}
          <div className="space-y-6">
            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-800 h-64 md:h-80">
              <iframe
                title="Manoj Automobile Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d932.2415372902992!2d78.70208480247928!3d20.83307336696669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd487a54cae3391%3A0x1f1485e1a6829075!2sManoj%20Automobile%20%2Cseloo%20Wardha!5e0!3m2!1sen!2sin!4v1767201557138!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Simple Contact Form */}
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Quick Enquiry
              </h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:border-green-400"
                />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:border-green-400"
                />

                <textarea
                  placeholder="Message (Battery / Tractor Part)"
                  rows="3"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:border-green-400"
                ></textarea>

                <button
                  type="submit"
                  className="bg-green-500 text-black px-6 py-3 rounded-full font-bold hover:bg-green-400 transition w-full"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Trust Footer */}
        <div className="text-center mt-16 text-gray-400 text-sm">
          Trusted by farmers • Genuine parts • Honest service
        </div>
      </div>
    </section>
  );
}

export default Contact;
