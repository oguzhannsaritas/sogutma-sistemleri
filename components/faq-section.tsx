"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion, useAnimation, useReducedMotion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

// TS hatasız easing tuple
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

export function FaqSection() {
    const ref = useRef(null)
    const controls = useAnimation()
    const inView = useInView(ref, { amount: 0.3 })
    const reduce = useReducedMotion() ?? false

    useEffect(() => {
        if (reduce) {
            controls.set("show")
            return
        }
        controls.start(inView ? "show" : "hidden")
    }, [inView, controls, reduce])

    return (
        <section
            ref={ref}
            className="snap-start snap-always min-h-screen py-12 md:py-16 lg:py-20 pb-6 flex items-center"
        >
            <div className="container mx-auto px-4 max-w-5xl w-full">
                {/* BAŞLIK BOYUTLARI GÜNCEL */}
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-8 -mt-24 md:mb-12"
                    initial="hidden"
                    animate={controls}
                    variants={maybe(reduce) ?? fadeUp}
                >
                    Merak ettikleriniz
                </motion.h2>

                <motion.div initial="hidden" animate={controls} variants={maybe(reduce) ?? container}>
                    <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4 pb-4">
                        <motion.div
                            variants={maybe(reduce) ?? fadeUp}
                            className="border border-gray-200  rounded-lg bg-white overflow-hidden"
                        >
                            <AccordionItem value="item-1" className="px-6 border-none">
                                {/* SORU BAŞLIĞI BOYUTLARI GÜNCEL */}
                                <AccordionTrigger className="text-base md:text-lg font-bold hover:no-underline text-left">
                                    Soğuk Hava Deposu Yatırımı Yapmak İsteyenler Nelere Öncelik Vermelidir?
                                </AccordionTrigger>
                                <AccordionContent className="text-base leading-relaxed space-y-5">
                                    <p>
                                        Soğuk hava deposu yatırımı yapmayı düşünenlerin ilk olarak <strong>ihtiyaç analizi</strong> yapması
                                        gerekir. Depoda hangi ürünlerin saklanacağı, kapasite ihtiyacı ve kullanım süresi gibi kriterler
                                        belirlenmelidir. Bunun yanında <strong>enerji verimliliği</strong> sağlayan yalıtım malzemeleri ve
                                        modern soğutma sistemleri tercih edilmelidir. Ayrıca yatırımın uzun ömürlü olması için{" "}
                                        <strong>servis desteği, bakım kolaylığı ve yedek parça temini</strong> de göz önünde
                                        bulundurulmalıdır.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>

                        <motion.div
                            variants={maybe(reduce) ?? fadeUp}
                            className="border border-gray-200 rounded-lg bg-white overflow-hidden"
                        >
                            <AccordionItem value="item-2" className="px-6 border-none">
                                <AccordionTrigger className="text-base md:text-lg font-bold hover:no-underline text-left">
                                    Soğuk Hava Deposu Tamiri Zor mudur?
                                </AccordionTrigger>
                                <AccordionContent className="text-base leading-relaxed">
                                    <p>
                                        Soğuk hava deposu tamiri, arızanın türüne ve sistemin karmaşıklığına bağlı olarak değişir. Basit
                                        arızalar hızlıca giderilebilirken, kompresör veya soğutma sistemi arızaları daha fazla uzmanlık
                                        gerektirir.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>

                        <motion.div
                            variants={maybe(reduce) ?? fadeUp}
                            className="border border-gray-200 rounded-lg bg-white overflow-hidden"
                        >
                            <AccordionItem value="item-3" className="px-6 border-none">
                                <AccordionTrigger className="text-base md:text-lg font-bold hover:no-underline text-left">
                                    Tohumların Korunması İçin Soğuk Oda İmalatı
                                </AccordionTrigger>
                                <AccordionContent className="text-base leading-relaxed">
                                    <p>
                                        Tohumların uzun süre canlılığını koruması için özel olarak tasarlanmış soğuk oda sistemleri
                                        kullanılır. Bu sistemler, düşük sıcaklık ve kontrollü nem seviyesi sağlayarak tohumların bozulmasını
                                        önler.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>

                        <motion.div
                            variants={maybe(reduce) ?? fadeUp}
                            className="border border-gray-200 rounded-lg bg-white overflow-hidden"
                        >
                            <AccordionItem value="item-4" className="px-6 border-none">
                                <AccordionTrigger className="text-base md:text-lg font-bold hover:no-underline text-left">
                                    Split Soğutma Sistemi
                                </AccordionTrigger>
                                <AccordionContent className="text-base leading-relaxed">
                                    <p>
                                        Split soğutma sistemleri, iç ve dış ünite olarak ikiye ayrılan, verimli ve sessiz çalışan soğutma
                                        çözümleridir. Küçük ve orta ölçekli soğuk odalar için idealdir.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>

                        <motion.div
                            variants={maybe(reduce) ?? fadeUp}
                            className="border border-gray-200 rounded-lg bg-white overflow-hidden"
                        >
                            <AccordionItem value="item-5" className="px-6 border-none">
                                <AccordionTrigger className="text-base md:text-lg font-bold hover:no-underline text-left">
                                    Soğuk Hava Depoları Sağlık Sektöründe Kullanılır mı?
                                </AccordionTrigger>
                                <AccordionContent className="text-base leading-relaxed">
                                    <p>
                                        Evet, soğuk hava depoları sağlık sektöründe aşılar, ilaçlar ve tıbbi malzemelerin saklanması için
                                        kritik öneme sahiptir. Özellikle aşı soğuk zincirleri için özel tasarlanmış sistemler kullanılır.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>

                        <motion.div
                            variants={maybe(reduce) ?? fadeUp}
                            className="border border-gray-200 rounded-lg bg-white overflow-hidden"
                        >
                            <AccordionItem value="item-6" className="px-6 border-none">
                                <AccordionTrigger className="text-base md:text-lg font-bold hover:no-underline text-left">
                                    Tamcold Soğutma Sistemleri Sizlere Neler Sunar?
                                </AccordionTrigger>
                                <AccordionContent className="text-base leading-relaxed">
                                    <p>
                                        Tamcold, endüstriyel ve ticari soğutma çözümleri sunan, yüksek kaliteli ürünler ve güvenilir servis
                                        hizmeti sağlayan bir markadır. Soğuk oda, soğuk hava deposu ve özel soğutma sistemleri konusunda
                                        uzmanlaşmıştır.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>

                        <motion.div
                            variants={maybe(reduce) ?? fadeUp}
                            className="border border-gray-200 rounded-lg bg-white overflow-hidden mb-4"
                        >
                            <AccordionItem value="item-7" className="px-6 border-none">
                                <AccordionTrigger className="text-base md:text-lg font-bold hover:no-underline text-left">
                                    Gıda Sektörü için Soğuk Hava Deposunun Önemleri
                                </AccordionTrigger>
                                <AccordionContent className="text-base leading-relaxed">
                                    <p>
                                        Gıda sektöründe soğuk hava depoları, ürünlerin tazeliğini korumak, bozulmayı önlemek ve gıda
                                        güvenliğini sağlamak için vazgeçilmezdir. Özellikle et, süt ürünleri, sebze ve meyve gibi hassas
                                        ürünler için kritik öneme sahiptir.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}
