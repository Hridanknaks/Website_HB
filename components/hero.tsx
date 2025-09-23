import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Student developer passionate about creating innovative solutions that make a positive impact on the world.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg">
            <Link href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">
              Get In Touch
              <Mail className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <Button asChild size="icon" variant="ghost">
            <Link href="#" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </Link>
          </Button>
          <Button asChild size="icon" variant="ghost">
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </Link>
          </Button>
          <Button asChild size="icon" variant="ghost">
            <Link href="#" aria-label="Email">
              <Mail className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
