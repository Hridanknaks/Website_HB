import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageIcon } from "lucide-react"
import { ImageGallery } from "./image-gallery"

export function PhotographyPage() {
  const exhibitionImages = [
    "/Photo banner.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_1069.JPG-Axgqnf4N8jZKFPSKm27BxAQ0Or0Gmg.jpeg", // Sunbird with purple flowers
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_0718.JPG-SXP3K9rmcpiWSrPEKAeyVik2vQP4Oc.jpeg", // Green bee-eater
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_1107.JPG-Qws8jMalACasEV7KZQqg6ZS48bAUcG.jpeg", // Grey heron by water
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DCIM.lnk.JPG-037PEHhZsRhkjQUgwjiVjymsaWPRuZ.jpeg", // Water bird with reflections
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_1070.jpg-CRrNNWx4oPTxofyuzcWWXC90f0soQh.jpeg", // Brahminy Kite in tree
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_1006.JPG-j08Zmqi98wNm4b8fyWWK6LyCnaE8C6.jpeg", // Purple heron close-up
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_0749.jpg-I0PZqYw78zXmYH43vpkonD4idgqhly.jpeg", // Snake in water plants
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-slide-up">Photography Passion</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Capturing the world through my lens, from wildlife to captivating settings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Photographic Journey</h3>
            <p className="text-muted-foreground mb-4">
              My fascination with cameras began at a very young age, around seven. Since then, I've immersed myself in
              understanding the intricacies of photography, mastering concepts like aperture, ISO, exposure, and shutter
              speed. I've honed my skills in editing and focusing to create compelling shots that tell a story.
            </p>
            <p className="text-muted-foreground mb-4">
              I always have a camera with me when I'm traveling, focusing on capturing the beauty of nature, the
              serenity of scenery, and the unique ambiance of different settings. My passion extends to using various
              lenses, each offering a distinct perspective, which I've grown accustomed to over the years.
            </p>
            <p className="text-muted-foreground mb-4">
              I also had the opportunity to photograph for Vivum 2024, capturing key moments of the event. While my
              photography is primarily a passion, my deep understanding of cameras played a crucial role in inspiring my
              flagship project, the BirdRover. This project, which involved testing multiple cameras for bird
              monitoring, is closest to my heart and ultimately won me the IRIS Grand Award, leading to my
              representation at ISEF.
            </p>
            <Badge variant="secondary" className="mt-4">
              School Photography Award Winner
            </Badge>
          </div>

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ImageIcon className="h-6 w-6 mr-3 text-primary" />
                Wildlife & Nature Exhibition
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                A collection of my favorite wildlife and nature shots, showcasing my focus on bird photography and
                natural environments that inspired my BirdRover project.
              </p>
              <ImageGallery images={exhibitionImages} altPrefix="Photography Exhibition" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
