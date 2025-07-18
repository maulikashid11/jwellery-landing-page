import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#fdfaf3] text-black py-10 px-4 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        
        <div>
          <h3 className="font-semibold text-base mb-3">Know Us</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Media Library</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-3">Customer Care</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#">Help & FAQs</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-3">Policies</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#">Find a Store</a></li>
            <li><a href="#">Jewellery Guide</a></li>
            <li><a href="#">Gold Rate</a></li>
            <li><a href="#">Offers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-3">Get in Touch</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Email: support@support.com</li>
            <li>Phone: +91 123 456 7890</li>
            <li>Mon - Sat: 10AM to 6PM</li>
            <li>
              <div className="flex space-x-3 mt-2">
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 text-xs">
        © {new Date().getFullYear()} Jwellery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
