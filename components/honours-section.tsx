import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Music, Star } from "lucide-react"
import Image from "next/image"

export function HonoursSection() {
  const honours = [
    {
      title: "US Navy Challenge Coin",
      year: "2025",
      description:
        "Awarded for overcoming challenges and taking India to Materov in the Ranger category for the first time.",
      category: "Robotics & Innovation",
      icon: Trophy,
      image: "https://portfolio-worker.hridank.workers.dev/public/us-navy-challenge-coin.png",
      isNavyCoin: true,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "IRIS Grand Award Winner",
      year: "2024",
      description: "Selected from 3,000+ applicants across India for BirdRover project",
      category: "Research & Innovation",
      icon: Trophy,
      highlight: "Representing Team India at ISEF 2025",
      image: "https://portfolio-worker.hridank.workers.dev/public/IRIS.png",
      isLargeImage: true,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Regeneron ISEF 2025 Finalist- Team India",
      year: "2025",
      description: "Representing Team India at the world's largest pre-college science competition",
      category: "International Recognition",
      icon: Trophy,
      image: "https://portfolio-worker.hridank.workers.dev/public/2021_ISEF_Logo_960.png",
      isLargeImage: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Sir Isaac Newton Competition - Rank 45",
      year: "2025",
      description: "Ranked 45th out of 3,908 students in University of Waterloo's international physics competition",
      category: "Academic Excellence",
      icon: Award,
      image: "https://portfolio-worker.hridank.workers.dev/public/university-of-waterloo.png",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "MateROV Finalist",
      year: "2025",
      description:
        "Selected to represent India in the Ranger category of the prestigious international underwater marine robotics competition. India's first time in this category.",
      category: "Academic Excellence",
      icon: Award,
      image: "https://portfolio-worker.hridank.workers.dev/public/MateROV.png",
      gradient: "from-teal-500 to-green-500",
    },
    {
      title: "Virtual Innovation Competition (VIC) Gold Medalist",
      year: "2025",
      description: "Awarded Gold Medal for innovative project in the Virtual Innovation Competition.",
      category: "Innovation & Design",
      icon: Star,
      image: "https://portfolio-worker.hridank.workers.dev/public/vic-logo.jpeg",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Young Scientist India Prelims",
      year: "2025",
      description: "Ranked among the top 87 young scientists in India for the preliminary rounds. Project is ongoing.",
      category: "Research & Innovation",
      icon: Star,
      image: "https://portfolio-worker.hridank.workers.dev/public/space-kidz-india.png",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Trinity Music Certifications",
      year: "",
      description: "Theory Grade 5, Guitar Practical Grade 3",
      category: "Music",
      icon: Music,
      image: "https://portfolio-worker.hridank.workers.dev/public/trinity-logo.jpeg",
      gradient: "from-rose-500 to-pink-500",
    },
   {
      title: "Sigma Xi iFORE - Top 300",
      year: "2025",
      description: "Project AquaScan accepted among top 300 innovations in Sigma Xi's International Forum for Research Excellence",
      category: "Research & Innovation",
      icon: Star,
      image: "https://portfolio-worker.hridank.workers.dev/public/SigmaXI.jpeg",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Sigma Xi iFORE - Top 300",
      year: "2025",
      description: "Project NavAid accepted among top 300 innovations in Sigma Xi's International Forum for Research Excellence",
      category: "Research & Innovation",
      icon: Star,
      image: "https://portfolio-worker.hridank.workers.dev/public/SigmaXI.jpeg",
      gradient: "from-indigo-500 to-violet-500",
    },   
    {
      title: "University of Waterloo CSIMC 2023",
      year: "2023",
      description:
        "Ranked in the top 20% in the Canadian Senior Mathematics Competition (CSIMC) organized by the University of Waterloo.",
      category: "Academic Excellence",
      icon: Award,
      image: "https://portfolio-worker.hridank.workers.dev/public/university-of-waterloo.png",
      gradient: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mb-6">
            <Trophy className="h-8 w-8 text-black" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Awards & Honours</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Recognition for excellence in academics, research, leadership, and creative pursuits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {honours.map((honour, index) => {
            const IconComponent = honour.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 hover:scale-105 bg-slate-800/50 border-slate-700 backdrop-blur-sm rounded-xl overflow-hidden relative"
              >
                {/* Animated gradient border */}
                <div
                  className={`h-1 bg-gradient-to-r ${honour.gradient || "from-yellow-400 to-amber-500"} group-hover:h-2 transition-all duration-300`}
                ></div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-6 relative z-10">
                  <div
                    className={`mb-6 ${
                      honour.isNavyCoin ? "h-60" : honour.isLargeImage ? "h-40" : "h-24"
                    } flex items-center justify-center p-4 bg-slate-900/30 rounded-lg border border-slate-700/50`}
                  >
                    <div
                      className={`relative ${
                        honour.isNavyCoin ? "w-full h-52" : honour.isLargeImage ? "w-full h-32" : "w-full h-20"
                      }`}
                    >
                      <Image
                        src={honour.image || "/placeholder.svg"}
                        alt={honour.title}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                <CardHeader className="p-6 pt-0">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center flex-1">
                      <div
                        className={`p-2 rounded-full bg-gradient-to-r ${honour.gradient || "from-yellow-400 to-amber-500"} mr-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="h-5 w-5 text-black" />
                      </div>
                      <CardTitle className="text-lg text-white group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
                        {honour.title}
                      </CardTitle>
                    </div>
                    {honour.year && (
                      <Badge
                        variant="outline"
                        className="border-yellow-400 text-yellow-400 font-semibold ml-2 group-hover:bg-yellow-400/10 transition-colors duration-300"
                      >
                        {honour.year}
                      </Badge>
                    )}
                  </div>
                  <Badge
                    className={`w-fit text-xs bg-gradient-to-r ${honour.gradient || "from-yellow-400 to-amber-500"} text-black font-semibold hover:opacity-90 transition-opacity duration-300`}
                  >
                    {honour.category}
                  </Badge>
                </CardHeader>

                <CardContent className="p-6 pt-0">
                  <p className="text-slate-300 mb-4 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                    {honour.description}
                  </p>
                  {honour.highlight && (
                    <Badge
                      className={`text-xs bg-gradient-to-r ${honour.gradient || "from-yellow-400 to-amber-500"} text-black font-semibold hover:opacity-90 transition-opacity duration-300 animate-pulse-gentle`}
                    >
                      🏆 {honour.highlight}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
