"use client"

import Image from "next/image"

const companies = [
  {
    name: "TechCorp",
    logo: "/placeholder.svg?height=60&width=120&text=TechCorp",
  },
  {
    name: "InnovateLab",
    logo: "/placeholder.svg?height=60&width=120&text=InnovateLab",
  },
  {
    name: "FutureWorks",
    logo: "/placeholder.svg?height=60&width=120&text=FutureWorks",
  },
  {
    name: "QuantumTech",
    logo: "/placeholder.svg?height=60&width=120&text=QuantumTech",
  },
  {
    name: "NexusAI",
    logo: "/placeholder.svg?height=60&width=120&text=NexusAI",
  },
  {
    name: "CyberFlow",
    logo: "/placeholder.svg?height=60&width=120&text=CyberFlow",
  },
  {
    name: "DataVault",
    logo: "/placeholder.svg?height=60&width=120&text=DataVault",
  },
  {
    name: "CloudSync",
    logo: "/placeholder.svg?height=60&width=120&text=CloudSync",
  },
]

export function DarkBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-16 md:py-20">
      {/* Geometric Background Overlays */}
      <div className="absolute inset-0 opacity-10">
        {/* Diagonal lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent transform rotate-12"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent transform -rotate-12"></div>

        {/* Geometric shapes */}
        <div className="absolute top-8 left-8 w-16 h-16 border border-blue-400/20 rotate-45"></div>
        <div className="absolute bottom-8 right-8 w-12 h-12 border border-cyan-400/20 rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-blue-300/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Subtle glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Trusted by Industry Leaders</h2>
          <p className="text-blue-200/80 text-lg max-w-2xl mx-auto">
            Collaborating with innovative companies to build the future of technology
          </p>
        </div>

        {/* Logo Container */}
        <div className="relative">
          {/* Desktop View - Grid Layout */}
          <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="group relative flex items-center justify-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-105 hover:bg-white/10"
                style={{
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                }}
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={120}
                  height={60}
                  className="max-w-full h-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Mobile View - Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex gap-6 animate-scroll-slow">
                {[...companies, ...companies].map((company, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 min-w-[140px]"
                    style={{
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      width={100}
                      height={50}
                      className="max-w-full h-auto object-contain filter brightness-0 invert opacity-70"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
