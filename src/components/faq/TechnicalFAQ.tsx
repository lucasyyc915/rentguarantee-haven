import React from "react";
import { Lightbulb, Volume2 } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import FAQItem from "./FAQItem";

const TechnicalFAQ = () => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 theme-primary-text flex items-center">
        <Lightbulb className="h-5 w-5 mr-2" />
        Technical Specifications
      </h3>
      <Accordion type="single" collapsible className="space-y-4">
        <FAQItem 
          value="item-6"
          icon={Lightbulb}
          question="What lighting and sound equipment is included?"
          answer="Our venue features professional-grade lighting with intelligent fixtures, LED pars, and conventional stage lights controlled by a modern lighting console. The sound system includes a 32-channel digital mixer, line array speakers, wireless microphones, and stage monitors. A professional lighting and sound technician is included with all bookings to operate the equipment during your event."
        />
        <FAQItem 
          value="item-7"
          icon={Volume2}
          question="Can I bring my own technical equipment?"
          answer="Yes, you're welcome to bring additional equipment to supplement our existing systems. Our technical team will work with you to integrate your equipment safely. However, all external equipment must meet our safety standards and be approved by our technical director at least two weeks before your event. Load-in times can be arranged for complex technical setups."
        />
        <FAQItem 
          value="item-8"
          icon={Lightbulb}
          question="Do you provide technical support during events?"
          answer="Absolutely! All bookings include a professional stage manager and technical crew for the duration of your event. Our Premium package includes an expanded technical team with additional lighting and sound engineers. The crew will handle all technical aspects including lighting cues, sound mixing, and stage management so you can focus on your performance."
        />
      </Accordion>
    </div>
  );
};

export default TechnicalFAQ;
