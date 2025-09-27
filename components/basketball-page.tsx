import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Users, Calendar, MapPin, AwardIcon } from "lucide-react"
import { ImageGallery } from "./image-gallery"

export function BasketballPage() {
  const tournaments = [
    {
      name: "Kodaikanal International School Tournament",
      year: "2022",
      position: "U18 Winners",
      medal: "Gold",
      location: "Kodaikanal, Tamil Nadu",
      team: "TISB Varsity",
      role: "Shooting Guard",
      description:
        "Participated as the youngest player (9th grader) in the U18 category. Secured playing time and contributed points to the team. We were undefeated in this tournament.",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
      borderColor: "border-yellow-400",
      highlights: [
        "Youngest player (9th grader) in U18 category",
        "Secured playing time and scored points",
        "Team was undefeated throughout the tournament",
      ],
    },
    {
      name: "Kodaikanal International School Tournament",
      year: "2025",
      position: "Runners-up",
      medal: "Silver",
      location: "Kodaikanal, Tamil Nadu",
      team: "TISB Varsity",
      role: "Shooting Guard",
      description:
        "Returned to the tournament in 2025, securing a silver medal after a competitive final against the home team.",
      color: "bg-gradient-to-r from-gray-400 to-gray-500",
      borderColor: "border-gray-400",
      highlights: [
        "Secured silver medal in the tournament",
        "Lost to the home team in the finals",
        "Contributed significantly as a shooting guard",
      ],
    },
    {
      name: "Greenwood High Tournament",
      year: "2023",
      position: "Bronze Medalists",
      medal: "Bronze",
      location: "Bangalore, Karnataka",
      team: "TISB Varsity",
      role: "Shooting Guard",
      description: "Secured a bronze medal in the Greenwood High Tournament.",
      color: "bg-gradient-to-r from-amber-600 to-orange-600",
      borderColor: "border-amber-600",
      highlights: ["Secured bronze medal", "Strong team performance"],
    },
    {
      name: "Trojans Cup",
      year: "2023",
      position: "Runners-up",
      medal: "Silver",
      location: "Bangalore, Karnataka",
      team: "TISB Varsity",
      role: "Shooting Guard",
      description: "Achieved a silver medal in the Trojans Cup.",
      color: "bg-gradient-to-r from-gray-400 to-gray-500",
      borderColor: "border-gray-400",
      highlights: ["Secured silver medal", "Competitive performance"],
    },
  ]

  const selections = [
    {
      title: "Basketball Team Player",
      year: "2022-2025 (Grade 9-12)",
      description:
        "Played as a shooting guard for the school's U18 basketball team, gaining competitive experience in major tournaments.",
      responsibilities: [
        "Contributed to team offense as a shooting guard",
        "Participated in 6 major tournaments",
        "Gained valuable competitive experience at the U18 level",
      ],
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      borderColor: "border-blue-400",
      icon: Users,
    },
    {
      title: "BHARAT SU State Championship Selection",
      year: "2023, 2024",
      description:
        "Selected to play for BHARAT SU basketball club in the state championship for two consecutive years, but was unable to participate due to clashing academic exam schedules.",
      achievements: [
        "Selected for BHARAT SU state-level club championship (2 years)",
        "Demonstrated high potential and skill at a competitive level",
        "Prioritized academic commitments over championship participation",
      ],
      color: "bg-gradient-to-r from-purple-500 to-indigo-500",
      borderColor: "border-purple-400",
      icon: AwardIcon,
    },
  ]

  const getMedalColor = (medal: string) => {
    switch (medal) {
      case "Gold":
        return "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
      case "Silver":
        return "bg-gradient-to-r from-gray-400 to-gray-500 text-white"
      case "Bronze":
        return "bg-gradient-to-r from-amber-600 to-orange-600 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const gameTapeVideos = [
    "https://portfolio-worker.hridank.workers.dev/public/bbp.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BB2-tTjKlzVTBOeBey2teMogXe3i85As32.jpeg", // Team photo
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BB-HC8nqpfQpLB45oqbDHV5ze8urYFha2.jpeg", // Action shot
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RPReplay_Final1724942177-NpIupJKcfSwqGpYbosmPBJiRGD10ox.mp4", // Basketball game video
    "https://portfolio-worker.hridank.workers.dev/public/bb2.PNG"
    
  ]git 

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-slide-up">Basketball Journey</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animation-delay-200">
            School team guard with competitive experience across major tournaments and leadership roles
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <Trophy className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-orange-700">6</div>
              <div className="text-orange-600 font-medium">Major Tournaments</div>
            </CardContent>
          </Card>
          <Card className="text-center border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <Medal className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
              <div className="text-xl font-bold text-yellow-700">1 Gold, 2 Silver, 1 Bronze</div>
              <div className="text-yellow-600 font-medium">Tournament Medals</div>
            </CardContent>
          </Card>
          <Card className="text-center border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-blue-700">Shooting Guard</div>
              <div className="text-blue-600 font-medium">Primary Position</div>
            </CardContent>
          </Card>
          <Card className="text-center border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <Trophy className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-700">BHARAT SU Selection</div>
              <div className="text-green-600 font-medium">State Championship</div>
            </CardContent>
          </Card>
        </div>

        {/* Tournament History */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Tournament History</h2>
          <div className="space-y-8">
            {tournaments.map((tournament, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border-2 ${tournament.borderColor} group animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-3 ${tournament.color} group-hover:h-4 transition-all duration-300`}></div>
                <CardHeader className="bg-muted/30">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                        {tournament.name}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-muted-foreground mt-2">
                        <div className="flex items-center hover:text-primary transition-colors duration-300">
                          <Calendar className="h-4 w-4 mr-2" />
                          {tournament.year}
                        </div>
                        <div className="flex items-center hover:text-primary transition-colors duration-300">
                          <MapPin className="h-4 w-4 mr-2" />
                          {tournament.location}
                        </div>
                        <div className="flex items-center hover:text-primary transition-colors duration-300">
                          <Users className="h-4 w-4 mr-2" />
                          {tournament.role}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={getMedalColor(tournament.medal)}>
                        {tournament.medal} - {tournament.position}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-10">
                  <p className="text-muted-foreground mb-6 text-lg group-hover:text-foreground transition-colors duration-300">
                    {tournament.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold mb-4">Key Highlights</h4>
                    <ul className="space-y-2">
                      {tournament.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-start hover:translate-x-2 transition-transform duration-300"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 animate-pulse-gentle"></span>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Game Tape Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Game Tape & Highlights</h2>
          <div className="max-w-4xl mx-auto">
            <ImageGallery images={gameTapeVideos} altPrefix="Basketball Game Tape" />
          </div>
        </div>

        {/* Selections and Leadership */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Selections & Recognition</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {selections.map((selection, index) => {
              const IconComponent = selection.icon
              return (
                <Card
                  key={index}
                  className={`hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 ${selection.borderColor} overflow-hidden animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`h-2 ${selection.color}`}></div>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <div className={`p-2 rounded-full ${selection.color} mr-3`}>
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-xl">{selection.title}</CardTitle>
                    </div>
                    <Badge className={`w-fit ${selection.color} text-white hover:opacity-90`}>{selection.year}</Badge>
                  </CardHeader>
                  <CardContent className="p-8">
                    <p className="text-muted-foreground mb-4">{selection.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2">
                        {selection.responsibilities
                          ? "Key Responsibilities"
                          : selection.achievements
                            ? "Achievements"
                            : "Contributions"}
                      </h4>
                      <ul className="space-y-1">
                        {(selection.responsibilities || selection.achievements || []).map(
                          (item: string, itemIndex: number) => (
                            <li
                              key={itemIndex}
                              className="flex items-start hover:translate-x-1 transition-transform duration-300"
                            >
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
