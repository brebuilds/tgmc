import React from 'react';
import medicalTeamImage from '@/assets/medical-team.jpg';

const PartnershipSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-alata font-bold text-primary mb-6">
            Partnership with{' '}
            <span className="text-gradient-primary">Ovation Healthcare</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-secondary/5 to-accent/10 rounded-2xl p-8 lg:p-12 shadow-card-medical">
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-alata font-bold text-primary leading-tight mb-8">
                "This project represents a <span className="text-gradient-primary">transformational step</span> for the community… delivering world-class healthcare and creating a hub for education, innovation, and research."
              </blockquote>
              
              <footer className="flex items-center gap-4">
                <div className="w-16 h-1 bg-secondary rounded-full"></div>
                <div>
                  <cite className="text-lg font-semibold text-secondary not-italic font-lexend">
                    Ovation Healthcare Leadership
                  </cite>
                  <p className="text-muted-foreground font-lexend">Healthcare Innovation Partners</p>
                </div>
              </footer>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary font-alata mb-2">15+</div>
                <div className="text-sm text-muted-foreground font-lexend">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary font-alata mb-2">50+</div>
                <div className="text-sm text-muted-foreground font-lexend">Healthcare Facilities</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="animate-fade-in hover-lift">
            <div className="relative overflow-hidden rounded-2xl shadow-medical">
              <img 
                src={medicalTeamImage} 
                alt="Medical Team Collaboration" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                <div className="text-sm font-semibold text-primary font-lexend">Excellence in Healthcare</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default PartnershipSection;