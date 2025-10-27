import { Button } from "@/components/ui/button";
import { ArrowRight, Upload } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroBackground} 
          alt="AI Education Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Revolutionary AI-Powered Learning
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          Transform Your Notes Into
          <span className="block mt-2 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            AI Video Lectures
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          Upload your study materials and watch as our AI creates personalized video lectures 
          with virtual professors or stunning visual explanations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300 group"
            onClick={onGetStarted}
          >
            <Upload className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-2 hover:bg-secondary/50 backdrop-blur-sm"
          >
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-accent-summary to-accent-summary/70 bg-clip-text text-transparent">10x</div>
            <div className="text-sm text-muted-foreground mt-1">Faster Learning</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-accent-detailed to-accent-detailed/70 bg-clip-text text-transparent">2</div>
            <div className="text-sm text-muted-foreground mt-1">Lecture Styles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-accent-test to-accent-test/70 bg-clip-text text-transparent">3</div>
            <div className="text-sm text-muted-foreground mt-1">Learning Modes</div>
          </div>
        </div>
      </div>
    </section>
  );
};
