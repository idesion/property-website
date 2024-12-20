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

        {/* How it Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Search Properties</h3>
              <p className="text-gray-600">Browse through our verified listings with detailed filters</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule Viewings</h3>
              <p className="text-gray-600">Book appointments to visit your favorite properties</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Make an Offer</h3>
              <p className="text-gray-600">Submit your offer directly through our platform</p>
            </div>
          </div>
        </section>

        {/* Buyer Reviews Section */}
        <section className="mb-16 bg-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8">What Our Buyers Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4">"Found my dream home within weeks! The process was smooth and transparent."</p>
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm text-gray-600">First-time Homebuyer</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4">"The map view feature made it so easy to find properties in my preferred location."</p>
              <div className="font-semibold">Michael Chen</div>
              <div className="text-sm text-gray-600">Property Investor</div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I schedule a property viewing?</AccordionTrigger>
              <AccordionContent>
                You can schedule a viewing directly through our platform by clicking the "Schedule Viewing" button on any property listing. Choose your preferred date and time, and we'll confirm with the seller.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are all properties verified?</AccordionTrigger>
              <AccordionContent>
                Yes, all properties listed on our platform are verified by our team to ensure accuracy of information and prevent fraud.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What documents do I need to make an offer?</AccordionTrigger>
              <AccordionContent>
                To make an offer, you'll need proof of funds or pre-approval letter, government-issued ID, and completed offer form. Our team will guide you through the process.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
};

export default Buyer;