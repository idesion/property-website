import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SellerFAQ = () => {
  const faqs = [
    {
      question: "How accurate is the AI valuation?",
      answer:
        "Our AI valuation tool is trained on millions of property transactions and has a typical accuracy rate of 95% in most areas. However, we always recommend getting a professional agent's opinion as well.",
    },
    {
      question: "How do you verify real estate agents?",
      answer:
        "All agents on our platform go through a rigorous verification process including license verification, background checks, and performance history review.",
    },
    {
      question: "Are there any upfront fees?",
      answer:
        "No, there are no upfront fees to list your property. We only charge a small commission when your property successfully sells.",
    },
    {
      question: "How long does it typically take to sell a property?",
      answer:
        "While selling times vary by market conditions and property type, our platform users typically sell 30% faster than the market average.",
    },
  ];

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about selling with us
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

export default SellerFAQ;
