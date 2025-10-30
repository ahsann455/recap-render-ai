import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

export const Footer = () => (
  <footer className="py-12 px-6 bg-black text-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-5 gap-8 mb-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-3 text-white">MyTeacherAI</h3>
          <p className="text-gray-300 mb-6">
            Transform your learning experience with AI-powered video lectures
          </p>
          {/* Social */}
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="GitHub" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"><Github className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
        
        {/* Product */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Product</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/features" className="hover:underline">Features</a></li>
            <li><a href="/pricing" className="hover:underline">Pricing</a></li>
            <li>API</li>
          </ul>
        </div>
        
        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Docs</li>
            <li>Guides</li>
            <li>Status</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/10 text-center">
        <p className="text-sm text-gray-400">
          © 2025 MyTeacherAI. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);