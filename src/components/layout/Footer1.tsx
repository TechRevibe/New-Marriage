import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer1: React.FC = () => {
  return (
    <footer className="py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 text-center md:text-left">

          {/* Left Side - Social */}
          <div className="space-y-6 w-full flex flex-col items-center md:items-start">
            <a
              href="https://www.facebook.com/people/Nirava-Kc/61583918042011/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full md:w-auto gap-3 justify-center"
            >
              <FaFacebook className="text-red-500 mt-1" size={20} />
              <div className="leading-tight text-left">
                <p className="font-medium">Facebook</p>
                <p className="text-sm text-gray-600">Nirava KC</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full md:w-auto gap-3 justify-center"
            >
              <FaInstagram className="text-red-500 mt-1" size={20} />
              <div className="leading-tight text-left">
                <p className="font-medium">Instagram</p>
                <p className="text-sm text-gray-600">/ nirava kc</p>
              </div>
            </a>

            <a
              href="https://www.tiktok.com/@nirava.marriage.c"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full md:w-auto gap-3 justify-center pl-20 mr-5 md:pl-0"
            >
              <FaTiktok className="text-red-500 mt-1" size={20} />
              <div className="leading-tight text-left">
                <p className="font-medium">TikTok</p>
                <p className="text-sm text-gray-600">@nirava.marriage.c</p>
              </div>
            </a>
          </div>

          {/* Center Logo */}
          <div className="text-center mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-red-600 tracking-wide">
              NIRAVA
            </h2>
            <p className="text-sm font-medium mt-1">Wedding Celebrant</p>
            <p className="text-xs italic text-gray-500 mt-2">
              we make your wedding easy
            </p>
          </div>

          {/* Right Side - Contact */}
          <div className="space-y-6 w-full flex flex-col items-center md:items-end">
            <div className="flex items-center w-full md:w-auto gap-3 justify-center md:justify-end">
              <Phone className="text-red-500 mt-1" size={20} />
              <div className="leading-tight text-left md:text-right whitespace-nowrap">
                <p className="font-medium">Phone</p>
                <p className="text-sm text-gray-600">+61 452 010 989</p>
              </div>
            </div>

            <div className="flex items-center pl-24 w-full md:w-auto gap-3 justify-center md:justify-end">
              <Mail className="text-red-500 mt-1" size={20} />
              <div className="leading-tight text-left md:text-right">
                <p className="font-medium">E-Mail</p>
                <p className="text-sm text-gray-600">niravacelebrant@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center pl-24 w-full md:w-auto gap-3 justify-center md:justify-end">
              <MapPin className="text-red-500 mt-1" size={20} />
              <div className="leading-tight text-left md:text-right">
                <p className="font-medium">Address</p>
                <p className="text-sm text-gray-600">
                  Parramatta, Sydney, Australia
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Links */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-2 text-sm text-gray-600">
          <span>© 2025 Nirava Wedding. All rights reserved</span>
          <span>|</span>
          <Link to="/terms" className="hover:text-red-500 text-primary">
            Terms & Conditions
          </Link>
          <span>|</span>
          <Link to="/contact" className="hover:text-red-500 text-primary">
            Contact
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer1;