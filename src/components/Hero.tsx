import { ArrowDown, Code2, Gamepad2, Eye, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card">
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/20 animate-float"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50 animate-glow-pulse" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          {/* Animated Tech Icons */}
          <div className="flex justify-center gap-6 mb-8 animate-fade-in">
            <div className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/30 shadow-glow hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-accent/30 shadow-cyan hover:scale-110 transition-transform">
              <Gamepad2 className="w-6 h-6 text-accent" />
            </div>
            <div className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-electric/30 shadow-electric hover:scale-110 transition-transform">
              <Eye className="w-6 h-6 text-electric" />
            </div>
            <div className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-lime/30 hover:scale-110 transition-transform">
              <Activity className="w-6 h-6 text-lime" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-electric bg-clip-text text-transparent">
              Crafting Immersive
            </span>
            <br />
            <span className="text-foreground">Gaming Experiences</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Unity3D Developer | AR/VR Specialist | Medical Tech Innovator
          </p>

          <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            <span className="text-accent font-semibold">10+ Years</span> Building Games, Medical Simulations & Interactive Experiences
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="bg-primary hover:bg-primary/90 shadow-glow text-base sm:text-lg px-8 py-6"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-accent text-accent hover:bg-accent/10 text-base sm:text-lg px-8 py-6"
            >
              Get in Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("#about")}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors animate-float"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
