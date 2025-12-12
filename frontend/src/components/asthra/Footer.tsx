import { Facebook, Twitter, Linkedin, ChevronUp } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useParallax';

export const Footer = () => {
  const { showScrollTop, scrollToTop } = useScrollPosition();

  return (
    <footer className="bg-asthra-dark text-muted pt-10 sm:pt-12 md:pt-16">
      {/* Bottom Bar */}
      <div className="border-t border-primary/20 py-4 sm:py-5 md:py-6 bg-foreground/5">
        <div className="container mx-auto px-3 sm:px-4 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-xs md:text-sm">
          <div className="text-muted-foreground text-center md:text-left">
            © Designed and developed by DIC, PANJAB UNIVERSITY, CHANDIGARH
          </div>
          
          <div className="flex flex-row items-center gap-3 sm:gap-4 md:gap-6 flex-wrap justify-center">
            <a href="#" className="text-secondary hover:text-secondary/80 transition-colors font-medium whitespace-nowrap">
              | Contact Us |
            </a>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-muted-foreground text-[10px] sm:text-xs whitespace-nowrap">Follow Us:</span>
              {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="bg-card text-card-foreground rounded-full p-1.5 sm:p-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 gradient-primary text-primary-foreground p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-50 transform hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </footer>
  );
};
