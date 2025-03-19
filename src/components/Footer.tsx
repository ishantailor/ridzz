
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">Ridz Events</h3>
            <p className="text-gray-400">
              Creating Unforgettable Moments, Your Event Our Passion.
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-gold transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Corporate Events</li>
              <li className="text-gray-400">Destination Weddings</li>
              <li className="text-gray-400">Social Gatherings</li>
              <li className="text-gray-400">Private Parties</li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Phone size={18} className="mr-2" />
                <span>+91 9867776826</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={18} className="mr-2" />
                <span>ridzevents17@gmail.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin size={18} className="mr-2" />
                <span>A - 804, 8th Floor, Northern Supermus, Bharucha		
                Road,s.v.Road, Dahisar (East) Mumbai - 400068</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ridz Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
