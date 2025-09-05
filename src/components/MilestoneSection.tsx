import React from 'react';
import medicalTechImage from '@/assets/medical-technology.jpg';

const MilestoneSection = () => {
  return (
    <section className="py-20 lg:py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-alata font-bold text-primary mb-8 leading-tight">
              A Major Milestone in{' '}
              <span className="text-gradient-primary">South Texas Healthcare</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6 font-lexend">
              A major milestone in South Texas is underway as development begins on a new 300-bed acute care hospital in McAllen, bringing advanced medical services, innovative research, and graduate medical education to one of the fastest-growing regions in the nation.
            </p>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-lexend">
              Strategically located in North McAllen, the facility will foster strong academic partnerships, enabling medical students, residents, and fellows to train alongside nationally recognized physicians in a state-of-the-art environment.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-secondary font-semibold">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span>Advanced Care Technology</span>
              </div>
              <div className="flex items-center gap-2 text-secondary font-semibold">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>Research & Education Hub</span>
              </div>
              <div className="flex items-center gap-2 text-secondary font-semibold">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                <span>Community-Centered Design</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="animate-fade-in hover-lift">
            <div className="relative overflow-hidden rounded-2xl shadow-medical">
              <img 
                src={medicalTechImage} 
                alt="Advanced Medical Technology" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestoneSection;