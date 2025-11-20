import { ShieldCheck, Wrench, DollarSign, Building, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const GuaranteeSection = () => {
  return (
    <section id="triple-guarantee" className="py-16 theme-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 theme-primary-text">Our Complete Service Package</h2>
          <div className="accent-line mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for a successful performance, included with every venue rental.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <GuaranteeCard
            icon={DollarSign}
            title="Professional Lighting"
            description="State-of-the-art LED lighting system with intelligent moving heads, spotlights, and full DMX control. Our lighting designer works with you to create the perfect atmosphere for your performance."
            iconColor="theme-primary-text"
            bgColor="bg-primary-light"
            borderColor="border-primary-light"
            badgeColor="bg-[var(--theme-primary)]"
            glowColor="shadow-primary-glow"
          />
          
          <GuaranteeCard
            icon={Wrench}
            title="Premium Sound System"
            description="Concert-grade sound system with crystal-clear acoustics throughout the auditorium. Professional audio engineer included to ensure perfect sound balance for every performance."
            iconColor="theme-primary-text"
            bgColor="bg-primary-light"
            borderColor="border-primary-light"
            badgeColor="bg-[var(--theme-primary)]"
            glowColor="shadow-primary-glow"
          />
          
          <GuaranteeCard
            icon={Building}
            title="Technical Support Staff"
            description="Experienced stage technicians, lighting operators, and sound engineers on-site during your event. From setup to final curtain, our team ensures everything runs smoothly."
            iconColor="theme-primary-text"
            bgColor="bg-primary-light"
            borderColor="border-primary-light" 
            badgeColor="bg-[var(--theme-primary)]"
            glowColor="shadow-primary-glow"
          />

          <GuaranteeCard
            icon={FileCheck}
            title="Rehearsal Space Access"
            description="Complimentary rehearsal time included with every booking. Get familiar with the stage, test your technical requirements, and ensure your performance is ready for opening night."
            iconColor="theme-primary-text"
            bgColor="bg-primary-light"
            borderColor="border-primary-light" 
            badgeColor="bg-[var(--theme-primary)]"
            glowColor="shadow-primary-glow"
          />
        </div>
      </div>
    </section>
  );
};

const GuaranteeCard = ({
  icon: Icon,
  title,
  description,
  iconColor,
  bgColor,
  borderColor,
  badgeColor,
  glowColor,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  iconColor: string;
  bgColor: string;
  borderColor: string;
  badgeColor: string;
  glowColor: string;
}) => {
  return (
    <div className={`bg-white/95 rounded-xl p-8 shadow-lg border-2 ${borderColor} h-full transform transition-all duration-300 hover:scale-[1.03] hover:${glowColor} relative overflow-hidden`}>
      {/* Badge with glow effect */}
      <div className="absolute -top-3 -right-3">
        <div className={`p-3 rounded-full ${badgeColor} shadow-lg flex items-center justify-center animate-primary-pulse`}>
          <ShieldCheck className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
      </div>
      
      {/* Subtle diagonal background stripe */}
      <div className={`absolute top-0 right-0 h-32 w-32 -mr-10 -mt-10 rotate-45 opacity-10 ${badgeColor}`}></div>
      
      <div className="flex flex-col items-center mb-6 relative z-10">
        <div className={cn("w-20 h-20 rounded-full flex items-center justify-center mb-2 transition-all duration-300", bgColor, borderColor, "border-2")}>
          <Icon className={cn("w-10 h-10", iconColor)} strokeWidth={1.5} />
        </div>
        <h3 className={`text-xl font-bold text-center mt-4 mb-1 theme-primary-text`}>{title}</h3>
        <div className={`h-1 w-16 ${badgeColor} rounded-full mt-1 mb-2`}></div>
      </div>
      <p className="text-gray-700 text-center relative z-10">{description}</p>
      
      {/* 100% Guarantee indicator */}
      <div className="mt-5 text-center">
        <span className={`text-xs font-semibold uppercase tracking-wider theme-primary-text`}>100% Guaranteed</span>
      </div>
    </div>
  );
};

export default GuaranteeSection;
