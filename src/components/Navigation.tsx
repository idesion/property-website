import { Link } from "react-router-dom";
import {
  Home,
  Building,
  Building2,
  UserCircle,
  ShoppingCart,
  Users,
  Menu,
} from "lucide-react";
import { useState } from "react";

/**
 * Navigation component for the website.
 * @returns {JSX.Element} The rendered navigation component.
 */
const Navigation = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Toggles the side menu panel.
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6" />
            <span className="font-display text-xl font-bold">Property 213</span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/seller"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Building2 className="h-5 w-5" />
              <span>For Seller</span>
            </Link>
            <Link
              to="/buyer"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>For Buyer</span>
            </Link>
            <Link
              to="/landlord"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Building className="h-5 w-5" />
              <span>For Landlord</span>
            </Link>
            <Link
              to="/tenant"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Users className="h-5 w-5" />
              <span>For Tenant</span>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 ml-4">
            <button onClick={toggleMenu} className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <div className="hidden md:flex w-8 h-8 rounded-full bg-gray-200 items-center justify-center">
              <UserCircle className="h-5 w-5 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Side Menu Panel */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end">
          <div className="bg-white w-64 h-full shadow-lg p-4">
            <button onClick={toggleMenu} className="mb-4">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <UserCircle className="h-5 w-5" />
                <span>Profile</span>
              </div>
              <Link
                to="/seller"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                <Building2 className="h-5 w-5" />
                <span>For Seller</span>
              </Link>
              <Link
                to="/buyer"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>For Buyer</span>
              </Link>
              <Link
                to="/landlord"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                <Building className="h-5 w-5" />
                <span>For Landlord</span>
              </Link>
              <Link
                to="/tenant"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                <Users className="h-5 w-5" />
                <span>For Tenant</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
