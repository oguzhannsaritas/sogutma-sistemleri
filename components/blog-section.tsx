"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useAnimation, useReducedMotion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

// easing tuple tipli -> TS2322 yok
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const maybe = (reduce: boolean) => (reduce ? {} : undefined)

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
            ease: EASE,
        },
    },
}

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export function BlogSection() {
    const ref = useRef<HTMLElement | null>(null)
    const controls = useAnimation()
    const inView = useInView(ref, { amount: 0.3 })
    const reduce = useReducedMotion() ?? false

    // Slider state
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(3)
    const [direction, setDirection] = useState(0)
    const touchStartX = useRef<number | null>(null)

    // responsive kaç kart gözüksün
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerPage(1) // telefon
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2) // tablet
            } else {
                setItemsPerPage(3) // desktop
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const blogPosts = [
        {
            title: "Soğuk Hava Deposu Servisi",
            image: "/hvac-technicians-working.jpg",
        },
        {
            title: "Merkezi Soğutma Sistemleri",
            image: "/industrial-cooling-units.jpg",
        },
        {
            title: "Odanın Nemi Nasıl Artar?",
            image: "/humidity-meter-temperature.jpg",
        },
    ]

    const totalPages = Math.ceil(blogPosts.length / itemsPerPage)

    // itemsPerPage değişince index taşmasın
    useEffect(() => {
        setCurrentIndex((prev) => {
            if (prev >= totalPages) {
                return totalPages - 1
            }
            return prev
        })
    }, [totalPages])

    const goToPage = (newIndex: number) => {
        if (newIndex === currentIndex) {
            return
        } else if (newIndex === 0 && currentIndex === totalPages - 1) {
            setDirection(1)
        } else if (newIndex === totalPages - 1 && currentIndex === 0) {
            setDirection(-1)
        } else if (newIndex > currentIndex) {
            setDirection(1)
        } else {
            setDirection(-1)
        }

        setCurrentIndex(newIndex)
    }

    const handlePrevious = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
    }

    const handleNext = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
    }

    const start = currentIndex * itemsPerPage
    const visiblePosts = blogPosts.slice(start, start + itemsPerPage)

    // inView anim
    useEffect(() => {
        if (reduce) {
            controls.set("show")
            return
        }
        controls.start(inView ? "show" : "hidden")
    }, [inView, controls, reduce])

    // touch swipe (mobil parmakla yatay sürükleme)
    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
    }

    const onTouchEnd = (e: React.TouchEvent) => {
        const startX = touchStartX.current
        touchStartX.current = null
        if (startX == null) return

        const endX = e.changedTouches[0].clientX
        const dx = endX - startX

        if (Math.abs(dx) > 40) {
            if (dx > 0) {
                handlePrevious()
            } else {
                handleNext()
            }
        }
    }

    return (
        <motion.section
            ref={ref}
            className="snap-start snap-always min-h-screen py-12 md:py-16 lg:py-20 relative overflow-hidden flex items-center"
            initial="hidden"
            animate={controls}
        >
            {/* Arka plan (kurumsal theme) */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                variants={
                    reduce
                        ? {}
                        : {
                            hidden: { opacity: 0 },
                            show: { opacity: 1, transition: { duration: 0.6 } },
                        }
                }
                initial={false}
            >
                {/* koyu degrade */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
                    <div className="absolute top-0 left-0 w-full h-full">
                        {/* sağ üst skew highlight */}
                        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent transform skew-x-12 origin-top-right"></div>
                    </div>
                </div>

                {/* soldaki accent blok */}
                <div className="absolute top-0 left-0 w-1/3 h-full bg-accent transform -skew-x-12 origin-top-left -translate-x-32"></div>
            </motion.div>

            {/* İçerik */}
            <div className="container mx-auto px-4 relative z-10 w-full">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 md:mb-12"
                    variants={maybe(reduce) ?? fadeUp}
                    initial={false}
                >
                    Blog
                </motion.h2>

                {/* Slider alanı */}
                <motion.div
                    className="max-w-7xl mx-auto overflow-hidden"
                    variants={maybe(reduce) ?? container}
                    initial={false}
                >
                    <motion.div
                        key={currentIndex}
                        initial={{
                            opacity: 0,
                            x: direction === 0 ? 0 : direction === 1 ? 60 : -60,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.4,
                            ease: EASE,
                        }}
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                    >
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                            variants={maybe(reduce) ?? container}
                            initial={false}
                        >
                            {visiblePosts.map((post, index) => (
                                <motion.div
                                    key={index}
                                    variants={maybe(reduce) ?? fadeUp}
                                    initial={false}
                                >
                                    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full bg-white">
                                        <CardHeader className="p-0">
                                            <div className="aspect-video relative">
                                                <img
                                                    src={post.image || "/placeholder.svg"}
                                                    alt={post.title}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-4 md:p-6">
                                            <h3 className="text-lg md:text-xl font-bold mb-4 text-accent">
                                                {post.title}
                                            </h3>
                                        </CardContent>
                                        <CardFooter className="p-4 md:p-6 pt-0">
                                            <Button
                                                variant="ghost"
                                                className="group text-sm md:text-base text-accent hover:text-accent"
                                            >
                                                Blog detayı
                                                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Navigation: SADECE MOBİL/TABLET */}
                <motion.div
                    className="flex justify-center gap-4 mt-10 md:hidden"
                    variants={maybe(reduce) ?? fadeUp}
                    initial={false}
                >
                    <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full bg-white hover:bg-accent transition-colors"
                        onClick={handlePrevious}
                        aria-label="Önceki blog kartları"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>

                    <motion.div
                        className="flex justify-center gap-2 items-center"
                        variants={maybe(reduce) ?? fadeUp}
                        initial={false}
                    >
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToPage(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
                                }`}
                                aria-label={`Blog sayfa ${index + 1}`}
                            />
                        ))}
                    </motion.div>

                    <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full bg-white hover:bg-accent transition-colors"
                        onClick={handleNext}
                        aria-label="Sonraki blog kartları"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </motion.div>
            </div>

            {/* Radial glow */}
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            </div>
        </motion.section>
    )
}
