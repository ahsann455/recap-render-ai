import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Sparkles } from "lucide-react";

export const Hero = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-950/20 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-600/10 via-transparent to-transparent" />
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full glass-card animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-premium">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium gradient-text">
            Revolutionary AI-Powered Learning Platform
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 leading-tight">
          Transform Notes Into
          <span className="block mt-4 gradient-text animate-shimmer bg-gradient-to-r from-primary via-accent to-primary-glow">
            Cinematic AI Lectures
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 leading-relaxed">
          Experience the future of learning with AI-generated video lectures featuring
          <span className="text-foreground font-semibold"> virtual professors </span>
          and
          <span className="text-foreground font-semibold"> stunning visualizations</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
          <Button 
            size="lg" 
            className="text-lg px-10 py-7 gradient-primary hover:shadow-glow transition-all duration-500 group border border-white/20 animate-glow"
            onClick={onGetStarted}
          >
            <Upload className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
            Start Learning Free
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-10 py-7 glass-card hover:bg-white/10 transition-all duration-300 border-white/20"
          >
            Watch Demo
          </Button>
        </div>

        {/* Premium Stats */}
        <div className="grid grid-cols-3 gap-12 max-w-3xl mx-auto mt-24 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500">
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-5xl font-bold gradient-text mb-2">10x</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Faster Learning</div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-5xl font-bold gradient-text mb-2">2</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Lecture Styles</div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-5xl font-bold gradient-text mb-2">3</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Learning Modes</div>
          </div>
        </div>
      </div>
    </section>
  );
};
