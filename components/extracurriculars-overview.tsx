import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Music, Dumbbell, Camera, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ExtracurricularsOverview() {
  const activities = [
    {
      title: "Music",
      description:
        "Lead guitarist for Highway 440, Trinity certified musician with performances at major events and fundraisers.",
      image: "pfp.jpg?height=300&width=400&text=Music+Performance",
      icon: Music,
      highlights: [
        "10+ Live Performances",
        "Trinity Grade 5 Theory, Grade 3 Practical",
        "Fundraising Events",
        "Audience of 150-400 people",
      ],
      link: "/extracurriculars/music",
      color: "bg-gradient-to-r from-pink-500 to-rose-500",
      borderColor: "border-pink-400",
    },
    {
      title: "Basketball",
      description:
        "School team guard with tournament victories and competitive experience across multiple championships.",
      image: "/bbp.jpg?height=300&width=400&text=Basketball+Action",
      icon: Dumbbell,
      highlights: ["U18 Tournament Winners", "2 Silver, 1 Bronze medals", "School Team Guard", "6 Major Tournaments"],
      link: "/extracurriculars/basketball",
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      borderColor: "border-orange-400",
    },
    {
      title: "Photography",
      description:
        "A lifelong passion for capturing moments, from mastering camera techniques at a young age to focusing on wildlife and setting-based photography, which inspired my BirdRover project.",
      image: "/Photo banner.jpg?height=300&width=400&text=Photography+Gear",
      icon: Camera,
      highlights: [
        "Lifelong Passion",
        "Wildlife & Scenery Focus",
        "Vivum 2024 Photographer",
        "Inspired BirdRover Project",
      ],
      link: "/extracurriculars/photography",
      color: "bg-gradient-to-r from-purple-500 to-indigo-500",
      borderColor: "border-purple-400",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-slide-up">Extracurricular Activities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Pursuing excellence beyond academics through music, sports, and creative arts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon
            return (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group border-2 ${activity.borderColor} animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`h-3 ${activity.color} group-hover:h-4 transition-all duration-300`}></div>
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute top-4 left-4 p-3 rounded-full ${activity.color} opacity-90 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-2 rounded-full ${activity.color} mr-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                      {activity.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {activity.description}
                  </p>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="space-y-3 mb-6">
                    {activity.highlights.map((highlight, highlightIndex) => (
                      <div
                        key={highlightIndex}
                        className="flex items-center hover:translate-x-2 transition-transform duration-300"
                        style={{ animationDelay: `${highlightIndex * 100}ms` }}
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse-gentle"></span>
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className={`w-full ${activity.color} text-white hover:opacity-90 transition-all duration-300 group-hover:shadow-lg`}
                  >
                    <Link href={activity.link}>
                      Explore {activity.title}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
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
