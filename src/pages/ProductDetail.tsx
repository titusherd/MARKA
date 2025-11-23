import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  Heart, 
  Share2, 
  Eye, 
  ArrowLeft,
  MapPin,
  Calendar,
  Sparkles,
  QrCode
} from "lucide-react";
import { toast } from "sonner";
import LoadingBatik from "@/components/LoadingBatik";

// Mock data - in real app, fetch based on ID
const mockProducts: Record<string, any> = {
  "batik-mega-mendung-001": {
    id: "MARKA-BMM-001",
    name: "Batik Mega Mendung",
    craftsman: "Pak Mulyadi",
    community: "Sanggar Batik Trusmi",
    location: "Cirebon, Jawa Barat",
    year: "2024",
    technique: "Batik Tulis Canting Halus",
    status: "Limited Edition - Asli",
    imageUrl: "/images/batik-megamendung.jpg",
    craftsmanPhoto: "/images/batik-megamendung.jpg",
    quote: "Mega Mendung mengajarkan kita bahwa seperti awan yang datang dan pergi, segala sesuatu dalam hidup adalah sementara",
    shortStory: "Batik Mega Mendung adalah warisan budaya Cirebon yang mencerminkan akulturasi budaya pesisir. Motif awan bertumpuk ini bukan sekadar hiasan—ia adalah filosofi tentang ketenangan hati dan pengendalian diri.",
    fullStory: "Batik Mega Mendung adalah warisan budaya Cirebon yang mencerminkan akulturasi budaya pesisir. Motif awan bertumpuk ini bukan sekadar hiasan—ia adalah filosofi tentang ketenangan hati dan pengendalian diri. Proses pembuatan dimulai dengan pemilihan mori premium yang dicuci bersih. Pak Mulyadi menggambar motif dengan tangan, lalu mencanting dengan malam panas selama 3-4 hari. Pewarnaan menggunakan indigo alami dari daun tom, dicelup berulang hingga mencapai gradasi sempurna. Setelah direbus, motif akhirnya terungkap—megah, tenang, penuh makna. Setiap helai kain memerlukan waktu 14-21 hari untuk diselesaikan dengan penuh kesabaran dan ketelitian.",
    scanCount: 234,
    totalDonations: 3850000,
    verified: true
  },
  "UCT-001-2024": {
    id: "UCT-001-2024",
    name: "Kain Tenun Ikat Sumba",
    craftsman: "Ibu Maria Bili",
    community: "Komunitas Tenun Praiyawang",
    location: "Sumba Timur, NTT",
    year: "2024",
    technique: "Tenun Ikat Tradisional",
    status: "Limited Edition - 1/5",
    imageUrl: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&auto=format&fit=crop",
    craftsmanPhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
    quote: "Setiap benang yang saya tenun adalah doa untuk anak cucu kami",
    shortStory: "Kain tenun ikat ini dibuat dengan teknik warisan nenek moyang yang telah berusia lebih dari 300 tahun. Setiap motif memiliki makna filosofis mendalam.",
    fullStory: "Kain tenun ikat ini dibuat dengan teknik warisan nenek moyang yang telah berusia lebih dari 300 tahun. Setiap motif memiliki makna filosofis mendalam tentang kehidupan, alam, dan spiritualitas masyarakat Sumba. Proses pembuatan memakan waktu 3-6 bulan, dimulai dari pemintalan benang kapas, pewarnaan alami dari tumbuhan lokal, hingga proses tenun yang dilakukan dengan penuh kesabaran dan ketelitian. Motif pada kain ini menggambarkan simbol kehidupan dan kesuburan yang menjadi identitas kuat budaya Sumba.",
    scanCount: 147,
    totalDonations: 2450000,
    verified: true
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showFullStory, setShowFullStory] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Get product data based on ID
  const mockProduct = mockProducts[id || "UCT-001-2024"] || mockProducts["UCT-001-2024"];

  useEffect(() => {
    // Simulate loading product data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    
    return () => clearTimeout(timer);
  }, [id]);

  const handleDonation = () => {
    // In real app, open Saweria link
    toast.success("Membuka halaman donasi...", {
      description: "Terima kasih atas dukungan Anda!"
    });
  };

  const handleShare = (platform: string) => {
    const text = `Lihat ${mockProduct.name} dari ${mockProduct.craftsman} - Budaya Asli Indonesia`;
    const url = window.location.href;
    
    if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, "_blank");
    } else if (platform === "copy") {
      navigator.clipboard.writeText(url);
      toast.success("Link berhasil disalin!");
    }
  };

  if (isLoading) {
    return <LoadingBatik />;
  }

  return (
    <div className="min-h-screen bg-gradient-subtle pb-24 pattern-overlay">
      {/* Header Navigation */}
      <div className="sticky top-0 z-40 glass border-b border-border/20 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16 px-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-background/50"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <span className="text-sm font-medium text-muted-foreground tracking-wide">
            {mockProduct.id}
          </span>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => handleShare("copy")}
            className="hover:bg-background/50"
          >
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="container max-w-2xl px-5 py-8 space-y-7 animate-fade-in">
        {/* Hero Product Visual */}
        <Card 
          className="relative overflow-hidden border-0 shadow-card hover:shadow-elegant transition-shadow duration-300 cursor-zoom-in group rounded-2xl"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <div className={`relative aspect-[4/5] transition-all duration-500 ${isZoomed ? 'aspect-auto' : ''}`}>
            <img 
              src={mockProduct.imageUrl}
              alt={mockProduct.name}
              className={`w-full h-full object-cover transition-transform duration-700 ${isZoomed ? 'scale-150' : 'group-hover:scale-105'}`}
            />
            
            {/* Badge Autentikasi */}
            {mockProduct.verified && (
              <div className="absolute top-5 right-5 badge-shine animate-scale-in">
                <div className="bg-gold text-gold-foreground px-5 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-xl">
                  <Shield className="h-[18px] w-[18px]" />
                  <div className="text-left leading-tight">
                    <div className="text-[13px] font-bold tracking-tight">Asli Budaya</div>
                    <div className="text-[10px] opacity-85 font-medium">Indonesia</div>
                  </div>
                </div>
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </Card>

        {/* Statistik Interaksi */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-5 bg-card/40 backdrop-blur-sm border-border/40 rounded-xl hover-lift">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-accent/10">
                <Eye className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1 pt-0.5">
                <div className="text-2xl font-bold tracking-tight">{mockProduct.scanCount}</div>
                <div className="text-xs text-muted-foreground mt-0.5">Kali Dilihat</div>
              </div>
            </div>
          </Card>
          
          <Card className="p-5 bg-card/40 backdrop-blur-sm border-border/40 rounded-xl hover-lift">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 pt-0.5">
                <div className="text-2xl font-bold tracking-tight">
                  Rp {(mockProduct.totalDonations / 1000).toFixed(0)}K
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">Donasi Terkumpul</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Judul & Status */}
        <div className="space-y-2 pt-1">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl font-bold leading-[1.2] tracking-tight">
              {mockProduct.name}
            </h1>
            <Badge variant="secondary" className="shrink-0 badge-shine px-3 py-1.5 rounded-full">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              <span className="text-xs font-semibold">{mockProduct.status.split(" - ")[0]}</span>
            </Badge>
          </div>
          
          {mockProduct.status.includes(" - ") && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {mockProduct.status.split(" - ")[1]}
            </p>
          )}
        </div>

        <Separator />

        {/* Profil Pengrajin */}
        <Card className="p-6 space-y-5 bg-card/40 backdrop-blur-sm border-border/40 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="relative flex-shrink-0">
              <img 
                src={mockProduct.craftsmanPhoto}
                alt={mockProduct.craftsman}
                className="w-[72px] h-[72px] rounded-2xl object-cover ring-2 ring-primary/20"
              />
              <div className="absolute -bottom-1.5 -right-1.5 p-1.5 bg-gold rounded-lg shadow-md">
                <Shield className="h-3.5 w-3.5 text-gold-foreground" />
              </div>
            </div>
            <div className="flex-1 pt-1">
              <h3 className="font-bold text-lg tracking-tight">{mockProduct.craftsman}</h3>
              <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{mockProduct.community}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-2">
                <MapPin className="h-3.5 w-3.5" />
                {mockProduct.location}
              </p>
            </div>
          </div>
          
          <blockquote className="pl-5 border-l-[3px] border-primary/30 italic text-sm text-muted-foreground leading-relaxed pt-1">
            "{mockProduct.quote}"
          </blockquote>
        </Card>

        {/* Cerita Produk */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl font-bold flex items-center gap-2.5 tracking-tight">
            <Sparkles className="h-5 w-5 text-primary" />
            Cerita & Makna
          </h2>
          <Card className="p-6 space-y-4 bg-card/40 backdrop-blur-sm border-border/40 rounded-2xl">
            <p className="text-[15px] leading-relaxed text-foreground/85">
              {showFullStory ? mockProduct.fullStory : mockProduct.shortStory}
            </p>
            {!showFullStory && (
              <Button 
                variant="ghost" 
                className="w-full text-primary hover:text-primary hover:bg-primary/10 font-medium rounded-xl"
                onClick={() => setShowFullStory(true)}
              >
                Baca Cerita Selengkapnya
              </Button>
            )}
          </Card>
        </div>

        {/* Data Produk */}
        <div className="space-y-4 pt-1">
          <h2 className="text-xl font-bold tracking-tight">Informasi Teknis</h2>
          <Card className="p-6 space-y-5 bg-card/40 backdrop-blur-sm border-border/40 rounded-2xl">
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">Tahun</span>
                </div>
                <p className="font-bold text-lg">{mockProduct.year}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4" />
                  <span className="font-medium">Daerah</span>
                </div>
                <p className="font-bold text-lg">{mockProduct.location}</p>
              </div>
            </div>
            
            <Separator className="opacity-50" />
            
            <div className="space-y-2">
              <div className="text-muted-foreground text-sm font-medium">Teknik Pembuatan</div>
              <p className="font-semibold text-[15px]">{mockProduct.technique}</p>
            </div>
            
            <div className="space-y-2.5">
              <div className="text-muted-foreground text-sm font-medium">ID Autentikasi</div>
              <div className="flex items-center gap-2">
                <code className="flex-1 px-4 py-3 bg-muted/50 rounded-xl text-sm font-mono tracking-wider">
                  {mockProduct.id}
                </code>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="h-12 w-12 rounded-xl"
                  onClick={() => {
                    navigator.clipboard.writeText(mockProduct.id);
                    toast.success("ID berhasil disalin!");
                  }}
                >
                  <QrCode className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Share Section */}
        <div className="space-y-3.5 pt-1">
          <h2 className="text-xl font-bold tracking-tight">Bagikan Cerita Ini</h2>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1 h-12 rounded-xl font-medium"
              onClick={() => handleShare("whatsapp")}
            >
              <Share2 className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 h-12 rounded-xl font-medium"
              onClick={() => handleShare("copy")}
            >
              <QrCode className="h-4 w-4 mr-2" />
              Salin Link
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Donation Button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-5 glass-dark backdrop-blur-xl border-t border-white/10">
        <div className="container max-w-2xl">
          <Button 
            size="lg"
            className="w-full h-14 bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant text-base font-bold rounded-2xl"
            onClick={handleDonation}
          >
            <Heart className="h-5 w-5 mr-2.5 fill-current" />
            Dukung Pengrajin via Saweria
          </Button>
          <p className="text-center text-xs text-white/80 mt-2.5 font-medium">
            100% donasi langsung ke pengrajin
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
