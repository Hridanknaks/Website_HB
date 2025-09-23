import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Award,
  ExternalLink,
  Zap,
  Users,
  Heart,
  FlaskConical,
  Compass,
  GraduationCap,
  Droplet,
  DollarSign,
  Lightbulb,
  Brain,
  Settings,
  Cpu, // ✅ Added for AvianEye
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: "birdrover",
    title: "BirdRover - AI-Powered Avian Monitoring Hovercraft",
    description:
      "An award-winning AI hovercraft for non-invasive bird monitoring, providing scalable data for conservation. IRIS Grand Award winner and Regeneron ISEF 2025 Finalist.",
    image: "/Birdrov1.jpg",
    technologies: ["AI/ML", "Computer Vision", "Hovercraft Technology", "Environmental Monitoring", "Python"],
    award: "IRIS Grand Award 2024, Regeneron ISEF 2025 Finalist",
    status: "Implementation Phase",
    color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    borderColor: "border-yellow-400",
    bannerType: "novel-tech",
  },
  {
    id: "avianeye",
    title: "AvianEye - AI-Powered Drone for Environmental Monitoring",
    description:
      "A Siemens PAMC Lab internship project combining embedded systems and AI to develop a professional-grade drone for real-time bird detection and environmental monitoring.",
    image: "/Siemens.jpg", // ✅ Replace with actual image path
    technologies: ["AI/ML", "Computer Vision", "Embedded Systems", "PCB Design", "UAV Technology", "UART/SPI/I2C"],
    status: "Completed (Internship Project)",
    color: "bg-gradient-to-r from-teal-500 to-cyan-600",
    borderColor: "border-teal-400",
    bannerType: "ai-implementation",
  },
  {
    id: "navaid",
    title: "NavAid - AI-Driven Indoor Navigation for Wheelchairs",
    description:
      "A novel AI-powered Indoor Positioning System (IPS) for wheelchairs, enabling autonomous mobility in hospitals using an innovative sensor fusion approach.",
    image: "/navaid1.jpg",
    technologies: ["AI/ML", "Robotics", "Node.js", "Indoor Navigation", "Accessibility Tech"],
    status: "Advanced Progress (Team Lead)",
    color: "bg-gradient-to-r from-teal-400 to-cyan-500",
    borderColor: "border-teal-400",
    bannerType: "novel-tech",
  },
  {
    id: "leviathan-mark-ii",
    title: "Leviathan Mark II - Materov Competition ROV",
    description:
      "A cost-efficient ROV for the MATE competition, awarded a US Navy Challenge Coin. An innovative low-cost engineering solution.",
    image: "/MR7.png",
    technologies: ["Robotics", "Underwater Systems", "Cost Optimization", "Mechanical Engineering"],
    award: "US Navy Challenge Coin",
    status: "Completed (Awarded)",
    color: "bg-gradient-to-r from-sky-400 to-blue-500",
    borderColor: "border-sky-400",
    bannerType: "cost-reduction",
  },
  {
    id: "aquascan",
    title: "Aquascan - Novel Underwater ROV for Environmental Sensing",
    description:
      "A novel underwater ROV for environmental sensing in India, using AI to detect metals, rust, and microplastics. Pioneering subaquatic exploration technology.",
    image: "/MR3.jpg",
    technologies: ["Robotics", "Underwater Systems", "AI/ML", "Environmental Tech", "Novel Design"],
    status: "Advanced Progress (Autonomous Dev)",
    color: "bg-gradient-to-r from-violet-400 to-indigo-500",
    borderColor: "border-violet-400",
    bannerType: "novel-tech",
  },
  {
    id: "hydrotherapy-rehabilitation",
    title: "Hydrotherapy Rehabilitation Project",
    description:
      "A smart, sustainable water treadmill for physiotherapy, integrating AI gait analysis and eco-friendly design to make aquatic therapy more accessible.",
    image: "/Hydro.png",
    technologies: ["Medical Devices", "Rehabilitation", "Mechanical Engineering", "Therapy", "IoT"],
    status: "In Development",
    color: "bg-gradient-to-r from-cyan-300 to-sky-400",
    borderColor: "border-cyan-300",
    bannerType: "novel-tech",
  },
  {
    id: "potentia",
    title: "Potentia - AI-Powered Athlete Performance Platform",
    description:
      "An AI coaching platform for athletes that provides form analysis, injury prevention, and personalized training schedules. Leading a 20-student team.",
    image: "/potentia.png",
    technologies: ["AI/ML", "Mobile Development", "Sports Science", "Computer Vision", "Team Leadership"],
    status: "Advanced Progress (Team Lead)",
    color: "bg-gradient-to-r from-blue-500 to-indigo-600",
    borderColor: "border-blue-500",
    bannerType: "novel-tech",
  },
  {
    id: "vemana-hospital-revival",
    title: "Vemana Hospital Digital Transformation & Revival",
    description:
      "Leading the digital transformation of a government hospital by implementing an EMRS, securing CSR funding, and optimizing operations.",
    image: "/Vemana.png",
    technologies: ["Healthcare Tech", "EMRS", "Process Automation", "CSR Funding", "Random Forest Regressors"],
    status: "In Progress",
    color: "bg-gradient-to-r from-rose-400 to-red-500",
    borderColor: "border-rose-400",
    bannerType: "tech-implementation",
  },
  {
    id: "diet-analysis-predictor",
    title: "AI-Powered Diet Analysis & Nutrient Predictor",
    description:
      "An AI tool that predicts personalized nutritional needs using a random forest model trained on a multi-variable health dataset. Team lead for a 3-member team.",
    image: "/Diet1.jpg",
    technologies: ["AI/ML", "Data Science", "Nutrition", "Predictive Modeling", "Python"],
    status: "Completed",
    color: "bg-gradient-to-r from-amber-400 to-orange-500",
    borderColor: "border-amber-400",
    bannerType: "ai-implementation",
  }
]

const getIcon = (projectId: string) => {
  switch (projectId) {
    case "birdrover":
      return Zap
    case "avianeye": // ✅ AvianEye icon
      return Cpu
    case "navaid":
      return Compass
    case "leviathan-mark-ii":
      return FlaskConical
    case "aquascan":
      return FlaskConical
    case "hydrotherapy-rehabilitation":
      return Droplet
    case "potentia":
      return Users
    case "vemana-hospital-revival":
      return Heart
    case "diet-analysis-predictor":
      return Zap
    case "socialabs":
      return GraduationCap
    default:
      return Zap
  }
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

export default function ProjectsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/projects-background.avif"
          alt="Projects Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90"></div>
      </div>

      <div className="relative z-10">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="text-white hover:text-blue-400">
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio Hub
            </Link>
          </Button>
        </div>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-slide-up text-white">Projects</h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-slide-up animation-delay-200">
                Innovative solutions designed and built to solve real-world challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const IconComponent = getIcon(project.id)
                const bannerInfo = getBannerInfo(project.bannerType)

                return (
                  <Card
                    key={project.id}
                    className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 ${project.borderColor} group animate-fade-in-up flex flex-col bg-slate-800/50 border-slate-700 backdrop-blur-sm`}
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
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-3 py-1 rounded-full text-xs flex items-center animate-bounce-gentle z-20">
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
                      <Badge
                        className={`w-fit ${project.color} text-white hover:opacity-90 transition-opacity duration-300`}
                      >
                        {project.status}
                      </Badge>
                      {project.award && (
                        <div className="text-sm font-medium text-yellow-400 animate-pulse-gentle">
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
                        <Link href={`/portfolio/${project.id}`}>
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
