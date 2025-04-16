import { scrollToSection } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Asmitha S. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#home" 
              className="hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
