import { Card } from "@/components/ui/card";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Invisible Fiction, Anand",
      role: "Team Lead & Unity3D Game Developer",
      duration: "July 2023 - Present",
      current: true,
      highlights: [
        "Leading medical simulation projects (Fiction OT, Pythogyn3D)",
        "Developed 12-game motion-controlled console with MediaPipe",
        "Team leadership and project management",
        "Innovative AR/VR solutions for healthcare",
      ],
    },
    {
      company: "Intricare Technology",
      role: "Unity3D Game Developer",
      duration: "August 2022 - July 2023",
      current: false,
      highlights: [
        "Developed 6 casino games with real-time card integration",
        "Built multiplayer poker and ludo games",
        "Node.js and Socket.io backend integration",
        "Real-money gaming systems",
      ],
    },
    {
      company: "Invisible Fiction, Anand",
      role: "Unity3D Game Developer",
      duration: "January 2015 - August 2022",
      current: false,
      highlights: [
        "20+ projects including StoryBook, Kne3Wiz, Tixxi",
        "AR/VR applications (ColourBook, LittleLense, God Generation)",
        "Medical visualization and gaming projects",
        "Freelance projects alongside company work",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-primary">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A decade of innovation and leadership in Unity3D development
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-electric transform md:-translate-x-1/2" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in-up ${
                    index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full ${
                      exp.current ? "bg-accent animate-glow-pulse" : "bg-primary"
                    } border-4 border-background z-10`}
                  />

                  {/* Content Card */}
                  <Card
                    className={`ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    } p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 group`}
                  >
                    {/* Company & Role */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3 text-accent">
                        <Building2 className="w-5 h-5" />
                        <h3 className="text-xl md:text-2xl font-bold">{exp.company}</h3>
                      </div>
                      <h4 className="text-lg font-semibold text-primary">{exp.role}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                        {exp.current && (
                          <span className="ml-2 px-2 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "30+", label: "Projects Completed" },
              { number: "5+", label: "Team Members Led" },
              { number: "3", label: "Industries Served" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
