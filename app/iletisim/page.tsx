"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function IletisimPage() {
    // basit controlled form state
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // mail içeriğini hazırla
        const subject = "Teklif / Bilgi Talebi (Web Sitesi)"
        const bodyLines = [
            "Merhaba Frigocan,",
            "",
            "Web sitesi üzerinden iletişime geçiyorum.",
            "",
            `Ad Soyad: ${name}`,
            `E-posta: ${email}`,
            `Telefon: ${phone || "-"}`,
            "",
            "Mesajım:",
            message || "-",
            "",
            "Lütfen tarafıma dönüş yapabilir misiniz?",
        ]

        const body = bodyLines.join("\n")

        // mailto linkini oluştur
        const mailtoLink = `mailto:info@frigocan.com?subject=${encodeURIComponent(
            subject,
        )}&body=${encodeURIComponent(body)}`

        // kullanıcıda varsayılan mail client'ı aç
        window.location.href = mailtoLink
    }

    return (
        <main className="min-h-screen bg-background text-white">
            <Header />

            {/* HERO / CONTACT SECTION */}
            <section className="relative min-h-[600px] flex items-center overflow-hidden">
                {/* Arka plan degrade */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent transform skew-x-12 origin-top-right" />
                    </div>
                </div>

                {/* Accent blok solda */}
                <div className="absolute top-0 left-0 w-1/3 h-full bg-accent transform -skew-x-12 origin-top-left -translate-x-32" />

                {/* İçerik */}
                <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 w-full">
                    {/* grid: mobil tek kolon, md+ iki kolon */}
                    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
                        {/* SOL BLOK: iletişim bilgileri */}
                        <div className="max-w-xl">
                            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
                                İletişim
                            </h1>

                            <p className="text-[12px] sm:text-[13px] md:text-base text-white/90 leading-relaxed mb-8 md:mb-10">
                                Soğuk hava deposu projeleri, endüstriyel soğutma çözümleri veya teknik servis talepleri için bize
                                ulaşın. Ekibimiz kısa sürede dönüş yapar.
                            </p>

                            <div className="space-y-6 text-white/95">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-white/10 border border-white/20 flex-shrink-0">
                                        <Phone className="h-4 w-4 md:h-5 md:w-5 text-white" />
                                    </div>
                                    <div className="text-[12px] sm:text-[13px] md:text-base leading-relaxed">
                                        <div className="font-semibold text-white">Telefon</div>
                                        <div className="text-white/80">+90 (212) 000 00 00</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-white/10 border border-white/20 flex-shrink-0">
                                        <Mail className="h-4 w-4 md:h-5 md:w-5 text-white" />
                                    </div>
                                    <div className="text-[12px] sm:text-[13px] md:text-base leading-relaxed break-all">
                                        <div className="font-semibold text-white">E-posta</div>
                                        <div className="text-white/80">info@frigocan.com</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-white/10 border border-white/20 flex-shrink-0">
                                        <MapPin className="h-4 w-4 md:h-5 md:w-5 text-white" />
                                    </div>
                                    <div className="text-[12px] sm:text-[13px] md:text-base leading-relaxed">
                                        <div className="font-semibold text-white">Adres</div>
                                        <div className="text-white/80">
                                            Şişli / İstanbul <br className="hidden sm:block" />
                                            Türkiye
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* alt açıklama */}
                            <p className="mt-10 text-[11px] sm:text-[12px] md:text-sm text-white/60 leading-relaxed max-w-md">
                                7/24 teknik servis hattımız mevcuttur. Arıza / acil durum için telefon ile ulaşmanız önerilir.
                            </p>
                        </div>

                        {/* SAĞ BLOK: form kartı */}
                        <div className="w-full">
                            <div className="bg-white text-accent rounded-xl shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)] border border-white/20 p-5 sm:p-6 md:p-8 max-w-lg md:max-w-none mx-auto">
                                <h2 className="text-base sm:text-lg md:text-xl font-bold text-accent mb-4 md:mb-6 leading-tight">
                                    Teklif / Bilgi Talep Formu
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                                    {/* Ad Soyad */}
                                    <div className="flex flex-col">
                                        <label className="text-[11px] sm:text-xs md:text-sm font-medium text-accent/80 mb-1">
                                            Ad Soyad
                                        </label>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-[12px] sm:text-[13px] md:text-base text-accent outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Adınız Soyadınız"
                                            required
                                        />
                                    </div>

                                    {/* E-posta */}
                                    <div className="flex flex-col">
                                        <label className="text-[11px] sm:text-xs md:text-sm font-medium text-accent/80 mb-1">
                                            E-posta
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-[12px] sm:text-[13px] md:text-base text-accent outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="ornek@firma.com"
                                            required
                                        />
                                    </div>

                                    {/* Telefon */}
                                    <div className="flex flex-col">
                                        <label className="text-[11px] sm:text-xs md:text-sm font-medium text-accent/80 mb-1">
                                            Telefon
                                        </label>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-[12px] sm:text-[13px] md:text-base text-accent outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="+90 ___ ___ __ __"
                                        />
                                    </div>

                                    {/* Mesaj */}
                                    <div className="flex flex-col">
                                        <label className="text-[11px] sm:text-xs md:text-sm font-medium text-accent/80 mb-1">
                                            Mesajınız
                                        </label>
                                        <textarea
                                            className="w-full min-h-[100px] rounded-lg border border-gray-300 bg-white px-3 py-2 text-[12px] sm:text-[13px] md:text-base text-accent outline-none resize-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60 transition"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Kurdurmak istediğiniz soğuk oda tipi, m², ürün tipi vb..."
                                        />
                                    </div>

                                    {/* Gönder butonu */}
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 rounded-lg bg-accent text-white font-medium text-[13px] sm:text-sm md:text-base py-2.5 md:py-3 border border-gray-300 hover:bg-accent/90 active:scale-[0.99] transition"
                                    >
                                        Gönder
                                        <Send className="h-4 w-4 md:h-5 md:w-5" />
                                    </button>

                                    {/* KVKK / not */}
                                    <p className="text-[10px] sm:text-[11px] md:text-xs text-accent/60 leading-relaxed text-center">
                                        Formu göndererek iletişim için tarafınıza dönüş yapılmasını kabul etmiş olursunuz.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Harita / lokasyon bölümü */}
                    <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                        {/* küçük açıklama */}
                        <div className="text-white max-w-xl">
                            <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-4 leading-tight">
                                Üretim Tesisi & Merkez Ofis
                            </h3>
                            <p className="text-[12px] sm:text-[13px] md:text-base text-white/80 leading-relaxed mb-4">
                                Soğuk hava deposu panel imalatı, kapı üretimi ve endüstriyel soğutma montaj süreçlerimiz bu tesiste
                                yürütülmektedir. İsterseniz randevu ile yerinde keşif planlayabiliriz.
                            </p>

                            <div className="text-[12px] sm:text-[13px] md:text-base text-white/90 leading-relaxed">
                                Şişli / İstanbul <br />
                                Türkiye
                            </div>
                        </div>

                        {/* HARİTA */}
                        <div className="rounded-xl overflow-hidden border border-white/20 shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)] bg-white/5 backdrop-blur-[1px] min-h-[220px] sm:min-h-[260px] md:min-h-[300px] relative">
                            <iframe
                                title="Şişli / İstanbul Harita Konumu"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.187888481418!2d28.9833008!3d41.0604905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab74ac9ed2afb%3A0x9dfbc5f3867be3c3!2zxLBzdGFuYnVsIFXFn2nDp2xwLCDFnmxpxZ9saQ!5e0!3m2!1str!2str!4v0000000000000"
                                className="absolute inset-0 w-full h-full"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>

                {/* Parlama efekti */}
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                </div>
            </section>

            <Footer />
        </main>
    )
}
