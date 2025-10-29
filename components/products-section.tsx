"use client"
import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion"
import {
    Snowflake,
    Wind,
    Thermometer,
    Building2,
    ChevronLeft,
    ChevronRight,
    Droplets,
    Package,
    Warehouse,
    Gauge,
    Box,
    Layers,
    Factory,
    Container,
    Eye,
    Grid3x3,
    Apple,
    Fish,
    Milk,
    Pill,
    Flower2,
} from "lucide-react"

const products = [
    { icon: Snowflake, title: "Soğutma Cihazları", description: "Hermetik, Yarı hermetik, Soklama, Merkezi Soğutma" },
    {
        icon: Building2,
        title: "Soğuk Oda Rafları",
        description: "Krom (AISI 304 Paslanmaz Çelik), Alüminyum Soğuk Oda Rafları",
    },
    { icon: Wind, title: "Nemlendirme Cihazları", description: "Ultrasonik, Adyabatik" },
    { icon: Thermometer, title: "Konteyner Soğuk Hava Deposu", description: "20'Dc ve 40'Dc Konteyner" },
    { icon: Droplets, title: "Hava Perdesi", description: "Dikey ve Yatay Hava Perdesi Sistemleri" },
    { icon: Package, title: "Soğutma Panoları", description: "Otomatik Kontrol ve Kumanda Panoları" },
    { icon: Warehouse, title: "Soğuk Oda Kapıları", description: "Sürgülü, Menteşeli, Otomatik Kapı Sistemleri" },
    { icon: Gauge, title: "Basınç ve Kontrol Cihazları", description: "Dijital ve Analog Ölçüm Sistemleri" },
    { icon: Box, title: "İzolasyon Malzemeleri", description: "Poliüretan Panel ve İzolasyon Sistemleri" },
    { icon: Layers, title: "Evaporatör Sistemleri", description: "Endüstriyel ve Ticari Evaporatörler" },
    { icon: Factory, title: "Kondenser Üniteleri", description: "Hava ve Su Soğutmalı Kondenserler" },
    { icon: Container, title: "Soğutma Kuleleri", description: "Açık ve Kapalı Devre Soğutma Kuleleri" },
]

