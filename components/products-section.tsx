"use client"
import { useState, useEffect, useRef, useCallback } from "react"
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
    { icon: Building2, title: "Soğuk Oda Rafları", description: "Krom (AISI 304 Paslanmaz Çelik), Alüminyum Soğuk Oda Rafları" },
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
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }
const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }

// Yardımcı: dizi içinden sayfa bazlı, wrap'lı pencere üret
function pageWindow<T>(arr: T[], page: number, perPage: number) {
    const start = (page * perPage) % arr.length
    return Array.from({ length: perPage }, (_, i) => arr[(start + i) % arr.length])
}

export function ProductsSection() {
    const [activeTab, setActiveTab] = useState<"urunler" | "soguk-odalar">("urunler")

    // Artık İNDEKS yerine SAYFA durumları:
    const [productPage, setProductPage] = useState(0)
    const [coldPage, setColdPage] = useState(0)

    const [itemsPerPage, setItemsPerPage] = useState(4)

    const reduce = useReducedMotion()
    const controls = useAnimation()
    const ref = useRef<HTMLElement | null>(null)
    const inView = useInView(ref, { amount: 0.3 })

    // Resetlenebilir autoplay timer'ları
    const prodTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const coldTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const clearProdTimer = () => { if (prodTimerRef.current) { clearTimeout(prodTimerRef.current); prodTimerRef.current = null } }
    const clearColdTimer = () => { if (coldTimerRef.current) { clearTimeout(coldTimerRef.current); coldTimerRef.current = null } }

    // Toplam sayfa sayıları (itemsPerPage değiştikçe yeniden hesaplanır)
    const totalProductPages = Math.ceil(products.length / itemsPerPage)
    const totalColdPages = Math.ceil(coldRooms.length / itemsPerPage)

    // Autoplay: sayfa bazlı ilerlet
    const scheduleProdNext = useCallback(() => {
        clearProdTimer()
        if (reduce) return
        prodTimerRef.current = setTimeout(() => {
            setProductPage(p => (p + 1) % totalProductPages)
            scheduleProdNext()
        }, 7000)
    }, [reduce, totalProductPages])

    const scheduleColdNext = useCallback(() => {
        clearColdTimer()
        if (reduce) return
        coldTimerRef.current = setTimeout(() => {
            setColdPage(p => (p + 1) % totalColdPages)
            scheduleColdNext()
        }, 5000)
    }, [reduce, totalColdPages])

    // Görünürlük yönetimi
    useEffect(() => {
        if (!inView) { clearProdTimer(); clearColdTimer(); return }
        scheduleProdNext()
        scheduleColdNext()
        return () => { clearProdTimer(); clearColdTimer() }
    }, [inView, scheduleProdNext, scheduleColdNext])

    // Responsive per-page
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setItemsPerPage(1)
            else if (window.innerWidth < 1024) setItemsPerPage(2)
            else setItemsPerPage(4)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Per-page değişince geçerli sayfaları güvenli aralığa çek + autoplay reset
    useEffect(() => {
        setProductPage(0)
        setColdPage(0)
        scheduleProdNext()
        scheduleColdNext()
    }, [itemsPerPage]) // eslint-disable-line react-hooks/exhaustive-deps

    // Framer görünürlük anim
    useEffect(() => {
        if (reduce) { controls.set("show"); return }
        controls.start(inView ? "show" : "hidden")
    }, [inView, controls, reduce])

    // Sekme değişince ikisi de baştan + sayaç reset
    const onTabChange = (val: string) => {
        const v = (val === "soguk-odalar" ? "soguk-odalar" : "urunler") as "urunler" | "soguk-odalar"
        setActiveTab(v)
        setProductPage(0)
        setColdPage(0)
        scheduleProdNext()
        scheduleColdNext()
    }

    // Kullanıcı etkileşiminde reset
    const setProductPageReset = (updater: number | ((p: number) => number)) => {
        setProductPage(prev => (typeof updater === "function" ? (updater as any)(prev) : updater))
        scheduleProdNext()
    }
    const setColdPageReset = (updater: number | ((p: number) => number)) => {
        setColdPage(prev => (typeof updater === "function" ? (updater as any)(prev) : updater))
        scheduleColdNext()
    }

    // Önce/sonra
    const handleProductPrev = () => setProductPageReset(p => (p - 1 + totalProductPages) % totalProductPages)
    const handleProductNext = () => setProductPageReset(p => (p + 1) % totalProductPages)

    const handleColdRoomPrev = () => setColdPageReset(p => (p - 1 + totalColdPages) % totalColdPages)
    const handleColdRoomNext = () => setColdPageReset(p => (p + 1) % totalColdPages)

    // Görünen kartlar (wrap'lı)
    const visibleProducts = pageWindow(products, productPage, itemsPerPage)
    const visibleColdRooms = pageWindow(coldRooms, coldPage, itemsPerPage)

    // Grid'leri yeniden tetiklemek için key'leri sayfa+perPage'a bağladık
    const prodGridKey = `prod-${productPage}-${itemsPerPage}`
    const coldGridKey = `cold-${coldPage}-${itemsPerPage}`

    // Başlangıç index'leri (stable key için)
    const prodStart = (productPage * itemsPerPage) % products.length
    const coldStart = (coldPage * itemsPerPage) % coldRooms.length

    return (
        <motion.section
            ref={ref}
            id="urunler"
            className="snap-start snap-always bg-white min-h-screen md:min-h-[700px] lg:h-[900px] flex items-center justify-center py-12 md:py-16 lg:py-20"
            initial="hidden"
            animate={controls}
        >
            <motion.div className="container mx-auto px-4" variants={container} initial={false}>
                <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
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

                    {/* ÜRÜNLER */}
                    <TabsContent value="urunler" className="space-y-8">
                        <div className="relative">
                            <motion.div
                                key={prodGridKey}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-7xl"
                                variants={container}
                                initial="hidden"
                                animate="show"
                            >
                                {visibleProducts.map((product, i) => (
                                    <motion.div key={`${product.title}-${prodStart + i}`} variants={fadeUp} className="h-full">
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
                                <Button variant="outline" size="icon" onClick={handleProductPrev} className="rounded-full bg-white hover:bg-accent transition-colors h-10 w-10 md:h-12 md:w-12">
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <motion.div className="flex justify-center gap-2 items-center" variants={fadeUp} initial={false}>
                                    {Array.from({ length: totalProductPages }).map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setProductPageReset(idx)}
                                            className={`h-2 rounded-full transition-all duration-300 ${idx === productPage ? "w-8 bg-accent" : "w-2 bg-[#2d2875]/50"}`}
                                            aria-label={`Go to products page ${idx + 1}`}
                                        />
                                    ))}
                                </motion.div>
                                <Button variant="outline" size="icon" onClick={handleProductNext} className="rounded-full bg-white hover:bg-accent transition-colors h-10 w-10 md:h-12 md:w-12">
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </motion.div>
                        </div>
                    </TabsContent>

                    {/* SOĞUK ODALAR */}
                    <TabsContent value="soguk-odalar" className="space-y-8">
                        <div className="relative">
                            <motion.div
                                key={coldGridKey}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-7xl"
                                variants={container}
                                initial="hidden"
                                animate="show"
                            >
                                {visibleColdRooms.map((room, i) => (
                                    <motion.div key={`${room.title}-${coldStart + i}`} variants={fadeUp} className="h-full">
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
                                <Button variant="outline" size="icon" onClick={handleColdRoomPrev} className="rounded-full bg-white hover:bg-accent transition-colors h-10 w-10 md:h-12 md:w-12">
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>

                                <motion.div className="flex justify-center items-center gap-2" variants={fadeUp} initial={false}>
                                    {Array.from({ length: totalColdPages }).map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setColdPageReset(idx)}
                                            className={`h-2 rounded-full transition-all duration-300 ${idx === coldPage ? "w-8 bg-accent" : "w-2 bg-[#2d2875]/50"}`}
                                            aria-label={`Go to cold rooms page ${idx + 1}`}
                                        />
                                    ))}
                                </motion.div>

                                <Button variant="outline" size="icon" onClick={handleColdRoomNext} className="rounded-full bg-white hover:bg-accent transition-colors h-10 w-10 md:h-12 md:w-12">
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
