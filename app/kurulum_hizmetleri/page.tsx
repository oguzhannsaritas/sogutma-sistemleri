import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react";

export default function KurulumHizmetleriPage() {
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
                    {/* grid: mobilde tek kolon (metin üstte img altta), md'de 2 kolon */}
                    {/* önemli kısım: items-start yaptık */}
                    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
                        {/* SOL: metin */}
                        <div className="max-w-2xl">
                            <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-8 mb-4 md:mb-5 leading-tight">
                                Soğuk hava deposu kurulum süreci;
                            </h3>

                            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-xl text-white/95 leading-relaxed">
                                <p>
                                    Detaylı planlama, mühendislik hesapları ve enerji verimliliği dikkate alınarak yürütülmesi gereken çok aşamalı bir çalışmadır. Gıda, ilaç, tarım ve lojistik sektörlerinde ihtiyaç duyulan bu sistemler; ürünlerin tazeliğini korur, raf ömrünü uzatır ve maddi kayıpları önler. Bu kapsamlı rehberde, sıfırdan soğuk hava deposu kurulumunun tüm adımlarını detaylı olarak ele alıyoruz.
                                </p>
                            </div>

                            <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-8 mb-4 md:mb-5 leading-tight">
                                1.İhtiyaç Belirleme ve Alan Planlaması
                            </h3>

                            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-xl text-white/95 leading-relaxed">
                                <p>
                                    Kurulumun ilk adımı, deponun hangi amaçla kullanılacağını netleştirmektir. Soğutulacak ürünlerin türü, hedef sıcaklık aralığı, depo içi sirkülasyon ihtiyacı ve günlük işlem hacmi analiz edilerek;
                                </p>

                                <ul className="space-y-3 sm:space-y-4 text-[12px] sm:text-[13px] md:text-base text-white/95 leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Kaç adet soğuk oda olmalı?</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Her odanın kapasitesi ne kadar olmalı?</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Sıcaklık aralıkları ne olmalı?</span>
                                    </li>

                                    <p>
                                        gibi kritik planlamalar yapılır. Bu analizler projenin tüm mühendislik tasarımını doğrudan etkiler.
                                    </p>
                                </ul>
                            </div>

                            <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-8 mb-4 md:mb-5 leading-tight">
                                2.Uygun Lokasyon ve Arazi Seçimi
                            </h3>

                            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-xl text-white/95 leading-relaxed">
                                <p>
                                    Depo alanı seçiminde aşağıdaki unsurlar dikkate alınır ;
                                </p>

                                <ul className="space-y-3 sm:space-y-4 text-[12px] sm:text-[13px] md:text-base text-white/95 leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Nakliye ve lojistik hatlarına yakınlık.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Elektrik altyapısının yeterliliği.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Sel riski olmayan, sağlam zemin yapısı.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Belediyeden alınacak imar ve ruhsat izinlerine uygunluk.</span>
                                    </li>

                                    <p>
                                        Bu aşamada belediye, il çevre müdürlüğü ve gerekiyorsa Tarım İl Müdürlüğü'nden gerekli izin süreçleri başlatılır.
                                    </p>
                                </ul>
                            </div>

                            <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-8 mb-4 md:mb-5 leading-tight">
                                3.Mimari ve Mekanik Projelendirme
                            </h3>

                            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-xl text-white/95 leading-relaxed">
                                <p>
                                    Kurulum aşamasının en kritik bölümü proje çizimi ve mühendislik planlamasıdır. Bu planlamada;
                                </p>

                                <ul className="space-y-3 sm:space-y-4 text-[12px] sm:text-[13px] md:text-base text-white/95 leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Soğuk oda ebatları.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Zemin ve duvar yalıtım malzemeleri (örn: 10 cm poliüretan panel).</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Soğutma sistemi seçimi (freon, amonyak, CO2).</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Elektrik ve otomasyon altyapısı.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Kapı, raf, drenaj sistemleri.</span>
                                    </li>

                                    <p>
                                        gibi tüm detaylar profesyonel olarak projelendirilir. Yangın güvenliği, hava sirkülasyonu ve ısı kaybı senaryoları da bu aşamada planlanır.
                                    </p>
                                </ul>
                            </div>

                            <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-8 mb-4 md:mb-5 leading-tight">
                                4.İnşaat ve Yalıtım Uygulamaları
                            </h3>

                            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-xl text-white/95 leading-relaxed">
                                <p>
                                    Zemin hazırlanır, izolasyon plakaları döşenir ve drenaj eğimleri ayarlanır. Ardından:
                                </p>

                                <ul className="space-y-3 sm:space-y-4 text-[12px] sm:text-[13px] md:text-base text-white/95 leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Sandviç panellerle dış ve iç duvarlar oluşturulur.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Tavan montajı yapılır.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Kapılar ve havalandırma sistemleri monte edilir.</span>
                                    </li>

                                    <p>
                                        Kaliteli bir yalıtım, soğutma sistemine binen yükü azaltarak enerji tasarrufu sağlar.
                                    </p>
                                </ul>
                            </div>

                            <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-8 mb-4 md:mb-5 leading-tight">
                                5.Soğutma Sisteminin Montajı
                            </h3>

                            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-xl text-white/95 leading-relaxed">
                                <p>
                                    Soğuk hava deposunun kalbini oluşturan bu sistem, doğru kapasitede ve verimli seçilmelidir. Kurulumda aşağıdaki ekipmanlar entegre edilir:
                                </p>

                                <ul className="space-y-3 sm:space-y-4 text-[12px] sm:text-[13px] md:text-base text-white/95 leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Kompresör grubu.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Kondenser ünitesi (hava veya su soğutmalı.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Evaporatör (oda içi hava dolaşımı için).</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Soğutucu gaz borulama sistemi.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Otomatik kontrol ve alarm panelleri.</span>
                                    </li>

                                    <p>
                                        Sistem uzaktan izlenebilir ve sıcaklık-nem gibi veriler kayıt altına alınabilir.
                                    </p>
                                </ul>
                            </div>

                            <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-8 mb-4 md:mb-5 leading-tight">
                                6.Elektrik ve Otomasyon Entegrasyonu
                            </h3>

                            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-xl text-white/95 leading-relaxed">
                                <p>
                                    Tesisin tüm aydınlatması, fan motorları, sensörler, sıcaklık izleme üniteleri ve uyarı sistemleri bu aşamada devreye alınır. Soğuk oda kapılarının açık kalma süresi gibi veriler de sensörlerle kontrol edilir. İleri düzey projelerde merkezi kontrol panelleri veya mobil uygulama entegrasyonları yapılabilir.
                                </p>
                            </div>

                            <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-8 mb-4 md:mb-5 leading-tight">
                                7.Test, Devreye Alma ve Eğitim
                            </h3>

                            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-xl text-white/95 leading-relaxed">
                                <p>
                                    Kurulum sonrası şu işlemler gerçekleştirilir:
                                </p>

                                <ul className="space-y-3 sm:space-y-4 text-[12px] sm:text-[13px] md:text-base text-white/95 leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Soğutma sistemi testleri (sızdırmazlık, basınç, soğutma performansı).</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Isı izolasyonu kontrolü.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Alarm sistemlerinin doğrulanması.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Kullanıcı personeline sistem eğitimi.</span>
                                    </li>

                                    <p>
                                        Tüm bu adımlar başarıyla tamamlandığında depo kullanıma açılır.
                                    </p>
                                </ul>
                            </div>

                            <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-8 mb-4 md:mb-5 leading-tight">
                                8.Bakım ve Servis Planlaması
                            </h3>

                            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-xl text-white/95 leading-relaxed">
                                <p>
                                    Kurulum tamamlandıktan sonra düzenli bakım protokolleri oluşturulmalıdır:
                                </p>

                                <ul className="space-y-3 sm:space-y-4 text-[12px] sm:text-[13px] md:text-base text-white/95 leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Aylık evaporatör temizliği.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Mevsimlik gaz kontrolleri.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Yıllık enerji verimlilik denetimi.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Acil arıza müdahale sözleşmeleri.</span>
                                    </li>

                                    <p>
                                        Bu sayede sistem uzun ömürlü ve minimum enerji tüketimiyle çalışır.
                                    </p>
                                </ul>
                            </div>

                            <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-8 mb-4 md:mb-5 leading-tight">
                                Ortalama Kurulum Maliyeti (Örnek Tablo)
                            </h3>

                            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-xl text-white/95 leading-relaxed">
                                <p>Kalem	Ortalama Maliyet (₺)</p>

                                <ul className="space-y-3 sm:space-y-4 text-[12px] sm:text-[13px] md:text-base text-white/95 leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>İnşaat ve Panel Yalıtımı	1.200.000 ₺.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Soğutma Sistemleri	1.000.000 ₺.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Elektrik ve Otomasyon	300.000 ₺.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Projelendirme ve Ruhsat	200.000 ₺.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Test ve Devreye Alma	100.000 ₺.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Toplam	2.800.000 ₺.</span>
                                    </li>

                                    <p>
                                        Not: Maliyetler; kapasite, sıcaklık aralığı ve ekipman kalitesine göre değişiklik gösterir.
                                    </p>
                                </ul>
                            </div>

                            <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-8 mb-4 md:mb-5 leading-tight">
                                Neden Profesyonel Destek Almalısınız?
                            </h3>

                            <p className="text-white">
                                Soğuk hava deposu kurmak yalnızca inşa etmekten ibaret değildir.
                            </p>

                            <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-8 mb-4 md:mb-5 leading-tight">
                                Sıcaklık hassasiyeti yüksek ürünlerin korunması için;
                            </h3>

                            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-xl text-white/95 leading-relaxed">
                                <ul className="space-y-3 sm:space-y-4 text-[12px] sm:text-[13px] md:text-base text-white/95 leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Proje planlaması.</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Enerji verimliliği,</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Mevzuata uygunluk,</span>
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                        <span>Arıza önleme stratejileri</span>
                                    </li>

                                    <p className="mb-4">
                                        gibi tüm faktörlerin uzmanlıkla yönetilmesi gerekir. Deneyimsiz uygulamalar ciddi ürün kayıplarına ve yüksek enerji faturalarına yol açabilir.
                                    </p>
                                </ul>
                            </div>

                            <p className="text-white mb-4">
                                Soğuk Hava Deposu Kurulumunda Güvendiğiniz Çözüm Ortağı: Frigocan Soğutma
                                Eğer siz de ihtiyacınıza özel bir soğuk hava deposu kurmak istiyorsanız, deneyimli bir çözüm ortağı ile çalışmanız büyük avantaj sağlar.
                                Frigocan Soğutma, projelendirme aşamasından montaja, devreye almadan periyodik servise kadar tüm süreçlerde size özel çözümler sunar.
                            </p>

                            <p className="text-white">
                                Yüksek mühendislik kalitesi, enerji tasarruflu sistemler ve uzun ömürlü yalıtım malzemeleri ile donatılmış soğuk hava deposu tesisinizi kurmak için şimdi Frigocan Soğutma ile iletişime geçin.
                            </p>
                        </div>

                        {/* SAĞ: görsel */}
                        <div className="w-full flex flex-col items-center md:items-start">
                            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-xl overflow-hidden border border-white/20 shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)]">
                                <Image
                                    src="/kurumsal_hizmet.jpeg"
                                    alt="Frigocan üretim tesisi / soğuk hava deposu uygulaması"
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="object-cover"
                                    priority
                                />
                                {/* hafif overlay shine */}
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
