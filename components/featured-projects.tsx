import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    title: "BirdRover",
    description: "AI-powered drone system for bird detection and monitoring using advanced computer vision algorithms.",
    image: "https://portfolio-worker.hridank.workers.dev/public/images/BirdRover.jpeg",
    tech: ["Python", "TensorFlow", "OpenCV", "Drone Tech"],
    status: "Active",
    link: "/projects/birdrover",
    github: "#",
  },
  {
    title: "Potentia",
    description:
      "Mobile platform connecting aspiring athletes with professional coaches and personalized training programs.",
    image: "https://portfolio-worker.hridank.workers.dev/public/images/Potentia.png",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
    status: "In Development",
    link: "/projects/potentia",
    github: "#",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-80 px-16 sm:px-24 lg:px-32">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Highlighting some of my most impactful and innovative projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant={project.status === "Active" ? "default" : "secondary"}>{project.status}</Badge>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button asChild size="sm" className="flex-1">
                      <Link href={project.link}>
                        View Project
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

        <div className="text-center mt-24">
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
