"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Heart, Users } from "lucide-react"

export function About() {
  return (
    <section className="py-32 px-8 sm:px-12 lg:px-32 bg-muted/50 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground mb-12">
          Hi, I'm Hridank Bhagath, a 17-year-old from Bangalore passionate about using AI and engineering to solve real problems. I care deeply about the environment and believe technology should help us build a safer, more sustainable world. My love for the outdoors drives my work in biodiversity, environmental monitoring, and tech solutions that make a real difference—including projects in medicine—many of which have earned recognition at both the national level through IRIS and the global level through ISEF.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl hover:scale-[1.02] transition-transform duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 justify-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">💡 Innovation</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-8">
              <CardDescription className="text-base leading-relaxed">
                Crafting AI-powered tools—from bird-monitoring drones and node-based wheelchairs to performance-boosting apps and smart health systems.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl hover:scale-[1.02] transition-transform duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 justify-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">❤️ Social Impact</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-8">
              <CardDescription className="text-base leading-relaxed">
                Initiatives like SocialCred and tech-driven medical systems are projected to reach thousands—with over ₹2 crore in aligned funding potential.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl hover:scale-[1.02] transition-transform duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 justify-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">🧭 Leadership</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-8">
              <CardDescription className="text-base leading-relaxed">
                Head Boy, lead guitarist, basketballer, startup founder—balancing discipline and creativity across diverse communities.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
