"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Mic, Guitar, Headphones, ExternalLink } from "lucide-react"
import { ImageGallery } from "./image-gallery"
import { Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export function MusicPage() {
  useEffect(() => {
    // Load Instagram embed script
    if (typeof window !== "undefined" && window.instgrm) {
      window.instgrm.Embeds.process()
    } else {
      const script = document.createElement("script")
      script.src = "//www.instagram.com/embed.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  const musicEvents = [
    {
      name: "Highway 440 X Orion Fundraiser",
      year: "2024",
      role: "Chief Organizer & Performer (2 Bands)",
      description:
        "A highly successful fundraising concert where I performed in two bands. The show lasted around 3 hours, featuring approximately 25 songs, and was a huge success, raising ₹1.5 lakh for charity with an audience of 400 people.",
      highlights: [
        "Performed in two different bands",
        "Show duration: ~3 hours, ~25 songs performed",
        "Raised ₹1.5 lakh for charity",
        "Audience of 400 people",
        "Led the organization of the entire event",
      ],
      images: [
        "/Guitar2.jpeg",
        "/HOguitar3.png",
        "/pfp.jpg",
        "/HOguitarback.png",
        "/IMG_2778.jpg",
        "/IMG_2780.jpg",
        "/from_stage.mp4",
        "/HOguitar5.jpeg"
      ],
      instagramLinks: [
        {
          url: "https://www.instagram.com/reel/DGsNPnpN0we/",
          title: "Highway 440 Performance Highlight 1",
          description: "Main performance video from the fundraiser event",
        },
        {
          url: "https://www.instagram.com/reel/DG0MUgqJiH_/?utm_source=ig_web_copy_link&igsh=c2dndWwyaGpwb2N3",
          title: "Orion Performance Highlight 1",
          description: "Main performance video from the fundraiser event",
        },
        {
          url: "https://www.instagram.com/reel/DG5kl-4zLtr/",
          title: "Orion Performance Highlight 2",
          description: "Main performance video from the fundraiser event",
        },
      ],
      color: "bg-gradient-to-r from-pink-500 to-rose-500",
      borderColor: "border-pink-400",
      icon: Mic,
    },
    {
      name: "Dolce Music Academy Lead Guitarist",
      year: "2022 & 2023",
      role: "Lead Guitarist & Tech Manager",
      description:
        "Performed as a lead guitarist at Dolce Music Academy events with an audience of around 150. In 2022, I also helped manage the technical aspects, including backing presentations, videos, and LCD display operations.",
      highlights: [
        "Lead guitarist for academy performances",
        "Audience of ~150 people",
        "Managed tech for 2022 event (PPTs, videos, LCD displays)",
      ],
      images: [
        "/dma.png?",
        "/dma2.jpeg?height=300&width=500&text=Dolce+Music+2",
      ],
      color: "bg-gradient-to-r from-purple-500 to-indigo-500",
      borderColor: "border-purple-400",
      icon: Guitar,
    },
    {
      name: "Other Performances & Events",
      year: "Various",
      role: "Performer",
      description:
        "Participated in various other music events and performances, engaging audiences ranging from 100 to 300 people.",
      highlights: [
        "Performed at multiple school and local events",
        "Engaged audiences of 100-300 people",
        "Diverse musical experiences",
      ],
      images: [
        "/Guitar.jpeg",
        "/guitarother.png",
        "/gother3.png",
        "/gother4.png",
        "/gother5.jpeg"
      ],
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      borderColor: "border-blue-400",
      icon: Headphones,
    },
  ]

  const bandLogos = [
    {
      name: "Highway 440",
      logo: "/Highway.png?height=150&width=300&text=Dolce+Music",
      socials: [{ icon: Instagram, link: "https://www.instagram.com/highway_440/" }],
    },
    {
      name: "Orion",
      logo: "/Orion.png?height=150&width=300&text=Dolce+Music",
      socials: [{ icon: Instagram, link: "#" }],
    },
    {
      name: "Dolce Music Academy",
      logo: "/DMA-logo.png?height=150&width=300&text=Dolce+Music",
      socials: [{ icon: Instagram, link: "#" }],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-slide-up">Music Journey</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Lead guitarist with diverse performance experience and event organization
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-12">
          {musicEvents.map((event, index) => {
            const IconComponent = event.icon
            return (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border-2 ${event.borderColor} group animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-3 ${event.color} group-hover:h-4 transition-all duration-300`}></div>
                <CardHeader className="bg-muted/30">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative group-hover:scale-110 transition-transform duration-300">
                        <div className={`p-3 rounded-full ${event.color} opacity-90`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-3xl mb-2 group-hover:text-primary transition-colors duration-300">
                          {event.name}
                        </CardTitle>
                        <Badge
                          className={`mb-2 ${event.color} text-white hover:opacity-90 transition-opacity duration-300`}
                        >
                          {event.role}
                        </Badge>
                        <div className="flex items-center gap-4 text-muted-foreground mt-2">
                          <div className="flex items-center hover:text-primary transition-colors duration-300">
                            <Calendar className="h-4 w-4 mr-2" />
                            {event.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-10">
                  <p className="text-lg text-muted-foreground mb-8 group-hover:text-foreground transition-colors duration-300">
                    {event.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4">Key Highlights</h4>
                    <ul className="space-y-3">
                      {event.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-start hover:translate-x-2 transition-transform duration-300"
                        >
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0 animate-pulse-gentle"></span>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instagram Links Section */}
                  {event.instagramLinks && (
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-6 flex items-center">
                        <Instagram className="h-6 w-6 text-pink-500 mr-2" />
                        Performance Videos & Highlights
                      </h4>

                      {/* Featured Instagram Embed */}
                      <div className="mb-8 flex justify-center">
                        <div className="w-full max-w-lg">
                          <blockquote
                            className="instagram-media"
                            data-instgrm-captioned
                            data-instgrm-permalink="https://www.instagram.com/reel/DGsNPnpN0we/?utm_source=ig_embed&utm_campaign=loading"
                            data-instgrm-version="14"
                            style={{
                              background: "#FFF",
                              border: 0,
                              borderRadius: "3px",
                              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                              margin: "1px",
                              maxWidth: "540px",
                              minWidth: "326px",
                              padding: 0,
                              width: "99.375%",
                            }}
                          >
                            <div style={{ padding: "16px" }}>
                              <a
                                href="https://www.instagram.com/reel/DGsNPnpN0we/?utm_source=ig_embed&utm_campaign=loading"
                                style={{
                                  background: "#FFFFFF",
                                  lineHeight: 0,
                                  padding: "0 0",
                                  textAlign: "center",
                                  textDecoration: "none",
                                  width: "100%",
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                  <div
                                    style={{
                                      backgroundColor: "#F4F4F4",
                                      borderRadius: "50%",
                                      flexGrow: 0,
                                      height: "40px",
                                      marginRight: "14px",
                                      width: "40px",
                                    }}
                                  ></div>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      flexGrow: 1,
                                      justifyContent: "center",
                                    }}
                                  >
                                    <div
                                      style={{
                                        backgroundColor: "#F4F4F4",
                                        borderRadius: "4px",
                                        flexGrow: 0,
                                        height: "14px",
                                        marginBottom: "6px",
                                        width: "100px",
                                      }}
                                    ></div>
                                    <div
                                      style={{
                                        backgroundColor: "#F4F4F4",
                                        borderRadius: "4px",
                                        flexGrow: 0,
                                        height: "14px",
                                        width: "60px",
                                      }}
                                    ></div>
                                  </div>
                                </div>
                                <div style={{ padding: "19% 0" }}></div>
                                <div style={{ display: "block", height: "50px", margin: "0 auto 12px", width: "50px" }}>
                                  <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1">
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                      <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                                        <g>
                                          <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                                <div style={{ paddingTop: "8px" }}>
                                  <div
                                    style={{
                                      color: "#3897f0",
                                      fontFamily: "Arial,sans-serif",
                                      fontSize: "14px",
                                      fontStyle: "normal",
                                      fontWeight: "550",
                                      lineHeight: "18px",
                                    }}
                                  >
                                    View this post on Instagram
                                  </div>
                                </div>
                                <div style={{ padding: "12.5% 0" }}></div>
                              </a>
                              <p
                                style={{
                                  color: "#c9c8cd",
                                  fontFamily: "Arial,sans-serif",
                                  fontSize: "14px",
                                  lineHeight: "17px",
                                  marginBottom: 0,
                                  marginTop: "8px",
                                  overflow: "hidden",
                                  padding: "8px 0 7px",
                                  textAlign: "center",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <a
                                  href="https://www.instagram.com/reel/DGsNPnpN0we/?utm_source=ig_embed&utm_campaign=loading"
                                  style={{
                                    color: "#c9c8cd",
                                    fontFamily: "Arial,sans-serif",
                                    fontSize: "14px",
                                    fontStyle: "normal",
                                    fontWeight: "normal",
                                    lineHeight: "17px",
                                    textDecoration: "none",
                                  }}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  A post shared by Highway 440 (@highway_440)
                                </a>
                              </p>
                            </div>
                          </blockquote>
                        </div>
                      </div>

                      {/* Additional Instagram Links */}
                      <div className="grid md:grid-cols-3 gap-4">
                        {event.instagramLinks.map((link, linkIndex) => (
                          <Card key={linkIndex} className="hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-4">
                              <div className="flex items-center space-x-3 mb-3">
                                <Instagram className="h-5 w-5 text-pink-500" />
                                <h5 className="font-semibold text-sm">{link.title}</h5>
                              </div>
                              <p className="text-xs text-muted-foreground mb-3">{link.description}</p>
                              <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                                  Watch on Instagram
                                  <ExternalLink className="ml-2 h-3 w-3" />
                                </Link>
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {event.images && event.images.length > 0 && (
                    <div className="mt-8">
                      <h4 className="text-xl font-semibold mb-4">Event Gallery</h4>
                      <div className="max-w-4xl mx-auto">
                        <ImageGallery images={event.images} altPrefix={`${event.name} Gallery`} />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* My Bands & Collaborations */}
<div className="mt-20 text-center">
  <h2 className="text-3xl font-bold mb-8 animate-fade-in">My Bands & Collaborations</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {bandLogos.map((band, index) => {
      return (
        <Card
          key={index}
          className="overflow-hidden border-2 border-muted hover:shadow-lg transition-shadow duration-300"
        >
          <CardContent className="p-6 flex flex-col items-center justify-center">
            
            {/* Fixed-size logo box */}
              <div className="w-40 h-40 flex items-center justify-center mb-4 rounded-lg overflow-hidden bg-neutral-900">
                <Image
                  src={band.logo || "/placeholder.svg"}
                  alt={band.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>


            <h3 className="text-xl font-semibold mb-3">{band.name}</h3>
            <div className="flex space-x-4">
              {band.socials.map((social, socialIndex) => {
                const SocialIcon = social.icon
                return (
                  <Button key={socialIndex} variant="ghost" size="icon" asChild>
                    <Link href={social.link} aria-label={`${band.name} Instagram`}>
                      <SocialIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                  </Button>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )
    })}
  </div>
</div>

      </div>
    </section>
  )
}