const coldRooms = [
    { icon: Eye, title: "Cam Kapılı Soğuk Oda", description: "Görsel sunum için ideal cam kapılı soğuk oda çözümleri" },
    { icon: Factory, title: "Endüstriyel Soğuk Oda", description: "Büyük kapasiteli endüstriyel soğutma sistemleri" },
    { icon: Grid3x3, title: "Modüler Soğuk Oda", description: "Esnek ve kolay kurulabilen modüler sistemler" },
    { icon: Snowflake, title: "Derin Dondurucu Oda", description: "-25°C ile -40°C arası derin dondurma çözümleri" },
    { icon: Apple, title: "Meyve Sebze Soğuk Odası", description: "Kontrollü atmosfer ve nem sistemli özel odalar" },
    { icon: Fish, title: "Et ve Balık Soğuk Odası", description: "Hijyenik ve sağlıklı saklama koşulları" },
    { icon: Milk, title: "Süt Ürünleri Soğuk Odası", description: "Özel sıcaklık ve nem kontrollü sistemler" },
    { icon: Pill, title: "İlaç Soğuk Odası", description: "GMP standartlarında ilaç saklama odaları" },
    { icon: Flower2, title: "Çiçek Soğuk Odası", description: "Çiçek ve bitki muhafazası için özel sistemler" },
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

const maybe =
    <T,>(v: T) =>
        (reduce: boolean) =>
            reduce ? undefined : v

export function ProductsSection() {
    const [currentProductIndex, setCurrentProductIndex] = useState(0)
    const [currentColdRoomIndex, setCurrentColdRoomIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(4)

    const reduce = useReducedMotion()
    const controls = useAnimation()
    const ref = useRef<HTMLElement | null>(null)
    const inView = useInView(ref, { amount: 0.3 })

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1)
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2)
            } else {
                setItemsPerPage(4)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const totalProductPages = Math.ceil(products.length / itemsPerPage)
    const totalColdRoomPages = Math.ceil(coldRooms.length / itemsPerPage)
    const currentProductPage = Math.floor(currentProductIndex / itemsPerPage)
    const currentColdRoomPage = Math.floor(currentColdRoomIndex / itemsPerPage)

    useEffect(() => {
        if (reduce) {
            controls.set("show")
            return
        }
        controls.start(inView ? "show" : "hidden")
    }, [inView, controls, reduce])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProductIndex((prev) => (prev + itemsPerPage) % products.length)
        }, 7000)
        return () => clearInterval(interval)
    }, [itemsPerPage])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentColdRoomIndex((prev) => (prev + itemsPerPage) % coldRooms.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [itemsPerPage])

    const handleProductPrev = () => {
        setCurrentProductIndex((prev) => (prev - itemsPerPage + products.length) % products.length)
    }

    const handleProductNext = () => {
        setCurrentProductIndex((prev) => (prev + itemsPerPage) % products.length)
    }

    const handleColdRoomPrev = () => {
        setCurrentColdRoomIndex((prev) => (prev - itemsPerPage + coldRooms.length) % coldRooms.length)
    }

    const handleColdRoomNext = () => {
        setCurrentColdRoomIndex((prev) => (prev + itemsPerPage) % coldRooms.length)
    }

    const visibleProducts = products.slice(currentProductIndex, currentProductIndex + itemsPerPage)
    if (visibleProducts.length < itemsPerPage) {
        visibleProducts.push(...products.slice(0, itemsPerPage - visibleProducts.length))
    }

    const visibleColdRooms = coldRooms.slice(currentColdRoomIndex, currentColdRoomIndex + itemsPerPage)
    if (visibleColdRooms.length < itemsPerPage) {
        visibleColdRooms.push(...coldRooms.slice(0, itemsPerPage - visibleColdRooms.length))
    }

    return (
        <motion.section
            ref={ref}
            id="urunler"
            className="snap-start snap-always bg-white min-h-screen  md:min-h-[700px] md:md:min-h-[800px] lg:h-[900px] flex items-center justify-center py-12 md:py-16 lg:py-20"
            initial="hidden"
            animate={controls}
        >
            <motion.div className="container mx-auto px-4" variants={container} initial={false}>
                <Tabs defaultValue="urunler" className="w-full">
                    <motion.div variants={fadeUp} initial={false}>
                        <TabsList className="relative bg-white top-0 md:top-[-80px] grid w-full max-w-md mx-auto grid-cols-2 mb-6 md:mb-3">
                            <TabsTrigger
                                value="urunler"
                                className="text-base md:text-lg font-bold text-accent hover:bg-accent hover:text-white data-[state=active]:bg-accent data-[state=active]:text-white transition-colors rounded-md px-4 py-2 mr-4"
                            >
                                ÜRÜNLER
                            </TabsTrigger>
                            <TabsTrigger
                                value="soguk-odalar"
                                className="text-base md:text-lg font-bold text-accent hover:bg-accent hover:text-white data-[state=active]:bg-accent data-[state=active]:text-white transition-colors rounded-md px-4 py-2"
                            >
                                SOĞUK ODALAR
                            </TabsTrigger>
                        </TabsList>
                    </motion.div>

                    <TabsContent value="urunler" className="space-y-8">
                        <div className="relative">
                            <motion.div
                                key={currentProductIndex}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-7xl"
                                variants={container}
                                initial="hidden"
                                animate="show"
                            >
                                {visibleProducts.map((product, index) => (
                                    <motion.div key={index} variants={fadeUp} className="h-full">
                                        <Card className="text-center hover:shadow-lg transition-shadow flex flex-col h-full">
                                            <CardHeader className="flex-1 flex flex-col justify-center items-center">
                                                <div className="mx-auto mb-4 p-4 bg-accent rounded-full w-fit">
                                                    <product.icon className="h-10 w-10 md:h-12 md:w-12 text-white" />
                                                </div>
                                                <CardTitle className="text-lg md:text-xl">{product.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-sm md:text-base">{product.description}</CardDescription>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div className="flex justify-center gap-4 mt-9" variants={fadeUp} initial={false}>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handleProductPrev}
                                    className="rounded-full bg-white hover:bg-accent transition-colors h-10 w-10 md:h-12 md:w-12"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <motion.div className="flex justify-center gap-2 items-center" variants={fadeUp} initial={false}>
                                    {Array.from({ length: totalProductPages }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentProductIndex(index * itemsPerPage)}
                                            className={`h-2 rounded-full transition-all duration-300 ${
                                                index === currentProductPage ? "w-8 bg-accent" : "w-2 bg-[#2d2875]/50"
                                            }`}
                                            aria-label={`Go to page ${index + 1}`}
                                        />
                                    ))}
                                </motion.div>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handleProductNext}
                                    className="rounded-full bg-white hover:bg-accent transition-colors h-10 w-10 md:h-12 md:w-12"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </motion.div>
                        </div>
                    </TabsContent>

                    <TabsContent value="soguk-odalar" className="space-y-8">
                        <div className="relative">
                            <motion.div
                                key={currentColdRoomIndex}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-7xl"
                                variants={container}
                                initial="hidden"
                                animate="show"
                            >
                                {visibleColdRooms.map((room, index) => (
                                    <motion.div key={index} variants={fadeUp} className="h-full">
                                        <Card className="text-center hover:shadow-lg transition-shadow flex flex-col h-full">
                                            <CardHeader className="flex-1 flex flex-col justify-center items-center">
                                                <div className="mx-auto mb-4 p-4 bg-accent rounded-full w-fit">
                                                    <room.icon className="h-10 w-10 md:h-12 md:w-12 text-white" />
                                                </div>
                                                <CardTitle className="text-lg md:text-xl">{room.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-sm md:text-base">{room.description}</CardDescription>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div className="flex justify-center gap-4 mt-9" variants={fadeUp} initial={false}>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handleColdRoomPrev}
                                    className="rounded-full bg-white hover:bg-accent transition-colors h-10 w-10 md:h-12 md:w-12"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>

                                <motion.div className="flex justify-center items-center gap-2 " variants={fadeUp} initial={false}>
                                    {Array.from({ length: totalColdRoomPages }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentColdRoomIndex(index * itemsPerPage)}
                                            className={`h-2 rounded-full transition-all duration-300 ${
                                                index === currentColdRoomPage ? "w-8 bg-accent" : "w-2 bg-[#2d2875]/50"
                                            }`}
                                            aria-label={`Go to page ${index + 1}`}
                                        />
                                    ))}
                                </motion.div>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handleColdRoomNext}
                                    className="rounded-full bg-white hover:bg-accent transition-colors h-10 w-10 md:h-12 md:w-12"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </motion.div>
                        </div>
                    </TabsContent>
                </Tabs>
            </motion.div>
        </motion.section>
    )
}
