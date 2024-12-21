import { useState } from "react";
import SearchPanel from "@/components/SearchPanel";
import Map from "@/components/Map";
import BuyerHero from "@/components/buyer/BuyerHero";
import BuyerHowItWorks from "@/components/buyer/BuyerHowItWorks";
import BuyerReviews from "@/components/buyer/BuyerReviews";
import BuyerFAQ from "@/components/buyer/BuyerFAQ";
import Footer from "@/components/Footer";

const Buyer = () => {
  const areas = [
    { name: "Bukit Bintang", coordinates: { lat: 3.1466, lng: 101.6958 } },
    { name: "KLCC", coordinates: { lat: 3.1579, lng: 101.7123 } },
    { name: "Mont Kiara", coordinates: { lat: 3.1686, lng: 101.6509 } },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "First-time Homebuyer",
      content:
        "Found my dream home within weeks! The process was smooth and transparent.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Property Investor",
      content:
        "The map view feature made it so easy to find properties in my preferred location.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Homebuyer",
      content:
        "Very professional service. The scheduling system made viewing properties a breeze.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <BuyerHero />
      <SearchPanel />
      <Map areas={areas} />
      <BuyerHowItWorks />
      <BuyerReviews reviews={reviews} />
      <BuyerFAQ />
      <Footer />
    </div>
  );
};

export default Buyer;