import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface TimelinePhase {
  year: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: 'completed' | 'current' | 'upcoming';
}

const GroundbreakingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <motion.g
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      {/* Shovel handle */}
      <motion.rect
        x="22"
        y="8"
        width="4"
        height="25"
        fill="currentColor"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      />
      {/* Shovel blade */}
      <motion.path
        d="M18 33L30 33L28 42L20 42L18 33Z"
        fill="currentColor"
        initial={{ scaleY: 0, transformOrigin: "center top" }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
      />
      {/* Hard hat */}
      <motion.ellipse
        cx="24"
        cy="12"
        rx="8"
        ry="6"
        fill="currentColor"
        opacity="0.7"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, duration: 0.3 }}
      />
      {/* Ground line */}
      <motion.line
        x1="8"
        y1="38"
        x2="40"
        y2="38"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4,4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      />
    </motion.g>
  </svg>
);

const ConstructionIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <motion.g
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      {/* Building foundation */}
      <motion.rect
        x="16"
        y="32"
        width="16"
        height="12"
        fill="currentColor"
        opacity="0.3"
        initial={{ scaleY: 0, transformOrigin: "center bottom" }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      />
      {/* Building structure */}
      <motion.rect
        x="18"
        y="20"
        width="12"
        height="12"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scaleY: 0, transformOrigin: "center bottom" }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />
      {/* Crane base */}
      <motion.rect
        x="34"
        y="36"
        width="6"
        height="8"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, duration: 0.3 }}
      />
      {/* Crane mast */}
      <motion.line
        x1="37"
        y1="36"
        x2="37"
        y2="8"
        stroke="currentColor"
        strokeWidth="3"
        initial={{ scaleY: 0, transformOrigin: "center bottom" }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      />
      {/* Crane arm */}
      <motion.line
        x1="37"
        y1="12"
        x2="20"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ scaleX: 0, transformOrigin: "right center" }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      />
      {/* Crane hook */}
      <motion.circle
        cx="20"
        cy="16"
        r="2"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
      />
    </motion.g>
  </svg>
);

const HospitalIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <motion.g
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      {/* Hospital building */}
      <motion.rect
        x="12"
        y="20"
        width="24"
        height="20"
        fill="currentColor"
        opacity="0.1"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ scaleY: 0, transformOrigin: "center bottom" }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      />
      {/* Hospital windows */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <rect x="16" y="24" width="3" height="3" fill="currentColor" opacity="0.6" />
        <rect x="21" y="24" width="3" height="3" fill="currentColor" opacity="0.6" />
        <rect x="26" y="24" width="3" height="3" fill="currentColor" opacity="0.6" />
        <rect x="31" y="24" width="3" height="3" fill="currentColor" opacity="0.6" />
        <rect x="16" y="30" width="3" height="3" fill="currentColor" opacity="0.6" />
        <rect x="21" y="30" width="3" height="3" fill="currentColor" opacity="0.6" />
        <rect x="26" y="30" width="3" height="3" fill="currentColor" opacity="0.6" />
        <rect x="31" y="30" width="3" height="3" fill="currentColor" opacity="0.6" />
      </motion.g>
      {/* Medical cross */}
      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.6, duration: 0.4 }}
      >
        <rect x="22" y="10" width="4" height="12" fill="#d4183d" />
        <rect x="18" y="14" width="12" height="4" fill="#d4183d" />
      </motion.g>
      {/* People silhouettes */}
      <motion.g
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 0.6 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <circle cx="8" cy="32" r="2" fill="currentColor" />
        <rect x="6" y="34" width="4" height="6" fill="currentColor" />
        <circle cx="40" cy="32" r="2" fill="currentColor" />
        <rect x="38" y="34" width="4" height="6" fill="currentColor" />
      </motion.g>
    </motion.g>
  </svg>
);

const TimelineSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.3"]
  });

  // Calculate when each milestone is reached - faster progression
  const milestone1Reached = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const milestone2Reached = useTransform(scrollYProgress, [0.25, 0.6], [0, 1]);
  const milestone3Reached = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  // Pre-calculate all transform values to avoid hook calls in callbacks
  const milestoneTransforms = [
    {
      scale: useTransform(milestone1Reached, [0, 0.8, 1], [1, 1.2, 1.1]),
      boxShadow: useTransform(milestone1Reached, [0, 0.5, 1], [
        "0 4px 6px -1px rgba(0, 0, 0, 0.1)", 
        "0 8px 25px -5px hsl(var(--accent) / 0.4)", 
        "0 12px 35px -8px hsl(var(--accent) / 0.3)"
      ]),
      innerGlow: useTransform(milestone1Reached, [0, 1], [0, 0.6]),
      iconScale: useTransform(milestone1Reached, [0, 0.8, 1], [1, 1.15, 1.05]),
      yearScale: useTransform(milestone1Reached, [0, 1], [1, 1.05]),
      titleScale: useTransform(milestone1Reached, [0, 1], [1, 1.05]),
      borderColor: useTransform(milestone1Reached, [0, 1], ["hsl(var(--muted-foreground) / 0.3)", "hsl(var(--accent))"])
    },
    {
      scale: useTransform(milestone2Reached, [0, 0.8, 1], [1, 1.2, 1.1]),
      boxShadow: useTransform(milestone2Reached, [0, 0.5, 1], [
        "0 4px 6px -1px rgba(0, 0, 0, 0.1)", 
        "0 8px 25px -5px hsl(var(--secondary) / 0.4)", 
        "0 12px 35px -8px hsl(var(--secondary) / 0.3)"
      ]),
      innerGlow: useTransform(milestone2Reached, [0, 1], [0, 0.6]),
      iconScale: useTransform(milestone2Reached, [0, 0.8, 1], [1, 1.15, 1.05]),
      yearScale: useTransform(milestone2Reached, [0, 1], [1, 1.05]),
      titleScale: useTransform(milestone2Reached, [0, 1], [1, 1.05]),
      borderColor: useTransform(milestone2Reached, [0, 1], ["hsl(var(--muted-foreground) / 0.3)", "hsl(var(--secondary))"])
    },
    {
      scale: useTransform(milestone3Reached, [0, 0.8, 1], [1, 1.2, 1.1]),
      boxShadow: useTransform(milestone3Reached, [0, 0.5, 1], [
        "0 4px 6px -1px rgba(0, 0, 0, 0.1)", 
        "0 8px 25px -5px hsl(var(--primary) / 0.4)", 
        "0 12px 35px -8px hsl(var(--primary) / 0.3)"
      ]),
      innerGlow: useTransform(milestone3Reached, [0, 1], [0, 0.6]),
      iconScale: useTransform(milestone3Reached, [0, 0.8, 1], [1, 1.15, 1.05]),
      yearScale: useTransform(milestone3Reached, [0, 1], [1, 1.05]),
      titleScale: useTransform(milestone3Reached, [0, 1], [1, 1.05]),
      borderColor: useTransform(milestone3Reached, [0, 1], ["hsl(var(--muted-foreground) / 0.3)", "hsl(var(--primary))"])
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const phases: TimelinePhase[] = [
    {
      year: 2026,
      title: "Groundbreaking",
      description: "Construction begins with site preparation and foundation work",
      icon: <GroundbreakingIcon />,
      status: 'upcoming'
    },
    {
      year: 2027,
      title: "Under Construction", 
      description: "Active construction phase with building infrastructure development",
      icon: <ConstructionIcon />,
      status: 'upcoming'
    },
    {
      year: 2028,
      title: "Opening to Patients",
      description: "Hospital completed and ready to serve the community",
      icon: <HospitalIcon />,
      status: 'upcoming'
    }
  ];

  return (
    <section className="py-20 lg:py-32 section-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div ref={timelineRef} className="w-full max-w-6xl mx-auto p-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-alata font-bold text-primary mb-6">
            Project <span className="text-gradient-primary">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lexend leading-relaxed">
            Follow our journey as we build a state-of-the-art healthcare facility to better serve our community
          </p>
        </motion.div>

        <div className="relative">
          {/* Enhanced Timeline gradient background */}
          <div className="absolute top-24 left-0 w-full h-4 rounded-full overflow-hidden bg-muted/30 shadow-inner">
            {/* Static gradient background - using design system colors */}
            <div 
              className="absolute inset-0 w-full h-full opacity-40"
              style={{
                background: `linear-gradient(to right, 
                  hsl(var(--accent)) 0%, 
                  hsl(var(--accent)) 33%, 
                  hsl(var(--secondary)) 33%, 
                  hsl(var(--secondary)) 66%, 
                  hsl(var(--primary)) 66%, 
                  hsl(var(--primary)) 100%)`
              }}
            />
            
            {/* Animated progress overlay with glow effect */}
            <motion.div
              className="absolute inset-0 w-full h-full origin-left rounded-full"
              style={{
                background: `linear-gradient(to right, 
                  hsl(var(--accent)) 0%, 
                  hsl(var(--accent)) 33%, 
                  hsl(var(--secondary)) 33%, 
                  hsl(var(--secondary)) 66%, 
                  hsl(var(--primary)) 66%, 
                  hsl(var(--primary)) 100%)`,
                scaleX: useTransform(scrollYProgress, [0, 1], [0, 1]),
                boxShadow: useTransform(scrollYProgress, [0, 1], [
                  "none",
                  "0 0 20px hsl(var(--secondary) / 0.3)"
                ])
              }}
            />
            
            {/* Progress indicator dots */}
            {phases.map((_, index) => (
              <motion.div
                key={index}
                className="absolute top-1/2 w-3 h-3 bg-white rounded-full border-2 shadow-lg transform -translate-y-1/2"
                style={{
                  left: `${(index + 1) * 33.33 - 16.67}%`,
                  borderColor: milestoneTransforms[index].borderColor
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.4 }}
              />
            ))}
          </div>

          {/* Timeline phases */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.year}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Enhanced Timeline dot with medical styling */}
                <motion.div
                  className={`relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 border-4 transition-all duration-300 hover-lift ${
                    index === 0 ? 'border-accent' : 
                    index === 1 ? 'border-secondary' : 
                    'border-primary'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                  style={{
                    scale: milestoneTransforms[index].scale,
                    boxShadow: milestoneTransforms[index].boxShadow
                  }}
                >
                  {/* Inner glow ring */}
                  <motion.div
                    className={`absolute inset-2 rounded-full border-2 opacity-0 ${
                      index === 0 ? 'border-accent' : 
                      index === 1 ? 'border-secondary' : 
                      'border-primary'
                    }`}
                    style={{
                      opacity: milestoneTransforms[index].innerGlow
                    }}
                  />
                  
                  <motion.div 
                    className={`transition-colors duration-300 ${
                      index === 0 ? 'text-accent' : 
                      index === 1 ? 'text-secondary' : 
                      'text-primary'
                    }`}
                    style={{
                      scale: milestoneTransforms[index].iconScale
                    }}
                  >
                    {phase.icon}
                  </motion.div>
                </motion.div>

                {/* Simple Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                  className="space-y-3"
                >
                  <motion.div 
                    className={`inline-block px-4 py-2 rounded-full text-sm font-medium font-alata ${
                      index === 0 ? 'bg-accent text-accent-foreground' : 
                      index === 1 ? 'bg-secondary text-secondary-foreground' : 
                      'bg-primary text-primary-foreground'
                    }`}
                    style={{
                      scale: milestoneTransforms[index].yearScale
                    }}
                  >
                    {phase.year}
                  </motion.div>
                  
                  <motion.h3 
                    className={`text-xl font-bold font-alata transition-all duration-300 ${
                      index === 0 ? 'text-accent' : 
                      index === 1 ? 'text-secondary' : 
                      'text-primary'
                    }`}
                    style={{
                      scale: milestoneTransforms[index].titleScale
                    }}
                  >
                    {phase.title}
                  </motion.h3>
                  
                  <p className="text-muted-foreground leading-relaxed font-lexend max-w-xs mx-auto">
                    {phase.description}
                  </p>
                </motion.div>

                {/* Enhanced connector line for mobile */}
                {index < phases.length - 1 && (
                  <div className="md:hidden w-1 h-16 bg-muted rounded-full mt-8 mx-auto overflow-hidden">
                    <motion.div
                      className={`w-full ${
                        index === 0 ? 'bg-secondary' : 'bg-primary'
                      }`}
                      initial={{ height: "0%" }}
                      animate={{ height: isVisible ? "100%" : "0%" }}
                      transition={{ delay: 1.5 + index * 0.3, duration: 0.8 }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Simple completion message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-full">
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
            <span className="text-secondary font-semibold font-lexend">
              Bringing world-class healthcare to South Texas
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;