import { useState } from "react";
import TenantHero from "@/components/tenant/TenantHero";
import TenantHowItWorks from "@/components/tenant/TenantHowItWorks";
import Map from "@/components/Map";
import SearchFilters from "@/components/SearchFilters";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star } from "lucide-react";

const Tenant = () => {
  const areas = [
    { name: "Bukit Bintang", coordinates: { lat: 3.1466, lng: 101.6958 } },
    { name: "KLCC", coordinates: { lat: 3.1579, lng: 101.7123 } },
    { name: "Mont Kiara", coordinates: { lat: 3.1686, lng: 101.6509 } },
  ];

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
      question: "How do I apply for a rental property?",
      answer:
        "You can apply for a rental property directly through our platform by clicking the 'Apply Now' button on any property listing. Fill out the application form and submit the required documents.",
    },
    {
      question: "Are pets allowed in the rental properties?",
      answer:
        "Pet policies vary by property. You can find the pet policy details in the property listing or contact the landlord for more information.",
    },
    {
      question: "What is the process for renewing a lease?",
      answer:
        "To renew a lease, contact your landlord or property manager at least 30 days before your lease expires. They will provide you with the necessary steps and paperwork.",
    },
    {
      question: "How do I report maintenance issues?",
      answer:
        "You can report maintenance issues through our platform by clicking the 'Report Issue' button on your tenant dashboard. Provide details of the issue, and our team will address it promptly.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TenantHero />
      <SearchFilters />
      <Map areas={areas} />
      <TenantHowItWorks />

      {/* Reviews Section */}
      <div className="bg-secondary/20 py-20 px-4 -mx-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Buyers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied tenants
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5">
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
