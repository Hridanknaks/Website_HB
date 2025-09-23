import { DarkBanner } from "@/components/dark-banner"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <DarkBanner />

        {/* Demo content to show the banner in context */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Portfolio Demo</h1>
            <p className="text-lg text-muted-foreground mb-8">
              This is a demo page showcasing the dark-themed banner component above.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
                <p className="text-muted-foreground">
                  The banner features a sleek dark gradient with subtle geometric overlays for a futuristic look.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Responsive Layout</h3>
                <p className="text-muted-foreground">
                  Adapts beautifully from desktop grid layout to mobile horizontal scroll experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
