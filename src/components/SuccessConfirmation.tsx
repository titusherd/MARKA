import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Download, Share2, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

interface SuccessConfirmationProps {
  onClose: () => void;
}

export const SuccessConfirmation = ({ onClose }: SuccessConfirmationProps) => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowConfetti(false), 3000);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Confetti animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-10%",
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${2 + Math.random()}s`,
              }}
            >
              <Sparkles
                className="w-4 h-4"
                style={{
                  color: ["#D4AF37", "#0EA5E9", "#1C2951"][Math.floor(Math.random() * 3)],
                }}
              />
            </div>
          ))}
        </div>
      )}

      <div className="max-w-md w-full space-y-8 animate-fade-in-scale">
        {/* Success icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle2 className="w-16 h-16 text-success" />
            </div>
            <div className="absolute inset-0 rounded-full bg-success/20 animate-ping" />
          </div>
        </div>

        {/* Message */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-foreground">
            Terima Kasih! 💛
          </h1>
          <p className="text-lg text-foreground leading-relaxed">
            Apresiasi Anda sebesar <span className="font-bold text-accent">Rp 15.000</span> telah terkirim ke Pak Joko Santoso
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed px-4">
            Dukungan tulus Anda membantu melestarikan warisan kerajinan tangan Indonesia dan memberikan semangat bagi pengrajin untuk terus berkarya.
          </p>
        </div>

        {/* Digital certificate */}
        <Card className="p-6 shadow-premium border-accent/20 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-2xl">
              🏆
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Sertifikat Pendukung</h3>
              <p className="text-xs text-muted-foreground">Tersimpan secara otomatis</p>
            </div>
          </div>

          <div className="space-y-2 text-sm bg-secondary p-4 rounded-lg">
            <div className="flex justify-between">
              <span className="text-muted-foreground">ID Transaksi</span>
              <span className="font-mono text-foreground">#TIP2401283</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tanggal</span>
              <span className="text-foreground">23 Nov 2025, 14:32 WIB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Produk</span>
              <span className="text-foreground">Batik Tulis #LKA2401</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Penerima</span>
              <span className="text-foreground">Pak Joko Santoso</span>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button variant="secondary" className="flex-1 gap-2" size="sm">
              <Download className="w-4 h-4" />
              Unduh PDF
            </Button>
            <Button variant="secondary" className="flex-1 gap-2" size="sm">
              <Share2 className="w-4 h-4" />
              Bagikan
            </Button>
          </div>
        </Card>

        {/* Impact message */}
        <Card className="p-5 bg-accent/5 border-accent/20">
          <p className="text-sm text-center text-foreground leading-relaxed">
            ✨ Dengan dukungan Anda, Pak Joko dapat melanjutkan tradisi batik tulis yang telah diwariskan 3 generasi. Setiap apresiasi adalah investasi untuk masa depan kerajinan Indonesia.
          </p>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Button
            onClick={onClose}
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 font-semibold"
          >
            Lihat Produk Lainnya
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full h-12"
            onClick={onClose}
          >
            Kembali ke Profil Produk
          </Button>
        </div>
      </div>
    </div>
  );
};
