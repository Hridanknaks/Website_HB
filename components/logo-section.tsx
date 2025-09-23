import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function LogoSection() {
  const organizations = [
    {
      name: "Siemens",
      logo: "/siemens-logo.jpeg",
      role: "Engineering Intern",
      period: "June 2024 - June 2025",
      description: "Worked in the PAMC lab, setting up UART and SPI communications for AI-powered drone systems.",
      color: "bg-gradient-to-r from-cyan-400 to-blue-500",
      borderColor: "border-cyan-400",
    },
    {
      name: "Varchas Aerospace",
      logo: "/Varchas-logo.webp",
      role: "Engineering Intern",
      period: "September - October 2024",
      description: "Designed hovercraft prototype with integrated control systems",
      color: "bg-gradient-to-r from-indigo-400 to-purple-500",
      borderColor: "border-indigo-400",
    },
    {
      name: "The International School Bangalore",
      logo: "/TISB.png",
      role: "Headboy",
      period: "April 2025 - Present",
      description: "Leading student body and representing school values",
      color: "bg-gradient-to-r from-emerald-400 to-teal-500",
      borderColor: "border-emerald-400",
    },
    {
      name: "Karnataka Wildlife Department",
      logo: "/karnataka-wildlife-department.png",
      role: "Collaborator",
      period: "2024 - Present",
      description: "BirdRover project aiding bird population monitoring",
      color: "bg-gradient-to-r from-lime-400 to-green-500",
      borderColor: "border-lime-500",
    },
    {
      name: "Trinity College London",
      logo: "/trinity-logo.jpeg",
      role: "Certified Musician",
      period: "Since 2015",
      description: "Theory Grade 5, Guitar Practical Grade 3",
      color: "bg-gradient-to-r from-rose-400 to-pink-500",
      borderColor: "border-rose-400",
    },
  ]

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Affiliations & Recognition</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Proud to be associated with leading organizations and institutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizations.map((org, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 bg-slate-800/50 border-slate-700 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <div className={`h-2 ${org.color}`}></div>
              <CardContent className="p-8 text-center">
                <div className="mb-4 h-20 flex items-center justify-center p-4">
                  <div className="relative w-full h-16">
                    <Image
                      src={org.logo || "/placeholder.svg"}
                      alt={`${org.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{org.name}</h3>
                <Badge className={`mb-2 text-white ${org.color} hover:opacity-90`}>{org.role}</Badge>
                <div className="text-sm text-slate-400 mb-3">{org.period}</div>
                <p className="text-sm text-slate-300">{org.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
