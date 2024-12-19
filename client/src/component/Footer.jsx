import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Branding Section */}
        <div>
          <h2 className="text-2xl font-bold">Swiggy</h2>
          <p className="mt-4 text-sm text-gray-400">
            Your ultimate destination for delicious meals, fast delivery, and quality service. Order now and satisfy your cravings!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/menu" className="text-gray-400 hover:text-white">
                Menu
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="text-gray-400">
              <span className="font-bold text-white">Address:</span> 123 Food Street, Karachi
            </li>
            <li className="text-gray-400">
              <span className="font-bold text-white">Phone:</span> +92-300-1234567
            </li>
            <li className="text-gray-400">
              <span className="font-bold text-white">Email:</span> support@swiggy.com
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          © 2024 Swiggy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
