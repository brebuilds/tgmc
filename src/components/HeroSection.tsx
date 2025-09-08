import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-hospital.jpg';
import texasLogo from '@/assets/texas.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-85"></div>
      </div>

      {/* Stationary Logo - Upper Left */}
      <div className="absolute top-6 left-6 z-20">
        <img
          src={texasLogo}
          alt="Texas General Medical Center"
          className="h-12 w-auto"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary/20 rounded-full animate-float blur-xl"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent/30 rounded-full animate-float blur-xl"
          style={{
            animationDelay: '2s',
          }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/20 rounded-full animate-float blur-xl"
          style={{
            animationDelay: '4s',
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-alata font-bold mb-6 leading-tight">
            New 300-Bed Acute Care Hospital to Transform Healthcare in Rio Grande Valley
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 font-lexend font-light max-w-4xl mx-auto leading-relaxed opacity-95">
            Texas General Medical Center, a nearly{' '}
            <span className="font-semibold">$1 billion investment</span>, will serve as a cornerstone
            for both patient care and medical education in the Rio Grande Valley.
          </p>

          {/* Email Signup Form */}
          <div className="flex flex-col sm:flex-row gap-4 items-center max-w-md mx-auto mt-12">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 h-12 px-4 rounded-md border border-gray-400 bg-white/20 text-white text-sm placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <Button
              variant="default"
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 whitespace-nowrap text-white"
            >
              Keep me informed!
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13L12 18L17 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 6L12 11L17 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
