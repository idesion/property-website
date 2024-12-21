import { useState } from "react";
import { Link } from "react-router-dom";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";
import Map from "@/components/Map";
import { Building2, ShoppingCart, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const SAMPLE_PROPERTIES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    title: "Modern Waterfront Villa",
    price: "$2,500,000",
    location: "Miami Beach, FL",
    beds: 4,
    baths: 3,
    sqft: 3200,
    type: "For Sale" as const,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    title: "Luxury Downtown Apartment",
    price: "$4,500/month",
    location: "Manhattan, NY",
    beds: 2,
    baths: 2,
    sqft: 1500,
    type: "For Rent" as const,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Contemporary Smart Home",
    price: "$1,850,000",
    location: "Los Angeles, CA",
    beds: 3,
    baths: 2.5,
    sqft: 2800,
    type: "New Launch" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl mb-8">
            Discover the perfect property from our curated selection
          </p>
          <div className="max-w-4xl mx-auto">
            <SearchFilters />
          </div>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* For Seller Section */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden min-h-[400px] group hover:scale-[1.02] transition-transform">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">For Seller</h2>
              <p className="text-lg mb-6">List your property with confidence.</p>
              <div className="flex gap-4">
                <Link to="/seller">
                  <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                    Learn more
                  </Button>
                </Link>
                <Link to="/seller">
                  <Button className="bg-white text-blue-900 hover:bg-white/90">
                    List now
                  </Button>
                </Link>
              </div>
            </div>
            <Building2 className="absolute bottom-[-20px] right-[-20px] h-64 w-64 text-white/10 transform rotate-12 group-hover:rotate-6 transition-transform" />
          </div>

          {/* For Buyer Section */}
          <div className="bg-gradient-to-br from-sky-400 to-blue-500 rounded-3xl p-8 text-white relative overflow-hidden min-h-[400px] group hover:scale-[1.02] transition-transform">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">For Buyer</h2>
              <p className="text-lg mb-6">Find your dream property.</p>
              <div className="flex gap-4">
                <Link to="/buyer">
                  <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                    Learn more
                  </Button>
                </Link>
                <Link to="/buyer">
                  <Button className="bg-white text-blue-500 hover:bg-white/90">
                    Browse now
                  </Button>
                </Link>
              </div>
            </div>
            <ShoppingCart className="absolute bottom-[-20px] right-[-20px] h-64 w-64 text-white/10 transform rotate-12 group-hover:rotate-6 transition-transform" />
          </div>

          {/* For Landlord Section */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden min-h-[400px] group hover:scale-[1.02] transition-transform">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">For Landlord</h2>
              <p className="text-lg mb-6">Manage your rental properties.</p>
              <div className="flex gap-4">
                <Link to="/landlord">
                  <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                    Learn more
                  </Button>
                </Link>
                <Link to="/landlord">
                  <Button className="bg-white text-gray-900 hover:bg-white/90">
                    Start now
                  </Button>
                </Link>
              </div>
            </div>
            <Building className="absolute bottom-[-20px] right-[-20px] h-64 w-64 text-white/10 transform rotate-12 group-hover:rotate-6 transition-transform" />
          </div>

          {/* For Tenant Section */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden min-h-[400px] group hover:scale-[1.02] transition-transform">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">For Tenant</h2>
              <p className="text-lg mb-6">Find your perfect rental home.</p>
              <div className="flex gap-4">
                <Link to="/tenant">
                  <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                    Learn more
                  </Button>
                </Link>
                <Link to="/tenant">
                  <Button className="bg-white text-indigo-600 hover:bg-white/90">
                    Rent now
                  </Button>
                </Link>
              </div>
            </div>
            <Users className="absolute bottom-[-20px] right-[-20px] h-64 w-64 text-white/10 transform rotate-12 group-hover:rotate-6 transition-transform" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;