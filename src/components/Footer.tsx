import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Property 213</h3>
            <p className="text-gray-600 mb-4">
              Your trusted partner in real estate, making property transactions seamless and transparent.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/seller" className="text-gray-600 hover:text-primary transition-colors">
                  For Sellers
                </Link>
              </li>
              <li>
                <Link to="/buyer" className="text-gray-600 hover:text-primary transition-colors">
                  For Buyers
                </Link>
              </li>
              <li>
                <Link to="/landlord" className="text-gray-600 hover:text-primary transition-colors">
                  For Landlords
                </Link>
              </li>
              <li>
                <Link to="/tenant" className="text-gray-600 hover:text-primary transition-colors">
                  For Tenants
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Market Reports
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Property Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-600">1234 Property Street</p>
              <p className="text-gray-600">Kuala Lumpur, Malaysia</p>
              <p className="text-gray-600">+60 12-345 6789</p>
              <a href="mailto:info@property213.com" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                <Mail className="h-5 w-5" />
                info@property213.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Property 213. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;