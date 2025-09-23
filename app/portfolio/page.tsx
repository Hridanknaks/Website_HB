import Link from "next/link"
import { ArrowRight, FlaskConical, Beaker } from "lucide-react"
import Image from "next/image"

export default function PortfolioPage() {
  return (
    <main className="flex flex-col md:flex-row h-[calc(100vh-130px)] relative">
      <Link
        href="/portfolio/projects"
        className="flex-1 group relative flex items-center justify-center text-center text-white overflow-hidden p-8"
      >
        <Image
          src="/projects-background.avif"
          alt="Projects background showing modern robotics and industrial technology"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-indigo-900/80 group-hover:from-slate-900/60 group-hover:to-indigo-900/70 transition-all duration-300" />
        <div className="relative z-10 transition-transform duration-300 group-hover:scale-105">
          <FlaskConical className="h-16 w-16 mx-auto mb-4 text-indigo-300 group-hover:text-white transition-colors duration-300" />
          <h2 className="text-5xl font-bold mb-2">Projects</h2>
          <p className="text-lg text-indigo-200 mb-4 max-w-md mx-auto">
            Tangible solutions and products engineered to solve real-world challenges.
          </p>
          <span className="inline-flex items-center font-semibold rounded-full bg-white/10 group-hover:bg-white/20 px-4 py-2 transition-colors duration-300">
            Explore Projects{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>

      <div className="w-full md:w-px bg-slate-700" />

      <Link
        href="/portfolio/research"
        className="flex-1 group relative flex items-center justify-center text-center text-white overflow-hidden p-8"
      >
        <Image
          src="/research-background.jpeg"
          alt="Research background showing electronic circuits and technology"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-teal-900/80 group-hover:from-slate-900/60 group-hover:to-teal-900/70 transition-all duration-300" />
        <div className="relative z-10 transition-transform duration-300 group-hover:scale-105">
          <Beaker className="h-16 w-16 mx-auto mb-4 text-teal-300 group-hover:text-white transition-colors duration-300" />
          <h2 className="text-5xl font-bold mb-2">Research</h2>
          <p className="text-lg text-teal-200 mb-4 max-w-md mx-auto">
            In-depth investigations and analyses that push the boundaries of technology.
          </p>
          <span className="inline-flex items-center font-semibold rounded-full bg-white/10 group-hover:bg-white/20 px-4 py-2 transition-colors duration-300">
            Explore Research{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </main>
  )
}
