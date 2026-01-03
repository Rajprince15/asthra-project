import { useState } from 'react';
import { Menu, X, UserPlus, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { PatientRegistrationModal } from '@/components/PatientRegistrationModal';

const allNavItems = [
  { name: 'Home', href: '#', roles: ['centre', 'patient'] },
  { name: 'About the project', href: '#', roles: ['centre', 'patient'] },
  { name: 'Collaborators', href: '#', roles: ['centre', 'patient'] },
  { name: 'Dashboard', href: 'https://asthicare.lovable.app/', roles: ['centre', 'patient'] },
  { name: 'AI Predictor tool', href: 'https://astralatest.lovable.app/', roles: ['centre'] }, // Centre only
  { name: 'ASTHI Care App', href: 'https://asthicare.netlify.app/', roles: ['centre', 'patient'] },
  { name: 'Data Upload', href: 'https://nhffdataupload.netlify.app/', roles: ['centre'] }, // Centre only
  { name: 'App downloads', href: '#', roles: ['centre', 'patient'] },
  { name: 'Contact us', href: '#', roles: ['centre', 'patient'] },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const { user, logout } = useAuth();

  // Filter navigation items based on user role
  const navItems = user 
    ? allNavItems.filter(item => item.roles.includes(user.role))
    : allNavItems;

  return (
    <>
      <nav className="bg-black/90 backdrop-blur-sm text-white sticky top-0 z-50 shadow-lg border-b border-white/10">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center min-h-[56px] sm:min-h-[64px] py-2">
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex w-full justify-center items-center gap-4 xl:gap-6 2xl:gap-8 flex-wrap">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith('http') ? "_blank" : "_self"} 
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : ""}
                  className="hover:text-secondary uppercase whitespace-nowrap py-2 px-1 transition-colors duration-300 relative group font-medium tracking-wide text-xs xl:text-sm 2xl:text-base"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              
              {/* Centre-only: Patient Registration Button */}
              {user?.role === 'centre' && (
                <button
                  onClick={() => setIsRegistrationModalOpen(true)}
                  className="hover:text-secondary uppercase whitespace-nowrap py-2 px-1 transition-colors duration-300 relative group font-medium tracking-wide text-xs xl:text-sm 2xl:text-base flex items-center gap-1"
                >
                  <UserPlus size={16} />
                  <span>Register Patient</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </button>
              )}

              {/* Logout Button */}
              {user && (
                <button
                  onClick={logout}
                  className="hover:text-red-400 uppercase whitespace-nowrap py-2 px-1 transition-colors duration-300 relative group font-medium tracking-wide text-xs xl:text-sm 2xl:text-base flex items-center gap-1"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full" />
                </button>
              )}
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
                  target={item.href.startsWith('http') ? "_blank" : "_self"}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : ""}
                  className="hover:text-secondary uppercase transition-colors text-sm sm:text-base font-medium tracking-wide text-left py-2 border-b border-white/10"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Centre-only: Patient Registration Button (Mobile) */}
              {user?.role === 'centre' && (
                <button
                  onClick={() => {
                    setIsRegistrationModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="hover:text-secondary uppercase transition-colors text-sm sm:text-base font-medium tracking-wide text-left py-2 border-b border-white/10 flex items-center gap-2"
                >
                  <UserPlus size={18} />
                  <span>Register Patient</span>
                </button>
              )}

              {/* Logout Button (Mobile) */}
              {user && (
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="hover:text-red-400 uppercase transition-colors text-sm sm:text-base font-medium tracking-wide text-left py-2 flex items-center gap-2"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Patient Registration Modal */}
      <PatientRegistrationModal 
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </>
  );
};
