import React from "react";
import { Users, Clock, Shield, Star, ClipboardList, Users2, Calendar, HandshakeIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PropertyDetailsForm from "@/components/PropertyDetailsForm";

const Seller = () => {
  const steps = [
    {
      title: "List Your Property",
      description: "Fill in your property details and get an instant AI valuation",
      icon: ClipboardList,
    },
    {
      title: "Connect with Agents",
      description: "Get matched with top-performing agents in your area",
      icon: Users2,
    },
    {
      title: "Manage Viewings",
      description: "Schedule and track all property viewings through our platform",
      icon: Calendar,
    },
    {
      title: "Close the Deal",
      description: "Receive and negotiate offers securely through our system",
      icon: HandshakeIcon,
    },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Property Seller",
      content: "Sold my house in just 3 weeks! The AI valuation was spot-on and the agent matching was perfect.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Property Seller",
      content: "The privacy features are fantastic. No more spam calls, everything went through the platform.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Property Seller",
      content: "Very professional service. The instant valuation helped me price my property correctly from day one.",
      rating: 4,
    },
  ];

  const faqs = [
    {
      question: "How accurate is the AI valuation?",
      answer: "Our AI valuation tool is trained on millions of property transactions and has a typical accuracy rate of 95% in most areas. However, we always recommend getting a professional agent's opinion as well.",
    },
    {
      question: "How do you verify real estate agents?",
      answer: "All agents on our platform go through a rigorous verification process including license verification, background checks, and performance history review.",
    },
    {
      question: "Are there any upfront fees?",
      answer: "No, there are no upfront fees to list your property. We only charge a small commission when your property successfully sells.",
    },
    {
      question: "How long does it typically take to sell a property?",
      answer: "While selling times vary by market conditions and property type, our platform users typically sell 30% faster than the market average.",
    },
  ];

  const overallStats = {
    totalTransactions: "51,700+",
    totalValue: "$15.5B",
    averageGrowth: "+13%",
    totalAgencies: "130+",
    totalAgents: "20,000+"
  };

  const agencyStats = [
    {
      name: "Century 21",
      logo: "/placeholder.svg",
    },
    {
      name: "RE/MAX",
      logo: "/placeholder.svg",
    },
    {
      name: "Coldwell Banker",
      logo: "/placeholder.svg",
    },
    {
      name: "Keller Williams",
      logo: "/placeholder.svg",
    },
    {
      name: "Sotheby's",
      logo: "/placeholder.svg",
    },
    {
      name: "Berkshire Hathaway",
      logo: "/placeholder.svg",
    },
    {
      name: "eXp Realty",
      logo: "/placeholder.svg",
    },
    {
      name: "Compass",
      logo: "/placeholder.svg",
    }
  ];

  return (
    <div className="min-h-screen bg-[#F0F4F4]">
      {/* Hero Section */}
      <div 
        className="relative bg-gradient-to-r from-primary/90 to-primary-light/90 text-white py-20 px-4 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-cover before:bg-center before:bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/003f7c21-efa5-413f-af8c-5df7049d9059.png')",
        }}
      >
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">List Your Property</h1>
          <p className="text-xl mb-8">Get an instant AI-powered valuation and connect with thousands of verified agents</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-2">Instant Valuation</h3>
              <p>Get an AI-powered estimate in 60 seconds</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-2">Verified Agents</h3>
              <p>Connect with our network of 20,000+ agents</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-2">Privacy Protected</h3>
              <p>All communications managed through our platform</p>
            </div>
          </div>
        </div>
      </div>

      {/* Property Form Section */}
      <div className="container mx-auto py-12 px-4">
        <PropertyDetailsForm />
      </div>

      {/* How It Works Section */}
      <div className="bg-accent/20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Simple steps to sell your property faster</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex flex-col items-center pt-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      {React.createElement(step.icon, {
                        className: "w-12 h-12 text-primary",
                        strokeWidth: 1.5
                      })}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center">{step.description}</p>
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

      {/* Agency Network Section */}
      <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Agent Network</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Partner with the most successful real estate agencies in the country
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="text-center">
            <h4 className="text-4xl font-bold text-primary mb-2">{overallStats.totalTransactions}</h4>
            <p className="text-gray-600">Transactions</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold text-primary mb-2">{overallStats.totalValue}</h4>
            <p className="text-gray-600">Total Value</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold text-green-500 mb-2">{overallStats.averageGrowth}</h4>
            <p className="text-gray-600">YoY Growth</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold text-primary mb-2">{overallStats.totalAgencies}</h4>
            <p className="text-gray-600">Agencies</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold text-primary mb-2">{overallStats.totalAgents}</h4>
            <p className="text-gray-600">Agents</p>
          </div>
        </div>

        {/* Agency Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {agencyStats.map((agency, index) => (
            <img 
              key={index}
              src={agency.logo} 
              alt={`${agency.name} logo`} 
              className="w-24 h-24 object-contain grayscale hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Sellers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Join thousands of satisfied sellers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.content}</p>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about selling with us</p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Seller;
