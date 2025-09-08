import React, { useEffect, useState, useRef } from 'react';
import { Building2, Users, GraduationCap, Heart, Briefcase, Microscope } from 'lucide-react';

// Custom hook for count-up animation
const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return { count, ref };
};

const statsData = [
  {
    icon: Building2,
    number: 'beds', // Special identifier for count-up
    countUpValue: 300,
    label: 'Inpatient Beds',
    description: 'State-of-the-art patient care rooms'
  },
  {
    icon: Users,
    number: 'investment', // Special identifier for count-up
    countUpValue: 1000000000,
    label: 'Investment',
    description: 'Total project funding + development'
  },
  {
    icon: GraduationCap,
    number: 'Graduate',
    label: 'Medical Education',
    description: 'Partnership-driven training programs'
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
    number: 'jobs', // Special identifier for count-up
    countUpValue: 4000,
    label: 'Jobs Created',
    description: 'New careers for clinical & support staff'
  }
];

const StatsSection = () => {
  const { count: bedsCount, ref: bedsRef } = useCountUp(300, 2000); // 300 beds over 2 seconds
  const { count: investmentCount, ref: investmentRef } = useCountUp(1000000000, 3000); // 1 billion over 3 seconds
  const { count: jobsCount, ref: jobsRef } = useCountUp(4000, 2500); // 4000 jobs over 2.5 seconds

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000000) {
      return `$${(amount / 1000000000).toFixed(1)}B`;
    } else if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(0)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toLocaleString()}`;
  };

  const formatNumber = (amount: number, suffix: string = '') => {
    return `${amount.toLocaleString()}${suffix}`;
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100 rounded-3xl p-8 lg:p-12 shadow-sm">
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
                
                <h3 
                  className="text-3xl sm:text-4xl font-alata font-bold text-primary mb-2"
                  ref={
                    stat.number === 'investment' ? investmentRef :
                    stat.number === 'beds' ? bedsRef :
                    stat.number === 'jobs' ? jobsRef : undefined
                  }
                >
                  {stat.number === 'investment' ? formatCurrency(investmentCount) :
                   stat.number === 'beds' ? formatNumber(bedsCount) :
                   stat.number === 'jobs' ? formatNumber(jobsCount, '+') :
                   stat.number}
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
      </div>
    </section>
  );
};

export default StatsSection;
