import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Users, Award } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "BirdRover",
    description:
      "AI-powered drone system for bird detection and monitoring using computer vision and machine learning algorithms.",
    tech: ["Python", "TensorFlow", "OpenCV", "Drone Technology"],
    status: "Active",
    year: "2024",
    team: "5 members",
    recognition: "IRIS Grand Award Winner",
    link: "/projects/birdrover",
    github: "#",
    image: "https://portfolio-worker.hridank.workers.dev/public/images/BirdRover.jpeg",
  },
  {
    title: "Potentia",
    description: "Mobile app connecting aspiring athletes with professional coaches and training programs.",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
    status: "In Development",
    year: "2024",
    team: "8 members",
    recognition: "Startup Incubator Selected",
    link: "/projects/potentia",
    github: "#",
    image: "https://portfolio-worker.hridank.workers.dev/public/images/Potentia.png",
  },
  {
    title: "SocialCred$",
    description: "Blockchain-based platform for tracking and rewarding community service contributions.",
    tech: ["Solidity", "React", "Web3.js", "IPFS"],
    status: "Completed",
    year: "2023",
    team: "6 members",
    recognition: "Hackathon Winner",
    link: "/projects/socialcreds",
    github: "#",
    image: "https://portfolio-worker.hridank.workers.dev/public/placeholder.svg?height=200&width=400",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative projects combining technology with real-world impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge
                    variant={
                      project.status === "Active"
                        ? "default"
                        : project.status === "In Development"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.year}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {project.team}
                    </div>
                  </div>

                  <div className="flex items-center text-sm">
                    <Award className="h-4 w-4 mr-2 text-primary" />
                    <span className="font-medium">{project.recognition}</span>
                  </div>

                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1">
                      <Link href={project.link}>
                        View Details
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href={project.github}>
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/projects">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
