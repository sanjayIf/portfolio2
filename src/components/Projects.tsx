import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, Calendar } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  tech: string[];
  team: string;
  year: string;
  link?: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "medical", label: "Medical/Healthcare" },
    { id: "game", label: "Game Development" },
    { id: "arvr", label: "AR/VR Applications" },
    { id: "casino", label: "Casino/Multiplayer" },
    { id: "freelance", label: "Freelance Work" },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "FICTION OT",
      description: "Medical Visualization System for Surgical Training",
      fullDescription:
        "Cutting-edge medical visualization system offering hand-eye coordination improvement and simulation of sonography, fluoroscopy, endoscopy, CT scans, and MRI procedures.",
      category: "medical",
      tech: ["Unity 3D", "C#", "Medical Simulation"],
      team: "Solo Developer",
      year: "2023-Present",
    },
    {
      id: 2,
      title: "Motion-Controlled Game Console",
      description: "Interactive Console with 12 Unique Games",
      fullDescription:
        "Led 5-developer team creating motion-controlled gaming console using Unity and MediaPipe for body/hand gesture detection. Features 12 games across sports, adventure, arcade, and puzzle genres.",
      category: "game",
      tech: ["Unity 3D", "C#", "MediaPipe", "Python"],
      team: "Team Lead (5 developers)",
      year: "2023-Present",
    },
    {
      id: 3,
      title: "Pythogyn3D",
      description: "Advanced Uterus Simulation Software",
      fullDescription:
        "Gynecological medical simulation for diagnosis and training. Features multiple uterus types, plaque detection, layered visualization, and 3D deformation for patient-specific conditions.",
      category: "medical",
      tech: ["Unity 3D", "C#", "Medical Tech"],
      team: "2 developers",
      year: "2023-Present",
    },
    {
      id: 4,
      title: "Kne3Wiz",
      description: "Knee Replacement Surgery Planning System",
      fullDescription:
        "Medical research project based on CT scans helping doctors determine exact femur and tibia sizes for precision knee replacement surgery.",
      category: "medical",
      tech: ["Unity 3D", "C#", "Medical Imaging"],
      team: "2 developers",
      year: "2015-2022",
      link: "https://arthro3d.online/products/kne3wiz/",
    },
    {
      id: 5,
      title: "StoryBook Authoring Tool",
      description: "3D Story Creation & Player System",
      fullDescription:
        "Dual-tool system enabling creation of animated 3D stories. Import 3D models, animations, sounds, and link models to words for interactive storytelling.",
      category: "game",
      tech: ["Unity 3D", "C#", "3D Animation"],
      team: "2 developers",
      year: "2015-2022",
    },
    {
      id: 6,
      title: "BearBrowls Ultras",
      description: "Multiplayer Strategy Game",
      fullDescription:
        "2.5D multiplayer game similar to Clash of Clans with offline attack mechanics, upgradable structures, and leaderboard system.",
      category: "game",
      tech: ["Unity 3D", "C#", "Multiplayer"],
      team: "2 developers",
      year: "Freelance",
    },
    {
      id: 7,
      title: "Casino Game Suite",
      description: "6 Multiplayer Casino Games",
      fullDescription:
        "Developed Baccarat, BlackJack, Casino War, Mini Flush, 7 Up Down, and Andar Bahar with card shoe integration and real-time multiplayer.",
      category: "casino",
      tech: ["Unity 3D", "C#", "Node.js", "Socket.io"],
      team: "Development Team",
      year: "2022-2023",
    },
    {
      id: 8,
      title: "Poker - Real Money",
      description: "8-Player Multiplayer Poker",
      fullDescription:
        "Real-money poker game with Unity3D frontend and Node.js backend. Features 3-round gameplay and 5-card community system.",
      category: "casino",
      tech: ["Unity 3D", "C#", "Node.js", "Socket.io"],
      team: "2 developers",
      year: "2022-2023",
    },
    {
      id: 9,
      title: "Ludo Multiplayer",
      description: "Real-time 4-Player Ludo Game",
      fullDescription: "Classic Ludo game with Unity3D frontend and Node.js backend for smooth real-time multiplayer experience.",
      category: "game",
      tech: ["Unity 3D", "C#", "Node.js"],
      team: "2 developers",
      year: "2022-2023",
    },
    {
      id: 10,
      title: "Tixxi",
      description: "Event-Based Social Application",
      fullDescription:
        "Event management app allowing users to create moments, invite friends, display events in selected areas, and share reels-style moments.",
      category: "game",
      tech: ["Unity 3D", "C#", "Social Features"],
      team: "2 developers",
      year: "Under Development",
      link: "https://tixxiapp.com/#!",
    },
    {
      id: 11,
      title: "LencePro",
      description: "Medical Glass Measurement App",
      fullDescription:
        "iOS app for eyeglass professionals measuring PD distance, A, B, DBL values using face detection. Features coated glass visualization effects.",
      category: "medical",
      tech: ["Unity 3D", "C#", "iOS", "Face Detection"],
      team: "Solo Developer",
      year: "Under Development",
    },
    {
      id: 12,
      title: "Virtual Jewellery ShowRoom",
      description: "VR Showroom Experience",
      fullDescription: "VR walkthrough allowing users to view jewellery details, get realistic product feel, and try-on jewellery virtually.",
      category: "arvr",
      tech: ["Unity 3D", "C#", "VR"],
      team: "Solo Developer",
      year: "2015-2022",
    },
    {
      id: 13,
      title: "ColourBook AR",
      description: "AR Coloring Application",
      fullDescription: "AR app where players detect markers, generate 3D models, and fill colors that apply to models in real-time.",
      category: "arvr",
      tech: ["Unity 3D", "C#", "Vuforia"],
      team: "Solo Developer",
      year: "2015-2022",
    },
    {
      id: 14,
      title: "LittleLense",
      description: "AR Kids Face Filter App",
      fullDescription: "AR-based application for children featuring face filters triggered by different expressions.",
      category: "arvr",
      tech: ["Unity 3D", "C#", "ARKit"],
      team: "Solo Developer",
      year: "2015-2022",
    },
    {
      id: 15,
      title: "ToppleTree",
      description: "Multiplayer Balance Game",
      fullDescription:
        "Load-balancing multiplayer game where players pick and place tree parts without toppling. Features screenshot sharing.",
      category: "game",
      tech: ["Unity 3D", "C#", "Multiplayer"],
      team: "2 developers",
      year: "2015-2022",
    },
    {
      id: 16,
      title: "FrogWarz",
      description: "Multi-level Battle Game",
      fullDescription: "Battle game where frogs fight using flies as weapons. World changes every 5 levels with power-up mechanics.",
      category: "game",
      tech: ["Unity 3D", "C#", "2D Game"],
      team: "Solo Developer",
      year: "2015-2022",
    },
    {
      id: 17,
      title: "Storyland MMO",
      description: "Multiplayer Exploration Game",
      fullDescription: "MMO allowing players to explore areas, play mini-games, earn points, and complete tasks.",
      category: "game",
      tech: ["Unity 3D", "C#", "MMO"],
      team: "3 developers",
      year: "2015-2022",
    },
    {
      id: 18,
      title: "ARKI",
      description: "Dynamic AR Marker System",
      fullDescription: "ARKit-based application generating multiple markers dynamically for world detection.",
      category: "arvr",
      tech: ["Unity 3D", "C#", "ARKit"],
      team: "Solo Developer",
      year: "2015-2022",
    },
    {
      id: 19,
      title: "God Generation AR",
      description: "AR Temple Application",
      fullDescription: "AR app tracking temple markers to generate 3D god models with background music and sound.",
      category: "arvr",
      tech: ["Unity 3D", "C#", "Vuforia"],
      team: "Solo Developer",
      year: "Freelance",
    },
    {
      id: 20,
      title: "Object Detection ML",
      description: "Machine Learning Project",
      fullDescription:
        "Machine learning project using TensorFlow and Python for object detection through camera with trained image recognition.",
      category: "game",
      tech: ["TensorFlow", "Python", "Unity 3D"],
      team: "Solo Developer",
      year: "2015-2022",
    },
  ];

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcasing 20+ innovative projects across gaming, medical simulation, AR/VR, and multiplayer platforms
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={
                  activeFilter === category.id
                    ? "bg-primary hover:bg-primary/90 shadow-glow"
                    : "border-border hover:border-primary/50"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Project Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 via-accent/20 to-electric/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                      {project.id}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      {project.category.toUpperCase()}
                    </Badge>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs border-accent/30 text-accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{project.team}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Link if available */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Project</span>
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
