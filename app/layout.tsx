import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Frigocan Soğutma - Panel & Soğutma Sistemleri",
    description: "Soğuk hava depoları ve soğutma sistemleri konusunda uzman çözümler",
    generator: "v0.app",
    icons: {
        icon: "/logo.jpg",
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="tr">
        <body className={`font-sans antialiased`}>{children}</body>
        </html>
    )
}
