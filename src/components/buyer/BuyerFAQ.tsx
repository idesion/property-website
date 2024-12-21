import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BuyerFAQ = () => {
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
    <div className="container mx-auto py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
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
  );
};

export default BuyerFAQ;
