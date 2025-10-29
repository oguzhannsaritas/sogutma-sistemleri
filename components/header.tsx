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
                { href: "/panel_sistemleri", label: "Panel Sistemleri" },
                { href: "/sogukoda_kapilari", label: "Soğuk Oda Kapıları" },
                { href: "/sogutma_gruplari", label: "Soğutma Grupları" },
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
                { href: "/projeler", label: "Projeler" },
                { href: "/kurulum_hizmetleri", label: "Kurulum Hizmetleri" },
            ],
        },
    ]

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
            <div className="container mx-auto px-4">
                {/* TOP BAR */}
                <div className="flex h-16 md:h-20 lg:h-24 items-center justify-between">
                    {/* LOGO */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="relative h-12 w-32 sm:h-16 sm:w-48 md:h-20 md:w-64">
                            <Image
                                src="/logo2.png"
                                alt="Frigocan Soğutma"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden lg:flex items-center gap-4 xl:gap-6 relative">
                        {/* ANA SAYFA */}
                        <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="group px-3 py-2 rounded-md bg-transparent text-black hover:bg-accent hover:text-white transition-colors"
                        >
                            <Link
                                href="/"
                                className="text-sm font-medium leading-none"
                            >
                                ANA SAYFA
                            </Link>
                        </Button>

                        {/* KURUMSAL */}
                        <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="group px-3 py-2 rounded-md bg-transparent text-black hover:bg-accent hover:text-white transition-colors"
                        >
                            <Link
                                href="/kurumsal"
                                className="text-sm font-medium leading-none"
                            >
                                KURUMSAL
                            </Link>
                        </Button>

                        {/* SOĞUK ODALAR */}
                        <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="group px-3 py-2 rounded-md bg-transparent text-black hover:bg-accent hover:text-white transition-colors"
                        >
                            <Link
                                href="/sogukodalar"
                                className="text-sm font-medium leading-none"
                            >
                                SOĞUK ODALAR
                            </Link>
                        </Button>

                        {/* DROPDOWN MENÜLER */}
                        {menus.map((menu) => (
                            <div key={menu.key} className="relative">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => toggleDropdown(menu.key)}
                                    className="group flex items-center gap-1 px-3 py-2 rounded-md bg-transparent text-black hover:bg-accent hover:text-white transition-colors"
                                >
                                    <span className="text-sm font-medium leading-none">{menu.title}</span>
                                    <ChevronDown
                                        size={16}
                                        className={`transition-all duration-200 text-black group-hover:text-white ${
                                            openDropdown === menu.key ? "rotate-180" : ""
                                        }`}
                                    />
                                </Button>

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

                        {/* İLETİŞİM */}
                        <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="group px-3 py-2 rounded-md bg-transparent text-black hover:bg-accent hover:text-white transition-colors"
                        >
                            <Link
                                href="/iletisim"
                                className="text-sm font-medium leading-none"
                            >
                                İLETİŞİM
                            </Link>
                        </Button>
                    </nav>

                    {/* MOBILE MENU TOGGLE */}
                    <button
                        className="lg:hidden p-2 text-black"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* MOBILE NAV DROPDOWN */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden py-4 space-y-2 overflow-hidden"
                        >
                            <Link
                                href="/"
                                className="block py-2 text-sm font-medium text-black"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                ANA SAYFA
                            </Link>

                            <Link
                                href="/kurumsal"
                                className="block py-2 text-sm font-medium text-black"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                KURUMSAL
                            </Link>

                            <Link
                                href="/sogukodalar"
                                className="block py-2 text-sm font-medium text-black"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                SOĞUK ODALAR
                            </Link>

                            {menus.map((menu) => (
                                <div key={menu.key}>
                                    <button
                                        onClick={() => toggleDropdown(menu.key)}
                                        className="flex w-full justify-between items-center py-2 text-sm font-medium text-black"
                                    >
                                        {menu.title}
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform text-black ${
                                                openDropdown === menu.key ? "rotate-180" : ""
                                            }`}
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
                                                        className="block py-1 text-sm text-black"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}

                            <Link
                                href="/iletisim"
                                className="block py-2 text-sm font-medium text-black"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                İLETİŞİM
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}
