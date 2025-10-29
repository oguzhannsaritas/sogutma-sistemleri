import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ProjelerPage() {
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
                            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-white mb-6 md:mb-8 leading-tight">
                               Projeler
                            </h1>

                            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-balance text-white/95 leading-relaxed">
                                <p>
                                    Frigocan Soğutma Sistemleri olarak, gıdaların sağlıklı ve güvenli bir şekilde korunmasının hayati önem taşıdığının bilincindeyiz. Bu nedenle; ister küçük çaplı bir proje, isterse büyük bir endüstriyel tesis olsun, tüm projelerimize aynı özen ve hassasiyetle yaklaşıyoruz.

                                </p>

                                <p>
                                    Sunduğumuz panel ve soğutma sistemleriyle; kalite, verimlilik ve sürdürülebilirliği ön planda tutarak, gıda güvenliğine katkı sağlıyoruz. Alanında uzman ekibimizle, her müşterimize özel çözümler üretiyor, projelerimizi zamanında ve en yüksek kalite standartlarında tamamlıyoruz.

                                </p>

                                <p>
                                    Bugüne kadar yurt içinde ve dünyanın dört bir yanında hizmet verdiğimiz binlerce müşterimizin memnuniyeti, bize duyulan güvenin bir göstergesidir. Bu güvenle, sektörümüzde öncü olmaya ve her geçen gün daha iyiye ulaşmaya devam ediyoruz.
                                </p>

                            </div>
                        </div>

                        {/* SAĞ: görsel (mobilde metnin altında çıkacak çünkü grid tek kolona düşüyor) */}
                        <div className="w-full">
                            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-xl overflow-hidden border border-white/20 shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)]">
                                <Image
                                    src="/projeler.jpeg" // public/kurumsal-hero.jpg koy
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
