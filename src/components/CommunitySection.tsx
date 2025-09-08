import React from 'react';
import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';
import communityImage from '@/assets/community-care.jpg';
import SpotlightCard from './SpotlightCard';
const CommunitySection = () => {
  return <section className="pt-20 pb-12 lg:pt-32 lg:pb-16 section-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Image and Quote */}
          <div className="lg:order-1 space-y-8">
            {/* Image */}
            <div className="animate-fade-in hover-lift">
              <div className="relative overflow-hidden rounded-2xl shadow-medical">
                <img src={communityImage} alt="Community Healthcare" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20"></div>
              </div>
            </div>

            {/* Glen Quote Card */}
            <div className="animate-fade-in">
              <SpotlightCard 
                className="shadow-medical"
                spotlightColor="rgba(59, 130, 246, 0.3)"
              >
                <div className="relative z-10 space-y-6">
                  {/* Quote icon */}
                  <div className="flex justify-center">
                    <div className="p-3 bg-gradient-to-br from-secondary/10 to-accent/20 rounded-xl">
                      <Quote size={24} className="text-secondary" />
                    </div>
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-lg sm:text-xl font-alata font-bold text-primary leading-tight text-center italic">
                    "We are excited to invest in McAllen and bring a healthcare facility that meets the growing needs of the community. Not only will the hospital deliver <span className="text-gradient-primary">world-class healthcare</span> to the families of the Rio Grande Valley, but it will also create a hub for education, innovation, and research that will shape the next generation of physicians and healthcare leaders."
                  </blockquote>

                  {/* Attribution */}
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-12 h-1 bg-secondary rounded-full"></div>
                      <div>
                        <cite className="text-lg font-semibold text-secondary not-italic font-lexend">
                          Glen Adams
                        </cite>
                        <p className="text-sm text-muted-foreground font-lexend">CEO, Coaction International Development, Inc.</p>
                      </div>
                      <div className="w-12 h-1 bg-secondary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
          
          {/* Content */}
          <div className="animate-fade-in lg:order-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-alata font-bold text-primary mb-8 leading-tight">
              Transforming{' '}
              <span className="text-gradient-primary">Community Care</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-lexend mb-6">Texas General Medical Center is designed to meet the growing healthcare needs of Rio Grande Valley. Equipped with state-of-the-art medical facilities and a wide range of specialties, it will significantly reduce the need for residents to travel outside the area for advanced medical care. Key features of the hospital will include:
          </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-lg font-semibold text-secondary font-lexend">300 inpatient beds with advanced acute care services</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{
                animationDelay: '0.5s'
              }}></div>
                <span className="text-lg font-semibold text-secondary font-lexend">Comprehensive specialty care</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{
                animationDelay: '1s'
              }}></div>
                <span className="text-lg font-semibold text-secondary font-lexend">A dedicated academic and research center</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{
                animationDelay: '1.5s'
              }}></div>
                <span className="text-lg font-semibold text-secondary font-lexend">A surgical innovation campus, including outpatient surgery centers</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{
                animationDelay: '2s'
              }}></div>
                <span className="text-lg font-semibold text-secondary font-lexend">Nearly 4,000 clinical and support positions in the region</span>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-lexend mt-8">
              With the Rio Grande Valley's population and healthcare demands rapidly increasing, the new hospital is designed to expand access to care, attract top-tier medical talent, and improve health outcomes across South Texas.
            </p>
            
          </div>
        </div>
      </div>
    </section>;
};
export default CommunitySection;
