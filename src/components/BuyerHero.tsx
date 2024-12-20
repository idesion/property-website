import React from "react";
import { Building2, Shield, Bell } from "lucide-react";

const BuyerHero = () => {
  return (
    <div 
      className="relative bg-gradient-to-r from-primary/90 to-primary-light/90 py-20 px-4 min-h-[750px] before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-cover before:bg-center before:bg-no-repeat before:bg-fixed"
      style={{
        backgroundImage: "url('/lovable-uploads/47604c38-69ba-4b3d-bf27-8c57c22059d4.png')",
        backgroundSize: "cover"
      }}
    >
      <div className="container mx-auto text-center max-w-4xl relative z-10 text-black mr-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">Find Your Dream Home</h1>
        <p className="text-xl mb-8 text-black">Access 100% verified listings with accurate pricing and details</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <Building2 className="h-8 w-8 mb-4 mx-auto text-black" />
            <h3 className="font-bold text-xl mb-2 text-black">Verified Listings</h3>
            <p className="text-black">All properties are verified by our team</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <Shield className="h-8 w-8 mb-4 mx-auto text-black" />
            <h3 className="font-bold text-xl mb-2 text-black">Secure Platform</h3>
            <p className="text-black">Safe and secure property search</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <Bell className="h-8 w-8 mb-4 mx-auto text-black" />
            <h3 className="font-bold text-xl mb-2 text-black">Real-time Updates</h3>
            <p className="text-black">Get notified about new properties</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerHero;