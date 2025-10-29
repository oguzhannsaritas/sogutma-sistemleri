"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion"

const projects = [
    {
        id: 1,
        image: "/cold-room-interior-glass-doors.jpg",
        title: "CAM KAPILI SOĞUK VE DONDURUCU ODA",
        location: "KORTRIJK, BELÇİKA",
    },
    {
        id: 2,
        image: "/building-construction-kyrgyzstan.jpg",
        title: "KIRGIZİSTAN MEZBAHANE PROJESİ",
        location: "KIRGIZİSTAN",
    },
    {
        id: 3,
        image: "/cold-room-interior-glass-doors.jpg",
        title: "ENDÜSTRİYEL SOĞUK DEPO",
        location: "İSTANBUL, TÜRKİYE",
    },
    { id: 4, image: "/cold-room-interior-glass-doors.jpg", title: "GIDA İŞLEME TESİSİ", location: "ANKARA, TÜRKİYE" },
    {
        id: 5,
        image: "/cold-room-interior-glass-doors.jpg",
        title: "İLAÇ SOĞUK HÜCRE SİSTEMİ",
        location: "BURSA, TÜRKİYE",
    },
    {
        id: 6,
        image: "/cold-room-interior-glass-doors.jpg",
        title: "SÜPERMARKET SOĞUTMA SİSTEMİ",
        location: "İZMİR, TÜRKİYE",
    },
    {
        id: 7,
        image: "/cold-room-interior-glass-doors.jpg",
        title: "RESTORAN SOĞUK DEPOLAMA",
        location: "ANTALYA, TÜRKİYE",
    },
    { id: 8, image: "/cold-room-interior-glass-doors.jpg", title: "DEPO SOĞUTMA SİSTEMİ", location: "KOCAELİ, TÜRKİYE" },
    { id: 9, image: "/cold-room-interior-glass-doors.jpg", title: "OTEL SOĞUK ODA SİSTEMİ", location: "MUĞLA, TÜRKİYE" },
]

const EASE = [0.22, 1, 0.36, 1] as const

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export function ProjectsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(3)
    const [direction, setDirection] = useState(0)
    const touchStartX = useRef<number | null>(null)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerPage(1)
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2)
            } else {
                setItemsPerPage(3)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const totalPages = Math.ceil(projects.length / itemsPerPage)

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
    const visibleProjects = projects.slice(start, start + itemsPerPage)

    const reduce = useReducedMotion()
    const controls = useAnimation()
    const ref = useRef<HTMLElement | null>(null)
    const inView = useInView(ref, { amount: 0.3 })

    useEffect(() => {
        if (reduce) {
            controls.set("show")
            return
        }
        controls.start(inView ? "show" : "hidden")
    }, [inView, controls, reduce])

    const maybe = (v: any) => (reduce ? undefined : v)

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
            id="projeler"
            className="snap-start snap-always min-h-screen  py-12 md:py-16 lg:py-20 relative overflow-hidden flex items-center"
            initial="hidden"
            animate={controls}
        >
            <motion.div
                className="absolute inset-0 pointer-events-none"
                variants={maybe({
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { duration: 0.6 } },
                })}
                initial={false}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent transform skew-x-12 origin-top-right"></div>
                    </div>
                </div>

                <div className="absolute top-0 left-0 w-1/3 h-full bg-accent transform -skew-x-12 origin-top-left -translate-x-32"></div>
            </motion.div>

            <motion.div className="container mx-auto px-4 relative z-10 w-full" variants={maybe(container)} initial={false}>
                <div className="flex justify-between items-center mb-8">
                    <motion.h2 className="text-5xl font-bold text-white "  variants={maybe(fadeUp)} initial={false}>
                        Projeler
                    </motion.h2>
                </div>

                <motion.div className="max-w-7xl mx-auto overflow-hidden" variants={maybe(container)} initial={false}>
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
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                            variants={maybe(container)}
                            initial={false}
                        >
                            {visibleProjects.map((project) => (
                                <motion.div key={project.id} variants={maybe(fadeUp)} initial={false}>
                                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-600">
                                        <div className="aspect-[16/10] relative select-none">
                                            <img
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                className="object-cover w-full h-full pointer-events-none"
                                                draggable={false}
                                            />
                                        </div>
                                        <CardContent className="p-4">
                                            <h3 className="text-lg font-bold text-gray-500 text-center">
                                                {project.title}
                                                <br />
                                                {project.location}
                                            </h3>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="text-white font-medium items-center justify-center flex mt-8"
                    variants={maybe(fadeUp)}
                    initial={false}
                >
                    Tüm projeleri incele
                </motion.div>

                <motion.div className="flex justify-center gap-4 mt-4" variants={maybe(fadeUp)} initial={false}>
                    <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full bg-white hover:bg-accent transition-colors"
                        onClick={handlePrevious}
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>

                    <motion.div className="flex justify-center gap-2 items-center" variants={maybe(fadeUp)} initial={false}>
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToPage(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </motion.div>

                    <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full bg-white hover:bg-accent transition-colors"
                        onClick={handleNext}
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </motion.div>
            </motion.div>

            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            </div>
        </motion.section>
    )
}
