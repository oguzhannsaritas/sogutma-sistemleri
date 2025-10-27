"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { motion, useAnimation, useReducedMotion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const EASE = [0.22, 1, 0.36, 1]
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

export function BlogSection() {
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

    const blogPosts = [
        {
            title: "Soğuk Hava Deposu Servisi",
            image: "/hvac-technicians-working.jpg",
        },
        {
            title: "Merkezi Soğutma Sistemleri",
            image: "/industrial-cooling-units.jpg",
        },
        {
            title: "Odanın Nemi Nasıl Artar?",
            image: "/humidity-meter-temperature.jpg",
        },
    ]

    return (
        <section ref={ref} className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-5xl font-bold text-accent mb-12"
                    initial="hidden"
                    animate={controls}
                    variants={maybe(reduce) ?? fadeUp}
                >
                    Blog
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    initial="hidden"
                    animate={controls}
                    variants={maybe(reduce) ?? container}
                >
                    {blogPosts.map((post, index) => (
                        <motion.div key={index} variants={maybe(reduce) ?? fadeUp}>
                            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                                <CardHeader className="p-0">
                                    <div className="aspect-video relative">
                                        <img
                                            src={post.image || "/placeholder.svg"}
                                            alt={post.title}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-4">{post.title}</h3>
                                </CardContent>
                                <CardFooter className="p-6 pt-0">
                                    <Button variant="ghost" className="group">
                                        Blog detayı
                                        <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
