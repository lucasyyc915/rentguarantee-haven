import React from "react";
import { MapPin, Users } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import FAQItem from "./FAQItem";

const VenueFAQ = () => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 theme-primary-text flex items-center">
        <MapPin className="h-5 w-5 mr-2" />
        Venue Details
      </h3>
      <Accordion type="single" collapsible className="space-y-4">
        <FAQItem 
          value="item-3"
          icon={MapPin}
          question="Is parking available at the venue?"
          answer="Yes, we have complimentary parking for up to 150 vehicles in our dedicated parking lot. Additional street parking is available on surrounding streets. For large events, we can arrange valet parking services for an additional fee. The venue is also accessible via public transportation, with a bus stop located one block away."
        />
        <FAQItem 
          value="item-4"
          icon={Users}
          question="What is the seating capacity and configuration?"
          answer="Our theater seats 500 guests in a traditional proscenium configuration. The seating includes orchestra level (350 seats), mezzanine (100 seats), and balcony (50 seats). We can also accommodate standing-room events for up to 600 guests. The venue is fully ADA compliant with wheelchair-accessible seating, restrooms, and entrances."
        />
        <FAQItem 
          value="item-5"
          icon={MapPin}
          question="Are there dressing rooms and backstage facilities?"
          answer="Yes, we have four spacious dressing rooms that can accommodate up to 30 performers total. Each room features mirrors, seating, and private restrooms. We also provide a green room for performers to relax before and after performances, complete with refreshments. Backstage facilities include secure storage areas and a loading dock for easy equipment access."
        />
      </Accordion>
    </div>
  );
};

export default VenueFAQ;
