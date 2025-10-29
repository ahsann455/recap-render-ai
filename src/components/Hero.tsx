import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles, ArrowRight, User, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/AuthModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Hero = ({ onGetStarted }: { onGetStarted: () => void }) => {
  const { user, logout } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authTab, setAuthTab] = useState<'login' | 'signup'>('login');
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
      {/* Content */}
      <div className="relative z-10 w-full px-6 py-8">
        {/* Header with Logo and Auth */}
        <nav className="max-w-7xl mx-auto flex items-center justify-between mb-16 animate-fade-in">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-black dark:text-white" />
            <span className="text-lg font-bold text-black dark:text-white">myTeacherAI</span>
          </div>
          
          {/* Auth Buttons / User Menu */}
          <div className="flex items-center gap-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white">
                    <User className="h-4 w-4 mr-2" />
                    {user.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  onClick={() => { setAuthTab('login'); setShowAuthModal(true); }}
                  className="hover:bg-transparent text-black dark:text-white font-normal"
                >
                  LOGIN
                </Button>
                <Button 
                  onClick={() => { setAuthTab('signup'); setShowAuthModal(true); }}
                  className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black font-semibold rounded-full px-6"
                >
                  SIGN UP
                </Button>
              </>
            )}
          </div>
        </nav>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left animate-fade-in">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-black dark:text-white">The most realistic </span>
              <span className="text-black dark:text-white">AI lecture </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">platform</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-xl animate-fade-in animation-delay-200">
              Over 1,000,000 students use myTeacherAI to create realistic lecture experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-3 mb-4 animate-fade-in animation-delay-400">
              <Button 
                className="text-sm px-6 py-5 h-auto bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black rounded-md font-semibold transition-all duration-200 uppercase"
                onClick={onGetStarted}
              >
                Get Started Free
              </Button>
              
              <Button 
                variant="outline"
                className="text-sm px-6 py-5 h-auto rounded-md font-semibold border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200 uppercase"
                onClick={onGetStarted}
              >
                Talk to Sales
              </Button>
            </div>

            {/* Subtitle */}
            <p className="text-xs text-gray-500 dark:text-gray-500 italic animate-fade-in animation-delay-600">
              No credit card required • Cancel anytime
            </p>
          </div>

          {/* Right Column - Video/Demo Placeholder */}
          <div className="relative animate-fade-in animation-delay-400">
            <div className="aspect-video bg-black dark:bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center relative shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
              <div className="relative z-10 text-center px-4">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
                  <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                </div>
                <p className="text-white text-base font-semibold">
                  Building <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI agents</span> that can speak
                </p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-base font-semibold text-black dark:text-white">Build AI Agents that speak</p>
            </div>
          </div>
        </div>

        {/* Trusted By Logos - Full Width Animated Marquee */}
        <div className="mt-16 w-full overflow-hidden animate-fade-in animation-delay-800">
          <div className="relative">
            <div className="flex animate-marquee whitespace-nowrap">
              <div className="flex items-center gap-10 pr-10">
                <div className="text-base font-semibold text-gray-600 dark:text-gray-400">Stanford</div>
                <div className="text-base font-semibold text-gray-600 dark:text-gray-400">MIT</div>
                <div className="text-base font-semibold text-gray-600 dark:text-gray-400">Harvard</div>
                <div className="text-base font-semibold text-gray-600 dark:text-gray-400">Oxford</div>
                <div className="text-base font-semibold text-gray-600 dark:text-gray-400">Cambridge</div>
                <div className="text-base font-semibold text-gray-600 dark:text-gray-400">Yale</div>
                <div className="text-base font-semibold text-gray-600 dark:text-gray-400">Princeton</div>
                <div className="text-base font-semibold text-gray-600 dark:text-gray-400">Columbia</div>
                <div className="text-base font-semibold text-gray-600 dark:text-gray-400">Berkeley</div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-10 pr-10" aria-hidden="true">
                <div className="text-base font-semibold text-gray-600 dark:text-gray-400">Stanford</div>
                <div className="text-base font-semibold text-gray-600 dark:text-gray-400">MIT</div>
                <div className="text-base font-semibold text-gray-600 dark:text-gray-400">Harvard</div>
                <div className="text-base font-semibold text-gray-600 dark:text-gray-400">Oxford</div>
                <div className="text-base font-semibold text-gray-600 dark:text-gray-400">Cambridge</div>
                <div className="text-base font-semibold text-gray-600 dark:text-gray-400">Yale</div>
                <div className="text-base font-semibold text-gray-600 dark:text-gray-400">Princeton</div>
                <div className="text-base font-semibold text-gray-600 dark:text-gray-400">Columbia</div>
                <div className="text-base font-semibold text-gray-600 dark:text-gray-400">Berkeley</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto mt-12 text-center animate-fade-in animation-delay-1000">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
            Not ready? Learn more
          </p>
        </div>
      </div>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        defaultTab={authTab}
      />
    </section>
  );
};
