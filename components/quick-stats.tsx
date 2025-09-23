import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Code, Award } from "lucide-react"

const stats = [
  {
    icon: Code,
    value: "15+",
    label: "Projects Completed",
    description: "Full-stack applications and AI solutions",
  },
  {
    icon: Trophy,
    value: "8",
    label: "Awards Won",
    description: "National and international recognition",
  },
  {
    icon: Users,
    value: "20+",
    label: "Team Members",
    description: "Across various projects and initiatives",
  },
  {
    icon: Award,
    value: "₹10L+ / $13.5K+",
    label: "Funds Managed",
    description: "For community impact projects",
  },
]

export function QuickStats() {
  return (
    <section className="py-80 px-16 sm:px-24 lg:px-32 bg-muted/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Quick Stats</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A snapshot of my journey and achievements so far.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-12">
                  <IconComponent className="h-8 w-8 text-primary mx-auto mb-8" />
                  <div className="text-3xl font-bold mb-4">{stat.value}</div>
                  <div className="font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
