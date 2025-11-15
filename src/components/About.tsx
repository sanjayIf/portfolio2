import { Users, Award, Briefcase, GraduationCap, Mail, Phone, MapPin, Eye, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Unity3D Development",
    },
    {
      icon: Users,
      title: "Team Lead",
      description: "5-Developer Teams",
    },
    {
      icon: Eye,
      title: "AR/VR Expertise",
      description: "ARKit, ARCore, Vuforia",
    },
    {
      icon: Activity,
      title: "Medical Specialist",
      description: "Simulation Software",
    },
    {
      icon: Briefcase,
      title: "30+ Projects",
      description: "Successfully Completed",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left: Bio */}
              <div className="animate-fade-in-up space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />

                  <div className="relative aspect-square rounded-2xl border border-border overflow-hidden shadow-glow">
                    <img
                      src="images/jaydipsinh_parmar.jpg"
                      alt="Jaydipsinh Parmar"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            {/* Right: Description */}
            <div className="animate-fade-in-up space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                <span className="text-accent font-semibold">Team Lead</span> and{" "}
                <span className="text-primary font-semibold">Unity3D Game Developer</span> with over{" "}
                <span className="text-accent font-semibold">10 years of experience</span> specializing in game development,
                augmented reality, medical simulation software, and motion-controlled gaming platforms.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Proven track record leading development teams and delivering innovative solutions across gaming, healthcare,
                and entertainment industries. Expert in creating immersive experiences that push the boundaries of technology.
              </p>

              {/* Education */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 hover:shadow-glow transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Bachelor of Engineering</h3>
                    <p className="text-sm text-muted-foreground">K.J. Institute of Technology</p>
                    <p className="text-sm text-accent">2015</p>
                  </div>
                </div>
              </Card>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-5 h-5 text-accent" />
                  <a href="mailto:parmarjaydip465@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                    parmarjaydip465@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-5 h-5 text-accent" />
                  <a href="tel:+919909538378" className="text-muted-foreground hover:text-accent transition-colors">
                    +91-9909538378
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">Anand, Gujarat, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center space-y-3">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
