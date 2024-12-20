import SearchFilters from "@/components/SearchFilters";
import PropertyCard from "@/components/PropertyCard";
import Map from "@/components/Map";
import BuyerHero from "@/components/BuyerHero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star } from "lucide-react";

const SAMPLE_PROPERTIES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    title: "Modern Waterfront Villa",
    price: "$2,500,000",
    location: "Miami Beach, FL",
    beds: 4,
    baths: 3,
    sqft: 3200,
    type: "For Sale" as const,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    title: "Luxury Downtown Apartment",
    price: "$4,500/month",
    location: "Manhattan, NY",
    beds: 2,
    baths: 2,
    sqft: 1500,
    type: "For Rent" as const,
  },
];

const Buyer = () => {
  const steps = [
    {
      title: "Search Properties",
      description: "Browse through our verified listings with detailed filters",
      number: 1,
    },
    {
      title: "Schedule Viewings",
      description: "Book appointments to visit your favorite properties",
      number: 2,
    },
    {
      title: "Make an Offer",
      description: "Submit your offer directly through our platform",
      number: 3,
    },
    {
      title: "Close the Deal",
      description: "Complete your purchase with our secure process",
      number: 4,
    },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "First-time Homebuyer",
      content: "Found my dream home within weeks! The process was smooth and transparent.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Property Investor",
      content: "The map view feature made it so easy to find properties in my preferred location.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Homebuyer",
      content: "Very professional service. The scheduling system made viewing properties a breeze.",
      rating: 4,
    },
  ];

  const faqs = [
    {
      question: "How do I schedule a property viewing?",
      answer: "You can schedule a viewing directly through our platform by clicking the 'Schedule Viewing' button on any property listing. Choose your preferred date and time, and we'll confirm with the seller.",
    },
    {
      question: "Are all properties verified?",
      answer: "Yes, all properties listed on our platform are verified by our team to ensure accuracy of information and prevent fraud.",
    },
    {
      question: "What documents do I need to make an offer?",
      answer: "To make an offer, you'll need proof of funds or pre-approval letter, government-issued ID, and completed offer form. Our team will guide you through the process.",
    },
    {
      question: "How long does the buying process typically take?",
      answer: "The timeline varies depending on various factors, but typically takes 30-45 days from offer acceptance to closing. Our platform helps streamline the process.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <BuyerHero />

      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <SearchFilters />
        </div>
        
        <Tabs defaultValue="map" className="mb-16">
          <TabsList className="mb-4">
            <TabsTrigger value="map">Map View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>
          <TabsContent value="map" className="h-[600px]">
            <Map />
          </TabsContent>
          <TabsContent value="list">
            <div className="grid gap-6">
              {SAMPLE_PROPERTIES.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* How It Works Section */}
        <div className="bg-accent/20 py-20 -mx-4">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Simple steps to find and buy your dream property
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
                        <span className="text-4xl text-primary">{step.number}</span>
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

        {/* Buyer Reviews Section */}
        <div className="bg-secondary/20 py-20 -mx-4 mt-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Buyers Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join thousands of satisfied buyers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
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
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about buying property
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyer;