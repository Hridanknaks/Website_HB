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
  ArrowLeft,
  DollarSign,
  Lightbulb,
  Brain,
  Settings,
  type LucideIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/projects"

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
    case "research":
      return {
        text: "Published Research",
        icon: GraduationCap,
        color: "bg-gradient-to-r from-blue-500 to-purple-500",
      }
    default:
      return null
  }
}

export default function ResearchPage() {
  const researchProjects = projects.filter((project) => project.category.includes("research"))

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/research-background.jpeg"
          alt="Research Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90"></div>
      </div>

      <div className="relative z-10">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="text-white hover:text-blue-400">
            <Link href="/portfolio/research">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio Hub
            </Link>
          </Button>
        </div>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Research Portfolio
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-slide-up animation-delay-200">
                Exploring cutting-edge technologies and contributing to scientific advancement through innovative
                research projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchProjects.map((project, index) => {
                const IconComponent = iconMap[project.icon] || Zap
                const bannerInfo = getBannerInfo(project.bannerType)

                // Choose the correct detail route:
                // - If the project is also an "invention", keep using the portfolio slug.
                // - Otherwise use the research slug.
                const projectHref = project.category.includes("inventions")
                  ? `/portfolio/${project.id}`
                  : `/portfolio/${project.id}`

                return (
                  <Card
                    key={project.id}
                    className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 ${project.borderColor} group animate-fade-in-up flex flex-col bg-slate-800/50 border-slate-700 backdrop-blur-sm`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`h-2 ${project.color} group-hover:h-3 transition-all duration-300`}></div>
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={project.images?.[0] || "/placeholder.svg"}
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
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 text-white">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="group-hover:text-foreground transition-colors duration-300 min-h-[60px] text-slate-300">
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
                        <div className="text-sm font-medium text-amber-400 animate-pulse-gentle">
                          🏆 {project.award}
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="p-8 flex flex-col flex-grow justify-end">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs hover:scale-105 transition-transform duration-200 cursor-default bg-slate-700 text-slate-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild className="w-full group-hover:shadow-lg transition-shadow duration-300 mt-auto">
                        <Link href={projectHref}>
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
      </div>
    </div>
  )
}
