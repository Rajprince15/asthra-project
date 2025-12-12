import pgimerLogo from '@/assets/logos/pgimer.png';
import icmrLogo from '@/assets/logos/icmr.png';
import gmchLogo from '@/assets/logos/gmch.png';
import AIIMSDLogo from '@/assets/logos/aiimsd.png';
import SafdarjungLogo from '@/assets/logos/safdarjung.png';
import RIMSLogo from '@/assets/logos/rims.png';
import AIIMSJLogo from '@/assets/logos/aiimsj.png';
import AIIMSBLogo from '@/assets/logos/aiimsb.png';
import KEMLogo from '@/assets/logos/kem.png';
import BMCRILogo from '@/assets/logos/bmcri.png';
import JIPMERLogo from '@/assets/logos/jipmer.png';
import ICMRRMRCLogo from '@/assets/logos/icmrrmrc.png';
import ICMRNICHDRLogo from '@/assets/logos/icmrnich.png';
import ILBSLogo from '@/assets/logos/ilbs.png';
import PULogo from '@/assets/logos/pu.png';
import IITRoparLogo from '@/assets/logos/iitr.png';

const educationPartners = [
  { name: "PGIMER", full: "Postgraduate Institute of Medical Education and Research, Chandigarh", color: "bg-red-700", logo: pgimerLogo },
  { name: "GMCH-32", full: "Government Medical College and Hospital, Chandigarh", color: "bg-blue-600", logo: gmchLogo },
  { name: "AIIMS", full: "All India Institute of Medical Sciences, New Delhi", color: "bg-orange-600", logo: AIIMSDLogo },
  { name: "Safdarjung", full: "Safdarjung Hospital, New Delhi", color: "bg-green-700", logo: SafdarjungLogo },
  { name: "RIMS", full: "Regional Institute of Medical Sciences, Imphal", color: "bg-purple-700", logo: RIMSLogo },
  { name: "AIIMS", full: "All India Institute of Medical Sciences, Jodhpur", color: "bg-blue-800", logo: AIIMSJLogo },
  { name: "AIIMS", full: "All India Institute of Medical Sciences, Bhubaneswar", color: "bg-indigo-700", logo: AIIMSBLogo },
  { name: "KEM", full: "King Edward Memorial Hospital, Mumbai", color: "bg-red-800", logo: KEMLogo },
  { name: "BMCRI", full: "Bangalore Medical College and Research Institute", color: "bg-teal-700", logo: BMCRILogo },
  { name: "JIPMER", full: "Jawaharlal Institute of Postgraduate Medical Education & Research, Pondicherry", color: "bg-blue-500", logo: JIPMERLogo },
  { name: "ICMR-RMRC", full: "ICMR – Regional Medical Research Centre, Bhubaneswar", color: "bg-gray-800", logo: ICMRRMRCLogo },
  { name: "ICMR-NICHDR", full: "ICMR – National Institute of Child Health and Development Research, New Delhi", color: "bg-pink-700", logo: ICMRNICHDRLogo },
  { name: "ICMR", full: "Indian Council of Medical Research, New Delhi", color: "bg-gray-900", logo: icmrLogo },
  { name: "ILBS", full: "Institute of Liver and Biliary Sciences, New Delhi", color: "bg-yellow-600", logo: ILBSLogo },
  { name: "Panjab Univ", full: "Panjab University, Chandigarh", color: "bg-red-600", logo: PULogo },
  { name: "IIT Ropar", full: "Indian Institute of Technology Ropar, Punjab", color: "bg-blue-900", logo: IITRoparLogo },
];

const PartnerCard = ({ partner }: { partner: typeof educationPartners[0] }) => (
  <div className="flex flex-col items-center group cursor-pointer flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 mx-3 sm:mx-4 md:mx-6 lg:mx-8">
    {partner.logo ? (
      <img 
        src={partner.logo} 
        alt={partner.name}
        className="h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44 lg:h-52 lg:w-52 xl:h-56 xl:w-56 rounded-full object-cover shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 mb-3 sm:mb-4 border-2 border-background ring-1 ring-border bg-white"
      />
    ) : (
      <div className={`h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44 lg:h-52 lg:w-52 xl:h-56 xl:w-56 ${partner.color} text-primary-foreground rounded-full flex items-center justify-center font-bold text-xs sm:text-sm md:text-base lg:text-lg text-center shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 mb-3 sm:mb-4 border-2 border-background ring-1 ring-border`}>
        {partner.name}
      </div>
    )}
    <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm text-center leading-tight text-muted-foreground group-hover:text-primary font-medium px-1 sm:px-2 transition-colors duration-300 line-clamp-3">
      {partner.full}
    </p>
  </div>
);

export const EducationPartners = () => {
  return (
    <div className="bg-background py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden">
      {/* HEADER SECTION: Left Aligned with Consistent Padding */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mb-6 sm:mb-8 md:mb-10">
        <h3 className="text-left text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wider border-b-4 border-primary pb-2 inline-block font-display">
          Execution Partners
        </h3>
      </div>
      
      {/* Marquee Container */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex overflow-hidden">
          <div className="flex animate-scroll hover:[animation-play-state:paused] py-4">
            {educationPartners.map((partner, index) => (
              <PartnerCard key={`first-${index}`} partner={partner} />
            ))}
            {educationPartners.map((partner, index) => (
              <PartnerCard key={`second-${index}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};