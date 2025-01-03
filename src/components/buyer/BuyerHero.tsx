import React from "react";
import { Building2, Shield, Scale } from "lucide-react";

const BuyerHero = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-primary/90 to-primary-light/90 py-20 px-4 min-h-[750px] before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-cover before:bg-center before:bg-no-repeat before:bg-fixed"
      style={{
        backgroundImage: "url('/buyer-background.webp')",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto text-center max-w-4xl relative z-10  mr-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
          Find Your Dream Home
        </h1>
        <p className="text-xl mb-8 ">
          Access 100% verified listings with accurate pricing and details
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <Building2 className="h-8 w-8 mb-4 mx-auto " />
            <h3 className="font-bold text-xl mb-2 ">Verified Listings</h3>
            <p className="">All properties are verified by our team</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <Shield className="h-8 w-8 mb-4 mx-auto " />
            <h3 className="font-bold text-xl mb-2 ">1 Year Defect Warranty</h3>
            <p className="">Comprehensive protection for your home</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <Scale className="h-8 w-8 mb-4 mx-auto " />
            <h3 className="font-bold text-xl mb-2 ">
              Complimentary Legal Services
            </h3>
            <p className="">Enjoy free legal services for your SPA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerHero;
