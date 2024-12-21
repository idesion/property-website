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
import Footer from "@/components/Footer";

const Seller = () => {
  return (
    <div className="min-h-screen bg-[#F0F4F4]">
      <SellerHero />
      <SellerDetailsForm />
      <SellerHowItWorks />
      <AgentNetwork />
      <SellerReview reviews={reviews} />
      <SellerFAQ />
      <Footer />
    </div>
  );
};

export default Seller;