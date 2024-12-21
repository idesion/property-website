import { useState } from "react";
import PropertyListingCard from "@/components/PropertyListingCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SlidersHorizontal } from "lucide-react";
import Map from "@/components/Map";

const SAMPLE_PROPERTIES = [
  {
    id: "1",
    image: "/placeholder.svg",
    price: 355000,
    beds: 3,
    baths: 2.5,
    sqft: 1675,
    address: "318 Crosswalk Dr",
    city: "Auburn",
    state: "GA",
  },
  {
    id: "2",
    image: "/placeholder.svg",
    price: 465000,
    beds: 5,
    baths: 4,
    sqft: 3562,
    address: "607 Stream Ct",
    city: "Fairburn",
    state: "GA",
  },
  {
    id: "3",
    image: "/placeholder.svg",
    price: 293000,
    beds: 3,
    baths: 2,
    sqft: 1360,
    address: "6841 Cherry Log Pl",
    city: "Austell",
    state: "GA",
  },
  {
    id: "4",
    image: "/placeholder.svg",
    price: 392000,
    beds: 4,
    baths: 2.5,
    sqft: 2440,
    address: "1307 Hudson Ct",
    city: "Bethlehem",
    state: "GA",
  },
];

const PropertyListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const areas = [
    { name: "Atlanta", coordinates: { lat: 33.7490, lng: -84.3880 } },
    { name: "Marietta", coordinates: { lat: 33.9526, lng: -84.5499 } },
    { name: "Decatur", coordinates: { lat: 33.7748, lng: -84.2963 } },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            Homes for sale in Atlanta
            <span className="block text-sm text-muted-foreground mt-1">
              442 listings found — Listed on the MLS. Provided by Opendoor Brokerage.
            </span>
          </h1>
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Search by location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
            <Button variant="outline">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 gap-6">
              {SAMPLE_PROPERTIES.map((property) => (
                <PropertyListingCard key={property.id} {...property} />
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 h-[calc(100vh-2rem)] sticky top-4">
            <Map areas={areas} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;