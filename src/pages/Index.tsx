import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { UploadSection } from "@/components/UploadSection";

const Index = () => {
  const scrollToUpload = () => {
    document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Hero onGetStarted={scrollToUpload} />
      <HowItWorks />
      <Features />
      <UploadSection />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">myTeacherAI</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Transform your learning experience with AI-powered video lectures
              </p>
            </div>
            
            {/* Product */}
            <div>
              <h4 className="font-semibold mb-3 text-black dark:text-white">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>API</li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-semibold mb-3 text-black dark:text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 myTeacherAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
