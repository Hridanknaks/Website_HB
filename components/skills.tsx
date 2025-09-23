import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Smartphone, Brain, Wrench, Users } from 'lucide-react'

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
      { name: "Solidity", level: 70 }
    ]
  },
  {
    title: "Web & Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "React/Next.js", level: 88 },
      { name: "React Native", level: 82 },
      { name: "Node.js", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Flutter", level: 75 }
    ]
  },
  {
    title: "Data & AI",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "TensorFlow/PyTorch", level: 80 },
      { name: "Computer Vision", level: 82 },
      { name: "Data Analysis", level: 88 },
      { name: "OpenCV", level: 78 }
    ]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Firebase", level: 88 },
      { name: "AWS", level: 75 },
      { name: "Docker", level: 70 }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 80 },
      { name: "Postman", level: 85 },
      { name: "Linux", level: 78 }
    ]
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Leadership", level: 90 },
      { name: "Team Collaboration", level: 92 },
      { name: "Project Management", level: 85 },
      { name: "Public Speaking", level: 88 },
      { name: "Problem Solving", level: 95 }
    ]
  }
]

const certifications = [
  "AWS Cloud Practitioner",
  "Google AI/ML Certification",
  "Meta React Developer",
  "MongoDB Developer",
  "GitHub Actions"
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center">
                    <IconComponent className="h-6 w-6 text-primary mr-3" />
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
