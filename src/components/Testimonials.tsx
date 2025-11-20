
import { useState, useEffect, useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { cn } from "@/lib/utils";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  type: 'landlord' | 'tenant';
  rating: number;
  image?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Theater Director',
    content: "Our three-night production of 'Hamlet' was a tremendous success, and the venue played a huge role in that. The technical team was exceptional - they understood our vision and worked with us to create perfect lighting and sound. The acoustics are incredible, and the stage equipment is professional-grade. What impressed me most was their flexibility during rehearsals and their problem-solving when we had last-minute changes. The venue feels like a true partnership where they care about your artistic success. If you're looking for a professional theater space with expert technical support, this is the place.",
    type: 'landlord',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Dance Company Artistic Director',
    content: 'We\'ve performed in venues across the country, but this theater stands out for its comprehensive service package. From the initial walkthrough to our final performance, everything was seamless. The lighting designer worked closely with our choreographer to create stunning visual effects that elevated our contemporary dance production. The sound system captured every nuance of our musical score. Having professional technicians who understand performing arts made all the difference. The backstage facilities are excellent, and the 500-seat capacity was perfect for our audience. Highly recommended for dance companies and performing arts groups!',
    type: 'landlord',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anita Desai',
    role: 'Music Concert Organizer',
    content: 'Organizing a classical music concert requires perfect acoustics and technical precision. This venue delivered on both counts. The sound engineer was meticulous, ensuring every instrument was balanced perfectly. The venue manager was incredibly responsive to our needs, from ticket arrangements to backstage coordination. What truly impressed us was the included rehearsal time - being able to do a full sound check the day before made a huge difference. The audience feedback about the sound quality and comfortable seating was overwhelmingly positive. This is now our preferred venue for all our classical music events.',
    type: 'landlord',
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const landlordTestimonials = testimonials.filter(testimonial => 
    testimonial.type === 'landlord'
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);


  const goToTestimonial = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    const nextIndex = (activeIndex + 1) % landlordTestimonials.length;
    goToTestimonial(nextIndex);
  };

  const goToPrev = () => {
    const prevIndex = (activeIndex - 1 + landlordTestimonials.length) % landlordTestimonials.length;
    goToTestimonial(prevIndex);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(goToNext, 6000);
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [activeIndex]);

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding theme-section relative overflow-hidden py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 theme-primary-text">What Landlords Say</h2>
          <div className="accent-line mx-auto"></div>
          <p className="mt-6 text-lg text-foreground/80 max-w-3xl mx-auto">
            Hear from property owners who have transformed their rental income with guaranteed rent.
          </p>
        </div>

        <div 
          className={`max-w-4xl mx-auto transition-opacity duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <TestimonialSlider 
            testimonials={landlordTestimonials} 
            activeIndex={activeIndex}
            goToNext={goToNext}
            goToPrev={goToPrev}
            goToTestimonial={goToTestimonial}
          />
        </div>
      </div>
      
      <div className="absolute -top-20 right-10 w-72 h-72 theme-primary-bg opacity-5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 theme-accent-bg opacity-10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

const TestimonialSlider = ({ 
  testimonials, 
  activeIndex, 
  goToNext, 
  goToPrev, 
  goToTestimonial 
}: { 
  testimonials: Testimonial[], 
  activeIndex: number,
  goToNext: () => void,
  goToPrev: () => void,
  goToTestimonial: (index: number) => void
}) => {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      
      <button 
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-md flex items-center justify-center text-foreground hover:bg-white transition-colors focus:outline-none z-10 border border-gray-100 hover:scale-105 transform transition-transform duration-200"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-md flex items-center justify-center text-foreground hover:bg-white transition-colors focus:outline-none z-10 border border-gray-100 hover:scale-105 transform transition-transform duration-200"
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>
      
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === activeIndex 
                ? 'theme-accent-bg w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="w-full flex-shrink-0 px-4">
      <div className="rounded-2xl p-8 md:p-10 bg-white shadow-lg border border-gray-200 relative">
        <div className="inline-block px-3 py-1 theme-primary-bg bg-opacity-10 rounded-full text-sm font-medium theme-primary-text mb-6">
          {testimonial.type === 'landlord' ? 'Landlord' : 'Tenant'}
        </div>
        
        <div className="absolute top-4 left-6 text-6xl theme-accent-text opacity-10">
          <Quote size={48} strokeWidth={1.5} />
        </div>
        
        <p className="text-lg text-foreground mb-8 relative z-10 pt-6">{testimonial.content}</p>
        
        {/* Rating - Updated to filled stars */}
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              fill={i < testimonial.rating ? "currentColor" : "none"}
              className={cn(
                i < testimonial.rating 
                  ? "theme-accent-text" 
                  : "text-gray-300"
              )}
            />
          ))}
        </div>
        
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white shadow-sm">
            {testimonial.image ? (
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <div className="w-full h-full theme-primary-bg bg-opacity-20 flex items-center justify-center">
                <User className="theme-primary-text" size={20} />
              </div>
            )}
          </div>
          <div>
            <p className="font-semibold theme-primary-text">{testimonial.name}</p>
            <p className="text-sm text-foreground/70">{testimonial.role}</p>
          </div>
        </div>
        
        <div className="absolute bottom-4 right-6 text-6xl theme-accent-text opacity-10">
          <Quote size={48} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
