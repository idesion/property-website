import TenantHero from "@/components/TenantHero";
import Map from "@/components/Map";
import TenantHowItWorks from "@/components/TenantHowItWorks";
import SearchFilters from "@/components/SearchFilters";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star } from "lucide-react";

const Tenant = () => {
  const reviews = [
    {
      name: "John Doe",
      role: "Tenant",
      content:
        "The platform made finding a rental property so easy and stress-free.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      role: "Tenant",
      content:
        "I appreciated the verified listings and the detailed property information.",
      rating: 4,
    },
    {
      name: "Alice Brown",
      role: "Tenant",
      content:
        "Great experience! The customer support was very helpful throughout the process.",
      rating: 5,
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
      question: "How long does the renting process typically take?",
      answer:
        "The timeline varies depending on various factors, but typically takes 1-2 weeks from application to move-in. Our platform helps streamline the process.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TenantHero />

      <div className="container mx-auto py-5 px-4 pt-10">
        <div className="mb-8">
          <SearchFilters />
        </div>
      </div>

      <TenantHowItWorks />

      {/* Reviews Section */}
      <div className="bg-secondary/20 py-20 px-4 -mx-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Buyers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied tenants
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

export default Tenant;
