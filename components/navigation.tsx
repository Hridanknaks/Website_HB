"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/experience", label: "Experience" },
    { href: "/community", label: "Community" },
    { href: "/extracurriculars", label: "Extracurriculars" },
  ]

  return (
    <header className="sticky top-0 left-0 right-0 z-50 shadow-md" style={{ backgroundColor: "#0d1117" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Name */}
          <Link
            href="/"
            className="text-2xl font-bold transition-colors duration-200 font-sans"
            style={{ color: "#c9d1d9" }}
          >
            Hridank Bhagath
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`px-6 py-3 text-lg font-medium rounded-lg transition-all duration-200 font-sans ${
                  pathname === item.href ? "text-white bg-white/10" : "hover:text-white hover:bg-white/5"
                }`}
                style={{ color: pathname === item.href ? "#ffffff" : "#c9d1d9" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden p-3 hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            style={{ color: "#c9d1d9" }}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10">
            <nav className="py-6 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`block px-6 py-4 text-lg font-medium rounded-lg transition-all duration-200 font-sans ${
                    pathname === item.href ? "text-white bg-white/10" : "hover:text-white hover:bg-white/5"
                  }`}
                  style={{ color: pathname === item.href ? "#ffffff" : "#c9d1d9" }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
