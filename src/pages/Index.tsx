import Hero from "@/components/Hero";
import QRShowcaseChair from "@/components/QRShowcaseChair";
import HowItWorks from "@/components/HowItWorks";
import WhyMarka from "@/components/WhyMarka";
import FeaturedProducts from "@/components/FeaturedProducts";
import ImpactSection from "@/components/ImpactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyMarka />
      <QRShowcaseChair />
      <HowItWorks />
      <FeaturedProducts />
      <ImpactSection />
      <Footer />
    </div>
  );
};

export default Index;
