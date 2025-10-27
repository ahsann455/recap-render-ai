import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { UploadSection } from "@/components/UploadSection";

const Index = () => {
  const scrollToUpload = () => {
    document.getElementById('upload')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-purple-950/5 to-background pointer-events-none" />
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-600/5 via-transparent to-transparent pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-600/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <Hero onGetStarted={scrollToUpload} />
        <HowItWorks />
        <Features />
        <UploadSection />
        
        {/* Premium Footer */}
        <footer className="py-12 px-6 border-t border-white/10 glass">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-4">
              <h3 className="text-2xl font-bold gradient-text mb-2">Recap Render AI</h3>
              <p className="text-muted-foreground/80">Transform your learning experience with AI-powered video lectures</p>
            </div>
            <p className="text-sm text-muted-foreground/60">
              © 2025 Recap Render AI. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
