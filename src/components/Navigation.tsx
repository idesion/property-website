import { Link } from "react-router-dom";
import { Home, Search, Building2, UserCircle } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-gray-600" />
            <span className="font-display text-xl font-bold text-gray-600">
              Property 213
            </span>
          </Link>

          {/* Center Navigation */}
          <div className="flex items-center space-x-8">
            <Link
              to="/seller"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Home className="h-5 w-5" />
              <span>For Seller</span>
            </Link>
            <Link
              to="/buyer"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Search className="h-5 w-5" />
              <span>For Buyer</span>
            </Link>
            <Link
              to="/tenant"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Building2 className="h-5 w-5" />
              <span>For Tenant</span>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 ml-4">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <UserCircle className="h-5 w-5 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
