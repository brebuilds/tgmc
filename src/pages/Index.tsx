import React from 'react';
import HeroSection from '@/components/HeroSection';
import MilestoneSection from '@/components/MilestoneSection';
import StatsSection from '@/components/StatsSection';
import CommunitySection from '@/components/CommunitySection';
import PartnershipSection from '@/components/PartnershipSection';
import PartnershipFooter from '@/components/PartnershipFooter';
import TimelineSection from '@/components/TimelineSection';
import ClosingSection from '@/components/ClosingSection';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <MilestoneSection />
      <StatsSection />
      <CommunitySection />
      <PartnershipSection />
      <PartnershipFooter />
      <TimelineSection />
      <ClosingSection />
    </main>
  );
};

export default Index;
