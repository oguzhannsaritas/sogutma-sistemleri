"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, X } from "lucide-react"
import { motion, useAnimation, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

// Framer Motion easing tipi için tuple
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
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: EASE },
    },
}

export function Footer() {
    const ref = useRef(null)
    const inView = useInView(ref, { amount: 0.3 })
    const controls = useAnimation()
    const reduce = useReducedMotion() ?? false

    // WhatsApp floating butonu kontrolü
    const [showWhatsApp, setShowWhatsApp] = useState(true)

    useEffect(() => {
        if (reduce) {
            controls.set("show")
            return
        }
        controls.start(inView ? "show" : "hidden")
    }, [inView, controls, reduce])

    return (
        <footer
            className="snap-start snap-always md:pt-16 relative overflow-hidden pt-16 pb-8"
            ref={ref}
        >
            {/* Arka plan layer */}
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
                initial="hidden"
                animate={controls}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent transform skew-x-12 origin-top-right"></div>
                    </div>
                </div>
            </motion.div>

            {/* Accent blok */}
            <div className="absolute top-0 left-0 w-1/3 h-full bg-accent transform -skew-x-12 origin-top-left -translate-x-32"></div>

            {/* İçerik */}
            <motion.div
                className="container mx-auto px-4 relative z-10 text-white"
                variants={maybe(reduce) ?? container}
                initial="hidden"
                animate={controls}
            >
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <motion.div variants={maybe(reduce) ?? fadeUp}>
                        <div className="mb-6">
                            <img src={"/logo.jpg"} className="object-cover w-50 h-24 rounded-lg" alt={"Logo"} />
                        </div>
                        <div className="space-y-3 text-sm">
                            <p>
                                <strong>Merkez:</strong> İnönü Mah. Dolapdere Cad. No: 48
                                <br />
                                343730 Şişli / İSTANBUL
                            </p>
                            <p>
                                <strong>Fabrika:</strong> Organize Sanayi Bölgesi 55. Cadde No:18
                                <br />
                                Melikgazi / KAYSERİ
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                +90 212 00 00 00
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                +90 000 000 00 00 (Whatsapp)
                            </p>
                            <p className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                info@frigocan.com.tr
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={maybe(reduce) ?? fadeUp}>
                        <h3 className="font-bold text-lg mb-4">Hakkımızda</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Misyon & Vizyon
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Kalite Politikası
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Sertifikalar
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Üyesi Olduğumuz Dernek ve Kuruluşlar
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    İnsan Kaynakları
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Haberler
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Kişisel Verilerin Korunması Kanunu
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Çerezler (Cookies) Politikası
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Kariyerinizi Tamgüç ile Şekillendirin
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div variants={maybe(reduce) ?? fadeUp}>
                        <h3 className="font-bold text-lg mb-4">Soğuk Hava Deposu</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Soğuk Oda Panelleri
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Soğuk Oda Kapıları
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Soğutma Cihazları
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Soğuk Oda Rafları
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Nemlendirme Cihazları
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Konteyner Soğuk Hava Deposu
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    PVC Şerit Perdeler
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Yükleme Ve Boşaltma Sistemleri
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div variants={maybe(reduce) ?? fadeUp}>
                        <h3 className="font-bold text-lg mb-4">Soğuk Muhafaza</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Donmuş Muhafaza Soğuk Oda
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Şok Dondurma
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    İşleme Alanları
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Konteyner Tipi Soğuk Depo
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-gray-300 transition-colors">
                                    Morg Odaları
                                </Link>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <h3 className="font-bold text-lg mb-4">Online Katalog</h3>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-sm hover:text-gray-300 transition-colors"
                            >
                                <span>📖</span>
                                Kataloğu İncele
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <motion.div className="border-t border-white/20 pt-8" variants={maybe(reduce) ?? fadeUp}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-4">
                            <span className="text-sm">Bizi sosyal medyada takip edin</span>
                            <div className="flex gap-3">
                                <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                    <Instagram className="h-5 w-5" />
                                </Link>
                                <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                    <Facebook className="h-5 w-5" />
                                </Link>
                                <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                    <Twitter className="h-5 w-5" />
                                </Link>
                                <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                    <Youtube className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <img src="/tse-certificate.jpg" alt="TSE" className="h-12 object-contain bg-white p-2 rounded" />
                            <img
                                src="/iso-9001-certificate.jpg"
                                alt="ISO 9001"
                                className="h-12 object-contain bg-white p-2 rounded"
                            />
                            <img src="/ce-certificate.jpg" alt="CE" className="h-12 object-contain bg-white p-2 rounded" />
                            <img
                                src="/placeholder.svg?height=50&width=80"
                                alt="Quality"
                                className="h-12 object-contain bg-white p-2 rounded"
                            />
                            <img
                                src="/placeholder.svg?height=50&width=80"
                                alt="ISO"
                                className="h-12 object-contain bg-white p-2 rounded"
                            />
                            <img
                                src="/placeholder.svg?height=50&width=80"
                                alt="TSE HYB"
                                className="h-12 object-contain bg-white p-2 rounded"
                            />
                        </div>
                    </div>

                    <div className="mt-8 text-center text-sm text-white/70">
                        <p>© 2025 FRİGOCAN - Tüm Hakkı Saklıdır.</p>
                        <p className="mt-2">Web Tasarımı: Medyator İnteraktif</p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Radial parıltı */}
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            </div>

            {/* WHATSAPP FLOATING BUTTON + KAPAT (X) */}
            {showWhatsApp && (
                <div className="fixed bottom-16 right-4 z-50 ">
                    {/* X butonu */}
                    <button
                        onClick={() => setShowWhatsApp(false)}
                        className="absolute -top-18 -right-2 bg-black/70 text-white rounded-full p-1 shadow-lg  z-50 hover:bg-black/90 transition-colors"
                        aria-label="Kapat"
                    >
                        <X className="h-4 w-4" />
                    </button>

                    {/* WhatsApp linki */}
                    <Link
                        href="https://wa.me/900000000000"
                        className="fixed bottom-16 right-4 bg-green-500 text-white p-4   rounded-full shadow-lg hover:bg-green-600 transition-colors "
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                    </Link>
                </div>
            )}
        </footer>
    )
}
