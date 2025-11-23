import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Heart, Share2, Play } from "lucide-react";
import { useState } from "react";

interface ProductDetailProps {
  onTipClick: () => void;
}

export const ProductDetail = ({ onTipClick }: ProductDetailProps) => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full overflow-hidden bg-muted">
        <img
          src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&q=80"
          alt="Produk kerajinan tangan Indonesia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Floating actions */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button size="icon" variant="secondary" className="rounded-full shadow-floating bg-background/80 backdrop-blur-sm">
            <Share2 className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full shadow-floating bg-background/80 backdrop-blur-sm">
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        {/* Authentication badge - positioned at bottom */}
        <div className="absolute bottom-6 left-6 right-6">
          <Card className="p-4 bg-background/95 backdrop-blur-sm shadow-premium border-accent/20">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground mb-1">Sertifikat Autentik</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Produk asli 100% buatan tangan oleh pengrajin tersertifikasi MARKA
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8 pb-32">
        {/* Product title and origin */}
        <div className="space-y-4 animate-fade-in">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-accent/10 text-accent-foreground border-accent/20">
              Batik Tulis
            </Badge>
            <Badge variant="secondary" className="bg-secondary">
              Solo, Jawa Tengah
            </Badge>
          </div>
          
          <h1 className="text-3xl font-bold text-foreground leading-tight">
            Kain Batik Tulis Motif Parang Rusak
          </h1>
          
          <p className="text-muted-foreground leading-relaxed">
            Batik tulis premium dengan motif klasik Parang Rusak. Setiap goresan canting dilakukan dengan penuh kesabaran dan ketelitian selama 3 minggu oleh tangan terampil pengrajin.
          </p>
        </div>

        {/* Video section */}
        <Card className="overflow-hidden shadow-card border-border">
          <div className="relative aspect-video bg-muted">
            {!videoPlaying ? (
              <>
                <img
                  src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
                  alt="Video proses pembuatan"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-primary/40 hover:bg-primary/50 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-full bg-background/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-premium">
                    <Play className="w-7 h-7 text-primary ml-1" fill="currentColor" />
                  </div>
                </button>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <p className="text-sm">Video player placeholder</p>
              </div>
            )}
          </div>
          <div className="p-4 bg-secondary">
            <p className="text-sm font-medium text-foreground">Proses Pembuatan Batik Tulis</p>
            <p className="text-xs text-muted-foreground mt-1">3 minggu kerja teliti • 15 langkah tradisional</p>
          </div>
        </Card>

        {/* Artisan profile */}
        <Card className="p-6 shadow-card border-border animate-fade-in">
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-full bg-muted overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=200&q=80"
                alt="Pak Joko"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">Pak Joko Santoso</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Pengrajin batik tulis generasi ke-3 • 25 tahun pengalaman
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                "Setiap motif yang saya buat adalah doa. Batik bukan sekadar kain, tapi warisan leluhur yang harus dijaga dengan hati. Kesalahan kecil dalam canting bisa mengubah makna motif—itulah mengapa saya tidak pernah tergesa-gesa."
              </p>
            </div>
          </div>
        </Card>

        {/* The human imperfection narrative */}
        <div className="space-y-4 py-4 animate-fade-in">
          <h2 className="text-xl font-semibold text-foreground">Keunikan Buatan Tangan</h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Tidak ada dua kain batik tulis yang identik. Setiap goresan canting membawa karakter unik dari tangan pengrajin—ketebalan garis yang tidak selalu sama, warna yang meresap berbeda di setiap titik, dan waktu yang dibutuhkan untuk setiap detil.
            </p>
            <p className="text-foreground font-medium">
              Inilah yang membuat batik tulis istimewa: ia sempurna justru karena tak sempurna seperti mesin. Ia manusiawi.
            </p>
          </div>
        </div>

        {/* Product specifications */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 border-border">
            <p className="text-xs text-muted-foreground mb-1">Bahan</p>
            <p className="font-medium text-foreground">Katun Prima</p>
          </Card>
          <Card className="p-4 border-border">
            <p className="text-xs text-muted-foreground mb-1">Ukuran</p>
            <p className="font-medium text-foreground">2.5m × 1.15m</p>
          </Card>
          <Card className="p-4 border-border">
            <p className="text-xs text-muted-foreground mb-1">Waktu Produksi</p>
            <p className="font-medium text-foreground">3 Minggu</p>
          </Card>
          <Card className="p-4 border-border">
            <p className="text-xs text-muted-foreground mb-1">ID Produk</p>
            <p className="font-medium text-foreground">#LKA2401</p>
          </Card>
        </div>
      </div>

      {/* Floating Tip Button - always visible */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background to-transparent">
        <Button 
          onClick={onTipClick}
          size="lg"
          className="w-full max-w-2xl mx-auto flex items-center justify-center gap-2 shadow-floating bg-cta text-cta-foreground hover:bg-cta/90 h-14 text-base font-semibold"
        >
          <Heart className="w-5 h-5" />
          Kirim Apresiasi untuk Pak Joko
        </Button>
      </div>
    </div>
  );
};
