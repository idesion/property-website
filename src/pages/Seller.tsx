import React from "react";
import {
  Users2,
  Calendar,
  HandshakeIcon,
  ClipboardList,
  Star,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SellerDetailsForm from "@/components/seller/SellerDetailsForm";
import SellerHero from "@/components/seller/SellerHero";
import SellerHowItWorks from "@/components/seller/SellerHowItWorks";
import SellerReview from "@/components/seller/SellerReview";
import SellerFAQ from "@/components/seller/SellerFAQ";
import AgentNetwork from "@/components/AgentNetwork";

const Seller = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Property Seller",
      content:
        "Sold my house in just 3 weeks! The AI valuation was spot-on and the agent matching was perfect.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Property Seller",
      content:
        "The privacy features are fantastic. No more spam calls, everything went through the platform.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Property Seller",
      content:
        "Very professional service. The instant valuation helped me price my property correctly from day one.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F0F4F4]">
      <SellerHero />
      <SellerDetailsForm />
      <SellerHowItWorks />
      <AgentNetwork />
      <SellerReview reviews={reviews} />
      <SellerFAQ />
    </div>
  );
};

export default Seller;
