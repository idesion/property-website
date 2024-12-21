import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BuyerFAQ = ({ faqs }) => {
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
