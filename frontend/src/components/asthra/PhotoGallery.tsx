import { Camera, Users, Building } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useParallax';
import HumanAndAnimalDEXA from '@/assets/gallery/HumanAndAnimalDEXA.jpeg';
import ABI3500DXSequencer from '@/assets/gallery/ABI3500DX,Sequencer.jpeg';
import FlowCytometer from '@/assets/gallery/FlowCytometer.jpeg';

const galleryItems = [
  { icon: Camera, label: '', title: 'HumanAndAnimalDEXA.jpeg', image: HumanAndAnimalDEXA },
  { icon: Users, label: '', title: 'ABI3500DX,Sequencer.jpeg', image: ABI3500DXSequencer },
  { icon: Building, label: '', title: 'FlowCytometer.jpeg', image: FlowCytometer },
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
                <div className="aspect-[3/2] sm:aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-lg shadow-lg relative group-hover:shadow-2xl transition-all duration-300">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-end justify-start p-4">
                    <span className="text-white text-xs sm:text-sm font-medium bg-black/50 px-2 py-1 rounded">{item.label}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
