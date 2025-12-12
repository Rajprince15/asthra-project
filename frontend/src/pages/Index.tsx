import { TopBar } from '@/components/asthra/TopBar';
import { EducationPartners } from '@/components/asthra/EducationPartners';
import { Header } from '@/components/asthra/Header';
import { HeroSection } from '@/components/asthra/HeroSection';
import { PhotoGallery } from '@/components/asthra/PhotoGallery';
import { Footer } from '@/components/asthra/Footer';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ASTHRA - The Ultimate Tech Showdown | ICMR Funded Project</title>
        <meta name="description" content="ASTHRA is an ICMR funded tech competition featuring innovative 5G solutions in Healthcare, Smart Agriculture, Animal Husbandry, and IoT. Win prizes up to INR 10,00,000!" />
      </Helmet>
      
      <div className="font-sans text-foreground bg-background min-h-screen flex flex-col">
        <TopBar />
        <EducationPartners />
        <Header />
        <HeroSection />
        <PhotoGallery />
        <Footer />
      </div>
    </>
  );
};

export default Index;
