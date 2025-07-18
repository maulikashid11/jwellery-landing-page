import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="https://vowels.ae/wp-content/uploads/2025/01/logo-design-ideas-for-your-jewellery-business-1024x1024.jpg" // replace with actual logo path
          alt="PNG Logo"
          className="h-10"
        />
        
      </div>

      {/* Middle Section: Navigation */}
      <ul className="flex items-center space-x-6 text-black font-medium">
        <li className="hover:text-purple-700 cursor-pointer">All Jewellery</li>
        <li className="hover:text-purple-700 cursor-pointer">
          Diamond 
        </li>
        <li className="hover:text-purple-700 cursor-pointer">
          Gold 
        </li>
        <li className="hover:text-purple-700 cursor-pointer">
          Bullions 
        </li>
        <li className="hover:text-purple-700 cursor-pointer">Investors</li>
        <li className="hover:text-purple-700 cursor-pointer">
          Silver 
        </li>
      </ul>

      {/* Right Section: Icons */}
      <div className="flex items-center space-x-6 text-xl text-gray-700">
        <FaSearch className="cursor-pointer hover:text-purple-700" />
        <FaUser className="cursor-pointer hover:text-purple-700" />
        <FaHeart className="cursor-pointer hover:text-purple-700" />
        <FaShoppingCart className="cursor-pointer hover:text-purple-700" />
      </div>
    </nav>
  );
}
