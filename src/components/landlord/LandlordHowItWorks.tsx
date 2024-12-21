import React from "react";
import { ClipboardList, Users2, HandshakeIcon, Calendar } from "lucide-react";

const steps = [
  {
    title: "List Your Property",
    description:
      "Fill in your property details and get an instant AI valuation",
    icon: ClipboardList,
    number: 1,
  },
  {
    title: "Connect with Tenants",
    description: "Get matched with top-performing tenants in your area",
    icon: Users2,
    number: 2,
  },
  {
    title: "Manage Viewings",
    description:
      "Schedule and track all property viewings through our platform",
    icon: Calendar,
    number: 3,
  },
  {
    title: "Close the Deal",
    description: "Receive and negotiate offers securely through our system",
    icon: HandshakeIcon,
    number: 4,
  },
];

/**
 * LandlordHowItWorks component to display the steps for landlords.
 * @returns {JSX.Element} The LandlordHowItWorks component.
 */
const LandlordHowItWorks: React.FC = () => {
  return (
    <div className="bg-accent/20 py-20 px-4 -mx-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simple steps to manage your rental properties
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-4 left-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex flex-col items-center pt-8">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    {React.createElement(step.icon, {
                      className: "w-12 h-12 text-primary",
                      strokeWidth: 1.5,
                    })}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-primary/20 -z-10 transform translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandlordHowItWorks;
