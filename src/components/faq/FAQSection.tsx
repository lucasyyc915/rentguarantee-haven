
import React from "react";
import { HelpCircle } from "lucide-react";
import BookingFAQ from "./BookingFAQ";
import VenueFAQ from "./VenueFAQ";
import TechnicalFAQ from "./TechnicalFAQ";
import PoliciesFAQ from "./PoliciesFAQ";

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-3">
              <HelpCircle className="mr-2 h-8 w-8 text-purple-600" />
              <h2 className="text-3xl md:text-4xl font-bold theme-primary-text">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Everything you need to know about booking our theater venue
            </p>
          </div>

          <BookingFAQ />
          <VenueFAQ />
          <TechnicalFAQ />
          <PoliciesFAQ />

          <div className="mt-12 bg-purple-50 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between border border-purple-100">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h3 className="text-xl font-bold theme-primary-text mb-2">Still have questions?</h3>
              <p className="text-gray-700">Our team is here to help plan your perfect event</p>
            </div>
            <a 
              href="https://wa.me/919876543210?text=I%20have%20a%20question%20about%20booking%20the%20venue"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto whitespace-nowrap inline-flex items-center justify-center px-6 py-3 bg-[var(--theme-accent)] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
