import { Button } from "@/components/ui/button";
import { FadeIn } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80" 
              alt="Developer workspace" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </FadeIn>
          
          <FadeIn delay={0.2} direction="left">
            <h3 className="text-2xl font-semibold mb-4">Information Technology Student</h3>
            <p className="text-muted-foreground mb-6">
              I'm currently pursuing my Bachelor of Technology in Information Technology at Chennai Institute of Technology with a CGPA of 9.0. Driven by a passion for creating efficient and user-friendly digital solutions, I've focused on developing my skills in web development and quality assurance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Education</h4>
                <p className="text-muted-foreground">
                  B.Tech in Information Technology<br />
                  Chennai Institute of Technology<br />
                  2021-2025
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Coursework</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Data Structures and Algorithms</li>
                  <li>Database Management</li>
                  <li>Object Oriented Programming</li>
                  <li>Networking</li>
                  <li>Operating Systems</li>
                </ul>
              </div>
            </div>
            
            <Button 
              variant="link" 
              className="p-0 text-primary hover:text-primary/80"
              onClick={() => scrollToSection("contact")}
            >
              Let's connect
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
