import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {CheckCircle2} from "lucide-react";

export default function SogukOdalarPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section with Corporate Info */}
            <section className="relative min-h-[600px] flex items-center overflow-hidden">
                {/* Background with diagonal shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent transform skew-x-12 origin-top-right"></div>
                    </div>
                </div>

                {/* Decorative diagonal accent */}
                <div className="absolute top-0 left-0 w-1/3 h-full bg-accent transform -skew-x-12 origin-top-left -translate-x-32"></div>

                {/* Content */}
                <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
                    {/* grid: mobilde tek kolon (metin üstte img altta), md'de 2 kolon (metin solda img sağda) */}
                    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                        {/* SOL: metin */}
                        <div className="max-w-2xl">
                            <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-8 mb-4 md:mb-5 leading-tight">
                                Soğuk hava deposu başlıca kullanım alanlarını şöyledir:
                            </h3>

                            {/* Teknik Bilgiler listesi */}
                            <ul className="space-y-3 sm:space-y-4 text-[12px] sm:text-[13px] md:text-base text-white/95 leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Sebze, meyve ve her türlü gıda ürünlerinin toplama merkezleri</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Süt ve süt ürünleri işletmeleri</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Balık ve deniz mahsulleri satış merkezleri</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Restoran ve otel işletmeleri</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Dondurulmuş gıda ve dondurma işletmecileri</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Pastane, kafe ve taze ürün servisi yapan işletmeler</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Yurt ve konaklama merkezleri</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Buzhane ve soğuk depolama ihtiyacı olan süpermarketler</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Et ve et ürünleri toplama ve satış merkezleri</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Laboratuvar hizmetleri ve hastane malzemeleri satış merkezleri</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Hastane ilaç saklama merkezleri</span>
                                </li>
                            </ul>
                        </div>

                        {/* SAĞ: görsel (mobilde metnin altında çıkacak çünkü grid tek kolona düşüyor) */}
                        <div className="w-full">
                            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-xl overflow-hidden border border-white/20 shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)]">
                                <Image
                                    src="/soguk_oda_resim.jpeg" // public/kurumsal-hero.jpg koy
                                    alt="Frigocan üretim tesisi / soğuk hava deposu uygulaması"
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="object-cover"
                                    priority
                                />
                                {/* hafif overlay shine, görseli kurumsal renge bağlayalım */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-white/5 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative pattern overlay */}
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
