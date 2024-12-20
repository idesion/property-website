import SearchFilters from "@/components/SearchFilters";
import PropertyCard from "@/components/PropertyCard";
import Map from "@/components/Map";
import BuyerHero from "@/components/BuyerHero";

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
      <BuyerHero />

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
