import { useState } from "react";
import SearchFilters from "@/components/SearchFilters";
import Map from "@/components/Map";
import BuyerHero from "@/components/buyer/BuyerHero";
import BuyerHowItWorks from "@/components/buyer/BuyerHowItWorks";
import BuyerReviews from "@/components/buyer/BuyerReviews";
import BuyerFAQ from "@/components/buyer/BuyerFAQ";
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

  const faqs = [
    {
      question: "How do I schedule a property viewing?",
      answer:
        "You can schedule a viewing directly through our platform by clicking the 'Schedule Viewing' button on any property listing. Choose your preferred date and time, and we'll confirm with the seller.",
    },
    {
      question: "Are all properties verified?",
      answer:
        "Yes, all properties listed on our platform are verified by our team to ensure accuracy of information and prevent fraud.",
    },
    {
      question: "What documents do I need to make an offer?",
      answer:
        "To make an offer, you'll need proof of funds or pre-approval letter, government-issued ID, and completed offer form. Our team will guide you through the process.",
    },
    {
      question: "How long does the buying process typically take?",
      answer:
        "The timeline varies depending on various factors, but typically takes 30-45 days from offer acceptance to closing. Our platform helps streamline the process.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <BuyerHero />
      <SearchFilters />
      <Map areas={areas} />
      <BuyerHowItWorks />
      <BuyerReviews reviews={reviews} />
      <BuyerFAQ faqs={faqs} />
    </div>
  );
};

export default Buyer;
