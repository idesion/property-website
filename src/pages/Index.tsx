import { useState } from "react";
import { Link } from "react-router-dom";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";
import Map from "@/components/Map";
import { Building2, ShoppingCart, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Index = () => {
  const areas = [
    { name: "Bukit Bintang", coordinates: { lat: 3.1466, lng: 101.6958 } },
    { name: "KLCC", coordinates: { lat: 3.1579, lng: 101.7123 } },
    { name: "Mont Kiara", coordinates: { lat: 3.1686, lng: 101.6509 } },
  ];

  const overallStats = {
    totalTransactions: "51,700+",
    totalValue: "$15.5B",
    totalAgencies: "130+",
    totalAgents: "20,000+",
  };

  const agencyStats = [
    {
      name: "Century 21",
      logo: "/placeholder.svg",
    },
    {
      name: "RE/MAX",
      logo: "/placeholder.svg",
    },
    {
      name: "Coldwell Banker",
      logo: "/placeholder.svg",
    },
    {
      name: "Keller Williams",
      logo: "/placeholder.svg",
    },
    {
      name: "Sotheby's",
      logo: "/placeholder.svg",
    },
    {
      name: "Berkshire Hathaway",
      logo: "/placeholder.svg",
    },
    {
      name: "eXp Realty",
      logo: "/placeholder.svg",
    },
    {
      name: "Compass",
      logo: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative bg-gradient-to-r from-primary/90 to-primary-light/90 py-20 px-4 min-h-[750px] before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-cover before:bg-center before:bg-no-repeat before:bg-fixed"
        style={{
          background:
            "linear-gradient(rgba(110, 110, 110, 0.5), rgba(110, 110, 110, 0.5)), url('/index-background.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl mb-8">
            Discover the perfect property from our curated selection
          </p>
          <div className="max-w-4xl mx-auto bg-white/10 p-4 rounded-lg shadow-md">
            <Tabs defaultValue="buy">
              <TabsList className="bg-transparent border-b-0">
                <TabsTrigger value="buy">Buy</TabsTrigger>
                <TabsTrigger value="rent">Rent</TabsTrigger>
              </TabsList>
              <TabsContent value="buy">
                <SearchFilters />
              </TabsContent>
              <TabsContent value="rent">
                <SearchFilters />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Map areas={areas} />
      <main className="container mx-auto py-12 px-4">
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* For Seller Section */}
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white relative overflow-hidden min-h-[300px] group hover:scale-[1.02] transition-transform">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">For Seller</h2>
              <p className="text-lg mb-6">
                List your property with confidence.
              </p>
              <div className="flex gap-4">
                <Link to="/seller">
                  <Button
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                  >
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
          <div className="bg-gradient-to-br from-accent to-accent-dark rounded-3xl p-8 text-[#747474] relative overflow-hidden min-h-[300px] group hover:scale-[1.02] transition-transform">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">For Buyer</h2>
              <p className="text-lg mb-6">Find your dream property.</p>
              <div className="flex gap-4">
                <Link to="/buyer">
                  <Button
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 border-white/20"
                  >
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
            <ShoppingCart className="absolute bottom-[-20px] right-[-20px] h-64 w-64 text-white/10 transform rotate-12 group-hover:rotate-6 transition-transform" />
          </div>

          {/* For Landlord Section */}
          <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-3xl p-8 text-[#747474] relative overflow-hidden min-h-[300px] group hover:scale-[1.02] transition-transform">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">For Landlord</h2>
              <p className="text-lg mb-6">Manage your rental properties.</p>
              <div className="flex gap-4">
                <Link to="/landlord">
                  <Button
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-[#747474] border-white/20"
                  >
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
            <Building className="absolute bottom-[-20px] right-[-20px] h-64 w-64 text-white/10 transform rotate-12 group-hover:rotate-6 transition-transform" />
          </div>

          {/* For Tenant Section */}
          <div className="bg-gradient-to-br from-[#7AB9C5] to-[#5A99A5] rounded-3xl p-8 text-white relative overflow-hidden min-h-[300px] group hover:scale-[1.02] transition-transform">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">For Tenant</h2>
              <p className="text-lg mb-6">Find your perfect rental home.</p>
              <div className="flex gap-4">
                <Link to="/tenant">
                  <Button
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                  >
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

      {/* Agency Network Section */}
      <div className="bg-accent/20">
        <div className="container mx-auto py-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Agent Network</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Partner with the most successful real estate agencies in the
              country
            </p>
          </div>
          {/* Overall Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <h4 className="text-4xl font-bold text-primary mb-2">
                {overallStats.totalTransactions}
              </h4>
              <p className="text-gray-600">annual transactions completed</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold text-primary mb-2">
                {overallStats.totalValue}
              </h4>
              <p className="text-gray-600">total property value transacted</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold text-primary mb-2">
                {overallStats.totalAgencies}
              </h4>
              <p className="text-gray-600">partnered agencies</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold text-primary mb-2">
                {overallStats.totalAgents}
              </h4>
              <p className="text-gray-600">trusted agents</p>
            </div>
          </div>
          {/* Agency Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            {agencyStats.map((agency, index) => (
              <img
                key={index}
                src={agency.logo}
                alt={`${agency.name} logo`}
                className="w-24 h-24 object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
