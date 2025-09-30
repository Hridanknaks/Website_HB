import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Heart, Trophy, Play } from "lucide-react"

export function AboutSection() {
  return (
    <section
      className="py-16 px-3 sm:px-4 lg:px-6"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">About Me</h2>
          <p className="text-base text-slate-300 max-w-3xl mx-auto">
            Student at The International School Bangalore with a passion for innovation and making a positive impact
            through technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">My Journey</h3>
            <p className="text-slate-300 mb-3 text-sm">
               As a 17-year-old from Bangalore passionate about using AI and engineering to solve real problems. I care deeply about the environment and believe technology should help us build a safer, more sustainable world. My love for the outdoors drives my work in biodiversity, environmental monitoring, and tech solutions that make a real difference—including projects in medicine—many of which have earned recognition at both the national and international level.
            </p>
            <p className="text-slate-300 mb-3 text-sm">
              I've had the privilege of working on diverse projects, from advanced bird detection systems to critical
              healthcare solutions at Vemana Hospital. My efforts have been recognized nationally, including winning the
              IRIS Grand Award and representing Team India at ISEF 2025.
            </p>
            <p className="text-slate-300 mb-3 text-sm">
              Beyond my technological pursuits, I am an active musician (lead guitarist for Highway 440), a dedicated
              basketball player, and a strong advocate for community service through initiatives like SocialCred$, and my work to revive the Vemana Hospital
            </p>
          </div>

          <div className="grid gap-4">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center mb-3">
                  <Zap className="h-6 w-6 text-blue-400 mr-2" />
                  <h4 className="text-base font-semibold text-white">Innovation</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  Developing AI-powered solutions for real-world problems, from bird detection drones to athlete
                  training apps.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center mb-3">
                  <Heart className="h-6 w-6 text-red-400 mr-2" />
                  <h4 className="text-base font-semibold text-white">Social Impact</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  Committed to community service through SocialCred$, Socialabs, and healthcare innovation projects.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center mb-3">
                  <Trophy className="h-6 w-6 text-yellow-400 mr-2" />
                  <h4 className="text-base font-semibold text-white">Leadership</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  Leading as Head Boy while driving startups, championing tech innovation, and uniting teams on stage, on the court, and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Video Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6 text-white">Watch My Story</h3>
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="aspect-video bg-slate-900/50 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border border-blue-400/30">
                    <Play className="h-8 w-8 text-blue-400 ml-1" />
                  </div>
                  <p className="text-slate-300 text-sm">Video coming soon...</p>
                  <p className="text-slate-400 text-xs mt-2">
                    A glimpse into my journey of innovation, leadership, and impact
                  </p>
                </div>
              </div>
              <Button className="w-full" disabled>
                <Play className="mr-2 h-4 w-4" />
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
