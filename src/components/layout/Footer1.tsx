import { Instagram, Facebook, Phone, Mail, MapPin  } from "lucide-react";
import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";


const Footer1: React.FC = () => {
  return (
    <footer className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 text-center md:text-left">
          {/* Left Side - Social */}
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPin  className="text-red-500" size={20} />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-sm text-gray-600">Paramatta, Sydney, Australia</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
            <a
  href="https://www.tiktok.com/@nirava.marriage.c?_r=1&_t=ZS-94QwOaVZRx2"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 hover:opacity-80 transition"
>
  <FaTiktok className="text-red-500" size={20} />

  <div>
    <p className="font-medium">TikTok</p>
    <p className="text-sm text-gray-600">
      nirava.marriage.c
    </p>
  </div>
</a>
            </div>
          </div>

          {/* Center Logo */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-600 tracking-wide">
              NIRAVA
            </h2>
            <p className="text-sm font-medium mt-1">Wedding Celebrant</p>
            <p className="text-xs italic text-gray-500 mb-4">
              we make your wedding easy
            </p>
          </div>

          {/* Right Side - Contact */}
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-end gap-3">
              <div className="text-center md:text-right">
                <p className="font-medium">Telephone</p>
                <p className="text-sm text-gray-600">+61 452-010-989</p>
              </div>
              <Phone className="text-red-500" size={20} />
            </div>

            <div className="flex items-center justify-center md:justify-end gap-3">
              <div className="text-center md:text-right">
                <p className="font-medium">E-Mail</p>
                <p className="text-sm text-gray-600">
                  niravacelebrant@gmail.com
                </p>
              </div>
              <Mail className="text-red-500" size={20} />
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
