import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Award,
  ExternalLink,
  Zap,
  Users,
  Heart,
  Cpu,
  BarChart3,
  FlaskConical,
  Compass,
  GraduationCap,
  Droplet,
  DollarSign,
  Lightbulb,
  Brain,
  Settings,
  type LucideIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects as allProjects, type Project } from "@/lib/projects"

const iconMap: { [key: string]: LucideIcon } = {
  Zap,
  Users,
  Heart,
  Cpu,
  BarChart3,
  FlaskConical,
  Compass,
  GraduationCap,
  Droplet,
}

const getBannerInfo = (bannerType?: string) => {
  switch (bannerType) {
    case "novel-tech":
      return {
        text: "Novel Technology",
        icon: Lightbulb,
        color: "bg-gradient-to-r from-purple-500 to-indigo-500",
      }
    case "cost-reduction":
      return {
        text: "Cost Reduction Focus",
        icon: DollarSign,
        color: "bg-gradient-to-r from-green-500 to-emerald-500",
      }
    case "social-cause":
      return {
        text: "Social Cause",
        icon: Heart,
        color: "bg-gradient-to-r from-pink-500 to-rose-500",
      }
    case "ai-implementation":
      return {
        text: "AI Implementation",
        icon: Brain,
        color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      }
    case "tech-implementation":
      return {
        text: "Tech Implementation",
        icon: Settings,
        color: "bg-gradient-to-r from-orange-500 to-red-500",
      }
    default:
      return null
  }
}

interface ProjectsGridProps {
  filter?: "inventions" | "research"
  title?: string
  description?: string
  limit?: number
}

export function ProjectsGrid({ filter, title, description, limit }: ProjectsGridProps) {
  let projects: Project[] = filter ? allProjects.filter((p) => p.category.includes(filter)) : allProjects

  if (limit) {
    projects = projects.slice(0, limit)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {(title || description) && (
          <div className="text-center mb-16 animate-fade-in">
            {title && <h1 className="text-3xl sm:text-4xl font-bold mb-4 animate-slide-up">{title}</h1>}
            {description && (
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-up animation-delay-200">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = iconMap[project.icon] || Zap // Fallback to a default icon
            const bannerInfo = getBannerInfo(project.bannerType)

            return (
              <Card
                key={project.id}
                className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 ${project.borderColor} group animate-fade-in-up flex flex-col`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 ${project.color} group-hover:h-3 transition-all duration-300`}></div>
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Award Badge */}
                  {project.award && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-3 py-1 rounded-full text-xs flex items-center animate-bounce-gentle z-20">
                      <Award className="h-3 w-3 mr-1" />
                      Award
                    </div>
                  )}

                  {/* Banner Badge */}
                  {bannerInfo && (
                    <div
                      className={`absolute top-3 left-3 ${bannerInfo.color} text-white px-3 py-1 rounded-full text-xs flex items-center z-20 shadow-lg`}
                    >
                      <bannerInfo.icon className="h-3 w-3 mr-1" />
                      {bannerInfo.text}
                    </div>
                  )}

                  {/* Implementation Phase Badge */}
                  {project.implementationPhase && (
                    <div className="absolute bottom-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs flex items-center z-20">
                      <Zap className="h-3 w-3 mr-1" />
                      Implementation Phase
                    </div>
                  )}

                  {/* Under Publication Badge */}
                  {project.underPublication && (
                    <div className="absolute bottom-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs flex items-center z-20">
                      <Badge className="bg-transparent text-white">Under Publication</Badge>
                    </div>
                  )}

                  {/* Project Icon */}
                  <div
                    className={`absolute bottom-3 right-3 p-2 rounded-full ${project.color} opacity-90 group-hover:scale-110 transition-transform duration-300 z-10`}
                  >
                    <IconComponent className="h-4 w-4 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="group-hover:text-foreground transition-colors duration-300 min-h-[60px]">
                    {project.description}
                  </CardDescription>
                  {(project.company || project.status) && (
                    <Badge
                      className={`w-fit ${project.color} text-white hover:opacity-90 transition-opacity duration-300`}
                    >
                      {project.company || project.status}
                    </Badge>
                  )}
                  {project.award && (
                    <div className="text-sm font-medium text-amber-600 animate-pulse-gentle">🏆 {project.award}</div>
                  )}
                </CardHeader>
                <CardContent className="p-8 flex flex-col flex-grow justify-end">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs hover:scale-105 transition-transform duration-200 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full group-hover:shadow-lg transition-shadow duration-300 mt-auto">
                    <Link href={`/projects/${project.id}`}>
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
