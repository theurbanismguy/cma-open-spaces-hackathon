
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HackathonSection from '@/components/HackathonSection';
import TimelineSection from '@/components/TimelineSection';
import SubmissionSection from '@/components/SubmissionSection';
import AwardsSection from '@/components/AwardsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <HackathonSection />
      <TimelineSection />
      <SubmissionSection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default Index;
