
import HowItWorksContent from "./how-it-works/HowItWorksContent";
import { landlordProcessSteps } from "./how-it-works/types";

const HowItWorks = () => {
  const scrollToPropertyForm = () => {
    const element = document.getElementById('property-inquiry-form');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <HowItWorksContent
      title="How Venue Booking Works"
      subtitle="Our streamlined process gets you from inquiry to opening night in four simple steps."
      steps={landlordProcessSteps}
      ctaText="Book the Venue"
      ctaLink=""
      onCtaClick={scrollToPropertyForm}
    />
  );
};

export default HowItWorks;
