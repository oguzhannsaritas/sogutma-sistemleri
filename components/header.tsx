"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    const toggleDropdown = (key: string) => {
        setOpenDropdown(openDropdown === key ? null : key)
    }

    const menus = [
        {
            title: "ÜRÜNLER",
            key: "urunler",
            items: [
                { href: "/urunler/panel", label: "Panel Sistemleri" },
                { href: "/urunler/kapilar", label: "Soğuk Oda Kapıları" },
                { href: "/urunler/motorlar", label: "Soğutma Grupları" },
            ],
        },
        {
            title: "SOĞUK ODALAR",
            key: "soguk-odalar",
            items: [
                { href: "/soguk-odalar/endustriyel", label: "Endüstriyel Odalar" },
                { href: "/soguk-odalar/moduler", label: "Modüler Odalar" },
            ],
        },
        {
            title: "SOĞUK DEPO",
            key: "soguk-depo",
            items: [
                { href: "/soguk-depo/projeler", label: "Depo Projeleri" },
                { href: "/soguk-depo/kurulum", label: "Kurulum Hizmetleri" },
            ],
        },
        {
            title: "REFERANSLAR",
            key: "referanslar",
            items: [
                { href: "/referanslar/yurtici", label: "Yurtiçi" },
                { href: "/referanslar/yurtdisi", label: "Yurtdışı" },
            ],
        },
        {
            title: "PROJELER",
            key: "projeler",
            items: [
                { href: "/projeler/devam-eden", label: "Devam Eden" },
                { href: "/projeler/tamamlanan", label: "Tamamlanan" },
            ],
        },
    ]
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)


    return (
        <header className="sticky top-0 z-50 w-full  bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex h-24 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="relative h-20 w-64">
                            <Image src="/logo2.png" alt="Frigocan Soğutma" fill className="object-contain" priority />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-6 relative">
                        <Button asChild variant="ghost" size="sm">
                            <Link href="/kurumsal">KURUMSAL</Link>
                        </Button>

                        {menus.map((menu) => (
                            <div key={menu.key} className="relative">
                                {/* --- Menü butonu --- */}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => toggleDropdown(menu.key)}
                                    onMouseEnter={() => setHoveredMenu(menu.key)}
                                    onMouseLeave={() => setHoveredMenu(null)}
                                    className="flex items-center gap-1 transition-colors text-black"
                                >
                                    {menu.title}
                                    <ChevronDown
                                        size={16}
                                        className={`transition-all duration-200 ${
                                            openDropdown === menu.key
                                                ? hoveredMenu === menu.key
                                                    ? "rotate-180 text-white" // açık + hover → beyaz + döner
                                                    : "rotate-180 text-black" // açık ama hover yok → siyah + döner
                                                : hoveredMenu === menu.key
                                                    ? "text-white" // sadece hover → beyaz
                                                    : "text-gray-800" // normal → siyah
                                        }`}
                                    />
                                </Button>




                                {/* --- Dropdown --- */}
                                <AnimatePresence>
                                    {openDropdown === menu.key && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-md overflow-hidden"
                                        >
                                            {menu.items.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-white transition"
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}

                        <Button asChild variant="ghost" size="sm">
                            <Link href="/iletisim">İLETİŞİM</Link>
                        </Button>
                        <Button asChild variant="ghost" size="sm">
                            <Link href="/bayilik">BAYİLİK</Link>
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden py-4 space-y-2 overflow-hidden"
                        >
                            <Link href="/kurumsal" className="block py-2 text-sm font-medium">
                                KURUMSAL
                            </Link>

                            {menus.map((menu) => (
                                <div key={menu.key}>
                                    <button
                                        onClick={() => toggleDropdown(menu.key)}
                                        className="flex w-full justify-between items-center py-2 text-sm font-medium"
                                    >
                                        {menu.title}
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform ${openDropdown === menu.key ? "rotate-180" : ""}`}
                                        />
                                    </button>

                                    <AnimatePresence>
                                        {openDropdown === menu.key && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="pl-4 space-y-1 overflow-hidden"
                                            >
                                                {menu.items.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className="block py-1 "
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}

                            <Link href="/iletisim" className="block py-2 text-sm font-medium">
                                İLETİŞİM
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}
