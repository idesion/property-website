import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TenantFAQ = () => {
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
    <div className="container mx-auto py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about tenant property
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
  );
};

export default TenantFAQ;
