
import React from 'react';

type BenefitProps = {
  number: number;
  title: string;
  description: string;
};

const Benefit = ({ number, title, description }: BenefitProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f5f0ff] text-[var(--theme-primary)] flex items-center justify-center font-semibold text-sm">
        {number}
      </div>
      <div>
        <h4 className="font-bold text-[var(--theme-primary)] text-xl mb-2">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const PropertyOwnersLove = () => {
  const benefits = [
    {
      number: 1,
      title: "Professional Setup",
      description: "State-of-the-art lighting, sound, and stage equipment handled by expert technicians"
    },
    {
      number: 2,
      title: "Focus on Performance",
      description: "Our technical crew manages everything so you can concentrate on your art"
    },
    {
      number: 3,
      title: "Flexible Packages",
      description: "Customizable rental options with rehearsal time and technical support included"
    },
    {
      number: 4,
      title: "Prime Location",
      description: "500-seat capacity with excellent acoustics and convenient access for your audience"
    }
  ];

  return (
    <div className="rounded-xl border border-gray-200 p-8">
      <h3 className="text-2xl font-bold text-[var(--theme-primary)] mb-8">
        Why do performers <span className="text-[var(--theme-accent)]">love</span> Stage Center
      </h3>
      
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {benefits.map((benefit, index) => (
          <Benefit
            key={index}
            number={benefit.number}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyOwnersLove;
