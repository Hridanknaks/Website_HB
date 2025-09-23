import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Users, Music } from "lucide-react"

const achievements = [
  {
    category: "Academic & Research",
    icon: Trophy,
    items: [
      {
        title: "IRIS Grand Award Winner 2024",
        description: "Selected from 3,000+ applicants across India for BirdRover project",
        highlight: "Representing Team India at ISEF 2025",
      },
      {
        title: "Materov Finalist",
        description: "Selected as finalist in international mathematics competition",
      },
      {
        title: "Independent Research",
        description: "Bird flight pattern analysis with data scientist collaboration",
      },
    ],
  },
  {
    category: "Leadership & Entrepreneurship",
    icon: Users,
    items: [
      {
        title: "Founder - Potentia",
        description: "Leading 20-student team developing athlete training app",
      },
      {
        title: "Co-Founder - Socialabs",
        description: "Designing affordable science kits for government schools",
      },
      {
        title: "Project Leader - Vemana Hospital",
        description: "Leading hospital revival through technology implementation",
      },
      {
        title: "Fundraising Success",
        description: "Raised ₹10 lakhs for Snehagram Centre for HIV-positive youth",
      },
    ],
  },
  {
    category: "Sports & Music",
    icon: Music,
    items: [
      {
        title: "Basketball Team Guard",
        description: "U18 Winners at Kodaikanal International School Tournament",
      },
      {
        title: "Lead Guitarist - Highway 440",
        description: "Performed at 10+ events for audiences of 150-400",
      },
      {
        title: "Trinity Certifications",
        description: "Theory Grade 5, Guitar Practical Grade 3",
      },
    ],
  },
  {
    category: "Professional Experience",
    icon: Award,
    items: [
      {
        title: "Siemens Intern",
        description: "AI-powered drone development, PCB design, embedded systems",
      },
      {
        title: "Varchas Aerospace Intern",
        description: "Hovercraft prototype design and development",
      },
      {
        title: "SocialCred$ Vice-chair",
        description: "Time-banking organization for community service recognition",
      },
    ],
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-80 px-16 sm:px-24 lg:px-32">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-32 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 animate-slide-up">Achievements & Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-200">
            Recognition and experience gained through dedication to innovation, leadership, and community impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {achievements.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="h-full">
                <CardHeader className="p-8">
                  <div className="flex items-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary mr-3" />
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 p-8">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-2 border-primary/20 pl-4">
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                      {item.highlight && (
                        <Badge variant="default" className="text-xs">
                          {item.highlight}
                        </Badge>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
