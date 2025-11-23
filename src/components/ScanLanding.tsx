import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

interface ScanLandingProps {
  onScanComplete: () => void;
}

export const ScanLanding = ({ onScanComplete }: ScanLandingProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onScanComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onScanComplete]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Batik pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 15-15 15-15-15L30 0zM0 30l15 15-15 15-15-15L0 30zm60 0l15 15-15 15-15-15 15-15zM30 60l15 15-15 15-15-15 15-15z' fill='%231C2951' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center space-y-8 px-4 animate-fade-in-scale">
        {/* Logo */}
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-primary tracking-tight">
            MARKA
          </h1>
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
            Digital Passport
          </p>
        </div>

        {/* Scanning animation */}
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-premium flex items-center justify-center animate-scan-pulse">
              <Loader2 className="w-12 h-12 text-primary-foreground animate-spin" />
            </div>
            <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
          </div>

          <div className="space-y-3 w-full max-w-xs">
            <p className="text-foreground font-medium">Memverifikasi autentikasi...</p>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-gold transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground">{progress}% selesai</p>
          </div>
        </div>

        {/* Trust badge */}
        <div className="pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs text-muted-foreground">Terverifikasi Aman</span>
          </div>
        </div>
      </div>
    </div>
  );
};
