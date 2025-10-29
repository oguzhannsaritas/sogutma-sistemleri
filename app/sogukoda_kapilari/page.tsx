"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"

export default function SogukOdaKapilariPage() {
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
                    {/* mobile: tek kolon (görsel üstte), md+: iki kolon (metin solda, görsel sağda) */}
                    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
                        {/* GÖRSEL - mobilde önce gelsin, ortalansın */}
                        <div className="order-1 md:order-2 w-full flex justify-center">
                            <div className="relative w-full max-w-md md:max-w-none aspect-[4/3] sm:aspect-[16/9] rounded-xl overflow-hidden border border-white/20 shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)]">
                                <Image
                                    src="/sogukodakapi.jpeg"
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

                        {/* METİN - mobilde görselden sonra gelsin */}
                        <div className="order-2 md:order-1 max-w-2xl text-white">
                            {/* Başlık */}
                            <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-8 mb-4 md:mb-5 leading-tight">
                                MENTEŞELİ ÇARPMA TİP KAPILAR
                            </h3>

                            {/* Liste 1 */}
                            <ul className="space-y-3 sm:space-y-4 text-[12px] sm:text-[13px] md:text-base text-white/95 leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Soğuk ,donmuş ve şok odalarında kullanılırlar.</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Kullanılacak oda tipine bağlı olarak kalınlıkları değişmektedir.</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>80 derece açılabilme özelliğine sahiptir.</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>70*100 cm ile 100*200 cm net geçiş aralıklarında imal edilebilirler.</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>
                                        Yüzel kaplaması panel ile aynı özelliktedir. polyester.pvc ve paslanmaz alternatifleri mevcuttur.
                                    </span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Menteşeli kapılarda ithal kilit menteşe kullanılmaktadır.</span>
                                </li>
                            </ul>

                            {/* Başlık 2 */}
                            <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-8 mb-4 md:mb-5 leading-tight">
                                SÜRGÜLÜ KAPILAR
                            </h3>

                            {/* Liste 2 */}
                            <ul className="space-y-3 sm:space-y-4 text-[12px] sm:text-[13px] md:text-base text-white/95 leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Soğuk, donmuş ve şok odalarında kullanılırlar.</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Kullanılacak oda tipine bağlı olarak kalınlıkları değişmektedir.</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Özel makara sistemi sayesinde pratik kullanım için uygundur.</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>100*200 cm ile 300*300 cm arasında değişik ebatlarda imal edilir.</span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                                    <span>Yüzey kaplaması polyester, pvc ve paslanmaz imal edilebilir.</span>
                                </li>
                            </ul>

                            {/* Açıklama bloğu */}
                            <div className="space-y-4 sm:space-y-5 text-[12px] sm:text-[13px] md:text-base text-white/95 leading-relaxed">
                                <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mt-8 mb-2 md:mb-4 leading-tight">
                                    SOĞUK DEPO KAPILARI
                                </h2>

                                <p>
                                    Soğuk hava depolarında kullanılan soğuk depo kapıları, çok büyük önem taşır. Çünkü bir soğuk hava
                                    deposunun dışarıya açıldığı tek nokta kapısıdır.
                                </p>

                                <p>
                                    Soğuk depo kapıları, soğuk depo duvarlarına monte edilirken kullanılan aksam ve malzemeler, kapının
                                    aynı zamanda depo için en zayıf nokta olması anlamına da gelir. Kapılar açılıp kapandığı esnada depo
                                    içine nüfuz eden sıcak hava, kapının kapanmasından sonra, büzüşür ve negatif basınç ya da defrostla
                                    ısınırarak pozitif basınç yaratır. İşte bu büyük soğuk depoların en önemli problemlerinin başında gelir.
                                    Genellikle ihmal edilen bu basınç, kapınızın yeterince sağlam olmaması durumunda ilerleyen zamanlarda
                                    oluşacak büyük sorunlara zemin hazırlar.
                                </p>

                                <p>
                                    Yeterince iyi ve sağlam bir kapı, depo duvarlarında ekstradan aşırı bir yüke neden olmamalıdır. Bu da
                                    kapının hafif olması gerektiği anlamına gelir. İdeal olan alüminyum profilden üretilen kapılardır.
                                </p>

                                <p>
                                    Alüminyum profilden üretilen depo kapıları, özel olarak sertleşme işleminden geçirilerek güçlü bir
                                    malzeme haline gelmesi sağlanır ancak aynı zamanda hafiftir. Özellikle çarpma tip kapı kullanıldığında
                                    çalışılan menteşe, kilit gibi malzemeler özel bir plastik türündne üretilir ki, yükle karşılaşıldığı
                                    anda kırılmaz ve esneme yaparak basınca karşı direnç gösterir.
                                </p>

                                <p>
                                    Eğer tercih edilen kapı, sürme tipi soğuk depo kapısı ise kapının üzerinde yürüdüğü ray, paslanmaz
                                    çelikten üretilir. Sürme tipi kapı kapatıldığı zaman, dört ayrı nokta üzerinden kapıyı sabitler.
                                </p>

                                <p>
                                    Genellikle kapı ve pencereler ısı yalıtımı sağlanmak için kullanılmaktadır. Hem dışarıdan gelen sesi,
                                    kokuyu ve tehlikelere karşı kapalı alanın korunmasını sağlar. Menteşe, kapıların pencerelerin açılması
                                    için gerekli olan bir aparattır. İki parçadan oluşur. Bu parçaların birisi sabit, diğeri ise
                                    hareketlidir. Menteşeler pencere ve kapıların özelliklerine ve ihtiyaca göre plastik ya da metalden
                                    üretilebilir. Kapı ya da pencereyi açmaya ve kapanmasına yaramaktadır. Bu açılış ve kapanış esnasında
                                    ise en önemli aşama alanda ısı kaybının olmamasıdır. Zor kapanan bir pencerenin ya da kapının arada
                                    geçen zaman kaybında ötürü ciddi bir ısı kaybına neden olabilir. Bir soğutma cihazında mevcut
                                    bulunan menteşenin arıza yapması demek hem ısı kaybına hem de daha yüksek performans sergileyeceği
                                    için maddi zararla sonuçlanabilir.
                                </p>

                                <p>
                                    Üstelik dolabın içerisinde kaybettiği ısı içeride bulunan malzemelere de zarar verecektir. Menteşeler
                                    çok çeşitli olarak üretilmektedir. Kapının ve pencerenin ağırlığına göre taşıma kapasiteleri
                                    hesaplanmalıdır. Bunun yanı sıra menteşeler sadece kapı ve pencerelere has bir parça değildir. Dolap
                                    kapaklarında, mobilyalarda, sandık, baza ve benzeri açılır kapanır her sistem için en gerekli kısım
                                    olarak da bilinmektedir. Üretim ve monte edilmeleri ise tamamen kullanılacak eşyanın özelliklerine
                                    göre seçilmesi gereklidir. Dolap kapağı için tercih edilecek menteşenin, kapılara takılanlardan
                                    kullanmak eşya için zarar doğurabilir. Bilinçli ve gerekli olanı seçmek ise eşyanın sağlam bir şekilde
                                    kullanım ömrünü uzatacaktır.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dekoratif parlama */}
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
