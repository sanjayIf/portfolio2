import { Card } from "@/components/ui/card";
import { Code2, Eye, Activity, Puzzle } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Technologies",
      icon: Code2,
      color: "primary",
      skills: [
        { name: "Unity 3D", level: 95 },
        { name: "C# Programming", level: 95 },
        { name: "Game Development", level: 92 },
        { name: "2D & 3D Animation", level: 85 },
      ],
    },
    {
      title: "AR/VR Expertise",
      icon: Eye,
      color: "accent",
      skills: [
        { name: "ARKit", level: 90 },
        { name: "ARCore", level: 88 },
        { name: "ARFoundation", level: 90 },
        { name: "Vuforia", level: 88 },
      ],
    },
    {
      title: "Specialized Skills",
      icon: Activity,
      color: "electric",
      skills: [
        { name: "Medical Simulation", level: 92 },
        { name: "Motion Detection", level: 88 },
        { name: "MediaPipe Integration", level: 85 },
        { name: "Multiplayer Games", level: 90 },
      ],
    },
    {
      title: "Plugins & Tools",
      icon: Puzzle,
      color: "lime",
      skills: [
        { name: "Photon (Multiplayer)", level: 90 },
        { name: "Node.js & Socket.io", level: 82 },
        { name: "Unity Ads & SDKs", level: 88 },
        { name: "Asset Bundle Creation", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built over 10+ years of professional game development experience
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-xl ${
                      category.color === "primary"
                        ? "bg-primary/20"
                        : category.color === "accent"
                        ? "bg-accent/20"
                        : category.color === "electric"
                        ? "bg-electric/20"
                        : "bg-lime/20"
                    }`}
                  >
                    <category.icon
                      className={`w-6 h-6 ${
                        category.color === "primary"
                          ? "text-primary"
                          : category.color === "accent"
                          ? "text-accent"
                          : category.color === "electric"
                          ? "text-electric"
                          : "text-lime"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${
                            category.color === "primary"
                              ? "bg-gradient-to-r from-primary to-primary/80"
                              : category.color === "accent"
                              ? "bg-gradient-to-r from-accent to-accent/80"
                              : category.color === "electric"
                              ? "bg-gradient-to-r from-electric to-electric/80"
                              : "bg-gradient-to-r from-lime to-lime/80"
                          }`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Technologies */}
          <div className="mt-12 text-center animate-fade-in">
            <h3 className="text-lg font-semibold text-foreground mb-6">Additional Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Agora (Voice/Video)",
                "Facebook SDK",
                "In-App Purchase",
                "Google Ads",
                "Unity Ads",
                "Text-to-Speech",
                "Chromecast",
                "Python/TensorFlow",
                ".NET Technology",
                "Web Services",
                "XML, JSON",
                "Particle Systems",
              ].map((tech, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-lg bg-secondary/50 backdrop-blur-sm border border-border hover:border-accent/50 text-sm text-muted-foreground hover:text-accent transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
