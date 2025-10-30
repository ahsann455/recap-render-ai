import { BookOpen, User, LogOut, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/AuthModal";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const TopNav = () => {
  const { user, logout } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authTab, setAuthTab] = useState<"login" | "signup">("login");

  const Trigger = ({ label }: { label: string }) => (
    <NavigationMenuTrigger className="text-sm font-medium text-black dark:text-white rounded-md px-3 py-2 transition bg-transparent data-[state=open]:bg-transparent hover:bg-black/5 dark:hover:bg-white/10">
      {label}
    </NavigationMenuTrigger>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-950/75 backdrop-blur-xl backdrop-saturate-150">
      <div className="max-w-7xl mx-auto h-14 px-4 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="/" className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-black dark:text-white" />
<span className="text-sm font-bold text-black dark:text-white">MyTeacherAI</span>
        </a>

        {/* Center: Menu */}
        <NavigationMenu>
          <NavigationMenuList className="items-center gap-1">
            {/* Simple links */}
            <NavigationMenuItem>
<a href="/features" className="text-sm px-3 py-2 rounded-md text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10">Features</a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#" className="text-sm px-3 py-2 rounded-md text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10">Calendar</a>
            </NavigationMenuItem>
            <NavigationMenuItem>
<a href="/ai" className="text-sm px-3 py-2 rounded-md text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10">AI</a>
            </NavigationMenuItem>
            <NavigationMenuItem>
<a href="/enterprise" className="text-sm px-3 py-2 rounded-md text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10">Enterprise</a>
            </NavigationMenuItem>
            <NavigationMenuItem>
<a href="/pricing" className="text-sm px-3 py-2 rounded-md text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10">Pricing</a>
            </NavigationMenuItem>

            {/* Explore mega menu */}
            <NavigationMenuItem>
              <Trigger label="Explore" />
              <NavigationMenuContent className="rounded-md border-0 ring-0 shadow-xl p-8 md:w-[1000px] bg-white dark:bg-gray-900">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-4">Learn</p>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="block rounded-lg p-2 -mx-2 transition hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white">
                          <div className="text-[22px] leading-7 font-semibold text-black dark:text-white">Customer stories</div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">See how teams use us</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block rounded-lg p-2 -mx-2 transition hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white">
                          <div className="text-[22px] leading-7 font-semibold text-black dark:text-white">Community</div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Join events & groups</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block rounded-lg p-2 -mx-2 transition hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white">
                          <div className="text-[22px] leading-7 font-semibold text-black dark:text-white">Guides & tutorials</div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Level up fast</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-4">Build</p>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="block rounded-lg p-2 -mx-2 transition hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white">
                          <div className="text-[22px] leading-7 font-semibold text-black dark:text-white">Template gallery</div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Kickstart your workspace</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block rounded-lg p-2 -mx-2 transition hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white">
                          <div className="text-[22px] leading-7 font-semibold text-black dark:text-white">Integrations</div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Connect favorite tools</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block rounded-lg p-2 -mx-2 transition hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white">
                          <div className="text-[22px] leading-7 font-semibold text-black dark:text-white">Status</div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">System health</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Request demo + Auth */}
        <div className="flex items-center gap-4">
<a href="/demo" className="text-sm font-medium text-black dark:text-white hover:opacity-80">Request a demo</a>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white">
                  <User className="h-4 w-4 mr-2" />
                  {user.name}
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md shadow-md">
                <DropdownMenuLabel className="px-3 py-2 text-xs text-gray-500">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="cursor-pointer rounded-md focus:bg-black focus:text-white hover:bg-black hover:text-white">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                onClick={() => { setAuthTab("login"); setShowAuthModal(true); }}
                className="hover:bg-transparent text-black dark:text-white font-normal"
              >
                LOGIN
              </Button>
              <Button
                onClick={() => { setAuthTab("signup"); setShowAuthModal(true); }}
                className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black font-semibold rounded-full px-5"
              >
                SIGN UP
              </Button>
            </div>
          )}
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        defaultTab={authTab}
      />
    </header>
  );
};
