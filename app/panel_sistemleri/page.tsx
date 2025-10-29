"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"

export default function PanelSistemleriPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero / Ürün açıklaması */}
            <section className="relative min-h-[600px] flex items-center overflow-hidden">
                {/* Arka plan degrade */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent transform skew-x-12 origin-top-right"></div>
                    </div>
                </div>

                {/* Accent blok */}
                <div className="absolute top-0 left-0 w-1/3 h-full bg-accent transform -skew-x-12 origin-top-left -translate-x-32"></div>

                {/* Content */}
                <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
                    {/* mobile: tek kolon / md+: iki kolon */}
                    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                        {/* SOL: metin */}
                        <div className="max-w-2xl">
                            {/* Ana başlık */}
                            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
                                Soğuk Oda Panelleri
                            </h1>

                            {/* Açıklama blokları */}
                            <div className="space-y-4 sm:space-y-5 text-[12px] sm:text-[13px] md:text-base text-white/95 leading-relaxed">
                                <p>
                                    Oluklu Sandviç Paneller, yüzey sacına özel form verilerek mukavemeti artırılmış, yüksek dayanım ve
                                    üstün yalıtım sağlayan panel sistemleridir. Genellikle endüstriyel soğuk depo uygulamalarında tercih
                                    edilen oluklu paneller, 111 cm standart en ile ve kilitli geçme sistemine sahip olarak
                                    üretilmektedir.
                                </p>

                                <p>
                                    Formlu yüzey yapısı sayesinde yük taşıma kapasitesi arttırılmıştır. Panelin iç kısmında kullanılan
                                    yüksek yoğunluklu izolasyon dolgusu, ısı yalıtımı, ses yalıtımı, yangın dayanımı ve su emme direnci
                                    açısından üst düzey performans sağlar.
                                </p>

                                {/* Alt başlık: Kilit Detayı */}
                                <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 leading-tight">
                                    Kilit Detayı
                                </h2>

                                <p>
                                    Sandviç paneller, çift geçmeli kilit sistemi sayesinde birbirine tam olarak kenetlenir. Bu sistem,
                                    hem kolay montaj sağlar hem de ısı ve hava kaçaklarını engelleyerek maksimum yalıtım performansı
                                    sunar.
                                </p>

                                {/* Alt başlık: Birleşim Detayı */}
                                <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 leading-tight">
                                    Birleşim Detayı
                                </h2>

                                <p>
                                    Birleşim noktaları, panelin formlu yüzey yapısıyla tam uyumlu olacak şekilde tasarlanmıştır. Böylece
                                    hem mekanik dayanım korunur hem de paneller arasında homojen bir yalıtım yüzeyi elde edilir.
                                </p>
                            </div>

                            {/* Teknik Bilgiler başlığı */}
                            <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-8 mb-4 md:mb-5 leading-tight">
                                Teknik Bilgiler
                            </h2>

                            {/* Teknik Bilgiler listesi */}
                            <ul className="space-y-3 sm:space-y-4 text-[12px] sm:text-[13px] md:text-base text-white/95 leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Yüksek Yoğunluklu Yalıtım Dolgusu ile mükemmel ısı ve ses yalıtımı</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Su Emme Direnci sayesinde nemden etkilenmeyen yapı</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Yangın Performansı ile güvenli ortamlar</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Form Verilmiş Yüzey Sacı ile artırılmış panel mukavemeti</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Kolay ve Hızlı Montaj imkanı</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>111 cm Genişlikte, Kilitli Sistem</span>
                                </li>
                            </ul>
                        </div>

                        {/* SAĞ: görsel */}
                        <div className="w-full">
                            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-xl overflow-hidden border border-white/20 shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)]">
                                <Image
                                    src="/panel.jpg"
                                    alt="Frigocan üretim tesisi / soğuk hava deposu uygulaması"
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="object-cover"
                                    priority
                                />
                                {/* hafif overlay renk katmanı */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-white/5 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dekoratif parlama */}
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                </div>
            </section>

            {/* Alt bilgi kartları */}


            <Footer />
        </main>
    )
}
