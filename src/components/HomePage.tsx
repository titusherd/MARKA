import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scan, Heart, Shield, Clock, ArrowRight, Play, Sparkles, Award, Users } from "lucide-react";

interface HomePageProps {
  onStartScan: () => void;
}

export const HomePage = ({ onStartScan }: HomePageProps) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Collector, Singapore",
      quote: "Each piece tells a story that mass production never could. MARKA bridges the gap between craft and collector beautifully.",
      image: "👤"
    },
    {
      name: "Pak Joko Widodo",
      role: "Wood Carver, Yogyakarta",
      quote: "Setiap noda adalah kisah. For 30 years I carved in silence. Now my collectors know my name, my story.",
      image: "👤"
    },
    {
      name: "Marcus Liu",
      role: "Interior Designer, Hong Kong",
      quote: "Authenticity you can verify. Stories you can feel. This is the future of luxury collecting.",
      image: "👤"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Luxury Floating CTA with Glow Effect */}
      <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
        <div className="relative">
          <div 
            className="absolute inset-0 bg-gradient-gold rounded-[2rem] blur-xl opacity-60 animate-pulse"
            style={{ 
              transform: `scale(${1 + glowIntensity * 0.002})`,
              transition: 'transform 0.05s ease-out'
            }}
          />
          <Button
            size="lg"
            onClick={onStartScan}
            className="relative bg-gradient-to-br from-accent via-accent to-amber-600 hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] text-primary font-bold shadow-premium rounded-[2rem] px-8 py-7 text-base transition-all duration-300 hover:scale-105 border-2 border-accent/20"
          >
            <Scan className="w-6 h-6" />
            Scan • Discover • Support
            <Sparkles className="w-5 h-5 animate-pulse" />
          </Button>
        </div>
      </div>

      {/* Hero Section - Dramatic & Sophisticated */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20">
        {/* Ethnic Pattern Overlay - Integrated Design */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Batik-inspired gradient overlay */}
          <div 
            className="absolute top-0 right-0 w-1/2 h-full opacity-10"
            style={{
              background: `
                radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, hsl(var(--accent)) 0%, transparent 50%),
                repeating-linear-gradient(45deg, transparent, transparent 10px, hsl(var(--accent)) 10px, hsl(var(--accent)) 11px)
              `
            }}
          />
          {/* Tenun-inspired lines */}
          <div 
            className="absolute bottom-0 left-0 w-full h-64 opacity-[0.15]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 4px, hsl(var(--primary)) 4px, hsl(var(--primary)) 5px),
                repeating-linear-gradient(90deg, transparent, transparent 4px, hsl(var(--accent)) 4px, hsl(var(--accent)) 5px)
              `
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
            {/* Left: Dramatic Copy with Gold Gradient Typography */}
            <div className="space-y-10 animate-fade-in">
              {/* Premium Badge with Ethnic Border */}
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-accent/20 via-accent/10 to-transparent border-2 border-accent/30 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-bold tracking-wider text-accent uppercase">
                  Human Imperfection • Real Luxury
                </span>
              </div>
              
              {/* Hero Title with Gradient */}
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
                <span className="block text-foreground">Every Detail</span>
                <span className="block bg-gradient-to-r from-accent via-amber-500 to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                  Tells a Story
                </span>
              </h1>
              
              {/* Emotional Subtitle */}
              <div className="space-y-4 max-w-xl">
                <p className="text-2xl text-foreground font-light leading-relaxed">
                  Scan. Discover the Human Story. Send Support.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed border-l-4 border-accent/30 pl-4">
                  MARKA is a phygital digital passport connecting Indonesian high craftsmanship to the world.{" "}
                  <span className="text-accent font-semibold">Verify authenticity. Meet the artisan. Honor the imperfect.</span>
                </p>
              </div>
              
              {/* Refined CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  onClick={onStartScan}
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-premium px-8 py-7 text-base font-semibold rounded-xl border border-primary/20 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]"
                >
                  Explore Stories
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-accent/30 hover:bg-accent/10 hover:border-accent text-accent-foreground px-8 py-7 text-base font-semibold rounded-xl transition-all duration-300"
                >
                  Get Your MARKA Tag
                  <Award className="w-5 h-5" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-8 border-t border-border/30">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Verified Authenticity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-sm text-muted-foreground">2,847+ Products</span>
                </div>
              </div>
            </div>

            {/* Right: Product Showcase with Dramatic Lighting */}
            <div className="relative animate-fade-in-scale lg:scale-110">
              {/* Dramatic spotlight effect */}
              <div className="absolute -inset-20 bg-gradient-radial from-accent/20 via-transparent to-transparent blur-3xl animate-pulse" />
              
              <div className="relative">
                {/* Main Product Card with Depth */}
                <div className="relative rounded-3xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] bg-gradient-to-br from-primary via-primary/95 to-primary/80 border border-accent/20">
                  {/* Ethnic motif overlay on card edge */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-4 opacity-50"
                    style={{
                      background: `repeating-linear-gradient(90deg, hsl(var(--accent)) 0px, hsl(var(--accent)) 8px, transparent 8px, transparent 16px)`
                    }}
                  />
                  
                  {/* Hero Product Display */}
                  <div className="aspect-square p-12 flex items-center justify-center relative">
                    {/* Simulated dramatic lighting with shadows */}
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/30 rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-amber-500/20 rounded-full blur-[80px]" />
                    
                    {/* Product mockup */}
                    <div className="relative z-10 text-center space-y-6">
                      <div className="w-72 h-72 mx-auto bg-gradient-to-br from-accent/20 to-transparent rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-accent/30 shadow-[inset_0_0_60px_rgba(255,215,0,0.1)]">
                        <div className="text-center space-y-4">
                          <div className="text-9xl drop-shadow-2xl">🗿</div>
                          <div className="text-xs text-primary-foreground/60 uppercase tracking-widest">
                            Handcrafted Excellence
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Premium Badge Overlay - Bold & Unique Typography */}
                  <div className="absolute top-8 right-8 bg-gradient-to-br from-accent via-amber-500 to-accent text-primary px-6 py-4 rounded-2xl shadow-[0_8px_32px_rgba(255,215,0,0.4)] border-2 border-amber-300/50 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6" />
                      <div className="text-left">
                        <div className="text-xs font-bold uppercase tracking-wider opacity-90">Hours Crafted</div>
                        <div className="text-2xl font-black">120</div>
                      </div>
                    </div>
                  </div>

                  {/* Authenticity Badge */}
                  <div className="absolute bottom-8 left-8 bg-success/90 text-success-foreground px-5 py-3 rounded-xl shadow-floating backdrop-blur-sm border border-success/30">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      <span className="text-sm font-bold">Authenticated</span>
                    </div>
                  </div>
                </div>

                {/* Physical Tag Mockup - Phygital Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-card rounded-2xl shadow-premium border-2 border-border/50 flex items-center justify-center animate-fade-in-scale backdrop-blur-sm">
                  <div className="text-center space-y-1">
                    <div className="text-4xl">📱</div>
                    <div className="text-xs text-muted-foreground font-semibold">NFC Tag</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Timeline - From Creation to Impact */}
      <section className="py-32 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
        {/* Ethnic pattern accent */}
        <div 
          className="absolute top-0 left-0 w-full h-2 opacity-30"
          style={{
            background: `repeating-linear-gradient(90deg, hsl(var(--accent)) 0px, hsl(var(--accent)) 12px, hsl(var(--primary)) 12px, hsl(var(--primary)) 24px)`
          }}
        />
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/30 px-4 py-2">
              The MARKA Journey
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              How It <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Four transformative steps to unlock the human story behind every craft
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20 transform -translate-y-1/2 hidden lg:block" />
            
            <div className="grid md:grid-cols-4 gap-8 lg:gap-4 relative z-10">
              {[
                {
                  icon: <Scan className="w-10 h-10" />,
                  step: "01",
                  title: "Scan the Tag",
                  desc: "Use NFC or QR code on your authentic MARKA-tagged product. Instant connection to the digital story.",
                  accent: "from-accent/20 to-accent/5"
                },
                {
                  icon: <Play className="w-10 h-10" />,
                  step: "02",
                  title: "Discover the Story",
                  desc: "Watch the artisan at work, read their journey, see the exact hours invested in your piece.",
                  accent: "from-cta/20 to-cta/5"
                },
                {
                  icon: <Shield className="w-10 h-10" />,
                  step: "03",
                  title: "Verify Authenticity",
                  desc: "Digital certificate and badge prove genuine Indonesian craftsmanship. No counterfeits.",
                  accent: "from-success/20 to-success/5"
                },
                {
                  icon: <Heart className="w-10 h-10" />,
                  step: "04",
                  title: "Support the Maker",
                  desc: "Send a tip directly to the artisan—100% goes to them. Every gesture changes a life.",
                  accent: "from-accent/20 to-accent/5"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative animate-fade-in hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  {/* Card with ethnic border accent */}
                  <Card className="border-2 border-border/50 hover:border-accent/50 hover:shadow-[0_0_40px_rgba(255,215,0,0.15)] transition-all duration-300 bg-card/50 backdrop-blur-sm relative overflow-hidden">
                    {/* Top ethnic pattern */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-1.5 opacity-40"
                      style={{
                        background: `repeating-linear-gradient(90deg, hsl(var(--accent)) 0px, hsl(var(--accent)) 6px, transparent 6px, transparent 12px)`
                      }}
                    />
                    
                    <CardContent className="pt-10 pb-8 text-center space-y-5">
                      {/* Icon with gradient background */}
                      <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${item.accent} rounded-2xl flex items-center justify-center text-accent shadow-lg group-hover:shadow-accent/20 transition-shadow border border-accent/20`}>
                        {item.icon}
                      </div>
                      
                      <div className="text-xs font-black text-accent uppercase tracking-[0.2em]">{item.step}</div>
                      <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>

                  {/* Connection arrow */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-accent/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Storytelling - Magazine Editorial Style */}
      <section className="py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Emotional Copy */}
            <div className="space-y-8 animate-fade-in lg:order-2">
              <div className="space-y-4">
                <Badge className="bg-success/10 text-success-foreground border-success/30 px-4 py-2">
                  <Heart className="w-4 h-4 inline mr-2" />
                  Humanize Craft, Honor the Imperfect
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Every Tip<br />
                  <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">
                    Changes a Life
                  </span>
                </h2>
              </div>
              
              {/* Artisan Quote - Emotional */}
              <blockquote className="border-l-4 border-accent/50 pl-6 py-4 bg-accent/5 rounded-r-xl">
                <p className="text-xl italic text-foreground/90 mb-3 leading-relaxed">
                  "Setiap noda adalah kisah."
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Behind every piece is an artisan who spent days, weeks, or months perfecting their craft by hand. Each imperfection tells of their dedication, each detail carries their signature.
                </p>
              </blockquote>

              {/* Proof of Work - Visual List */}
              <div className="space-y-6 pt-4">
                {[
                  {
                    icon: <Clock className="w-7 h-7" />,
                    title: "Time Invested",
                    desc: "See the exact hours spent on your piece—from raw material to finished masterpiece",
                    color: "accent"
                  },
                  {
                    icon: <Heart className="w-7 h-7" />,
                    title: "Direct Impact",
                    desc: "Your tip goes 100% to the artisan. No middlemen. Pure support.",
                    color: "cta"
                  },
                  {
                    icon: <Shield className="w-7 h-7" />,
                    title: "Verified Story",
                    desc: "Authenticated journey from maker to you—blockchain-backed provenance",
                    color: "success"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5 group">
                    <div className={`w-14 h-14 rounded-2xl bg-${item.color}/10 border-2 border-${item.color}/20 flex items-center justify-center flex-shrink-0 text-${item.color} group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-foreground text-lg">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emotional CTA */}
              <div className="pt-6">
                <p className="text-sm text-muted-foreground mb-4 italic">
                  Because real luxury is honest.
                </p>
                <Button 
                  size="lg"
                  onClick={onStartScan}
                  className="bg-gradient-to-r from-accent via-amber-500 to-accent hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] text-primary font-bold px-8 py-6 rounded-xl"
                >
                  Start Your Journey
                  <Sparkles className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right: Magazine-style Image Grid */}
            <div className="relative lg:order-1 animate-fade-in-scale">
              <div className="grid grid-cols-2 gap-6">
                {/* Featured large image */}
                <div className="col-span-2 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-premium group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70 flex items-center justify-center">
                    <div className="text-center space-y-3 p-8">
                      <div className="text-7xl drop-shadow-2xl">🙌</div>
                      <p className="text-white text-sm font-semibold tracking-wide uppercase">Artisan Hands at Work</p>
                      <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
                    </div>
                  </div>
                  {/* Ethnic corner accent */}
                  <div 
                    className="absolute top-0 right-0 w-20 h-20 opacity-30"
                    style={{
                      background: `radial-gradient(circle at 100% 0%, hsl(var(--accent)) 0%, transparent 70%)`
                    }}
                  />
                </div>

                {/* Two smaller images side by side */}
                {[
                  { emoji: "🎨", label: "Detail & Texture", gradient: "from-cta/20 to-cta/5" },
                  { emoji: "🪵", label: "Raw Materials", gradient: "from-accent/20 to-accent/5" }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className={`relative aspect-square rounded-2xl overflow-hidden shadow-card hover:shadow-floating transition-all duration-300 group bg-gradient-to-br ${item.gradient} border-2 border-border/30 hover:border-accent/50`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center flex-col gap-3 p-6">
                      <div className="text-6xl drop-shadow-lg">{item.emoji}</div>
                      <p className="text-sm text-foreground/80 font-semibold text-center">{item.label}</p>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
                  </div>
                ))}
              </div>

              {/* Video snippet badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border-2 border-accent/30 rounded-2xl shadow-premium p-4 flex items-center gap-3 backdrop-blur-sm animate-fade-in">
                <div className="w-12 h-12 bg-gradient-to-br from-cta to-cta/80 rounded-xl flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Watch Process</p>
                  <p className="text-sm font-bold text-foreground">2:34 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Editorial Style - Featured Artisans & Collectors */}
      <section className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
        {/* Decorative ethnic pattern */}
        <div 
          className="absolute top-1/2 left-0 w-64 h-64 opacity-5 transform -translate-y-1/2"
          style={{
            background: `radial-gradient(circle, hsl(var(--accent)) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary-foreground border-primary/30 px-4 py-2">
              <Users className="w-4 h-4 inline mr-2" />
              Community Voices
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Collector <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our global community of collectors and artisans
            </p>
          </div>

          {/* Editorial Style Testimonial Card */}
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-border/50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] hover:shadow-[0_40px_80px_-20px_rgba(255,215,0,0.2)] transition-all duration-500 overflow-hidden bg-card/80 backdrop-blur-sm">
              {/* Top ethnic accent bar */}
              <div 
                className="h-3 w-full opacity-50"
                style={{
                  background: `repeating-linear-gradient(90deg, hsl(var(--accent)) 0px, hsl(var(--accent)) 16px, hsl(var(--primary)) 16px, hsl(var(--primary)) 32px)`
                }}
              />
              
              <CardContent className="p-12 lg:p-16">
                <div className="grid lg:grid-cols-3 gap-12 items-center">
                  {/* Left: Portrait & Info */}
                  <div className="text-center lg:text-left space-y-6" key={activeTestimonial}>
                    <div className="relative inline-block">
                      <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-8xl shadow-lg border-2 border-accent/20">
                        {testimonials[activeTestimonial].image}
                      </div>
                      {/* Gold corner accent */}
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-accent to-amber-500 rounded-xl shadow-lg" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">{testimonials[activeTestimonial].name}</h3>
                      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                        {testimonials[activeTestimonial].role}
                      </p>
                      <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <Shield className="w-4 h-4 text-success" />
                        <span className="text-xs text-success font-semibold">Verified Collector</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Quote */}
                  <div className="lg:col-span-2 space-y-8" key={`quote-${activeTestimonial}`}>
                    <div className="relative">
                      {/* Large quote mark */}
                      <div className="absolute -top-6 -left-4 text-7xl text-accent/20 font-serif">"</div>
                      <p className="text-2xl lg:text-3xl text-foreground italic leading-relaxed relative z-10 font-light">
                        {testimonials[activeTestimonial].quote}
                      </p>
                    </div>

                    {/* Rating & Stats */}
                    <div className="flex items-center gap-8 pt-4 border-t border-border/30">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-accent text-xl">★</span>
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">5.0</span> • Authentic Experience
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-3 mt-12">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        idx === activeTestimonial 
                          ? "bg-accent w-12 shadow-lg shadow-accent/30" 
                          : "bg-border/50 w-3 hover:bg-border"
                      }`}
                      aria-label={`View testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics - Bold & Visual */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Dramatic lighting effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
        
        {/* Ethnic pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 40px, currentColor 40px, currentColor 42px),
              repeating-linear-gradient(-45deg, transparent, transparent 40px, currentColor 40px, currentColor 42px)
            `
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/40 px-4 py-2">
              <Sparkles className="w-4 h-4 inline mr-2" />
              Measurable Impact
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Growing <span className="text-accent">Impact</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Every scan, every tip, every story matters. Here is our proof of work.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: "2,847", label: "Products Tagged", suffix: "+", icon: <Award className="w-8 h-8" /> },
              { number: "$47K", label: "Tips Sent to Artisans", suffix: "", icon: <Heart className="w-8 h-8" /> },
              { number: "156", label: "Master Craftspeople", suffix: "+", icon: <Users className="w-8 h-8" /> },
              { number: "38", label: "Countries Reached", suffix: "", icon: <Sparkles className="w-8 h-8" /> }
            ].map((metric, idx) => (
              <div 
                key={idx} 
                className="relative text-center space-y-4 animate-fade-in group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Card with glow */}
                <div className="relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-3xl p-8 hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,215,0,0.2)]">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent/20 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                    {metric.icon}
                  </div>
                  
                  {/* Number */}
                  <div className="text-6xl lg:text-7xl font-black bg-gradient-to-br from-accent via-amber-400 to-accent bg-clip-text text-transparent mb-2">
                    {metric.number}{metric.suffix}
                  </div>
                  
                  {/* Label */}
                  <p className="text-sm text-primary-foreground/70 font-semibold uppercase tracking-wider">
                    {metric.label}
                  </p>
                  
                  {/* Decorative bottom accent */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
                </div>
              </div>
            ))}
          </div>

          {/* Call out quote */}
          <div className="mt-20 text-center animate-fade-in">
            <p className="text-2xl italic text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              "Every tip, every badge, every imperfection—a celebration of real human story behind the craft."
            </p>
            <p className="text-lg text-accent font-bold mt-6 tracking-wide">
              MARKA. Because real luxury is honest.
            </p>
          </div>
        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="bg-gradient-to-b from-background via-secondary/20 to-background py-20 border-t-2 border-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Top decorative ethnic pattern */}
          <div 
            className="h-1 w-full mb-16 opacity-30"
            style={{
              background: `repeating-linear-gradient(90deg, hsl(var(--accent)) 0px, hsl(var(--accent)) 20px, transparent 20px, transparent 40px)`
            }}
          />

          <div className="grid md:grid-cols-4 gap-16 mb-16">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-4xl font-black bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">
                  MARKA
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Humanize craft, honor the imperfect. A phygital passport for Indonesian high craftsmanship.
                </p>
              </div>
              
              {/* Social Links - Luxury Treatment */}
              <div className="flex gap-3">
                {['📱', '🌐', '💬'].map((emoji, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-12 h-12 rounded-xl bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-xl">{emoji}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">Platform</h4>
              <ul className="space-y-3">
                {['How it Works', 'For Collectors', 'For Artisans', 'Get Your Tag'].map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Our Mission', 'Partner With Us', 'Contact'].map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Language */}
            <div>
              <h4 className="font-bold text-foreground mb-6 text-lg">Legal</h4>
              <ul className="space-y-3 mb-6">
                {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Language Selector */}
              <div className="pt-4 border-t border-border/30">
                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Language</p>
                <select className="w-full bg-accent/10 border border-accent/20 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-accent/50">
                  <option>🇬🇧 English</option>
                  <option>🇮🇩 Bahasa Indonesia</option>
                  <option>🇯🇵 日本語</option>
                </select>
              </div>
            </div>
          </div>

          {/* Payment Partners - Luxury Treatment */}
          <div className="border-t border-b border-border/30 py-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Trusted Payment Partners</p>
                <div className="flex gap-4 items-center flex-wrap">
                  {[
                    { name: 'Visa', color: 'from-blue-600 to-blue-400' },
                    { name: 'Mastercard', color: 'from-red-600 to-orange-400' },
                    { name: 'GoPay', color: 'from-emerald-600 to-emerald-400' },
                    { name: 'OVO', color: 'from-purple-600 to-purple-400' },
                    { name: 'Dana', color: 'from-cyan-600 to-cyan-400' }
                  ].map((payment, idx) => (
                    <div 
                      key={idx}
                      className={`px-4 py-2 bg-gradient-to-r ${payment.color} rounded-lg text-white text-xs font-bold shadow-lg`}
                    >
                      {payment.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex gap-4">
                {[
                  { icon: <Shield className="w-5 h-5" />, label: 'Secure' },
                  { icon: <Award className="w-5 h-5" />, label: 'Verified' }
                ].map((badge, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 bg-success/10 border border-success/30 rounded-lg"
                  >
                    <span className="text-success">{badge.icon}</span>
                    <span className="text-xs font-semibold text-success">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 MARKA. All rights reserved. Made with ❤️ for Indonesian artisans.</p>
            <p className="text-xs">
              <span className="text-accent font-semibold">Real luxury is honest.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
