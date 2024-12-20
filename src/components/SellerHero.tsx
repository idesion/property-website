import React from "react";
import { Users, Clock, Shield } from "lucide-react";

const SellerHero = () => {
  return (
    <div 
      className="relative bg-gradient-to-r from-primary/90 to-primary-light/90 py-20 px-4 min-h-[750px] before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-cover before:bg-center before:bg-no-repeat before:bg-fixed"
      style={{
        backgroundImage: "url('/lovable-uploads/003f7c21-efa5-413f-af8c-5df7049d9059.png')",
        backgroundSize: "cover"
      }}
    >
      <div className="container mx-auto text-left max-w-4xl relative z-10 ml-[5px]">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#222222]">List Your Property</h1>
        <p className="text-xl mb-8 text-[#222222]">Get an instant AI-powered valuation and connect with thousands of verified agents</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <Clock className="w-12 h-12 mb-4 text-[#222222]" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-2 text-[#222222]">Instant Valuation</h3>
            <p className="text-[#222222]">Get an AI-powered estimate in 60 seconds</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <Users className="w-12 h-12 mb-4 text-[#222222]" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-2 text-[#222222]">Verified Agents</h3>
            <p className="text-[#222222]">Connect with our network of 20,000+ agents</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <Shield className="w-12 h-12 mb-4 text-[#222222]" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-2 text-[#222222]">Privacy Protected</h3>
            <p className="text-[#222222]">All communications managed through our platform</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerHero;