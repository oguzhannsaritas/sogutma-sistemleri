import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function KurumsalPage() {
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
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            Frigocan Soğutma
                        </h1>

                        <div className="space-y-6 text-white/95 text-lg md:text-xl leading-relaxed">
                            <p>
                                Endüstriyel soğutma alanında faaliyet göstermekte olup, anahtar teslim soğuk hava deposu, montaj, montaj
                                sonrası teknik servislik konularında uzman mühendis ve deneyimli kadrosuyla hizmet vermektedir.
                            </p>

                            <p>
                                Gıda muhafazası ve klimatik test odaları ile hizmet verdiği firmalar portföyünde; savunma sanayinin öncü
                                kuruluşları ve her türlü gıda üreticileri, toptancıları, zincir marketler yer almaktadır.
                            </p>

                            <p>
                                Müşterilerine beklentilerinin de üzerinde kaliteli hizmet sunmayı ilke edinen Frigocan Soğutma; yurt içi
                                ve yurt dışı projelerinde her zaman bu ilkeler doğrultusunda hareket eder.
                            </p>

                            <p>
                                Gelişmiş teknolojiyi ustalıkla kullanmak suretiyle ihtiyaçları zamanında ve eksiksiz olarak karşılayan
                                firmamız, kusursuz bir şekilde hizmet vermeyi ilk önceliği olarak kabul eder.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Decorative pattern overlay */}
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                </div>
            </section>

            {/* Additional Info Section */}
            <section className="py-16 md:py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">Kalite Güvencesi</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                En son teknoloji makineler ve uluslararası kalite standartları ile güvenilir çözümler sunuyoruz.
                            </p>
                        </div>

                        <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">Uzman Kadro</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Deneyimli mühendis ve teknik ekibimiz ile 7/24 hizmet ve destek sağlıyoruz.
                            </p>
                        </div>

                        <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">Geniş Portföy</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Yurt içi ve yurt dışında yüzlerce başarılı proje ile sektörde lider konumdayız.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
