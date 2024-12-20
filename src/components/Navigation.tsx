import { Link } from "react-router-dom";
import { Home, UserPlus, Search } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-bold text-primary">PropertyBridge</span>
          </Link>
          <div className="flex space-x-8">
            <Link to="/buyer" className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
              <span>Find Property</span>
            </Link>
            <Link to="/seller" className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors">
              <UserPlus className="h-5 w-5" />
              <span>List Property</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;