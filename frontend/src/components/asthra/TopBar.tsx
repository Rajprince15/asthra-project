export const TopBar = () => {
  return (
    <>
      {/* Logo Bar */}
      <div className="bg-background py-3 sm:py-4 md:py-5 lg:py-6 border-b border-border">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground uppercase tracking-wider font-display">
              ASTRA (अस्त्र)
            </h1>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground uppercase tracking-wider font-display">
              Asthi Risk Assessment: India’s indigenous AI system for early hip fragility fracture risk prediction and national mission for bone health protection
            </h3>
          </div>
        </div>
      </div>

      {/* Funding Info Bar */}
      <div className="bg-asthra-cream py-3 sm:py-4 md:py-5 lg:py-6 text-center border-b border-border">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground uppercase font-medium tracking-wider">
            Funded By – Indian Council of Medical Research (ICMR)
          </p>
        </div>
      </div>
    </>
  );
};
