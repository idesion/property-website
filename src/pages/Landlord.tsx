import React from "react";
import LandlordDetailsForm from "@/components/landlord/LandlordDetailsForm";
import LandlordHero from "@/components/landlord/LandlordHero";
import LandlordHowItWorks from "@/components/landlord/LandlordHowItWorks";
import LandlordReview from "@/components/landlord/LandlordReview";
import LandlordFAQ from "@/components/landlord/LandlordFAQ";
import AgentNetwork from "@/components/AgentNetwork";

/**
 * Landlord page component to display the landlord page.
 * @returns {JSX.Element} The Landlord page component.
 */
const Landlord: React.FC = () => {
  const reviews = [
    {
      name: "John Doe",
      role: "Property Landlord",
      content:
        "Rented my property in just 2 weeks! The AI valuation was spot-on and the tenant matching was perfect.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      role: "Property Landlord",
      content:
        "The privacy features are fantastic. No more spam calls, everything went through the platform.",
      rating: 5,
    },
    {
      name: "Alice Brown",
      role: "Property Landlord",
      content:
        "Very professional service. The instant valuation helped me price my property correctly from day one.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F0F4F4]">
      <LandlordHero />
      <LandlordDetailsForm />
      <LandlordHowItWorks />
      <AgentNetwork />
      <LandlordReview reviews={reviews} />
      <LandlordFAQ />
    </div>
  );
};

export default Landlord;
