import { FadeIn } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award } from "lucide-react";

const achievements = [
  {
    title: "Smart India Hackathon Finalist",
    description: "Reached the finals of a competitive intra-college hackathon event that served as a qualifier for Smart India Hackathon."
  },
  {
    title: "Technical Symposium Leadership",
    description: "Served as Vice-President for the National level Technical Symposium (2023-2024), leading organization and coordination efforts."
  },
  {
    title: "SkillRack Problem Solver",
    description: "Solved over 1400 programming problems on SkillRack, achieving a rank of 6000 among all participants."
  }
];

const certifications = [
  {
    title: "Full Stack Development",
    description: "Comprehensive certification covering front-end and back-end web development technologies and best practices."
  },
  {
    title: "Cybersecurity Essentials",
    description: "Certification focusing on cybersecurity principles, threat detection, and security implementation strategies."
  },
  {
    title: "Cisco Certified Network Associate Industrial (CCNA)",
    description: "Professional certification validating skills in implementing, managing, and troubleshooting industrial networks."
  },
  {
    title: "RPA Citizen Developer Foundation",
    description: "Certification in Robotic Process Automation fundamentals and development practices for business process optimization."
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Certifications</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Achievements */}
          <FadeIn>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Trophy className="h-5 w-5 text-yellow-500 mr-3" />
              Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((item, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="p-5">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeIn>
          
          {/* Certifications */}
          <FadeIn delay={0.2}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="h-5 w-5 text-primary mr-3" />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((item, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="p-5">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
