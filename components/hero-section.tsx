"use client"

import { useEffect, useRef, useState, type TouchEvent } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Slide = { title1: string; title2?: string; image: string; alt: string }
const SLIDES: Slide[] = [
    { title1: "Her Zaman Taze", image: "/cold-room-refrigeration-unit.jpg", alt: "Soğuk Oda Ünitesi" },
    { title1: "Enerji Verimli", title2: "", image: "/humidity-meter-temperature.jpg", alt: "Nem & Sıcaklık Takibi" },
    { title1: "Endüstriyel Güvenilir", title2: "", image: "/industrial-cooling-units.jpg", alt: "Endüstriyel Soğutma" },
]

const AUTOPLAY_MS = 5500
const VARIANTS = ["wipe-diagonal", "reveal-zoom", "split-reveal"] as const
type Variant = (typeof VARIANTS)[number]

export function HeroSection() {
    const [index, setIndex] = useState(0)
    const [prevImg, setPrevImg] = useState<string | null>(null)
    const [variant, setVariant] = useState<Variant>("wipe-diagonal")
    const [enterTick, setEnterTick] = useState(0)

    const raf = useRef<number | null>(null)
    const touchX = useRef<number | null>(null)
    const sectionRef = useRef<HTMLElement | null>(null)
    const wasInView = useRef(false)

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([entry]) => {
                const inView = entry.isIntersecting && entry.intersectionRatio > 0.35
                if (!inView && raf.current) {
                    cancelAnimationFrame(raf.current)
                    raf.current = null
                }
                if (inView && !raf.current) {
                    startAutoplay()
                }
                if (inView && !wasInView.current) setEnterTick((t) => t + 1)
                wasInView.current = inView
            },
            { threshold: [0, 0.35, 1] },
        )
        obs.observe(el)
        return () => obs.disconnect()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const startAutoplay = () => {
        let t0 = performance.now()
        const loop = (t: number) => {
            if (t - t0 >= AUTOPLAY_MS) {
                next()
                t0 = t
            }
            raf.current = requestAnimationFrame(loop)
        }
        raf.current = requestAnimationFrame(loop)
    }

    useEffect(() => {
        startAutoplay()
        return () => {
            if (raf.current) cancelAnimationFrame(raf.current)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const next = () => setIndex((p) => (p + 1) % SLIDES.length)
    const prev = () => setIndex((p) => (p - 1 + SLIDES.length) % SLIDES.length)

    useEffect(() => {
        setPrevImg(SLIDES[index].image)
        const pick = VARIANTS[(Math.random() * VARIANTS.length) | 0]
        setVariant(pick)
        const id = setTimeout(() => setPrevImg(null), 700)
        return () => clearTimeout(id)
    }, [index])

    const onTouchStart = (e: TouchEvent) => {
        touchX.current = e.touches[0].clientX
    }
    const onTouchEnd = (e: TouchEvent) => {
        const start = touchX.current
        touchX.current = null
        if (start == null) return
        const dx = e.changedTouches[0].clientX - start
        if (Math.abs(dx) > 40) dx < 0 ? next() : prev()
    }

    const slide = SLIDES[index]

    return (
        <section
            ref={sectionRef}
            className="relative h-[900px] overflow-hidden bg-white"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            aria-roledescription="carousel"
        >
            {/* sağ beyaz diyagonal */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute right-0 top-0 h-full w-1/2 bg-accent transform skew-x-[-15deg] origin-top-right translate-x-1/4" />
            </div>

            <div className="container mx-auto px-4 h-full relative z-10">
                <div className="grid md:grid-cols-2 gap-8 h-full items-center">
                    {/* SOL: başlık */}
                    <div className="text-accent space-y-6">
                        <h1
                            key={`h1-${index}-${enterTick}`}
                            className="text-6xl md:text-7xl font-bold leading-tight animate-heroText"
                        >
                            {slide.title1}
                            {slide.title2 ? (
                                <>
                                    <br />
                                    {slide.title2}
                                </>
                            ) : null}
                        </h1>
                        <p key={`sub-${index}-${enterTick}`} className="max-w-xl text-black animate-heroSub">
                            Frigocan çözümleriyle soğuk zinciri güvenle yönetin.
                        </p>
                    </div>

                    {/* SAĞ: görsel + ALTA ORTALI KONTROLLER */}
                    <div className="flex flex-col items-center">
                        {/* ✅ ROUNDED & CLIP: tek noktadan yönetim */}
                        <div
                            className={`relative h-[600px] w-full img-stage ${variant} overflow-hidden rounded-lg `}
                        >
                            {/* yeni görsel */}
                            <div key={`new-${index}-${enterTick}`} className="img-layer img-enter">
                                <Image
                                    src={slide.image || "/placeholder.svg"}
                                    alt={slide.alt}
                                    fill
                                    sizes="(min-width: 768px) 50vw, 90vw"
                                    className="object-cover will-change-transform"
                                    priority
                                />
                            </div>

                            {/* eski görsel */}
                            {prevImg && (
                                <div className="img-layer img-exit pointer-events-none">
                                    <Image
                                        src={prevImg || "/placeholder.svg"}
                                        alt=""
                                        fill
                                        sizes="(min-width: 768px) 50vw, 90vw"
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            )}
                        </div>

                        {/* KONTROLLER: görselin altında, yatayda merkezde */}
                        <div className="mt-6 md:mt-8 w-full flex justify-center gap-3">
                            <Button
                                onClick={prev}
                                size="icon"
                                variant="outline"
                                className="rounded-full bg-white"
                                aria-label="Önceki görsel"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </Button>
                            <Button
                                onClick={next}
                                size="icon"
                                variant="outline"
                                className="rounded-full bg-white"
                                aria-label="Sonraki görsel"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ANİMASYONLAR + RADIUS */}
            <style jsx>{`
                /* metin */
                @keyframes fadeSlideUp { 0%{opacity:0;transform:translateY(16px)} 100%{opacity:1;transform:translateY(0)} }
                @keyframes fadeSlideLeft { 0%{opacity:0;transform:translateX(20px)} 100%{opacity:1;transform:translateX(0)} }
                .animate-heroText { animation: fadeSlideUp 520ms cubic-bezier(.2,.8,.2,1) both; }
                .animate-heroSub  { animation: fadeSlideLeft 520ms 80ms ease both; }

                /* sahne & katmanlar */
                .img-stage { position: relative; }
                .img-layer { position: absolute; inset: 0; }
                .img-enter, .img-exit { will-change: transform, opacity, filter, clip-path; }

                /* --- VARIANT 1: wipe-diagonal --- */
                .wipe-diagonal .img-enter { animation: diagIn 700ms cubic-bezier(.2,.8,.2,1) both, kenBurns 5200ms linear both; }
                .wipe-diagonal .img-exit  { animation: diagOut 620ms ease both; }
                @keyframes diagIn {
                    0%   { opacity:0; transform:translateX(24px) scale(1.02);
                        clip-path: polygon(100% 0, 100% 0, 100% 100%, 80% 100%); }
                    100% { opacity:1; transform:translateX(0) scale(1);
                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
                }
                @keyframes diagOut {
                    0% { opacity:1; transform:translateX(0) scale(1); filter: blur(0) }
                    100% { opacity:0; transform:translateX(-18px) scale(.995); filter: blur(2px) }
                }

                /* --- VARIANT 2: reveal-zoom --- */
                .reveal-zoom .img-enter { animation: zoomIn 720ms cubic-bezier(.16,.84,.3,1) both, kenBurns 5200ms linear both; }
                .reveal-zoom .img-exit  { animation: fadeBlurOut 520ms ease both; }
                @keyframes zoomIn { 0% { opacity:0; transform:scale(1.04); filter: blur(6px) } 100%{ opacity:1; transform:scale(1); filter: blur(0) } }
                @keyframes fadeBlurOut { 0% { opacity:1; filter: blur(0) } 100%{ opacity:0; filter: blur(4px) } }

                /* --- VARIANT 3: split-reveal --- */
                .split-reveal .img-enter { animation: splitIn 700ms cubic-bezier(.2,.8,.2,1) both, kenBurns 5200ms linear both; }
                .split-reveal .img-exit  { animation: splitOut 600ms ease both; }
                @keyframes splitIn { 0% { opacity:0; clip-path: polygon(50% 0, 50% 0, 50% 100%, 50% 100%); }
                    100%{ opacity:1; clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); } }
                @keyframes splitOut { 0% { opacity:1; } 100% { opacity:0; clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%); } }

                /* Ken Burns */
                @keyframes kenBurns { 0% { transform: scale(1.02) translate3d(6px,0,0); }
                    100%{ transform: scale(1.06) translate3d(-6px,0,0); } }

                /* hareket hassasiyeti */
                @media (prefers-reduced-motion: reduce) {
                    .animate-heroText, .animate-heroSub, .img-enter, .img-exit { animation: none !important; }
                }
            `}</style>
        </section>
    )
}
