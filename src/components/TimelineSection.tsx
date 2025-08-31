import React from 'react';
import { CalendarDays, MapPin, Users, Building } from 'lucide-react';

const timelineData = [
  {
    year: '2025',
    title: 'Groundbreaking',
    description: 'Official groundbreaking ceremony and construction begins',
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
  return (
    <section className="py-20 lg:py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-alata font-bold text-primary mb-6">
            Project <span className="text-gradient-primary">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lexend">
            A carefully planned journey from groundbreaking to grand opening, bringing world-class healthcare to South Texas.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-primary to-secondary transform -translate-x-1/2 hidden lg:block"></div>
          
          <div className="space-y-12 lg:space-y-20">
            {timelineData.map((item, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <div className="card-gradient p-8 rounded-2xl hover-lift hover-glow animate-fade-in">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="text-3xl font-bold text-primary font-alata">{item.year}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-primary mb-3 font-alata">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-lexend leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="mt-4 flex items-center gap-2">
                      <CalendarDays className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-secondary font-semibold font-lexend capitalize">
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="flex-shrink-0 relative hidden lg:block">
                  <div className="w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-lg"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-secondary/30 rounded-full animate-ping"></div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-lg hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="block lg:hidden mt-12">
          <div className="relative pl-8">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-primary"></div>
            
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-6 top-4 w-4 h-4 bg-secondary rounded-full border-2 border-white"></div>
                  <div className="card-gradient p-6 rounded-xl">
                    <div className="text-2xl font-bold text-primary mb-2 font-alata">{item.year}</div>
                    <h3 className="text-xl font-bold text-primary mb-2 font-alata">{item.title}</h3>
                    <p className="text-muted-foreground font-lexend">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;