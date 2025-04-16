import { FadeIn, SkillBar } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Laptop, Wrench, FlaskRound, Palette, Smartphone } from "lucide-react";

const skills = [
  {
    category: "Programming Languages",
    icon: <Code className="h-5 w-5" />,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      { name: "Java", percentage: 90 },
      { name: "SQL", percentage: 85 }
    ]
  },
  {
    category: "Web Development",
    icon: <Laptop className="h-5 w-5" />,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    skills: [
      { name: "ReactJS", percentage: 85 },
      { name: "NodeJS", percentage: 80 },
      { name: "ExpressJS", percentage: 75 }
    ]
  },
  {
    category: "APIs & Tools",
    icon: <Wrench className="h-5 w-5" />,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: [
      { name: "RESTful APIs", percentage: 85 },
      { name: "GitHub", percentage: 90 },
      { name: "Docker", percentage: 75 }
    ]
  },
  {
    category: "Testing",
    icon: <FlaskRound className="h-5 w-5" />,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    skills: [
      { name: "Selenium WebDriver", percentage: 90 },
      { name: "Selenium IDE", percentage: 85 }
    ]
  },
  {
    category: "Design Tools",
    icon: <Palette className="h-5 w-5" />,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    skills: [
      { name: "Figma", percentage: 80 }
    ]
  },
  {
    category: "Mobile Development",
    icon: <Smartphone className="h-5 w-5" />,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    skills: [
      { name: "Android Studio", percentage: 75 }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <FadeIn key={category.category} delay={0.1 * index}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-full ${category.bgColor} flex items-center justify-center ${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 className="ml-4 text-xl font-semibold">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span>{skill.name}</span>
                          <span>{skill.percentage}%</span>
                        </div>
                        <SkillBar percentage={skill.percentage} color={category.color} />
                      </div>
                    ))}
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
