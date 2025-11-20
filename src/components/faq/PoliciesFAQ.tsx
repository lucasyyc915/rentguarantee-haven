import React from "react";
import { FileText, Ban } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import FAQItem from "./FAQItem";

const PoliciesFAQ = () => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 theme-primary-text flex items-center">
        <FileText className="h-5 w-5 mr-2" />
        Policies & Regulations
      </h3>
      <Accordion type="single" collapsible className="space-y-4">
        <FAQItem 
          value="item-9"
          icon={FileText}
          question="What is your cancellation and refund policy?"
          answer="Cancellations made more than 90 days before the event date will receive a 70% refund of amounts paid (the 30% deposit is non-refundable). Cancellations made 60-90 days prior receive a 50% refund. Cancellations within 60 days of the event are non-refundable. However, you may reschedule your event to another available date within one year at no additional charge (subject to availability)."
        />
        <FAQItem 
          value="item-10"
          icon={Ban}
          question="Can we sell tickets for our event at the venue?"
          answer="Yes! We can handle ticket sales through our box office for a 10% service fee, or you can manage your own ticketing through platforms like Eventbrite or ShowClix. Our box office is open two hours before each performance and can also sell tickets in advance. We'll provide you with detailed sales reports and handle all transactions securely."
        />
        <FAQItem 
          value="item-11"
          icon={FileText}
          question="Are there any restrictions on event types or content?"
          answer="We welcome a wide variety of performances including theater, dance, music concerts, comedy shows, and corporate events. We do require that all content be appropriate for a general audience (no explicit adult content). Events involving pyrotechnics, smoke machines, or special effects require advance approval and may incur additional fees for safety measures. All events must comply with local noise ordinances."
        />
      </Accordion>
    </div>
  );
};

export default PoliciesFAQ;
