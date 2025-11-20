import React from "react";
import { Calendar, CreditCard } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import FAQItem from "./FAQItem";

const BookingFAQ = () => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 theme-primary-text flex items-center">
        <Calendar className="h-5 w-5 mr-2" />
        Booking & Reservations
      </h3>
      <Accordion type="single" collapsible className="space-y-4" defaultValue="item-0">
        <FAQItem 
          value="item-0"
          icon={Calendar}
          question="How far in advance should I book the venue?"
          answer="We recommend booking at least 3-6 months in advance for most events, especially for weekend dates. However, we can accommodate last-minute bookings based on availability. Popular dates during the performance season (September-May) tend to fill up quickly, so early booking is advised."
        />
        <FAQItem 
          value="item-1"
          icon={CreditCard}
          question="What is your payment and deposit policy?"
          answer="We require a 30% non-refundable deposit to secure your booking date. The remaining balance is due 30 days before your event date. We accept bank transfers, credit cards, and checks. Payment plans can be arranged for extended bookings or multiple performances."
        />
        <FAQItem 
          value="item-2"
          icon={Calendar}
          question="Can I schedule rehearsal time before my event?"
          answer="Yes! Rehearsal time is included in our Premium package and available as an add-on for Standard bookings. Most productions schedule 2-3 rehearsal sessions in the week leading up to the performance. Technical rehearsals with full lighting and sound are typically scheduled the day before or day of the event."
        />
      </Accordion>
    </div>
  );
};

export default BookingFAQ;
