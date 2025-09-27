import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, DollarSign, Calendar, MapPin, Heart, GraduationCap, Building2, ExternalLink } from "lucide-react"
import { ImageGallery } from "./image-gallery"
import Image from "next/image"
import Link from "next/link"

export function CommunityOutreach() {
  const initiatives = [
    {
      name: "Socialabs",
      description:
        "Designing affordable science experiment kits and teaching in government schools to provide hands-on learning opportunities in the absence of lab facilities.",
      role: "Co-Founder",
      period: "April 2022 - Present",
      location: "Bangalore, India",
      logo: "https://portfolio-worker.hridank.workers.dev/public/Socialabs.png?height=80&width=80&text=Socialabs+Logo",
      impact: {
        schools: "5+ Government Schools",
        students: "200+ Students Impacted",
        kits: "10+ Science Kits Designed",
      },
      images: [
        "https://portfolio-worker.hridank.workers.dev/public/Socialabs.jpeg",
        "https://portfolio-worker.hridank.workers.dev/public/Socialabs1.jpeg",
        "https://portfolio-worker.hridank.workers.dev/public/IMG_7744.mp4",
        "https://portfolio-worker.hridank.workers.dev/public/IMG_7851.mp4"
      ],
      highlights: [
        "Developed 10+ different science experiment kits explaining concepts from the science syllabus",
        "Each kit designed to cost below a dollar, making science accessible",
        "Successfully taught in 5+ government schools, reaching 200+ kids",
        "Created a sustainable model for ongoing kit production and distribution",
      ],
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      borderColor: "border-green-400",
      icon: GraduationCap,
    },
    {
      name: "SocialCred$",
      description:
        "Time-banking organization recognizing students in Bangalore for community service, connecting volunteers with meaningful projects and tracking social impact.",
      role: "Clubs Vice-Chair (2022-2023), Organisation Lead (2024-2025)",
      period: "2021 - Present",
      location: "Bangalore, India",
      logo: "https://portfolio-worker.hridank.workers.dev/public/sc.JPEG?height=80&width=80&text=SocialCreds+Logo",
      impact: {
        volunteers: "200+ Active Volunteers",
        projects: "50+ Community Projects (assisted)",
        funding: "₹45L+ CSR Secured",
      },
      images: [
        "https://portfolio-worker.hridank.workers.dev/public/SC1.PNG?height=300&width=500&text=SocialCreds+Image+1",
        "https://portfolio-worker.hridank.workers.dev/public/Sc2.PNG?height=300&width=500&text=SocialCreds+Image+2",
      ],
      highlights: [
        "Secured ₹45 lakhs in CSR funding for Snehagram Centre supporting HIV-positive youth",
        "Ran fundraising events raising close to ₹10 lakhs",
        "Pitched to multiple philanthropists, including a pitch at Egon Zehnder",
        "Organized food supply drives and tutoring programs for orphanages",
        "Developed time-banking system to track and reward community service",
      ],
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      borderColor: "border-blue-400",
      icon: Heart,
      externalLink: "https://www.socialcreds.com/",
    },
    {
      name: "Vemana Hospital Revival",
      description:
        "Leading comprehensive revival project for Vemana Hospital, addressing funding challenges and implementing modern healthcare technologies to serve the community better.",
      role: "Project Leader",
      period: "November 2024 - Present",
      location: "Bangalore, India",
      logo: "https://portfolio-worker.hridank.workers.dev/public/Redcross.png?height=80&width=80&text=Vemana+Hospital+Logo",
      impact: {
        funding: "₹81.5 Lakhs Projected Funding",
        timeline: "Mid-2025 Target",
        systems: "Full Digital Integration",
      },
      images: ["https://portfolio-worker.hridank.workers.dev/public/Vemana.PNG?height=300&width=500&text=Vemana+Hospital+Image+1"],
      highlights: [
        "Conducting comprehensive assessment of hospital's current challenges",
        "Implementing Electronic Medical Records System (EMRS) for better patient care",
        "Automating administrative processes to reduce operational costs",
        "Developing user-friendly technologies for staff and patient interaction",
      ],
      futureGoals: [
        "Complete hospital digitization by mid-2025",
        "Establish sustainable funding model for ongoing operations",
        "Train all staff on new digital systems",
        "Expand services to serve more community members",
      ],
      color: "bg-gradient-to-r from-red-500 to-pink-500",
      borderColor: "border-red-400",
      icon: Building2,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-slide-up">Community Outreach</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Driving social impact through education, healthcare, and community service initiatives
          </p>
        </div>

        <div className="space-y-16">
          {initiatives.map((initiative, index) => {
            const IconComponent = initiative.icon
            return (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-2 ${initiative.borderColor} group animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-3 ${initiative.color} group-hover:h-4 transition-all duration-300`}></div>
                <CardHeader className="bg-muted/30">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={initiative.logo || "/placeholder.svg"}
                          alt={`${initiative.name} Logo`}
                          width={80}
                          height={80}
                          className="rounded-lg border-2 border-muted"
                        />
                        <div className={`absolute -top-2 -right-2 p-1.5 rounded-full ${initiative.color} opacity-90`}>
                          <IconComponent className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-3xl mb-2 group-hover:text-primary transition-colors duration-300">
                          {initiative.name}
                        </CardTitle>
                        <Badge
                          className={`mb-2 ${initiative.color} text-white hover:opacity-90 transition-opacity duration-300`}
                        >
                          {initiative.role}
                        </Badge>
                        <div className="flex items-center gap-4 text-muted-foreground mt-2">
                          <div className="flex items-center hover:text-primary transition-colors duration-300">
                            <Calendar className="h-4 w-4 mr-2" />
                            {initiative.period}
                          </div>
                          <div className="flex items-center hover:text-primary transition-colors duration-300">
                            <MapPin className="h-4 w-4 mr-2" />
                            {initiative.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-10">
                  <p className="text-lg text-muted-foreground mb-8 group-hover:text-foreground transition-colors duration-300">
                    {initiative.description}
                  </p>

                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      {initiative.images && initiative.images.length > 0 && (
                        <ImageGallery images={initiative.images} altPrefix={initiative.name} />
                      )}
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4">Impact Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(initiative.impact).map(([key, value], impactIndex) => (
                          <div
                            key={impactIndex}
                            className="text-center p-5 bg-muted/50 rounded-lg hover:scale-105 transition-transform duration-300 cursor-default"
                            style={{ animationDelay: `${impactIndex * 100}ms` }}
                          >
                            <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                            <div className="text-sm text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, " $1")}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="animate-slide-in-left">
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <Users className="h-5 w-5 mr-2 text-primary" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-3">
                        {initiative.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="flex items-start hover:translate-x-2 transition-transform duration-300"
                          >
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0 animate-pulse-gentle"></span>
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {initiative.name === "SocialCred$" && initiative.externalLink && (
                      <div className="mt-6 text-center">
                        <Link
                          href={initiative.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-primary hover:underline"
                        >
                          Visit {initiative.externalLink.replace("https://", "")}
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    )}

                    {initiative.futureGoals && (
                      <div className="animate-slide-in-right">
                        <h4 className="text-lg font-semibold mb-4 flex items-center">
                          <DollarSign className="h-5 w-5 mr-2 text-primary" />
                          Future Goals
                        </h4>
                        <ul className="space-y-3">
                          {initiative.futureGoals.map((goal, goalIndex) => (
                            <li
                              key={goalIndex}
                              className="flex items-start hover:translate-x-2 transition-transform duration-300"
                            >
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0 animate-pulse-gentle"></span>
                              <span className="text-muted-foreground">{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
