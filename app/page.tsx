import { WelcomeHero } from "@/components/welcome-hero"
import { AboutSection } from "@/components/about-section"
import { FundsSection } from "@/components/funds-section"
import { LogoSection } from "@/components/logo-section"
import { HonoursSection } from "@/components/honours-section"
import { MarqueeBanner } from "@/components/marquee-banner"

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-background">
      <MarqueeBanner />
      <main>
        <WelcomeHero />
        <AboutSection />
        <FundsSection />
        <LogoSection />
        <HonoursSection />
      </main>
    </div>
  )
}
