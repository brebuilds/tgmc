import React, { useEffect, useRef, useState } from 'react';
import { CalendarDays, MapPin, Users, Building, ArrowRight, CheckCircle } from 'lucide-react';

const timelineData = [
  {
    year: '2026',
    title: 'Groundbreaking',
    description: 'Official groundbreaking and construction begins',
    icon: MapPin,
    status: 'upcoming'
  },
  {
    year: '2026-2027',
    title: 'Construction Phases',
    description: 'Major construction milestones and infrastructure development',
    icon: Building,
    status: 'future'
  },
  { 
    year: '2028',
    title: 'Hospital Opens',
    description: 'Grand opening and first patients welcomed to the new facility',
    icon: Users,
    status: 'future'
  }
];

const TimelineSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start the animation sequence
          timelineData.forEach((_, index) => {
            setTimeout(() => {
              setActiveIndex(index);
            }, index * 800);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 section-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-alata font-bold text-primary mb-6">
            Project <span className="text-gradient-primary">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lexend">
            A carefully planned journey from groundbreaking to grand opening, bringing world-class healthcare to South Texas.
          </p>
        </div>
        
        {/* Animated Timeline Container */}
        <div className="relative">
          {/* Background Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-secondary/20 via-primary/30 to-secondary/20 transform -translate-y-1/2 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-secondary to-primary transition-all duration-2000 ease-out"
              style={{ 
                width: isVisible ? `${((activeIndex + 1) / timelineData.length) * 100}%` : '0%' 
              }}
            />
          </div>

          {/* Timeline Cards with Overlapping Years */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${index * 300}ms`,
                  zIndex: timelineData.length - index 
                }}
              >
                {/* Year Badge - Overlapping */}
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-500 ${
                  activeIndex >= index ? 'scale-110' : 'scale-100'
                }`}>
                  <div className={`relative px-6 py-3 rounded-full font-bold text-lg font-alata transition-all duration-500 ${
                    activeIndex >= index 
                      ? 'bg-secondary text-white shadow-lg shadow-secondary/30' 
                      : 'bg-white text-primary border-2 border-secondary/30'
                  }`}>
                    {item.year}
                    {activeIndex > index && (
                      <CheckCircle className="absolute -right-2 -top-2 w-6 h-6 text-green-500 bg-white rounded-full" />
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`card-gradient p-8 rounded-2xl transition-all duration-500 hover-lift hover-glow ${
                  activeIndex >= index ? 'shadow-lg shadow-secondary/20' : 'shadow-md'
                }`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      activeIndex >= index 
                        ? 'bg-secondary text-white' 
                        : 'bg-secondary/10 text-secondary'
                    }`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary font-alata">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <CalendarDays className="w-4 h-4 text-secondary" />
                        <span className="text-sm text-secondary font-semibold font-lexend capitalize">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground font-lexend leading-relaxed">
                    {item.description}
                  </p>

                  {/* Progress Indicator */}
                  {activeIndex >= index && (
                    <div className="mt-4 flex items-center gap-2 text-sm text-secondary">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                      <span className="font-semibold">In Progress</span>
                    </div>
                  )}
                </div>

                {/* Connection Arrow */}
                {index < timelineData.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                    <ArrowRight className={`w-6 h-6 transition-all duration-500 ${
                      activeIndex > index ? 'text-secondary' : 'text-muted-foreground/30'
                    }`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Version */}
        <div className="block lg:hidden mt-12">
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div 
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeIndex >= index 
                      ? 'bg-secondary text-white' 
                      : 'bg-secondary/10 text-secondary'
                  }`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-bold text-primary font-alata">{item.year}</span>
                      {activeIndex > index && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2 font-alata">{item.title}</h3>
                    <p className="text-muted-foreground font-lexend">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;