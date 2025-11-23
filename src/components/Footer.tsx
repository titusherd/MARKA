import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Universal Culture Tag
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ekosistem sertifikasi fisik & digital yang melindungi, menghargai, dan memberdayakan karya budaya asli Indonesia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Tentang</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Visi & Misi</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tim Kami</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kemitraan</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Pengrajin</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Cara Bergabung</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Panduan</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© 2024 Universal Culture Tag.</span>
            <span className="hidden md:inline">Dibuat dengan</span>
            <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
            <span className="hidden md:inline">untuk Indonesia</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privasi</a>
            <a href="#" className="hover:text-primary transition-colors">Kebijakan</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
