"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Thermometer, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion"
import Image from "next/image"

// TS uyumlu easing
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

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
    const [logosPerPage, setLogosPerPage] = useState(4)
    const totalLogoPages = Math.ceil(companyLogos.length / logosPerPage)

    // AUTOPLAY: resetlenebilir timeout döngüsü
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const clearTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
            timerRef.current = null
        }
    }

    const scheduleNext = useCallback(() => {
        clearTimer()
        timerRef.current = setTimeout(() => {
            setCurrentLogoIndex(prev => (prev + 1) % totalLogoPages)
            // bir sonrakini tekrar planla (sonsuz döngü)
            scheduleNext()
        }, 5000)
    }, [totalLogoPages])

    // görünürlük/tercihlere göre autoplay’i yönet
    useEffect(() => {
        if (reduce) {
            controls.set("show")
            clearTimer()
            return
        }
        controls.start(inView ? "show" : "hidden")
        if (inView) {
            scheduleNext()
        } else {
            clearTimer()
        }
        return () => clearTimer()
    }, [inView, controls, reduce, scheduleNext])

    // responsive logo sayısı
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setLogosPerPage(2)
            else if (window.innerWidth < 1024) setLogosPerPage(3)
            else setLogosPerPage(4)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const maybe = (v: any) => (reduce ? undefined : v)

    // BUTON TIKLAMALARINDA SAYACI BAŞA AL
    const resetAndSetIndex = (updater: number | ((p: number) => number)) => {
        setCurrentLogoIndex(prev => (typeof updater === "function" ? (updater as any)(prev) : updater))
        scheduleNext() // ⟵ sayaç baştan
    }

    const handlePrevLogo = () => {
        resetAndSetIndex(prev => (prev - 1 + totalLogoPages) % totalLogoPages)
    }

    const handleNextLogo = () => {
        resetAndSetIndex(prev => (prev + 1) % totalLogoPages)
    }

    const currentLogos = companyLogos.slice(
        currentLogoIndex * logosPerPage,
        (currentLogoIndex + 1) * logosPerPage,
    )

    return (
        <motion.section
            ref={ref}
            className="snap-start snap-always min-h-screen py-12 md:py-16 lg:py-20 md:min-h-[700px] lg:min-h-[800px] lg:h-[900px] relative overflow-hidden flex items-center"
            initial="hidden"
            animate={controls}
        >
            {/* arka plan kurumsal gradient */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                variants={maybe({
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { duration: 0.6 } },
                })}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent transform skew-x-12 origin-top-right"></div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-1/3 h-full bg-accent transform -skew-x-12 origin-top-left -translate-x-32"></div>
            </motion.div>

            <motion.div className="container mx-auto px-4 relative z-10 h-full" variants={maybe(container)}>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center h-full">
                    {/* SOL TARAF / METİN */}
                    <motion.div className="text-white space-y-4 -mt-5 md:space-y-8" variants={maybe(container)}>
                        <motion.h2
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                            variants={maybe(fadeUp)}
                        >
                            Neden Frigocan Soğutma?
                        </motion.h2>

                        <div className="space-y-4 md:space-y-6">
                            <motion.div variants={maybe(fadeUp)}>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3 flex items-center gap-2 text-white">
                                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-white flex-shrink-0" />
                                    Üretici Firma Güvencesi
                                </h3>
                                <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
                                    Frigocan olarak, soğuk hava depolarınızı 5.000 m² açık{" "}
                                    <br className="hidden md:inline" />
                                    3.000 m² kapalı alanda üretiyoruz…
                                </p>
                            </motion.div>

                            <motion.div variants={maybe(fadeUp)}>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3 flex items-center gap-2 text-white">
                                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-white flex-shrink-0" />
                                    Sektörde Lider
                                </h3>
                                <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
                                    1999'dan bu yana, yurt içi ve yurt dışında yüzlerce proje…
                                </p>
                            </motion.div>

                            <motion.div variants={maybe(fadeUp)}>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3 flex items-center gap-2 text-white">
                                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-white flex-shrink-0" />
                                    Tecrübeli ve Güçlü Ekip
                                </h3>
                                <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
                                    7/24 hizmet veren teknik ekibimiz ve yaygın servis ağımız…
                                </p>
                            </motion.div>
                        </div>

                        {/* GÜNCELLENEN BUTON */}
                        <motion.div variants={maybe(fadeUp)}>
                            <Button
                                asChild
                                size="lg"
                                className="cursor-pointer text-accent bg-white w-full sm:w-auto text-xs sm:text-sm md:text-base hover:text-white hover:bg-accent hover:border hover:border-gray-300"
                            >
                                <a
                                    href={`mailto:satis@frigocan.com?subject=So%C4%9Fuk%20Hava%20Deposu%20Bilgi%20Talebi&body=So%C4%9Fuk%20hava%20deposu%20ve%20%C3%BCr%C3%BCnler%20%20hakk%C4%B1nda%20%20bilgi%20ve%20fiyat%20talep%20ediyorum.%0AL%C3%BCtfen%20benimle%20iletisime%20ge%C3%A7iniz.%0A%0ATe%C5%9Fekk%C3%BCrler.`}
                                >
                                    Daha fazla bilgi için tıklayınız
                                </a>
                            </Button>

                        </motion.div>
                    </motion.div>

                    {/* SAĞ TARAF / KART + LOGOLAR */}
                    <motion.div className="space-y-6" variants={maybe(container)}>
                        <motion.div variants={maybe(fadeUp)}>
                            <Card className="bg-white border-2 border-white p-6 md:p-8 text-accent">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6 mb-4">
                                    <div className="flex items-center gap-4 w-full sm:w-auto">
                                        <div className="p-3 bg-accent rounded-lg flex-shrink-0">
                                            <Thermometer className="h-6 w-6 md:h-8 md:w-8 bg-white rounded-full" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center sm:text-left text-accent">
                                            Projeniz için teklif alın!
                                        </h3>
                                    </div>

                                    <div className="flex-shrink-0 hidden sm:block">
                                        <Image
                                            src="/logo2.png"
                                            alt="Frigocan Logo"
                                            width={180}
                                            height={60}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-6">
                                    Soğutma sistemleri için hemen teklif alın !
                                </p>

                                <motion.div variants={maybe(fadeUp)}>
                                    <Button
                                        color="accent"
                                        asChild
                                        size="lg"
                                     className="w-full border cursor-pointer border-gray-300 bg-accent text-white text-xs sm:text-sm md:text-base">

                                        <a
                                            href={`mailto:satis@frigocan.com?subject=So%C4%9Fuk%20Hava%20Deposu%20Bilgi%20Talebi&body=Merhaba%2C%0ASo%C4%9Futma%20Sistemleri%20ve%20%C3%BCr%C3%BCnleriniz%20%20hakk%C4%B1nda%20%20bilgi%20ve%20fiyat%20teklifi%20almak%20istiyorum.%0AL%C3%BCtfen%20benimle%20iletisime%20ge%C3%A7ermisiniz.%0A%0ATe%C5%9Fekk%C3%BCrler.`}
                                        >
                                            Teklif Al
                                        </a>
                                    </Button>

                                </motion.div>
                            </Card>
                        </motion.div>

                        <motion.div className="space-y-4" variants={maybe(container)}>
                            <motion.div
                                key={currentLogoIndex}
                                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 rounded-lg"
                                variants={maybe(container)}
                                initial="hidden"
                                animate="show"
                            >
                                {currentLogos.map((l) => (
                                    <motion.div
                                        key={l.alt}
                                        className="bg-white p-4 border border-gray-300 rounded-lg"
                                        variants={maybe(fadeUp)}
                                    >
                                        <img
                                            src={l.src || "/placeholder.svg"}
                                            alt={l.alt}
                                            className="h-10 md:h-12 object-contain mx-auto"
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div variants={maybe(fadeUp)} initial={false}>
                                <div className="flex justify-center gap-4">
                                    <button
                                        onClick={handlePrevLogo}
                                        className="p-2 rounded-full cursor-pointer bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
                                        aria-label="Previous logos"
                                    >
                                        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                                    </button>

                                    <motion.div
                                        className="flex justify-center items-center gap-2"
                                        variants={maybe(fadeUp)}
                                        initial={false}
                                    >
                                        {Array.from({ length: totalLogoPages }).map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => resetAndSetIndex(index)} // ⟵ dot tıklamasında da sayaç baştan
                                                className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                                                    index === currentLogoIndex ? "w-8 bg-white" : "w-2 bg-gray-300"
                                                }`}
                                                aria-label={`Go to logo page ${index + 1}`}
                                            />
                                        ))}
                                    </motion.div>

                                    <button
                                        onClick={handleNextLogo}
                                        className="p-2 rounded-full bg-white border cursor-pointer border-gray-300 hover:bg-gray-50 transition-colors"
                                        aria-label="Next logos"
                                    >
                                        <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.p
                            className="text-white text-center text-[10px] sm:text-xs md:text-sm"
                            variants={maybe(fadeUp)}
                        >
                            Frigocan, 1999'dan bu yana yüzlerce projeye imza attı.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            {/* radial glow */}
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            </div>
        </motion.section>
    )
}
