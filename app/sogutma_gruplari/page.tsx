"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"

const PRODUCT_IMAGES = [
    {
        src: "/sogutma_grupları1.jpeg",
        alt: "Endüstriyel soğutma grubu 1",
    },
    {
        src: "/sogutma_odalari2.jpeg",
        alt: "Endüstriyel soğutma grubu 2",
    },
    {
        src: "/sogutma_gruplari.jpeg",
        alt: "Endüstriyel soğutma grubu 3",
    },
]

export default function SogutmaGruplariPage() {
    const [current, setCurrent] = useState(0)
    const [prev, setPrev] = useState<number | null>(null)
    const [tick, setTick] = useState(0)

    const nextImage = () => {
        setPrev(current)
        setCurrent((c) => (c + 1) % PRODUCT_IMAGES.length)
        setTick((t) => t + 1)
    }

    const prevImage = () => {
        setPrev(current)
        setCurrent((c) => (c - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length)
        setTick((t) => t + 1)
    }

    useEffect(() => {
        if (prev === null) return
        const id = setTimeout(() => {
            setPrev(null)
        }, 500)
        return () => clearTimeout(id)
    }, [prev, tick])

    const activeImg = PRODUCT_IMAGES[current]
    const prevImg = prev !== null ? PRODUCT_IMAGES[prev] : null

    return (
        <main className="min-h-screen bg-background">
            <Header />

            <section className="relative min-h-[600px] flex items-center overflow-hidden">
                {/* arka plan */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent transform skew-x-12 origin-top-right" />
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-1/3 h-full bg-accent transform -skew-x-12 origin-top-left -translate-x-32" />

                {/* içerik */}
                <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
                    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
                        {/* GÖRSEL BLOKU */}
                        <div className="order-1 md:order-2 w-full flex flex-col items-center">
                            <div className="relative w-full max-w-md md:max-w-none aspect-[4/3] sm:aspect-[16/9] rounded-xl overflow-hidden border border-white/20 shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)] img-stage bg-white">
                                {/* aktif görsel */}
                                <div
                                    key={`active-${current}-${tick}`}
                                    className="absolute inset-0 img-layer img-enter"
                                >
                                    <Image
                                        src={activeImg.src}
                                        alt={activeImg.alt}
                                        fill
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                        className="object-contain"
                                        priority
                                    />
                                </div>

                                {/* önceki görsel (fade-out) */}
                                {prevImg && (
                                    <div
                                        key={`prev-${prev}-${tick}`}
                                        className="absolute inset-0 img-layer img-exit pointer-events-none"
                                    >
                                        <Image
                                            src={prevImg.src}
                                            alt={prevImg.alt}
                                            fill
                                            sizes="(min-width: 768px) 50vw, 100vw"
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                )}

                                {/* üstüne hafif ışık katmanı, bunu istersen silebilirsin */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-white/5 pointer-events-none" />
                            </div>

                            {/* kontrol butonları */}
                            <div className="mt-4 md:mt-6 flex items-center gap-3">
                                <button
                                    onClick={prevImage}
                                    aria-label="Önceki görsel"
                                    className="rounded-full bg-white/90 text-accent border border-white/40 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center active:scale-95 transition-transform shadow-lg"
                                >
                                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                                </button>

                                <button
                                    onClick={nextImage}
                                    aria-label="Sonraki görsel"
                                    className="rounded-full bg-white/90 text-accent border border-white/40 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center active:scale-95 transition-transform shadow-lg"
                                >
                                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                                </button>
                            </div>
                        </div>

                        {/* METİN BLOKU */}
                        <div className="order-2 md:order-1 max-w-2xl text-white">


                            <div className="space-y-4 sm:space-y-5 text-[12px] sm:text-[13px] md:text-base text-white/95 leading-relaxed">
                                <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-8 mb-2 md:mb-4 leading-tight">
                                    Soğuk Muhafaza Soğutma Grubu,
                                </h2>

                                <p>Soğuk Muhafaza Soğutma Grubu, Donmuş muhafaza soğutma grubu ve şoklama grupları, ihtiyaçlarınıza göre ticari ve endüstriyel tip de kullanılmaktadır. Ticari tip soğutma grupları, daha küçük kapasiteli tesisleriniz için tercih edilmektedir. Endüstriyel tesisleri için daha yüksek kapasiteli soğutma grupları kullanılmaktadır. Soğutma gruplarımız yüksek kapasite, optimum enerji sarfiyatı ve minimum ses düzeyine sahip olarak ürün gamımızda yer almaktadır.
                                </p>

                                <p>Tercihinize göre soğutma grupları ; hermetik, yarı hermetik, scroll ve vidalı tip seçenekleri mevcuttur.</p>


                            </div>
                        </div>
                    </div>
                </div>

                {/* parlama */}
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                </div>
            </section>

            <Footer />

            {/* crossfade animasyonu */}
            <style jsx>{`
                .img-layer {
                    position: absolute;
                    inset: 0;
                }

                .img-enter {
                    animation: fadeInScale 480ms cubic-bezier(.2,.8,.2,1) both;
                    will-change: opacity, transform, filter;
                }
                .img-exit {
                    animation: fadeOutScale 480ms cubic-bezier(.4,0,.2,1) both;
                    will-change: opacity, transform, filter;
                }

                @keyframes fadeInScale {
                    0% {
                        opacity: 0;
                        transform: scale(1.04) translateY(6px);
                        filter: blur(6px);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                        filter: blur(0);
                    }
                }

                @keyframes fadeOutScale {
                    0% {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                        filter: blur(0);
                    }
                    100% {
                        opacity: 0;
                        transform: scale(.98) translateY(-6px);
                        filter: blur(4px);
                    }
                }
            `}</style>
        </main>
    )
}
