
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FounderVision from '@/components/FounderVision';
import TransformationPhilosophy from '@/components/TransformationPhilosophy';
import OurGyms from '@/components/OurGyms';
import Trainers from '@/components/Trainers';
import Gallery from '@/components/Gallery';
import MembershipPlans from '@/components/MembershipPlans';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-rebuild-black text-white">
      <Navbar />
      <Hero />
      <FounderVision />
      <TransformationPhilosophy />
      <OurGyms />
      <Trainers />
      <Gallery />
      <MembershipPlans />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
