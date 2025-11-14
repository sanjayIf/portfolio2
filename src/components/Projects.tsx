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
    // --- Projects at Invisible Fiction (Jul 2023 - continue) ---
    {
      id: 1,
      title: "FICTION OT",
      description: "Medical Visualization System for Surgical Training",
      fullDescription:
        "Cutting-edge medical visualization system offering hand-eye coordination improvement and simulation of sonography, fluoroscopy, endoscopy, CT scans, and MRI procedures.",
      category: "medical",
      tech: ["Unity 3D", "C#", "Medical Simulation"],
      team: "Solo Developer",
      year: "Jul 2023 - Present",
    },
    {
      id: 2,
      title: "Motion-Controlled Game Console",
      description: "Interactive Console with 12 Unique Games",
      fullDescription:
        "Led 5-developer team creating motion-controlled gaming console featuring 12 unique games using Unity and MediaPipe for body/hand gesture detection. Features games controlled by full-body movement (Football, Alien Runner, etc.) and hand gestures (Fruit Samurai, Cake Mania, etc.).",
      category: "game",
      tech: ["Unity 3D", "C#", "MediaPipe Python"],
      team: "Team Lead (5 developers)",
      year: "Jul 2023 - Present",
    },
    {
      id: 3,
      title: "Pythogyn3D",
      description: "Advanced Uterus Simulation Software",
      fullDescription:
        "Gynecological medical simulation for diagnosis and training. Supports multiple uterus types (neutral, anteverted, retroverted, etc.) and allows 3D model deformation for patient-specific conditions. Also includes plaque detection and visualization.",
      category: "medical",
      tech: ["Unity 3D", "C#", "Medical Tech"],
      team: "2 developers",
      year: "Jul 2023 - Present",
    },

    // --- Projects at Intricare Technology (Aug 2022 - Jul 2023) ---
    // {
    //   id: 4,
    //   title: "Casino Game Suite",
    //   description: "6 Multiplayer Casino Games",
    //   fullDescription:
    //     "Developed Baccarat, BlackJack, Casino War, Mini Flush, 7 Up Down, and Andar Bahar. All are multiplayer casino games that display results based on rules and input from a card shoe.",
    //   category: "casino",
    //   tech: ["Unity 3D", "C#", "Networking"],
    //   team: "Development Team",
    //   year: "Aug 2022 - Jul 2023",
    // },
    {
      id: 4,
      title: "Ludo Multiplayer",
      description: "4-Player Ludo Game (Functionality Update)",
      fullDescription:
        "Real game where existing functionality was added to/modified. Uses Unity 3D for the front side and Node.js and Socket for the backend. It is a 4-player game, minimum 2 players.",
      category: "game",
      tech: ["Unity 3D", "Node.js", "Socket"],
      team: "Development Team",
      year: "Aug 2022 - Jul 2023",
    },
    {
      id: 5,
      title: "Poker - Real Money",
      description: "8-Player Multiplayer Card Game",
      fullDescription:
        "Real money card game using Unity3D, Node.js, and Socket. It is an 8-player game (minimum 2 players) with a 3-round structure and 5 community cards.",
      category: "casino",
      tech: ["Unity 3D", "Node.js", "Socket"],
      team: "Development Team",
      year: "Aug 2022 - Jul 2023",
    },

    // --- Projects at Invisible Fiction (Jan 2015 - Aug 2022) ---
    {
      id: 6,
      title: "StoryBook",
      description: "3D Story Creation & Player System",
      fullDescription:
        "Dual-tool system (PlayerTool and Authoring tool). The Authoring tool allows creation of animated stories using 3D models and animations, linking them to words. Stories are uploaded for use in the Playertool.",
      category: "game",
      tech: ["Unity 3D", "C#", "3D Animation"],
      team: "2 developers",
      year: "Jan 2015 - Aug 2022",
    },
    {
      id: 7,
      title: "FrogWarz",
      description: "Multi-level Battle Game",
      fullDescription:
        "Game where two sides of frogs fight using flies as weapons. The world changes after every five levels, and different power-ups are available.",
      category: "game",
      tech: ["Unity 3D", "C#"],
      team: "Solo Developer",
      year: "Jan 2015 - Aug 2022",
    },
    {
      id: 8,
      title: "Kne3Wiz",
      description: "Knee Replacement Surgery Planning System",
      fullDescription:
        "Medical project for knee replacement surgery. Based on patient CT scans, doctors can find the actual size of femur and tibia for precision surgery.",
      category: "medical",
      tech: ["Unity 3D", "C#", "Medical Imaging"],
      team: "2 developers",
      year: "Jan 2015 - Aug 2022",
      link: "https://arthro3d.online/products/kne3wiz/",
    },
    {
      id: 9,
      title: "ARKI",
      description: "Dynamic AR Marker System",
      fullDescription:
        "Simple project created using ARKIT, in which users dynamically generate multiple markers to detect the world.",
      category: "arvr",
      tech: ["Unity 3D", "C#", "ARKIT"],
      team: "Solo Developer",
      year: "Jan 2015 - Aug 2022",
    },
    {
      id: 10,
      title: "Virtual Jewellery ShowRoom",
      description: "Virtual Showroom Experience",
      fullDescription:
        "Allows users to walk through around jewellery products, view details, and experience a virtual 'TryOn' to check which jewellery suits them.",
      category: "arvr",
      tech: ["Unity 3D", "C#", "VR"],
      team: "Solo Developer",
      year: "Jan 2015 - Aug 2022",
      link: "Video Link",
    },
    {
      id: 11,
      title: "LencePro",
      description: "Medical Glass Measurement App",
      fullDescription:
        "Application based on glass that shows different coated glass characteristics (raindrop, dust, fingerprint, etc.). It measures medical-related values (pd distance, A, B, DBL) using face detection on the latest iOS.",
      category: "medical",
      tech: ["Unity 3D", "C#", "iOS", "Face Detection"],
      team: "Solo Developer",
      year: "Under Development",
    },
    {
      id: 12,
      title: "Tixxi",
      description: "Event-Based Social Application",
      fullDescription:
        "Event application where users can create 'moments' at an event, invite friends, display events in a selected area, and display user moments like reels.",
      category: "game",
      tech: ["Unity 3D", "C#", "Social Features"],
      team: "2 developers",
      year: "Under Development",
      link: "https://tixxiapp.com/#!",
    },
    {
      id: 13,
      title: "ColourBook AR",
      description: "AR Coloring Application",
      fullDescription:
        "AR app where a player detects a marker with a camera, a 3D model is generated, and the color filled in the marker applies to the model.",
      category: "arvr",
      tech: ["Unity 3D", "C#", "AR"],
      team: "Solo Developer",
      year: "Jan 2015 - Aug 2022",
      link: "PlayStore Link",
    },
    {
      id: 14,
      title: "ObjectDetection ML",
      description: "Machine Learning Project",
      fullDescription:
        "Machine learning project to detect objects using a camera. It trains images to detect objects.",
      category: "game",
      tech: ["TensorFlow", "Python", "Unity 3D"],
      team: "Solo Developer",
      year: "Jan 2015 - Aug 2022",
    },
    {
      id: 15,
      title: "Storyland",
      description: "Multiplayer Exploration Game",
      fullDescription:
        "A multiplayer game where players move on different areas, play small games, earn points, and complete tasks.",
      category: "game",
      tech: ["Unity 3D", "C#", "Multiplayer"],
      team: "3 developers",
      year: "Jan 2015 - Aug 2022",
    },
    {
      id: 16,
      title: "LittleLense",
      description: "AR Kids Face Filter App",
      fullDescription:
        "AR-based application for small kids with many different filters that apply to the face and are triggered by different expressions.",
      category: "arvr",
      tech: ["Unity 3D", "C#", "AR"],
      team: "Solo Developer",
      year: "Jan 2015 - Aug 2022",
      link: "PlayStore Link",
    },
    {
      id: 17,
      title: "ToppleTree",
      description: "Multiplayer Balance Game",
      fullDescription:
        "A load balancing multiplayer game where users pick a tree part and place it on the tree. If the tree falls, the player loses the turn.",
      category: "game",
      tech: ["Unity 3D", "C#", "Multiplayer"],
      team: "2 developers",
      year: "Jan 2015 - Aug 2022",
      link: "https://invisiblefiction.com/portfolio-item/topple-tree/",
    },
    // --- Freelance Projects ---
    {
      id: 18,
      title: "BearBrowls Ultras",
      description: "Multiplayer Strategy Game",
      fullDescription:
        "A multiplayer game (not real time) similar to Clash of Clans, where one player attacks another who is offline. It is 2.5D and players can upgrade their home, storage, and character.",
      category: "game",
      tech: ["Unity 3D", "C#", "Multiplayer"],
      team: "2 developers",
      year: "Freelance",
      link: "Apk Link",
    },
    {
      id: 19,
      title: "God Generation AR",
      description: "AR Temple Application",
      fullDescription:
        "AR based Application where the user tracks different markers in a temple to generate 3D god models and play background music and sound.",
      category: "arvr",
      tech: ["Unity 3D", "C#", "AR"],
      team: "Solo Developer",
      year: "Freelance",
    },

    // --- Final Year Projects ---
    {
      id: 20,
      title: "Car Game",
      description: "B.E. Simple 3D Car Game",
      fullDescription:
        "A simple 3D car game with 25 levels. The goal is to collect coins using a car, and an arrow shows the nearest coin direction. 5 different Worlds are used.",
      category: "game",
      tech: ["3D Game", "C#"],
      team: "Solo Developer", // Team size not specified for B.E. project
      year: "B.E. Project",
    },
    {
      id: 21,
      title: "Online Tractor Selling System",
      description: "Diploma Project: Web Application",
      fullDescription:
        "A web application for a company to sell tractors to dealers and customers, saving records online. Customers can give online orders.",
      category: "freelance",
      tech: ["Web Application"],
      team: "Solo Developer", // Team size not specified for Diploma project
      year: "Diploma Project",
    },
    {
      id: 22,
      title: "Baccarat",
      description: "Multiplayer Casino Card Game",
      fullDescription:
        "One of the 6 casino games developed, taking input from a card shoe and displaying the result based on Baccarat rules.",
      category: "casino",
      tech: ["Unity 3D", "C#", "Networking"],
      team: "Development Team",
      year: "Aug 2022 - Jul 2023",
    },
    {
      id: 23,
      title: "BlackJack",
      description: "Multiplayer Casino Card Game",
      fullDescription:
        "One of the 6 casino games developed, taking input from a card shoe and displaying the result based on BlackJack rules.",
      category: "casino",
      tech: ["Unity 3D", "C#", "Networking"],
      team: "Development Team",
      year: "Aug 2022 - Jul 2023",
    },
    {
      id: 24,
      title: "Casino War",
      description: "Multiplayer Casino Card Game",
      fullDescription:
        "One of the 6 casino games developed, taking input from a card shoe and displaying the result based on Casino War rules.",
      category: "casino",
      tech: ["Unity 3D", "C#", "Networking"],
      team: "Development Team",
      year: "Aug 2022 - Jul 2023",
    },
    {
      id: 25,
      title: "Mini flush",
      description: "Multiplayer Casino Card Game",
      fullDescription:
        "One of the 6 casino games developed, taking input from a card shoe and displaying the result based on Mini Flush rules.",
      category: "casino",
      tech: ["Unity 3D", "C#", "Networking"],
      team: "Development Team",
      year: "Aug 2022 - Jul 2023",
    },
    {
      id: 26,
      title: "7 Up Down",
      description: "Multiplayer Casino Game",
      fullDescription:
        "One of the 6 casino games developed, with game logic based on 7 Up Down rules.",
      category: "casino",
      tech: ["Unity 3D", "C#", "Networking"],
      team: "Development Team",
      year: "Aug 2022 - Jul 2023",
    },
    {
      id: 27,
      title: "Andar Bahar",
      description: "Multiplayer Casino Card Game",
      fullDescription:
        "One of the 6 casino games developed, with game logic based on Andar Bahar rules.",
      category: "casino",
      tech: ["Unity 3D", "C#", "Networking"],
      team: "Development Team",
      year: "Aug 2022 - Jul 2023",
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
