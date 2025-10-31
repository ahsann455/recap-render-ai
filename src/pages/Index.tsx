import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { UploadSection } from "@/components/UploadSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const scrollToUpload = () => {
    document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 overflow-x-hidden">
      <Hero onGetStarted={scrollToUpload} />
      <HowItWorks />
      <Features />
      <UploadSection />
      
      <Footer />
    </div>
  );
};

export default Index;
