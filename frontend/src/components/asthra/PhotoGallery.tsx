import { Camera, Users, Building } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useParallax';

const galleryItems = [
  { icon: Camera, label: 'Kiosk Inauguration', title: 'Inaugural Pictures' },
  { icon: Users, label: 'User Testing', title: '5G News' },
  { icon: Building, label: 'Conference Room', title: '5G Training Lab' },
];

export const PhotoGallery = () => {
  const { ref, isVisible } = useIntersectionObserver(0.2);

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16" ref={ref}>
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 relative">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground inline-block pb-2 sm:pb-3 border-b-2 sm:border-b-4 border-primary font-display tracking-wide">
            Photo Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {galleryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className={`group cursor-pointer transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[4/3] sm:aspect-[3/4] overflow-hidden rounded-lg shadow-lg bg-muted relative group-hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-muted to-muted/80 flex items-center justify-center text-muted-foreground">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-2 sm:mb-3 border-2 border-muted-foreground/40 rounded-full flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium">{item.label}</span>
                    </div>
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
