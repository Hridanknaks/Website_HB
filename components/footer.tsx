import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer
      className="border-t border-slate-700"
      style={{
        background: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Hridank Bhagath</h3>
            <p className="text-slate-300 mb-4">
              Student, Engineer, and Innovator passionate about creating technology solutions for real-world problems.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-slate-300 hover:text-blue-400 hover:bg-slate-800"
              >
                <a href="https://github.com/hridank" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-slate-300 hover:text-blue-400 hover:bg-slate-800"
              >
                <a href="https://www.linkedin.com/in/hridank-b-3392062b3/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-slate-300 hover:text-blue-400 hover:bg-slate-800"
              >
                <a href="mailto:hridank@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Projects</h4>
            <div className="space-y-2">
              <div>
                <Link href="/projects" className="text-slate-300 hover:text-blue-400 transition-colors">
                  All Projects
                </Link>
              </div>
              <div>
                <Link href="/projects/birdrover" className="text-slate-300 hover:text-blue-400 transition-colors">
                  BirdRover
                </Link>
              </div>
              <div>
                <Link href="/projects/potentia" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Potentia
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Experience</h4>
            <div className="space-y-2">
              <div>
                <Link href="/experience" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Professional Experience
                </Link>
              </div>
              <div>
                <Link href="/community" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Community Outreach
                </Link>
              </div>
              <div>
                <Link href="/extracurriculars" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Extracurriculars
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Current Status</h4>
            <div className="space-y-2 text-slate-300">
              <div>🎓 Student at TISB</div>
              <div>🏆 Regeneron ISEF 2025 Representative</div>
              <div>🚀 Open to Opportunities</div>
              <div>📍 Bangalore, India</div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Hridank Bhagath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
