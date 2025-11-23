import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Heart,
  Share2,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Leaf,
  Users,
  Award,
  TreePine
} from "lucide-react";

// Mock data for Kursi Ukir Jepara
const craftData = {
  id: "MARKA-KUJ-2024-001",
  name: "Kursi Ukir Jepara Motif Daun Cemara",
  category: "Furniture Ukir",
  verified: true,
  verifiedDate: "20 Januari 2024",
  serialNumber: "KUJ-2024-001",

  hero: {
    image: "/images/batik-megamendung.jpg", // Replace with actual chair image
    alt: "Kursi Ukir Jepara dengan motif Daun Cemara yang detail",
  },

  headline: "Kursi Ukir Jepara – Warisan Seni & Keunggulan Craftmanship Indonesia, Dibuat dengan Sentuhan Tangan Maestro.",

  story: {
    philosophy: "Motif ukiran ini terinspirasi dari flora pesisir Jepara. Makna utama: tumbuh, harmoni, dan kekuatan. Setiap lekuk pada kursi ini diukir oleh tangan terampil Pak Slamet, pengrajin generasi ketiga dari Jepara.",
    cultural: "Motif 'Daun Cemara' melambangkan kesejahteraan dan penerimaan hangat—nilai yang diwariskan turun-temurun dalam tradisi keluarga beliau. Dalam budaya Jawa, kursi ukiran seperti ini digunakan untuk menyambut tamu agung sebagai simbol penghormatan tertinggi.",
    heritage: "Teknik ukir Jepara telah berkembang sejak era Kerajaan Majapahit dan mencapai puncak keindahannya pada masa Ratu Kalinyamat. Setiap generasi mewariskan keahlian ini dengan penuh dedikasi, menjaga tradisi tetap hidup di tengah modernisasi.",
  },

  process: [
    {
      step: "Pemilihan Kayu",
      description: "Kayu jati premium dari Donorejo, berusia 15 tahun. Dipilih dengan cermat untuk kekuatan dan keindahan serat alami. Setiap batang kayu dipanen dengan metode lestari untuk menjaga ekosistem hutan.",
      image: "/images/proses-1.png",
    },
    {
      step: "Proses Pengukiran",
      description: "Pak Slamet mengukir setiap detail motif Daun Cemara dengan pahat tangan. Proses ini memakan waktu 45 hari untuk mencapai kesempurnaan setiap lengkungan dan kedalaman relief.",
      image: "/images/proses-2.png",
    },
    {
      step: "Finishing & Polishing",
      description: "Aplikasi lapisan pelindung natural berbasis minyak kayu alami. Proses polishing dilakukan bertahap hingga permukaan kayu menampilkan kilau hangat dan serat yang indah.",
      image: "/images/proses-3.png",
    },
    {
      step: "Signature Pengrajin",
      description: "Pak Slamet menandatangani karyanya di bagian bawah kursi—sebuah tanda kebanggaan dan tanggung jawab atas setiap detail yang dikerjakan.",
      image: "/images/proses-4.png",
    },
  ],

  artisan: {
    name: "Pak Slamet Riyadi",
    title: "Master Ukir Jepara - Generasi Ketiga",
    location: "Tahunan, Jepara, Jawa Tengah",
    experience: "42 tahun",
    photo: "/images/pak-slamet.png",
    quote: "Saya ingin setiap kursi ini membawa cerita keluarga Jepara ke dunia. Ukiran bukan sekadar dekorasi, tapi doa dan harapan yang kami titipkan untuk masa depan.",
    background: "Pak Slamet belajar mengukir sejak usia 12 tahun dari ayahnya, yang juga seorang master ukir. Kini, beliau melatih 8 murid muda untuk melanjutkan tradisi ini.",
  },

  origin: {
    material: "Kayu Jati Tectona Grandis",
    source: "Donorejo, Jepara",
    age: "15 tahun",
    method: "Panen lestari dengan sertifikasi FSC",
    sustainability: "Setiap pohon yang ditebang, kami menanam 5 pohon baru",
    location: { lat: -6.5889, lng: 110.6684 },
  },

  impact: {
    community: "Komunitas Pengrajin Jepara",
    members: 90,
    familiesSupported: 10,
    treesPlanted: 5,
    awards: [
      "Penghargaan Craft Excellence 2023",
      "UNESCO Heritage Recognition",
    ],
  },

  specifications: {
    dimensions: "95cm (T) × 65cm (L) × 68cm (P)",
    weight: "18 kg",
    material: "Kayu Jati Premium",
    finish: "Natural Oil Finish",
    craftingTime: "45 hari",
  },
};

const CraftDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDonation, setShowDonation] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === craftData.process.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? craftData.process.length - 1 : prev - 1
    );
  };

  const handleShare = (platform: string) => {
    const text = `Lihat ${craftData.name} dari ${craftData.artisan.name} - MARKA`;
    const url = window.location.href;

    if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, "_blank");
    } else if (platform === "instagram") {
      navigator.clipboard.writeText(url);
      alert("Link disalin! Paste di Instagram Story Anda.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-ivory via-white to-ivory">

      {/* 1. Header Section - Product Identity */}
      <section className="relative h-screen bg-gradient-to-b from-charcoal/95 to-charcoal/85">

        {/* Hero Image */}
        <div className="absolute inset-0">
          <img
            src={craftData.hero.image}
            alt={craftData.hero.alt}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-6 md:px-12 pb-20">
            <div className="max-w-4xl space-y-6 animate-fade-in">

              {/* Verification Badge */}
              <div className="flex items-center gap-4 flex-wrap">
                <Badge className="bg-emerald/90 backdrop-blur-sm text-white border-emerald/20 px-4 py-2 text-sm">
                  <Shield className="w-4 h-4 mr-2" />
                  MARKA Certified
                </Badge>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Calendar className="w-4 h-4" />
                  Verified {craftData.verifiedDate}
                </div>
                <code className="text-white/60 text-sm font-mono">
                  {craftData.serialNumber}
                </code>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {craftData.name}
              </h1>

              {/* Headline */}
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-3xl">
                {craftData.headline}
              </p>

              {/* Quick Info */}
              <div className="flex items-center gap-6 text-white/80 text-sm pt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {craftData.artisan.location}
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  {craftData.category}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
          <p className="text-xs uppercase tracking-[0.25em] text-white">Scroll</p>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* 2. Storytelling Section - Philosophy & Culture */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Section Title */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
                Filosofi & Cerita
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto" />
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-br from-ivory/50 to-white rounded-3xl p-8 md:p-12 border border-charcoal/5">
              <p className="text-xl md:text-2xl text-charcoal/90 leading-relaxed italic mb-6">
                "{craftData.story.philosophy}"
              </p>
              <div className="w-12 h-[1px] bg-gold/50" />
            </div>

            {/* Cultural Significance */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-charcoal/80 leading-relaxed">
                {craftData.story.cultural}
              </p>
            </div>

            {/* Heritage */}
            <div className="bg-charcoal/5 rounded-2xl p-8 border-l-4 border-gold">
              <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">
                Warisan Budaya
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed">
                {craftData.story.heritage}
              </p>
            </div>

            {/* Artisan Quote - Featured */}
            <div className="text-center py-12">
              <blockquote className="text-2xl md:text-3xl font-light text-charcoal/80 italic leading-relaxed max-w-2xl mx-auto">
                "{craftData.artisan.quote}"
              </blockquote>
              <p className="text-sm text-charcoal/60 mt-6 uppercase tracking-wider">
                — {craftData.artisan.name}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Craftsmanship Documentary - Process Gallery */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-ivory/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-12">

            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
                Perjalanan Pembuatan
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Dokumentasi lengkap proses pengerjaan dari kayu mentah hingga karya seni berkelas dunia
              </p>
            </div>

            {/* Gallery Slider */}
            <div className="relative">

              {/* Main Image */}
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_30px_90px_-20px_rgba(34,37,36,0.2)] border border-charcoal/10 bg-charcoal/5">
                <img
                  src={craftData.process[currentImageIndex].image}
                  alt={craftData.process[currentImageIndex].step}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-charcoal/10 flex items-center justify-center hover:bg-white transition-all shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6 text-charcoal" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-charcoal/10 flex items-center justify-center hover:bg-white transition-all shadow-lg"
                >
                  <ChevronRight className="w-6 h-6 text-charcoal" />
                </button>

                {/* Step Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 border border-charcoal/10">
                  <span className="text-sm font-bold text-charcoal">
                    {currentImageIndex + 1} / {craftData.process.length}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-8 text-center space-y-3">
                <h3 className="text-2xl font-bold text-charcoal">
                  {craftData.process[currentImageIndex].step}
                </h3>
                <p className="text-lg text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
                  {craftData.process[currentImageIndex].description}
                </p>
              </div>

              {/* Thumbnail Navigation */}
              <div className="grid grid-cols-4 gap-4 mt-8">
                {craftData.process.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex
                        ? 'border-emerald shadow-lg'
                        : 'border-charcoal/10 hover:border-gold/50'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.step}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Artisan Profile */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">

            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
                Sang Maestro
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto" />
            </div>

            {/* Artisan Card */}
            <div className="bg-gradient-to-br from-ivory/50 to-white rounded-3xl overflow-hidden border border-charcoal/5 shadow-[0_20px_60px_-20px_rgba(34,37,36,0.15)]">
              <div className="grid md:grid-cols-[400px_1fr] gap-0">

                {/* Photo */}
                <div className="relative aspect-[3/4] md:aspect-auto">
                  <img
                    src={craftData.artisan.photo}
                    alt={craftData.artisan.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Info */}
                <div className="p-8 md:p-12 space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-2">
                      {craftData.artisan.name}
                    </h3>
                    <p className="text-lg text-gold font-medium mb-1">
                      {craftData.artisan.title}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-charcoal/60 mt-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {craftData.artisan.location}
                      </span>
                      <span>•</span>
                      <span>{craftData.artisan.experience}</span>
                    </div>
                  </div>

                  <div className="h-[1px] bg-charcoal/10" />

                  <p className="text-base text-charcoal/80 leading-relaxed">
                    {craftData.artisan.background}
                  </p>

                  <div className="pt-4">
                    <p className="text-lg italic text-charcoal/70 leading-relaxed border-l-4 border-gold pl-4">
                      "{craftData.artisan.quote}"
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Origin & Transparency */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-ivory/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-12">

            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
                Jejak Asal & Transparansi
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Setiap material dipilih dengan cermat dan dipanen secara berkelanjutan
              </p>
            </div>

            {/* Origin Details */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Material Info */}
              <div className="bg-white rounded-2xl p-8 border border-charcoal/5 shadow-lg space-y-6">
                <div className="flex items-center gap-3 text-emerald">
                  <Leaf className="w-8 h-8" />
                  <h3 className="text-2xl font-bold text-charcoal">Bahan Baku</h3>
                </div>

                <div className="space-y-4">
                  <DetailRow label="Material" value={craftData.origin.material} />
                  <DetailRow label="Asal" value={craftData.origin.source} />
                  <DetailRow label="Usia Kayu" value={craftData.origin.age} />
                  <DetailRow label="Metode Panen" value={craftData.origin.method} />
                </div>

                <div className="bg-emerald/5 rounded-xl p-4 border border-emerald/10">
                  <div className="flex items-center gap-2 text-emerald mb-2">
                    <TreePine className="w-5 h-5" />
                    <p className="text-sm font-bold">Komitmen Berkelanjutan</p>
                  </div>
                  <p className="text-sm text-charcoal/70">
                    {craftData.origin.sustainability}
                  </p>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-2xl p-8 border border-charcoal/5 shadow-lg space-y-6">
                <h3 className="text-2xl font-bold text-charcoal">Spesifikasi</h3>

                <div className="space-y-4">
                  <DetailRow label="Dimensi" value={craftData.specifications.dimensions} />
                  <DetailRow label="Berat" value={craftData.specifications.weight} />
                  <DetailRow label="Finishing" value={craftData.specifications.finish} />
                  <DetailRow label="Waktu Pengerjaan" value={craftData.specifications.craftingTime} />
                </div>

                <div className="bg-gold/5 rounded-xl p-4 border border-gold/10">
                  <p className="text-sm font-bold text-gold mb-2">Kode Seri Autentikasi</p>
                  <code className="text-sm font-mono text-charcoal/80">
                    {craftData.id}
                  </code>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. Social Impact */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-12">

            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
                Dampak Sosial
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Setiap pembelian mendukung komunitas pengrajin dan kelestarian lingkungan
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <ImpactCard
                icon={<Users className="w-8 h-8" />}
                value={`${craftData.impact.familiesSupported} Keluarga`}
                label="Terbantu"
              />
              <ImpactCard
                icon={<TreePine className="w-8 h-8" />}
                value={`${craftData.impact.treesPlanted} Pohon`}
                label="Ditanam per Karya"
              />
              <ImpactCard
                icon={<Award className="w-8 h-8" />}
                value={`${craftData.impact.members} Anggota`}
                label={craftData.impact.community}
              />
            </div>

            {/* Awards */}
            <div className="bg-gradient-to-br from-ivory/50 to-white rounded-2xl p-8 border border-charcoal/5">
              <h3 className="text-xl font-bold text-charcoal mb-6">Penghargaan & Sertifikasi</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {craftData.impact.awards.map((award, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-charcoal/70">
                    <Award className="w-5 h-5 text-gold" />
                    <span className="text-sm">{award}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Direct Support CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-emerald to-emerald/90 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-8">

            <h2 className="text-3xl md:text-4xl font-bold">
              Kirim Apresiasi Langsung
            </h2>

            <p className="text-xl text-white/90 leading-relaxed">
              Dukungan Anda membantu melestarikan tradisi ukir Jepara dan meningkatkan kesejahteraan pengrajin serta keluarganya.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setShowDonation(true)}
                className="rounded-full bg-white hover:bg-ivory text-emerald px-10 py-7 text-lg font-semibold shadow-xl"
              >
                <Heart className="w-5 h-5 mr-2" />
                Kirim Apresiasi
              </Button>

              <p className="text-sm text-white/80">
                100% langsung ke pengrajin
              </p>
            </div>

            {showDonation && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-fade-in">
                <p className="text-white/90 mb-4">Terima kasih atas dukungan Anda!</p>
                <p className="text-sm text-white/70">
                  Pesan otomatis: "Terima kasih atas apresiasi Anda. Dukungan ini sangat berarti bagi keluarga kami." - Pak Slamet
                </p>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* 8. Share & Action Footer */}
      <section className="py-16 bg-white border-t border-charcoal/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  Bagikan Cerita Ini
                </h3>
                <p className="text-sm text-charcoal/60">
                  Bantu sebarkan apresiasi untuk karya budaya Indonesia
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => handleShare("whatsapp")}
                  className="rounded-full border-2 border-charcoal/20 hover:border-emerald/40"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleShare("instagram")}
                  className="rounded-full border-2 border-charcoal/20 hover:border-emerald/40"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Instagram
                </Button>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

// Helper Components
const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-start gap-4 pb-3 border-b border-charcoal/5 last:border-0">
    <span className="text-sm text-charcoal/60 font-medium">{label}</span>
    <span className="text-sm text-charcoal text-right font-medium">{value}</span>
  </div>
);

const ImpactCard = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="bg-gradient-to-br from-ivory/50 to-white rounded-2xl p-8 border border-charcoal/5 text-center space-y-4">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald/10 text-emerald">
      {icon}
    </div>
    <div>
      <p className="text-3xl font-bold text-charcoal mb-1">{value}</p>
      <p className="text-sm text-charcoal/60">{label}</p>
    </div>
  </div>
);

export default CraftDetail;
