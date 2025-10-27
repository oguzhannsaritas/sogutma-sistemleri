"use client"

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
    const itemsPerPage = 3
    const totalPages = Math.ceil(projects.length / itemsPerPage)

    const handlePrevious = () => setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
    const handleNext = () => setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1))

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

    return (
        <motion.section
            ref={ref}
            id="projeler"
            className="py-20 bg-white relative overflow-hidden "
            initial="hidden"
            animate={controls}
        >
            <motion.div
                className="absolute right-[482px] top-0 h-full w-1/2 bg-accent transform skew-x-[-15deg] origin-top-right translate-x-1/4"
                variants={maybe({ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.6 } } })}
                initial={false}
            />

            <motion.div className="container mx-auto px-4 relative z-10" variants={maybe(container)} initial={false}>
                <div className="flex justify-between items-center mb-8">
                    <motion.h2 className="text-5xl font-bold text-accent" variants={maybe(fadeUp)} initial={false}>
                        Projeler
                    </motion.h2>

                </div>

                <motion.div className="max-w-7xl mx-auto overflow-hidden" variants={maybe(container)} initial={false}>
                    <motion.div className="grid md:grid-cols-3 gap-6" variants={maybe(container)} initial={false}>
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
                <motion.div className="text-white font-medium items-center justify-center flex mt-8" variants={maybe(fadeUp)} initial={false}>Tüm projeleri incele</motion.div>
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
                                onClick={() => setCurrentIndex(index)}
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
        </motion.section>
    )
}
