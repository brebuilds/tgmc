import React from 'react';
import { MapPin, Building, Users } from 'lucide-react';

const timelineData = [
  {
    year: 'Early 2026',
    title: 'Groundbreaking',
    description: 'Official groundbreaking ceremony and construction begins',
    icon: MapPin,
    delay: '0s'
  },
  {
    year: '2026-2027',
    title: 'Construction',
    description: 'Major construction phases and infrastructure development',
    icon: Building,
    delay: '0.3s'
  },
  { 
    year: '2028',
    title: 'Hospital Opens',
    description: 'Hospital welcomes first patients to world-class facility',
    icon: Users,
    delay: '0.6s'
  }
];

const TimelineSection = () => {
  return (
    <section className="py-20 lg:py-32 section-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-alata font-bold text-primary mb-6">
            Project <span className="text-gradient-primary">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lexend">
            A carefully planned journey from groundbreaking to grand opening, bringing world-class healthcare to South Texas.
          </p>
        </div>
        
        {/* Simple Animated Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary/30 via-primary/50 to-secondary/30 transform -translate-x-1/2 rounded-full lg:block hidden">
            <div className="w-full h-full bg-gradient-to-b from-secondary to-primary rounded-full animate-scale-in" style={{ animationDelay: '0.2s' }}></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-16 lg:space-y-24">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative animate-fade-in ${
                  index % 2 === 0 ? 'lg:pr-1/2 lg:text-right' : 'lg:pl-1/2 lg:ml-8'
                }`}
                style={{ animationDelay: item.delay }}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 top-8 w-6 h-6 bg-secondary rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-secondary/30 animate-scale-in lg:block hidden" 
                     style={{ animationDelay: item.delay }}>
                  <div className="absolute inset-1 bg-white rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className="card-gradient p-8 rounded-2xl hover-lift transition-all duration-300 max-w-md mx-auto lg:mx-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-2xl font-bold text-secondary font-alata mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-primary font-alata">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground font-lexend leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom completion indicator */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-full">
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              <span className="text-secondary font-semibold font-lexend">
                Bringing world-class healthcare to South Texas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;