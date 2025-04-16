import { FadeIn } from "@/lib/animations";

const experiences = [
  {
    title: "Quality Analyst Trainee",
    company: "Zoho",
    period: "Dec 2024 – Dec 2024",
    points: [
      "Developed expertise in network protocols and device integration, ensuring seamless authentication.",
      "Gained hands-on experience with Selenium WebDriver for automated functional and regression testing.",
      "Created a comprehensive suite of automated test cases with Selenium IDE, leading to an increase in test coverage from 60% to 90%; this initiative now serves as the backbone for quality assurance processes."
    ]
  },
  {
    title: "Front End Developer",
    company: "Symposium Website Development",
    period: "Feb 2023 – Mar 2023",
    points: [
      "Collaborated using version control systems (Git), resulting in a 10% reduction in development time.",
      "Harnessed Google Firebase for efficient data management, resulted in a 30% enhancement in data retrieval speed.",
      "Optimized five pages early in the development process, resulting in a 27% lift in surf traffic.",
      "Stress-tested with 5,000 simulated visits to verify resilience and scalability, ensuring seamless user experience."
    ]
  },
  {
    title: "Web Developer Intern",
    company: "Lets Grow More",
    period: "July 2023 – August 2023",
    demoLink: "#",
    points: [
      "Completed 3 real-time projects, enhancing team efficiency by 25% through effective project planning.",
      "Developed TODOLISTforU, boosting productivity by 40% and attracting over 500 active users.",
      "Implemented time limits with alarms, increasing task completion rates by 30%.",
      "Enhanced user satisfaction ratings by 20% through task addition, editing, and deletion features."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10 text-primary">
            {experiences.map((exp, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div className="timeline-item before:bg-primary after:bg-primary">
                  <div className="mb-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-semibold text-foreground">{exp.company}</span>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                      {exp.demoLink && (
                        <a 
                          href={exp.demoLink} 
                          className="text-sm text-primary hover:underline"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="text-foreground">
                    <ul className="list-disc list-outside ml-4 space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
