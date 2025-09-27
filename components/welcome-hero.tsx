"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, Mail, ArrowRight, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function WelcomeHero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://portfolio-worker.hridank.workers.dev/public/profile-picture.jpeg"
            alt="Hridank Bhagath"
            width={250}
            height={250}
            className="rounded-full mx-auto mb-6 border-4 border-white/10 shadow-lg"
          />
        </motion.div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 text-white">
          Hi, I'm <span className="text-blue-400">Hridank Bhagath</span>
        </h1>
        <p className="text-md sm:text-xl text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed">
          A 17-year-old from Bangalore passionate about using AI, engineering, and leadership to make a real-world impact—
          from biodiversity tech and sustainable health systems to global competitions like ISEF.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" asChild>
              <Link href="/portfolio">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-slate-300 text-slate-200 bg-transparent"
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>

        <div className="flex justify-center space-x-4">
          <Button variant="ghost" size="icon" className="text-slate-200" asChild>
            <a href="https://www.linkedin.com/in/hridank-b-3392062b3/" target="_blank">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="text-slate-200" asChild>
            <a href="https://github.com/hridankbhagath" target="_blank">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="text-slate-200" asChild>
            <a href="mailto:hridank@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
