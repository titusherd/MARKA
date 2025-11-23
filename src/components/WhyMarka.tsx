import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WhyMarka = () => {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">

      {/* Subtle accent blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Layout: Image + Story */}
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">

            {/* Left: Visual - Process imagery */}
            <div className="relative order-2 lg:order-1 animate-fade-in">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(34,37,36,0.15)]">
                {/* Placeholder for process image - hands crafting, weaving, etc */}
                <img
                  src="/images/batik-qr.png"
                  alt="Tangan pengrajin sedang bekerja"
                  className="w-full h-full object-cover"
                />

                {/* Overlay with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald/20 via-transparent to-transparent" />

                {/* Small quote overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-charcoal/5">
                    <p className="text-sm text-charcoal/80 italic leading-relaxed">
                      "Setiap karya punya kisah. Setiap proses punya nilai."
                    </p>
                    <p className="text-xs text-charcoal/60 mt-2 uppercase tracking-wider">
                      — Filosofi MARKA
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative element - subtle */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-2 border-gold/20 -z-10" />
            </div>

            {/* Right: Personal narrative */}
            <div className="order-1 lg:order-2 space-y-8 animate-slide-up">

              {/* Small label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ivory border border-gold/20">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-sm font-medium text-charcoal tracking-wide">
                  Kenapa MARKA Ada
                </span>
              </div>

              {/* Main heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.1] tracking-tight">
                Menghargai Proses
                <br />
                di Balik Setiap Karya
              </h2>

              {/* Personal narrative - intimate and reflective */}
              <div className="space-y-6 text-lg md:text-xl text-charcoal/75 leading-relaxed font-light">
                <p>
                  Sering kali, kita makan satu piring makanan tanpa berpikir: siapa yang menanam padi, memetik sayur, memasak lauk. Kita menikmati hasil akhirnya, lupa akan proses dan tangan yang terlibat di baliknya.
                </p>

                <p>
                  Saya ingin MARKA mengubah cara kita melihat produk budaya Indonesia—<span className="text-charcoal font-medium">bukan sekadar hasil akhir, tapi perjalanan, kisah, dan manusia di balik setiap karya.</span>
                </p>

                <div className="pt-4 pl-6 border-l-2 border-gold/30">
                  <p className="text-charcoal/80 italic">
                    MARKA adalah paspor digital yang menyalurkan cerita, proses, dan sentuhan pengrajin ke permukaan—agar setiap craft Indonesia dihargai bukan hanya sebagai benda, tapi juga sebagai perjalanan.
                  </p>
                </div>
              </div>

              {/* Mini CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                <Button
                  size="lg"
                  className="group rounded-full bg-emerald hover:bg-emerald/90 text-white px-8 py-6 text-base font-semibold shadow-[0_12px_40px_-12px_rgba(39,97,85,0.3)] hover:shadow-[0_16px_50px_-12px_rgba(39,97,85,0.4)] transition-all duration-300"
                >
                  Lihat Cerita di Balik Karya
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>

                <button className="text-base font-medium text-charcoal/70 hover:text-emerald transition-colors underline underline-offset-4 decoration-gold/30 hover:decoration-emerald/50">
                  Pelajari lebih lanjut
                </button>
              </div>

              {/* Small stats or highlights - optional */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-charcoal/10">
                <Stat number="100+" label="Pengrajin" />
                <Stat number="50+" label="Karya" />
                <Stat number="10+" label="Daerah" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom subtle accent */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald/3 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

// Small stat component
const Stat = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center lg:text-left">
    <p className="text-2xl md:text-3xl font-bold text-emerald mb-1">{number}</p>
    <p className="text-sm text-charcoal/60 uppercase tracking-wide">{label}</p>
  </div>
);

export default WhyMarka;
