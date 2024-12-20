import SearchFilters from "@/components/SearchFilters";
import PropertyCard from "@/components/PropertyCard";
import Map from "@/components/Map";
import { Building2, Shield, Bell } from "lucide-react";

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
];

const Buyer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Dream Home</h1>
          <p className="text-xl mb-8">Access 100% verified listings with accurate pricing and details</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 p-6 rounded-lg">
              <Building2 className="h-8 w-8 mb-4 mx-auto" />
              <h3 className="font-bold text-xl mb-2">Verified Listings</h3>
              <p>All properties are verified by our team</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <Shield className="h-8 w-8 mb-4 mx-auto" />
              <h3 className="font-bold text-xl mb-2">Secure Platform</h3>
              <p>Safe and secure property search</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <Bell className="h-8 w-8 mb-4 mx-auto" />
              <h3 className="font-bold text-xl mb-2">Real-time Updates</h3>
              <p>Get notified about new properties</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <SearchFilters />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Available Properties</h2>
            <div className="grid gap-6">
              {SAMPLE_PROPERTIES.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </div>
          <div className="sticky top-4 h-fit">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyer;