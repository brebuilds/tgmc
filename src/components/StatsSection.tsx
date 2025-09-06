import React from 'react';
import { Building2, Users, GraduationCap, Heart, Briefcase, Microscope } from 'lucide-react';

const statsData = [
  {
    icon: Building2,
    number: '300',
    label: 'Inpatient Beds',
    description: 'State-of-the-art patient care rooms'
  },
  {
    icon: Users,
    number: '~$1B',
    label: 'Investment',
    description: 'Total project funding + development'
  },
  {
    icon: GraduationCap,
    number: 'Graduate',
    label: 'Medical Education',
    description: 'Partnership-driven trainingprograms'
  },
  {
    icon: Microscope,
    number: 'Research',
    label: 'Academic Center',
    description: 'A hub for discovery & advancement'
  },
  {
    icon: Heart,
    number: 'Surgical',
    label: 'Innovation Campus',
    description: 'Pioneering advanced procedures'
  },
  {
    icon: Briefcase,
    number: '4000+',
    label: 'Jobs Created',
    description: 'New careers for clinical & support staff'
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-alata font-bold text-primary mb-6">
            Epic Stats & <span className="text-gradient-primary">Highlights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lexend">
            Every number tells a story of transformation, progress, and hope for the Rio Grande Valley's healthcare future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className="card-gradient p-8 rounded-2xl hover-lift hover-glow group transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-secondary" />
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-alata font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                
                <h4 className="text-lg font-semibold text-secondary mb-2 font-lexend">
                  {stat.label}
                </h4>
                
                <p className="text-muted-foreground font-lexend">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;