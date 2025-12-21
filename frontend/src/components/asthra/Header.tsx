import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About the project', href: '#' },
  { name: 'Collaborators', href: '#' },
  { name: 'Dashboard', href: 'https://asthicare.lovable.app/' },
  { name: 'AI Predictor tool', href: 'https://astralatest.lovable.app/' },
  { name: 'ASTHI Care App', href: 'https://asthicarelatest.lovable.app' },
  { name: 'App downloads', href: '#' },
  { name: 'Contact us', href: '#' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-sm text-white sticky top-0 z-50 shadow-lg border-b border-white/10">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-center items-center min-h-[56px] sm:min-h-[64px] py-2">
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex w-full justify-center items-center gap-4 xl:gap-6 2xl:gap-8 flex-wrap">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                // Optional: Add target="_blank" if you want external links to open in a new tab
                target={item.href.startsWith('http') ? "_blank" : "_self"} 
                rel={item.href.startsWith('http') ? "noopener noreferrer" : ""}
                className="hover:text-secondary uppercase whitespace-nowrap py-2 px-1 transition-colors duration-300 relative group font-medium tracking-wide text-xs xl:text-sm 2xl:text-base"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex justify-between w-full items-center">
            <span className="font-bold font-display text-base sm:text-lg">MENU</span>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-white/10 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div 
        className={`lg:hidden bg-black/90 backdrop-blur-md border-t border-white/10 overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col py-4 space-y-3">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                // Optional: Add target="_blank" for mobile links as well
                target={item.href.startsWith('http') ? "_blank" : "_self"}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : ""}
                className="hover:text-secondary uppercase transition-colors text-sm sm:text-base font-medium tracking-wide text-left py-2 border-b border-white/10 last:border-0"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
