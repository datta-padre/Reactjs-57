import { RiIdCardFill, RiShoppingCart2Fill } from "@remixicon/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold text-blue-600">
              MyLogo
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Home
            </Link>

            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">
              About
            </Link>

            <Link to="/product" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Product
            </Link>

            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Contact
            </Link>
          </div>

          {
            localStorage.getItem("token") 
            ?
              <div className="flex items-center gap-3">
            <Link to="/cart">
            <button className="px-4 py-2 bg-blue-600 px-4 py-2 text-white rounded font-medium hover:text-black hover:bg-white transition">
              <RiShoppingCart2Fill />
            </button></Link>
            <Link to="/profile">
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition">
              <RiIdCardFill />
            </button>
            </Link>
          </div>
            : 
            <div className="flex items-center gap-3">
            <Link to="/login">
            <button className="px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition">
              Login
            </button></Link>
            <Link to="/register">
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition">
              Register
            </button>
            </Link>
          </div>
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

