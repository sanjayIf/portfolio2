import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Jaydipsinh Parmar</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Unity3D Game Developer & Team Lead specializing in innovative gaming solutions, AR/VR experiences, and
                medical simulation software.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-accent fill-accent" />
                <span>for games and innovation</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Expertise</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Unity3D Development</p>
                <p>AR/VR Applications</p>
                <p>Medical Simulation</p>
                <p>Multiplayer Games</p>
                <p>Motion-Controlled Gaming</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© {currentYear} Jaydipsinh M. Parmar. All rights reserved.</p>
              <p className="text-center md:text-right">
                10+ years of excellence in Unity3D game development
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-electric" />
    </footer>
  );
};

export default Footer;
