import { Link } from "react-router-dom";
import { Home, Search, HeadphonesIcon, User, Settings } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-bold text-primary">PropertyBridge</span>
          </Link>

          {/* Center Navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/buyer" className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
              <span>Find Houses</span>
            </Link>
            <Link to="/seller" className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
              <HeadphonesIcon className="h-5 w-5" />
              <span>Support</span>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white">
              Buy
            </Button>
            <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white">
              Sell
            </Button>
            <div className="flex items-center space-x-2 ml-4">
              <Settings className="h-5 w-5 text-gray-600 hover:text-primary cursor-pointer" />
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="h-5 w-5 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;