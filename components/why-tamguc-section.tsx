"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Thermometer, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion"
import Image from "next/image"

const EASE = [0.22, 1, 0.36, 1] as const

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

const companyLogos = [
    { src: "/ulker-logo.jpg", alt: "Ülker" },
    { src: "/a101-logo.jpg", alt: "A101" },
    { src: "/sutas-logo.jpg", alt: "Sütaş" },
    { src: "/opet-logo.jpg", alt: "Opet" },
    { src: "/migros-logo.jpg", alt: "Migros" },
    { src: "/bim-logo.jpg", alt: "BIM" },
    { src: "/carrefour-logo.jpg", alt: "CarrefourSA" },
    { src: "/sok-logo.jpg", alt: "ŞOK" },
    { src: "/metro-logo.jpg", alt: "Metro" },
    { src: "/kipa-logo.jpg", alt: "Kipa" },
    { src: "/real-logo.jpg", alt: "Real" },
    { src: "/tansas-logo.jpg", alt: "Tansaş" },
]

export function WhyTamgucSection() {
    const reduce = useReducedMotion()
    const controls = useAnimation()
    const ref = useRef<HTMLElement | null>(null)
    const inView = useInView(ref, { amount: 0.3 })

    const [currentLogoIndex, setCurrentLogoIndex] = useState(0)
    const logosPerPage = 4
    const totalLogoPages = Math.ceil(companyLogos.length / logosPerPage)

    useEffect(() => {
        if (reduce) {
            controls.set("show")
            return
        }
        controls.start(inView ? "show" : "hidden")
    }, [inView, controls, reduce])

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentLogoIndex((prev) => (prev + 1) % totalLogoPages)
        }, 5000)
        return () => clearInterval(timer)
    }, [totalLogoPages])

    const maybe = (v: any) => (reduce ? undefined : v)

    const handlePrevLogo = () => {
        setCurrentLogoIndex((prev) => (prev - 1 + totalLogoPages) % totalLogoPages)
    }

    const handleNextLogo = () => {
        setCurrentLogoIndex((prev) => (prev + 1) % totalLogoPages)
    }

    const currentLogos = companyLogos.slice(currentLogoIndex * logosPerPage, (currentLogoIndex + 1) * logosPerPage)

    return (
        <motion.section
            ref={ref}
            className="py-20 bg-white-to-br h-[900px]  relative overflow-hidden"
            initial="hidden"
            animate={controls}
        >
            <motion.div
                className="absolute inset-0 pointer-events-none"
                variants={maybe({ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.6 } } })}
            >
                <div className="absolute right-[241px] top-0 h-full w-1/2 bg-accent transform skew-x-[-15deg] origin-top-right translate-x-1/4" />
            </motion.div>

            <motion.div className="container mx-auto px-4 relative z-10" variants={maybe(container)}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div className="text-accent space-y-8" variants={maybe(container)}>
                        <motion.h2 className="text-4xl md:text-5xl font-bold" variants={maybe(fadeUp)}>
                            Neden Frigocan Soğutma?
                        </motion.h2>

                        <div className="space-y-6">
                            <motion.div variants={maybe(fadeUp)}>
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="h-6 w-6 text-accent" />
                                    Üretici Firma Güvencesi
                                </h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Frigocan olarak, soğuk hava depolarınızı 5.000 m² açık <br /> 3.000 m² kapalı alanda üretiyoruz…
                                </p>
                            </motion.div>

                            <motion.div variants={maybe(fadeUp)}>
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="h-6 w-6 text-accent" />
                                    Sektörde Lider
                                </h3>
                                <p className="text-gray-500 leading-relaxed">
                                    1999'dan bu yana, yurt içi ve yurt dışında yüzlerce proje…
                                </p>
                            </motion.div>

                            <motion.div variants={maybe(fadeUp)}>
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="h-6 w-6 text-accent" />
                                    Tecrübeli ve Güçlü Ekip
                                </h3>
                                <p className="text-gray-500 leading-relaxed">
                                    7/24 hizmet veren teknik ekibimiz ve yaygın servis ağımız…
                                </p>
                            </motion.div>
                        </div>

                        <motion.div variants={maybe(fadeUp)}>
                            <Button size="lg" className="cursor-pointer text-white bg-accent ">
                                Daha fazla bilgi için tıklayınız
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div className="space-y-6" variants={maybe(container)}>
                        <motion.div variants={maybe(fadeUp)}>
                            <Card className="bg-white border-2 border-white p-8 text-accent">
                                <div className="flex items-center justify-between gap-6 mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-accent rounded-lg">
                                            <Thermometer className="h-8 w-8 bg-white rounded-full" />
                                        </div>
                                        <h3 className="text-2xl font-bold">
                                            Projeniz için
                                            teklif alın!
                                        </h3>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Image src="/logo2.png" alt="Frigocan Logo" width={180} height={60} className="object-contain" />
                                    </div>
                                </div>
                                <p className="text-gray-500 mb-6">Soğutma sistemleri için hemen teklif alın !</p>
                                <Button className="w-full border cursor-pointer border-gray-300 bg-accent text-white">Teklif Al</Button>
                            </Card>
                        </motion.div>

                        <motion.div className="space-y-4" variants={maybe(container)}>
                            <motion.div
                                key={currentLogoIndex}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-lg"
                                variants={maybe(container)}
                                initial="hidden"
                                animate="show" // Changed from {controls} to "show" to prevent logos from disappearing during carousel transitions
                            >
                                {currentLogos.map((l) => (
                                    <motion.div
                                        key={l.alt}
                                        className="bg-white p-4 border border-gray-300 rounded-lg"
                                        variants={maybe(fadeUp)}
                                    >
                                        <img src={l.src || "/placeholder.svg"} alt={l.alt} className="h-12 object-contain mx-auto" />
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div variants={maybe(fadeUp)} initial={false}>
                                <div className="flex justify-center gap-4" >
                                    <button
                                        onClick={handlePrevLogo}
                                        className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
                                        aria-label="Previous logos"
                                    >
                                        <ChevronLeft className="h-6 w-6 text-accent" />
                                    </button>
                                    <motion.div className="flex justify-center items-center gap-2" variants={maybe(fadeUp)} initial={false}>
                                        {Array.from({ length: totalLogoPages }).map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentLogoIndex(index)}
                                                className={`h-2 rounded-full transition-all duration-300 ${
                                                    index === currentLogoIndex ? "w-8 bg-white" : "w-2 bg-gray-300"
                                                }`}
                                                aria-label={`Go to logo page ${index + 1}`}
                                            />
                                        ))}
                                    </motion.div>
                                    <button
                                        onClick={handleNextLogo}
                                        className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
                                        aria-label="Next logos"
                                    >
                                        <ChevronRight className="h-6 w-6 text-accent" />
                                    </button>
                                </div>
                            </motion.div>

                        </motion.div>

                        <motion.p className="text-white text-center text-sm" variants={maybe(fadeUp)}>
                            Frigocan, 1999'dan bu yana yüzlerce projeye imza attı.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    )
}
