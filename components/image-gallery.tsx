"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

interface ImageGalleryProps {
  images: string[]
  altPrefix: string
  className?: string
}

export function ImageGallery({ images, altPrefix, className }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const isVideo = (url: string) => {
    return url.endsWith(".mp4") || url.endsWith(".mov") || url.endsWith(".avi") || url.includes("blob.v0.dev")
  }

  if (images.length === 0) {
    return null
  }

  const currentMedia = images[currentIndex]

  return (
    <div
      className={`relative w-full aspect-video rounded-lg overflow-hidden mb-4 bg-black flex items-center justify-center ${className || ""}`}
    >
      {isVideo(currentMedia) ? (
        <video src={currentMedia} controls className="w-full h-full object-contain" preload="metadata">
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={currentMedia || "/placeholder.svg"}
          alt={`${altPrefix} - ${currentIndex + 1}`}
          fill
          className="object-contain transition-opacity duration-300"
        />
      )}

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-4 flex space-x-2">
          {images.map((media, index) => (
            <div
              key={index}
              className={`relative h-3 w-3 rounded-full cursor-pointer transition-all duration-200 ${
                index === currentIndex ? "bg-white scale-125" : "bg-gray-400 hover:bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {isVideo(media) && <Play className="h-2 w-2 absolute top-0.5 left-0.5 text-black" />}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
