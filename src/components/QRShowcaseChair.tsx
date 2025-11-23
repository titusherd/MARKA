import { useEffect, useRef, useState } from "react";
import { Shield, ExternalLink, Scan } from "lucide-react";
import { Button } from "@/components/ui/button";

const QRShowcaseChair = () => {
  const qrCanvasRef = useRef<HTMLCanvasElement>(null);
  const [qrGenerated, setQrGenerated] = useState(false);

  // Generate QR code on mount
  useEffect(() => {
    const generateQR = async () => {
      if (qrCanvasRef.current) {
        try {
          const QRCode = (await import('qrcode')).default;

          // Generate QR code pointing to the Jepara chair page
          const craftUrl = window.location.origin + '/jepara-chair';

          await QRCode.toCanvas(qrCanvasRef.current, craftUrl, {
            width: 200,
            margin: 2,
            color: {
              dark: '#222524', // Deep Charcoal
              light: '#FFFFFF',
            },
            errorCorrectionLevel: 'M',
          });

          setQrGenerated(true);
        } catch (error) {
          console.error('Error generating QR code:', error);
        }
      }
    };

    generateQR();
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-ivory/30 border-t border-charcoal/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-charcoal/10">
              <Scan className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-charcoal tracking-wide">
                Kursi Ukir Jepara
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              Scan untuk Pengalaman Lengkap
            </h2>
            <p className="text-base md:text-lg text-charcoal/60 font-normal max-w-2xl mx-auto">
              Pindai QR untuk melihat proses pembuatan, filosofi motif, dan kisah Pak Slamet—maestro ukir Jepara.
            </p>
          </div>

          {/* Visual Demo: Physical Product with Tag */}
          <div className="mb-12">
            <div className="relative max-w-3xl mx-auto">
              {/* Chair Image with visible QR tag */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(34,37,36,0.15)] border border-charcoal/10 bg-white">
                <img
                  src="/images/jepara-chair-qr.png"
                  alt="Kursi Ukir Jepara dengan MARKA QR tag yang tertanam"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="aspect-[16/10] flex items-center justify-center bg-gradient-to-br from-ivory/50 to-white">
                          <div class="text-center p-8">
                            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold/10 flex items-center justify-center">
                              <svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <p class="text-sm text-charcoal/60">Kursi Ukir Jepara dengan MARKA Tag</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Connection indicator */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-full px-5 py-2 border border-charcoal/10 shadow-md">
                <p className="text-xs text-charcoal/60 uppercase tracking-[0.2em] font-medium">Scan produk asli ↓</p>
              </div>
            </div>
          </div>

          {/* QR Showcase Card */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left: Demo QR Code */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative group">

                {/* Label above QR */}
                <div className="text-center mb-4">
                  <p className="text-sm font-semibold text-charcoal/70 uppercase tracking-wider">
                    Demo Digital
                  </p>
                  <p className="text-xs text-charcoal/50 mt-1">
                    Scan QR ini untuk pengalaman lengkap
                  </p>
                </div>

                {/* QR Container */}
                <div className="relative bg-white rounded-3xl p-8 shadow-[0_20px_60px_-20px_rgba(34,37,36,0.15)] border-2 border-charcoal/10 hover:border-gold/30 transition-all duration-300">

                  {/* QR Canvas */}
                  <canvas
                    ref={qrCanvasRef}
                    className="w-full max-w-[200px] mx-auto rounded-xl"
                  />

                  {/* Verified badge */}
                  <div className="absolute -top-3 -right-3 bg-gold rounded-full p-3 shadow-lg border-4 border-white">
                    <Shield className="w-5 h-5 text-white" />
                  </div>

                  {/* Loading state */}
                  {!qrGenerated && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/90 rounded-3xl">
                      <div className="text-sm text-charcoal/50">Generating QR...</div>
                    </div>
                  )}
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border-2 border-emerald/20 -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gold/5 -z-10" />

                {/* Scan indicator */}
                <div className="mt-4 text-center">
                  <p className="text-sm text-charcoal/60 flex items-center justify-center gap-2">
                    <Scan className="w-4 h-4" />
                    Scan dengan kamera HP Anda
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Preview Info */}
            <div className="space-y-6 order-1 lg:order-2">

              {/* Preview card */}
              <div className="bg-gradient-to-br from-ivory/50 to-white rounded-2xl p-6 border border-charcoal/5">

                {/* Product preview */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/10 to-emerald/10 border border-charcoal/10 flex-shrink-0 overflow-hidden">
                    <img
                      src="/images/batik-megamendung.jpg"
                      alt="Kursi Ukir Jepara preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-charcoal text-lg mb-1">Kursi Ukir Jepara</h3>
                    <p className="text-sm text-charcoal/60">Motif Daun Cemara</p>
                  </div>
                  <div className="bg-gold/10 rounded-full px-3 py-1 border border-gold/20">
                    <span className="text-xs font-bold text-gold">Verified</span>
                  </div>
                </div>

                <div className="h-[1px] bg-charcoal/10 my-4" />

                {/* What you'll see */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-charcoal">Yang akan Anda temukan:</p>
                  <ul className="space-y-2 text-sm text-charcoal/70">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                      <span>Dokumentasi lengkap proses pengukiran (45 hari)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                      <span>Filosofi motif Daun Cemara dan makna budayanya</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                      <span>Profil Pak Slamet—maestro ukir generasi ketiga</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                      <span>Jejak asal kayu jati dan transparansi material</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                      <span>Dampak sosial dan lingkungan dari karya ini</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Desktop preview link */}
              <div className="hidden md:block">
                <Button
                  variant="outline"
                  className="w-full rounded-full border-2 border-charcoal/20 hover:border-gold/40 text-charcoal hover:bg-gold/5"
                  asChild
                >
                  <a href="/jepara-chair" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Atau lihat langsung di browser
                  </a>
                </Button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default QRShowcaseChair;
