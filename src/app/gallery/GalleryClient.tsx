"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { PageSection } from "@/components/PageTransition";

interface GalleryItem {
  id: string;
  title: string;
  round: string;
  category: "Photo" | "Video";
  aspect: string;
  imageUrl: string;
  videoUrl?: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    title: "Start Line Surge into Prima Variante",
    round: "Round 07 — Monza",
    category: "Video",
    aspect: "aspect-[16/10]",
    imageUrl: "https://images.pexels.com/photos/12795/pexels-photo-12795.jpeg?auto=compress&cs=tinysrgb&w=1200",
    videoUrl: "/videos/f1-start-turn1.mp4",
    description: "Twenty high-downforce single seaters funnel into the 100 km/h chicane separated by mere inches in a continuous racing loop.",
  },
  {
    id: "g-2",
    title: "Night Sparks Under Singapore Floodlights",
    round: "Round 08 — Marina Bay",
    category: "Photo",
    aspect: "aspect-[16/10]",
    imageUrl: "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Titanium skid blocks grinding against Singapore tarmac, casting incandescent sparks under the projectors.",
  },
  {
    id: "g-3",
    title: "Apex Redline 2.14s Pit Stop Execution",
    round: "Round 05 — Silverstone",
    category: "Video",
    aspect: "aspect-[16/10]",
    imageUrl: "https://images.pexels.com/photos/3818936/pexels-photo-3818936.jpeg?auto=compress&cs=tinysrgb&w=1200",
    videoUrl: "/videos/f1-pitstop.mp4",
    description: "Precision mechanics swapping four dry tires in record-shattering synchronization with looping pit telemetry.",
  },
  {
    id: "g-4",
    title: "Eau Rouge High-Compression Climb",
    round: "Round 06 — Spa-Francorchamps",
    category: "Photo",
    aspect: "aspect-[3/4]",
    imageUrl: "https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Suspensions bottoming out under 4.5G of lateral and vertical force at 305 km/h.",
  },
  {
    id: "g-5",
    title: "Monza High-Speed Straight Slipstream Duel",
    round: "Round 07 — Monza",
    category: "Video",
    aspect: "aspect-[16/9]",
    imageUrl: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1200",
    videoUrl: "/videos/f1-monza-onboard.mp4",
    description: "High-octane onboard view cutting through the air at 350+ km/h with DRS flap open.",
  },
  {
    id: "g-6",
    title: "Monaco Harbor Armco Clipping",
    round: "Round 04 — Monaco",
    category: "Photo",
    aspect: "aspect-[4/5]",
    imageUrl: "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Liam O'Connor skimming the barriers at the swimming pool chicane during his qualifying lap.",
  },
  {
    id: "g-7",
    title: "Austin Turn 1 Late Braking Overtake",
    round: "Round 09 — COTA",
    category: "Video",
    aspect: "aspect-[16/10]",
    imageUrl: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1200",
    videoUrl: "/videos/f1-overtake-chicane.mp4",
    description: "Blind uphill braking into Austin's famous hairpin with cars fighting for aerodynamic track position.",
  },
  {
    id: "g-8",
    title: "Valkyrie Telemetry Briefing in Stuttgart",
    round: "Technical HQ",
    category: "Photo",
    aspect: "aspect-[16/10]",
    imageUrl: "https://images.pexels.com/photos/210158/pexels-photo-210158.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Engineers dissecting real-time pressure transducers and tire carcass thermal degradation.",
  },
];

export default function GalleryClient() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => setActiveItem(item);
  const closeLightbox = () => setActiveItem(null);

  const nextItem = () => {
    if (!activeItem) return;
    const currentIndex = galleryItems.findIndex((g) => g.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setActiveItem(galleryItems[nextIndex]);
  };

  const prevItem = () => {
    if (!activeItem) return;
    const currentIndex = galleryItems.findIndex((g) => g.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setActiveItem(galleryItems[prevIndex]);
  };

  return (
    <div className="pt-28 pb-24 px-6 max-w-[1280px] mx-auto w-full">
      <PageSection>
        <SectionHeading
          eyebrow="Visual & Video Archives"
          title="Trackside Gallery & F1 Reels"
          description="High-octane photography and looping race video reels from every round of the Apex Circuit championship tour. All videos loop seamlessly."
        />
      </PageSection>

      {/* Masonry / CSS Columns Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryItems.map((item, index) => (
          <PageSection key={item.id} delay={index * 0.04}>
            <div
              onClick={() => openLightbox(item)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#101214] border border-[rgba(255,255,255,0.08)] hover:border-[#e10600]/50 transition-all transform hover:-translate-y-1"
            >
              <div className={`relative w-full ${item.aspect} overflow-hidden bg-[#17191c]`}>
                {item.category === "Video" && item.videoUrl ? (
                  <video
                    src={item.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-[#08090a]/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity pointer-events-none" />

                {/* Video Play Overlay */}
                {item.category === "Video" && (
                  <div className="absolute top-3 right-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#e10600]/90 text-white shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      Looping Reel
                    </span>
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2 z-10 pointer-events-none">
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      item.category === "Video"
                        ? "bg-[#e10600] text-white"
                        : "bg-[#101214]/80 text-[#f5a623] border border-white/10"
                    }`}
                  >
                    {item.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#101214]/80 text-[rgba(244,244,242,0.7)] border border-white/10">
                    {item.round}
                  </span>
                </div>

                {/* Caption on Card Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-4 z-10 pointer-events-none">
                  <h4 className="font-display text-lg font-bold uppercase tracking-tight text-white m-0 group-hover:text-[#e10600] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[rgba(244,244,242,0.6)] mt-1 line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </PageSection>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-5xl w-full bg-[#101214] border border-[rgba(255,255,255,0.12)] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#e10600] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                ✕
              </button>

              {/* Prev / Next Nav */}
              <button
                type="button"
                onClick={prevItem}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-[#e10600] text-white flex items-center justify-center transition-colors cursor-pointer font-bold text-lg"
                aria-label="Previous Media"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextItem}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-[#e10600] text-white flex items-center justify-center transition-colors cursor-pointer font-bold text-lg"
                aria-label="Next Media"
              >
                ›
              </button>

              {/* Media Container */}
              <div className="relative w-full aspect-video max-h-[70vh] bg-black flex items-center justify-center">
                {activeItem.category === "Video" && activeItem.videoUrl ? (
                  <video
                    src={activeItem.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    fill
                    className="object-contain"
                    priority
                  />
                )}
              </div>

              {/* Caption & Metadata */}
              <div className="p-6 bg-[#101214] border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display text-xs font-bold uppercase tracking-widest text-[#e10600]">
                      {activeItem.round}
                    </span>
                    <span className="text-xs text-[rgba(244,244,242,0.4)]">•</span>
                    <span className="text-xs text-[#f5a623] uppercase font-bold">
                      {activeItem.category} {activeItem.category === "Video" && "(Continuous Loop)"}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white m-0">
                    {activeItem.title}
                  </h3>
                  <p className="text-sm text-[rgba(244,244,242,0.65)] mt-1">
                    {activeItem.description}
                  </p>
                </div>

                <div className="text-xs text-[rgba(244,244,242,0.4)] sm:text-right font-mono shrink-0">
                  Apex Circuit Official Video Stream
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
