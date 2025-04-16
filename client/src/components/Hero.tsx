import { Button } from "@/components/ui/button";
import { FadeIn, ParallaxScroll } from "@/lib/animations";
import { scrollToSection } from "@/lib/utils";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Background pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <FadeIn delay={0.2}>
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Asmitha S</h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6">
              Information Technology Student
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg">
              Passionate about creating meaningful digital experiences through code. Specializing in web development and quality assurance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get in Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View Projects
              </Button>
            </div>
            
            <div className="flex mt-8 space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:asmithasaravanan3099@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:7695887130"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </FadeIn>
          
          <ParallaxScroll speed={-0.2} className="hidden lg:block">
            <FadeIn delay={0.4} direction="left">
              <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1300&q=80" 
                  alt="Workspace illustration" 
                  className="w-full h-full object-cover rounded-full p-2"
                />
              </div>
            </FadeIn>
          </ParallaxScroll>
        </div>
      </div>
    </section>
  );
}
