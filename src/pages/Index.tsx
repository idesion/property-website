import { useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";
import Map from "@/components/Map";

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

      <main className="container mx-auto py-12 px-4"></main>
    </div>
  );
};

export default Index;
