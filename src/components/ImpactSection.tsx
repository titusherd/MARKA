import { TrendingUp, Users, Package, MapPin } from "lucide-react";

const stats = [
  {
    icon: Package,
    value: "1,000+",
    label: "Produk Terverifikasi",
  },
  {
    icon: Users,
    value: "20+",
    label: "Komunitas Pengrajin",
  },
  {
    icon: MapPin,
    value: "15",
    label: "Wilayah Indonesia",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Kepuasan Pengrajin",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="pattern-overlay w-full h-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dampak Nyata untuk Budaya Indonesia
          </h2>
          <p className="text-xl text-white/90">
            Bersama membangun ekosistem yang berkelanjutan untuk pelestarian budaya
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-lg mb-6 text-white/90">
            Bergabunglah dengan gerakan pelestarian budaya Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-xl">
              Daftar Sebagai Pengrajin
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold hover:bg-white/20 transition-all">
              Dukung Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
