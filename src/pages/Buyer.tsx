import SearchFilters from "@/components/SearchFilters";
import Map from "@/components/Map";
import BuyerHero from "@/components/BuyerHero";
import BuyerHowItWorks from "@/components/BuyerHowItWorks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star } from "lucide-react";

const Buyer = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "First-time Homebuyer",
      content:
        "Found my dream home within weeks! The process was smooth and transparent.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Property Investor",
      content:
        "The map view feature made it so easy to find properties in my preferred location.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Homebuyer",
      content:
        "Very professional service. The scheduling system made viewing properties a breeze.",
      rating: 4,
    },
  ];

  const faqs = [
    {
      question: "How do I schedule a property viewing?",
      answer:
        "You can schedule a viewing directly through our platform by clicking the 'Schedule Viewing' button on any property listing. Choose your preferred date and time, and we'll confirm with the seller.",
    },
    {
      question: "Are all properties verified?",
      answer:
        "Yes, all properties listed on our platform are verified by our team to ensure accuracy of information and prevent fraud.",
    },
    {
      question: "What documents do I need to make an offer?",
      answer:
        "To make an offer, you'll need proof of funds or pre-approval letter, government-issued ID, and completed offer form. Our team will guide you through the process.",
    },
    {
      question: "How long does the buying process typically take?",
      answer:
        "The timeline varies depending on various factors, but typically takes 30-45 days from offer acceptance to closing. Our platform helps streamline the process.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <BuyerHero />

      <div className="container mx-auto py-5 px-4 pt-10">
        <div className="mb-8">
          <SearchFilters />
        </div>
      </div>

      <div className="-mx-4">
        <Map />
      </div>

      <BuyerHowItWorks />

      {/* Reviews Section */}
      <div className="bg-secondary/20 py-20 px-4 -mx-4">
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
  );
};

export default Buyer;
