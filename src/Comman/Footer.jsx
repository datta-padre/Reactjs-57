
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXLine,
  RiLinkedinFill,
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
} from "@remixicon/react";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Logo & Description */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white">
              My<span className="text-blue-500">Logo</span>
            </h2>

            <p className="mb-5 leading-7 text-gray-400">
              We provide quality products and services
              to make your life easier and better.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook"
                className="rounded-lg bg-gray-800 p-2 hover:bg-blue-600 transition">
                <RiFacebookFill size={22} />
              </a>

              <a href="#" aria-label="Instagram"
                className="rounded-lg bg-gray-800 p-2 hover:bg-pink-600 transition">
                <RiInstagramLine size={22} />
              </a>

              <a href="#" aria-label="Twitter"
                className="rounded-lg bg-gray-800 p-2 hover:bg-sky-500 transition">
                <RiTwitterXLine size={22} />
              </a>

              <a href="#" aria-label="LinkedIn"
                className="rounded-lg bg-gray-800 p-2 hover:bg-blue-700 transition">
                <RiLinkedinFill size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="/product" className="hover:text-blue-400 transition">Products</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Our Services
            </h3>

            <ul className="space-y-3">
              <li><a href="/web-development" className="hover:text-blue-400 transition">Web Development</a></li>
              <li><a href="/ui-ux-design" className="hover:text-blue-400 transition">UI/UX Design</a></li>
              <li><a href="/app-development" className="hover:text-blue-400 transition">App Development</a></li>
              <li><a href="/support" className="hover:text-blue-400 transition">Support</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <RiMapPinLine size={22} className="shrink-0 text-blue-500" />
                <span>Ahmednagar, Maharashtra, India</span>
              </li>

              <li className="flex items-center gap-3">
                <RiPhoneLine size={20} className="shrink-0 text-blue-500" />
                <a href="tel:+910000000000" className="hover:text-blue-400">
                  +91 00000 00000
                </a>
              </li>

              <li className="flex items-center gap-3">
                <RiMailLine size={20} className="shrink-0 text-blue-500" />
                <a href="mailto:info@example.com" className="break-all hover:text-blue-400">
                  info@example.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} MyLogo. All rights reserved.
            </p>

            <div className="flex gap-5">
              <a href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

