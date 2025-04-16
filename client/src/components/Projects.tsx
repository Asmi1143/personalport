import { FadeIn } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "AS - SketchBook",
    description: "An interactive drawing application with real-time collaboration features and sketch sharing capabilities.",
    image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
    tags: ["Next.js", "Node.js", "Socket.io"],
    badge: { text: "Next.js", color: "bg-primary/80" },
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Blog Website",
    description: "A full-featured blog platform with user authentication, post management, and interactive elements.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    tags: ["ReactJS", "Express", "Node", "MongoDB"],
    badge: { text: "MERN Stack", color: "bg-secondary/80" },
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Artisan Scribe",
    description: "A streamlined movie database website with a simplified user interface and real-time data from MovieDB API.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1025&q=80",
    tags: ["ReactJS", "Material UI", "Docker", "MovieDB API"],
    badge: { text: "ReactJS", color: "bg-accent/80" },
    demoLink: "#",
    githubLink: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={cn("px-2 py-1 text-white text-xs rounded-full", project.badge.color)}>
                      {project.badge.text}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <a 
                      href={project.demoLink} 
                      className="text-primary font-medium flex items-center hover:underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.githubLink} 
                      className="text-primary font-medium flex items-center hover:underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
