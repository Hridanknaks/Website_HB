"use client"

import Image from "next/image"
import { Marquee } from "./marquee"

const logos = [
  { src: "https://portfolio-worker.hridank.workers.dev/public/siemens-logo.jpeg", alt: "Siemens", width: 180, height: 75 },
  { src: "https://portfolio-worker.hridank.workers.dev/public/MateROV.png", alt: "MateROV Competition", width: 180, height: 75 },
  { src: "https://portfolio-worker.hridank.workers.dev/public/TISB.png", alt: "The International School Bangalore", width: 150, height: 75 },
  { src: "https://portfolio-worker.hridank.workers.dev/public/IRIS.png", alt: "IRIS National Fair", width: 150, height: 75 },
  { src: "https://portfolio-worker.hridank.workers.dev/public/trinity-logo.jpeg", alt: "Trinity College London", width: 180, height: 75 },
  { src: "https://portfolio-worker.hridank.workers.dev/public/university-of-waterloo.png", alt: "University of Waterloo", width: 240, height: 75 },
  { src: "https://portfolio-worker.hridank.workers.dev/public/images/isef-logo.png", alt: "Regeneron ISEF", width: 210, height: 75 },
  { src: "https://portfolio-worker.hridank.workers.dev/public/Varchas-logo.webp", alt: "Varchas Aerospace", width: 210, height: 75 },
]

export function MarqueeBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-10 border-t border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white whitespace-nowrap">
            Recognitions & Affiliations
          </h2>
          <div className="flex-1 overflow-hidden">
            <Marquee speed={25} className="py-4" pauseOnHover>
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 flex items-center justify-center relative group"
                  style={{ minWidth: "180px", height: "80px" }}
                >
                  <div className="w-full h-full bg-white/5 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-white/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="object-contain max-h-16 w-auto transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}
