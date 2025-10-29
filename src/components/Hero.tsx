import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles, ArrowRight } from "lucide-react";

export const Hero = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-white dark:bg-gray-950">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-12 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="relative">
              <BookOpen className="w-10 h-10 text-black dark:text-white" />
              <Sparkles className="w-4 h-4 text-blue-500 absolute -top-1 -right-1" />
            </div>
            <span className="text-2xl font-bold text-black dark:text-white">myTeacherAI</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 animate-fade-in">
          <span className="text-black dark:text-white">The most realistic</span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            AI lecture platform
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-12 animate-fade-in animation-delay-200">
          Over 1,000,000 students use myTeacherAI to create realistic lecture experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in animation-delay-400">
          <Button 
            size="lg" 
            className="text-lg px-10 py-7 h-auto bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl group"
            onClick={onGetStarted}
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-10 py-7 h-auto rounded-full font-semibold border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200"
            onClick={onGetStarted}
          >
            Watch Demo
          </Button>
        </div>

        {/* Subtitle */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-500 italic animate-fade-in animation-delay-600">
          No credit card required • Cancel anytime
        </p>

        {/* Trusted By Section */}
        <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800 animate-fade-in animation-delay-800">
          <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-8">
            Trusted by students worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400 dark:text-gray-600">Stanford</div>
            <div className="text-2xl font-bold text-gray-400 dark:text-gray-600">MIT</div>
            <div className="text-2xl font-bold text-gray-400 dark:text-gray-600">Harvard</div>
            <div className="text-2xl font-bold text-gray-400 dark:text-gray-600">Oxford</div>
          </div>
        </div>
      </div>
    </section>
  );
};
