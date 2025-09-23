import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, DribbbleIcon as Dribble, Camera, Code, BookOpen, Plane } from "lucide-react"

const interests = [
  {
    title: "Music",
    icon: Music,
    description: "Lead guitarist for Highway 440 band, performing at school events and local venues.",
    activities: ["Electric Guitar", "Band Performance", "Music Composition"],
  },
  {
    title: "Basketball",
    icon: Dribble,
    description: "Varsity team player with focus on teamwork, strategy, and physical fitness.",
    activities: ["Varsity Team", "Inter-school Tournaments", "Team Captain"],
  },
  {
    title: "Photography",
    icon: Camera,
    description: "Capturing moments and stories through digital photography and visual storytelling.",
    activities: ["Digital Photography", "Event Coverage", "Nature Photography"],
  },
  {
    title: "Technology",
    icon: Code,
    description: "Exploring emerging technologies, AI/ML trends, and innovative solutions.",
    activities: ["AI Research", "Open Source", "Tech Meetups"],
  },
  {
    title: "Reading",
    icon: BookOpen,
    description: "Avid reader of technology, science fiction, and entrepreneurship books.",
    activities: ["Sci-Fi Novels", "Tech Biographies", "Research Papers"],
  },
  {
    title: "Travel",
    icon: Plane,
    description: "Exploring different cultures and gaining new perspectives through travel.",
    activities: ["Cultural Exchange", "Adventure Travel", "Photography Tours"],
  },
]

export function Interests() {
  return (
    <section className="py-80 px-16 sm:px-24 lg:px-32 bg-muted/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Interests & Hobbies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond academics and projects, here's what I'm passionate about.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon
            return (
              <Card key={index}>
                <CardHeader className="p-8">
                  <div className="flex items-center">
                    <IconComponent className="h-6 w-6 text-primary mr-6" />
                    <CardTitle className="text-lg">{interest.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-8">{interest.description}</p>
                  <div className="space-y-4">
                    {interest.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="text-sm">
                        • {activity}
                      </div>
                    ))}
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
