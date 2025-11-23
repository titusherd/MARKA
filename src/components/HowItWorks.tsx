import { Scan, FileCheck, Shield, Heart } from "lucide-react";

const steps = [
  {
    icon: Scan,
    step: "1",
    title: "Scan QR Tag",
    description: "Pindai tag QR unik pada setiap produk budaya untuk membuka cerita di baliknya",
  },
  {
    icon: FileCheck,
    step: "2",
    title: "Lihat Profil Digital",
    description: "Temukan narasi lengkap, sejarah pembuatan, dan profil pengrajin asli",
  },
  {
    icon: Shield,
    step: "3",
    title: "Verifikasi Autentikasi",
    description: "Badge eksklusif menandakan keaslian yang terverifikasi melalui kurasi MARKA",
  },
  {
    icon: Heart,
    step: "4",
    title: "Dukung Langsung",
    description: "Apresiasi langsung kepada pengrajin dan komunitas budaya Indonesia",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-ivory to-background overflow-hidden">

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <CraftTexture />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header - Centered */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-charcoal">
            Cara Kerja
          </h2>
          <p className="text-lg md:text-xl text-charcoal/70 font-light max-w-2xl mx-auto">
            Empat langkah sederhana menghubungkan Anda dengan keaslian dan kisah di balik setiap karya
          </p>
        </div>

        {/* Cards Container - Horizontal scroll on mobile */}
        <div className="relative max-w-7xl mx-auto">

          {/* Connector line - desktop only */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          {/* Cards Grid */}
          <div className="overflow-x-auto lg:overflow-visible pb-8 -mx-6 px-6 md:mx-0 md:px-0">
            <div className="flex lg:grid lg:grid-cols-4 gap-6 lg:gap-6 min-w-max lg:min-w-0">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative w-[280px] lg:w-auto animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Premium Card */}
                  <div className="relative h-full bg-white rounded-2xl p-8 shadow-[0_4px_24px_-8px_rgba(34,37,36,0.06),0_2px_8px_-4px_rgba(34,37,36,0.03)] hover:shadow-[0_8px_32px_-8px_rgba(34,37,36,0.1),0_4px_12px_-4px_rgba(34,37,36,0.05)] transition-all duration-500 border border-charcoal/[0.04] overflow-hidden group">

                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-ivory/60 via-transparent to-transparent opacity-50 pointer-events-none" />

                    {/* Step number badge - Burnt Clay accent */}
                    <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gradient-to-br from-clay/12 to-clay/6 border border-clay/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-clay tracking-tight">{step.step}</span>
                    </div>

                    {/* Icon - Custom styled with Indonesian craft feel */}
                    <div className="relative mb-8 mt-2">
                      <div className="relative inline-flex items-center justify-center">
                        {/* Decorative background circles - inspired by batik patterns */}
                        <div className="absolute inset-0 w-16 h-16 rounded-full bg-charcoal/[0.03] transition-all duration-500 group-hover:bg-gold/[0.06]" />
                        <div className="absolute inset-0 w-16 h-16 rounded-full border border-charcoal/[0.06] transition-all duration-500 group-hover:border-gold/20" style={{ transform: 'scale(1.15)' }} />

                        {/* Icon */}
                        <div className="relative z-10">
                          <step.icon
                            className="h-8 w-8 text-charcoal transition-all duration-500 group-hover:text-gold"
                            strokeWidth={1.5}
                          />
                        </div>

                        {/* Small accent dot - Vintage Gold */}
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-gold/40 transition-all duration-500 group-hover:bg-gold" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative space-y-4">
                      <h3 className="text-2xl font-bold text-charcoal leading-tight tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-[15px] text-charcoal/70 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom accent line - Vintage Gold */}
                    <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Subtle craft paper texture on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700 pointer-events-none">
                      <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,37,36,0.03),transparent_70%)]" />
                    </div>
                  </div>

                  {/* Connector between cards - desktop only - Vintage Gold dots */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 left-full w-6 h-6 -ml-3 z-10">
                      <svg className="w-full h-full text-gold/30" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.5" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile scroll hint */}
          <div className="lg:hidden text-center mt-6">
            <p className="text-xs text-charcoal/40 uppercase tracking-[0.2em]">
              Swipe untuk lihat semua langkah
            </p>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 text-center space-y-3">
          <div className="inline-flex items-center gap-2">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gold/30" />
            <p className="text-sm text-charcoal/60 uppercase tracking-[0.25em] font-medium">
              Sederhana, Transparan, Bermakna
            </p>
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-gold/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Craft texture pattern - very subtle with MARKA colors
const CraftTexture = () => (
  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="craft-texture" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
        {/* Subtle dots inspired by traditional weaving patterns */}
        <circle cx="40" cy="40" r="1" fill="#222524" opacity="0.4" />
        <circle cx="160" cy="40" r="1" fill="#222524" opacity="0.4" />
        <circle cx="40" cy="160" r="1" fill="#222524" opacity="0.4" />
        <circle cx="160" cy="160" r="1" fill="#222524" opacity="0.4" />
        <circle cx="100" cy="100" r="1.5" fill="#C2A552" opacity="0.3" />

        {/* Subtle diagonal lines - woven texture feel */}
        <line x1="0" y1="0" x2="200" y2="200" stroke="#222524" strokeWidth="0.3" opacity="0.15" />
        <line x1="0" y1="100" x2="100" y2="200" stroke="#222524" strokeWidth="0.3" opacity="0.1" />
        <line x1="100" y1="0" x2="200" y2="100" stroke="#222524" strokeWidth="0.3" opacity="0.1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#craft-texture)" />
  </svg>
);

export default HowItWorks;
