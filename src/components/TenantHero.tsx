import React from "react";
import { Eye, FastForward, DollarSign, Shield } from "lucide-react";

const TenantHero = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-primary/90 to-primary-light/90 py-20 px-4 min-h-[750px] before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-cover before:bg-center before:bg-no-repeat before:bg-fixed"
      style={{
        backgroundImage:
          "url('/lovable-uploads/47604c38-69ba-4b3d-bf27-8c57c22059d4.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find Your Perfect Rental Home
        </h1>
        <p className="text-xl mb-8">
          Choose how you want to rent - View first or book instantly with our guarantee
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <Eye className="h-12 w-12 mb-4 mx-auto" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-2">View Before Booking</h3>
            <p>Schedule a viewing at your convenience</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <FastForward className="h-12 w-12 mb-4 mx-auto" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-2">Direct Booking</h3>
            <p>Book instantly and get special benefits</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <DollarSign className="h-12 w-12 mb-4 mx-auto" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-2">First Month Discount</h3>
            <p>Get rental deduction on first month with direct booking</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <Shield className="h-12 w-12 mb-4 mx-auto" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-2">7-Day Guarantee</h3>
            <p>Full refund if unit differs from virtual tour</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantHero;