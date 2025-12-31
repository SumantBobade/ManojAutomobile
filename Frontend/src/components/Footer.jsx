import React from "react";

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-extrabold text-white">
              Manoj <span className="text-green-400">Automobile</span>
            </h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Trusted automobile shop providing batteries for all tractors and
              bikes, and genuine M&amp;M tractor spare parts. Serving farmers
              with honesty and quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-green-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-green-400 cursor-pointer">Home</li>
              <li className="hover:text-green-400 cursor-pointer">About Us</li>
              <li className="hover:text-green-400 cursor-pointer">Products</li>
              <li className="hover:text-green-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-green-400 mb-4">
              Contact
            </h4>
            <p className="text-sm">
              📞 
              <a
                href="tel:+919049967133"
                className="text-green-400 font-semibold ml-2"
              >
                +91 90499 67133
              </a>
            </p>

            <p className="text-sm mt-2">
              💬 
              <a
                href="https://wa.me/919049967133"
                className="text-green-400 font-semibold ml-2"
              >
                WhatsApp Chat
              </a>
            </p>

            <p className="text-sm mt-2 text-gray-400">
              📍 Main Road, Near Nagar Panchayat,<br />
              Seloo / Wardha
            </p>

            <p className="text-sm mt-2 text-gray-400">
              ⏰ Mon – Sat: 9 AM – 7 PM
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Manoj Automobile. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
