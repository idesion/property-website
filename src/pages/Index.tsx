import { useState } from "react";
import { Link } from "react-router-dom";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";
import Map from "@/components/Map";
import { Building2, ShoppingCart, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 relative overflow-hidden min-h-[400px] group hover:scale-[1.02] transition-transform">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2 text-white">For Seller</h2>
              <p className="text-lg mb-6 text-white/90">List your property with confidence.</p>
              <div className="flex gap-4">
                <Link to="/seller">
                  <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                    Learn more
                  </Button>
                </Link>
                <Link to="/seller">
                  <Button className="bg-white text-primary-dark hover:bg-white/90">
                    List now
                  </Button>
                </Link>
              </div>
            </div>
            <Building2 className="absolute bottom-[-20px] right-[-20px] h-64 w-64 text-white/10 transform rotate-12 group-hover:rotate-6 transition-transform" />
          </div>

          {/* For Buyer Section */}
          <div className="bg-gradient-to-br from-accent to-accent-dark rounded-3xl p-8 relative overflow-hidden min-h-[400px] group hover:scale-[1.02] transition-transform">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2 text-accent-foreground">For Buyer</h2>
              <p className="text-lg mb-6 text-accent-foreground/90">Find your dream property.</p>
              <div className="flex gap-4">
                <Link to="/buyer">
                  <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-accent-foreground border-accent-foreground/20">
                    Learn more
                  </Button>
                </Link>
                <Link to="/buyer">
                  <Button className="bg-white text-accent-dark hover:bg-white/90">
                    Browse now
                  </Button>
                </Link>
              </div>
            </div>
            <ShoppingCart className="absolute bottom-[-20px] right-[-20px] h-64 w-64 text-accent-foreground/10 transform rotate-12 group-hover:rotate-6 transition-transform" />
          </div>

          {/* For Landlord Section */}
          <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-3xl p-8 relative overflow-hidden min-h-[400px] group hover:scale-[1.02] transition-transform">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2 text-secondary-foreground">For Landlord</h2>
              <p className="text-lg mb-6 text-secondary-foreground/90">Manage your rental properties.</p>
              <div className="flex gap-4">
                <Link to="/landlord">
                  <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-secondary-foreground border-secondary-foreground/20">
                    Learn more
                  </Button>
                </Link>
                <Link to="/landlord">
                  <Button className="bg-white text-secondary-dark hover:bg-white/90">
                    Start now
                  </Button>
                </Link>
              </div>
            </div>
            <Building className="absolute bottom-[-20px] right-[-20px] h-64 w-64 text-secondary-foreground/10 transform rotate-12 group-hover:rotate-6 transition-transform" />
          </div>

          {/* For Tenant Section */}
          <div className="bg-gradient-to-br from-[#7AB9C5] to-[#5A99A5] rounded-3xl p-8 relative overflow-hidden min-h-[400px] group hover:scale-[1.02] transition-transform">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2 text-white">For Tenant</h2>
              <p className="text-lg mb-6 text-white/90">Find your perfect rental home.</p>
              <div className="flex gap-4">
                <Link to="/tenant">
                  <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                    Learn more
                  </Button>
                </Link>
                <Link to="/tenant">
                  <Button className="bg-white text-[#5A99A5] hover:bg-white/90">
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