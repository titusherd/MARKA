import { useEffect, useState } from "react";

const LoadingBatik = () => {
  const [text, setText] = useState("Memverifikasi");
  
  useEffect(() => {
    const texts = ["Memverifikasi", "Memeriksa keaslian", "Memuat cerita"];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setText(texts[index]);
    }, 1200);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md">
      {/* Batik-inspired loading spinner */}
      <div className="relative w-24 h-24 mb-8">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
        
        {/* Animated rings */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" 
             style={{ animationDuration: "1.5s" }} />
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-r-gold animate-spin" 
             style={{ animationDuration: "2s", animationDirection: "reverse" }} />
        
        {/* Center motif */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 loading-batik">
            <svg viewBox="0 0 60 60" className="w-full h-full text-primary">
              <g fill="currentColor" opacity="0.6">
                <path d="M30 15 L25 20 L20 15 L25 10 Z" />
                <path d="M30 45 L25 40 L20 45 L25 50 Z" />
                <path d="M15 30 L10 25 L15 20 L20 25 Z" />
                <path d="M45 30 L40 25 L45 20 L50 25 Z" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Loading text */}
      <div className="text-center space-y-2">
        <p className="text-lg font-medium text-foreground transition-all duration-300">
          {text}
        </p>
        <div className="flex gap-1 justify-center">
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-30 pointer-events-none" />
    </div>
  );
};

export default LoadingBatik;
