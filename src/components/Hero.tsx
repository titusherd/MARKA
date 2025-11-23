import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, BookOpen, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-image.jpg)' }}
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/50" />

      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top accent blur */}
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-emerald/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gold/8 rounded-full blur-[120px]" />
      </div>

      {/* Main Content - Centered, Full-Width */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in">

          {/* Headline - Bold, Clear, Digital */}
          <div className="space-y-8">
            <h1
              className="font-bold leading-[1.15] tracking-tight text-white"
              style={{ fontSize: 'clamp(2rem, 5vw + 1rem, 4rem)' }}
            >
              Digitalisasi Otentikasi Budaya,
              <br />
              Scan, Temukan, Apresiasi
              <br />
              <span
                className="bg-gradient-to-r from-emerald-300 to-emerald-200 bg-clip-text text-transparent"
                style={{ textShadow: '0 0 40px rgba(52, 211, 153, 0.2)' }}
              >
                Captured by MARKA
              </span>
            </h1>

            {/* Subheadline - Concise, Digital, No Traditional Jargon */}
            <p
              className="font-normal leading-[1.6] text-white/90 max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.5rem)' }}
            >
              Setiap karya budaya Indonesia kini punya bukti keaslian, cerita, serta koneksi digital langsung ke pengrajin—cukup sekali scan.
            </p>
          </div>

          {/* CTAs - Centered Horizontal */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              className="group rounded-full bg-emerald hover:bg-emerald/90 text-white font-bold shadow-[0_20px_60px_-15px_rgba(39,97,85,0.3)] hover:shadow-[0_24px_70px_-15px_rgba(39,97,85,0.4)] transition-all duration-300 h-auto"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                padding: '16px 32px'
              }}
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              className="group rounded-full border-2 border-white/30 hover:border-emerald/40 bg-transparent hover:bg-emerald/5 text-white hover:text-white font-semibold transition-all duration-300 h-auto"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                padding: '16px 32px'
              }}
            >
              <Play className="w-5 h-5 mr-2" />
              How It Works
            </Button>
          </div>


        </div>
      </div>
    </section>
  );
};
export default Hero;