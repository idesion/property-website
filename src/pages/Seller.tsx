import { useState } from "react";
import { Building2, MapPin, Ruler, BedDouble, Bath, DollarSign, Calendar, Shield, Users, Clock, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Map from "@/components/Map";

const Seller = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    propertyType: "",
    location: "",
    squareFeet: "",
    bedrooms: "",
    bathrooms: "",
    price: "",
    yearBuilt: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Valuation Request Received",
      description: "We'll analyze your property details and send you an estimate shortly.",
    });
  };

  const benefits = [
    {
      title: "List Once, Reach Thousands",
      description: "Instant access to our network of 20,000+ verified real estate agents",
      icon: Users,
    },
    {
      title: "Accelerated Sales",
      description: "Accelerate your property sale through our extensive agent network",
      icon: Clock,
    },
    {
      title: "Enhanced Privacy",
      description: "All viewing requests managed through our secure platform",
      icon: Shield,
    },
  ];

  const steps = [
    {
      title: "List Your Property",
      description: "Fill in your property details and get an instant AI valuation",
    },
    {
      title: "Connect with Agents",
      description: "Get matched with top-performing agents in your area",
    },
    {
      title: "Manage Viewings",
      description: "Schedule and track all property viewings through our platform",
    },
    {
      title: "Close the Deal",
      description: "Receive and negotiate offers securely through our system",
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

  return (
    <div className="min-h-screen bg-[#F0F4F4]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
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

      {/* Benefits Section */}
      <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Sell With Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Join thousands of successful sellers who've trusted our platform</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <benefit.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
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
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-primary/20 -z-10 transform translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Network Map Section */}
      <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Agent Network</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Over 20,000 verified agents across the country ready to help you sell your property
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <Map />
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

      {/* Property Form Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-2xl mx-auto form-container">
          <h2 className="text-2xl font-bold mb-6">Property Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Property Type</label>
                <div className="input-group">
                  <Building2 className="input-icon" size={20} />
                  <Input
                    placeholder="e.g., Apartment, House, Villa"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <div className="input-group">
                  <MapPin className="input-icon" size={20} />
                  <Input
                    placeholder="Enter address"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Square Feet</label>
                <div className="input-group">
                  <Ruler className="input-icon" size={20} />
                  <Input
                    type="number"
                    placeholder="Total area"
                    value={formData.squareFeet}
                    onChange={(e) => setFormData({ ...formData, squareFeet: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Price</label>
                <div className="input-group">
                  <DollarSign className="input-icon" size={20} />
                  <Input
                    type="number"
                    placeholder="Expected price"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bedrooms</label>
                <div className="input-group">
                  <BedDouble className="input-icon" size={20} />
                  <Input
                    type="number"
                    placeholder="Number of bedrooms"
                    value={formData.bedrooms}
                    onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bathrooms</label>
                <div className="input-group">
                  <Bath className="input-icon" size={20} />
                  <Input
                    type="number"
                    placeholder="Number of bathrooms"
                    value={formData.bathrooms}
                    onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Year Built</label>
                <div className="input-group">
                  <Calendar className="input-icon" size={20} />
                  <Input
                    type="number"
                    placeholder="Construction year"
                    value={formData.yearBuilt}
                    onChange={(e) => setFormData({ ...formData, yearBuilt: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-dark text-white rounded-xl py-6"
            >
              Get Instant Valuation
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Seller;