"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Users, Leaf, ChevronRight, Award, UserCheck, HeartHandshake, FileText, Download, Linkedin, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
    {
        id: "quality",
        label: "Kalite",
        icon: ShieldCheck,
        title: "Kalite Politikamız",
        description: (
            <>
                <p className="mb-4">
                    İbraş Kauçuk ailesi olarak;
                </p>
                <p className="mb-4">
                    Stratejik yönetim modeli ile ulusal ve uluslararası standartlara uygun, sürekli iyileştirme temelinde Kalite Yönetim Sistemlerini uygulayacağımızı ve beraberinde üretim proseslerini de iyileştirerek kurumsal mükemmelliğe doğru ilerleyeceğimizi,
                </p>
                <p className="mb-4">
                    Yasal yükümlülükler, yönetmelikler ve müşteri beklentilerine uygun, ürün kalite ve güvenliğini sağlamak için sıfır hata hedefiyle, zamanında ve etkin çözümler geliştireceğimizi,
                </p>
                <p className="mb-4">
                    Çalışanlarımızın organizasyonda toplam kalite konularında katılımına fırsat vererek, bireysel bilgi, beceri ve sorumluluk davranışlarını geliştirerek yaygınlaştıracağımızı, motivasyonu artırmak için yürütülen faaliyetlerde adil davranacağımızı,
                </p>
                <p className="mb-8">
                    Tüm paydaşlarımız ile iş birliğinde bulunmayı ve ilgili taraflara ait gizli bilgilerin korunmasına özen göstereceğimizi, Politika ve değerlerimiz doğrultusunda, gerekli kaynak ve organizasyonu sağlayarak, Toplam Kalite kavramını firmamızda sürdüreceğimizi taahhüt ederiz.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">İŞ GÜVENLİĞİ VE ÇEVRE POLİTİKASI</h3>
                <p className="mb-4">İbraş Kauçuk ailesi olarak;</p>
                <ul className="list-disc pl-5 space-y-2 mb-8 text-gray-300">
                    <li>Çevre, İş sağlığı ve Güvenliğine ilişkin uygulanabilir yasa, yönetmelik ve diğer gerekliliklere uymayı,</li>
                    <li>Çalışanların ve çalışan temsilcilerinin katılımı için ortam sağlamayı, sıfır iş kazası hedefiyle İş Sağlığı Güvenliği ve Çevre kültürünün oluşturulması için gerekli çalışmaları yapmayı,</li>
                    <li>Çevre, iş sağlığı ve güvenliği süreçlerimizde, düzenli risk değerlendirmesi ve raporlaması ile gelişim fırsatlarımızı belirlemeyi ve sürekli iyileştirmeyi,</li>
                    <li>Çalışanlarımızın ve çevrenin tehlikelerden korunması için tehlikeleri tanımlamayı, değerlendirmeyi ve bunlara karşı gerekli önlemleri alarak, kazalara ve sağlık bozulmalarına karşı mümkün olan her ortamda korumayı,</li>
                    <li>Üretimden ve diğer faaliyetlerden kaynaklanan tehlikeleri (toprakta zararlı değişiklikler, su kirliliği, gürültü emisyonları, aşırı su tüketimi) en aza indirmeyi, atıklardan doğan kirliliğin önlenmesi için çalışmalar yapmayı,</li>
                    <li>Çevre, İş Sağlığı ve Güvenliği ile ilgili konularda, çalışan farkındalığının arttırılması amacıyla eğitim faaliyetleri düzenlemeyi ve çalışanlarımızın katılımını sağlamayı,</li>
                    <li>Sürdürülebilir çevre için, yenilenebilir enerji kaynaklarına yönelmeyi ve enerji verimliliğini gözeterek her türlü israfın önlenmesi için çalışmalar yapmayı,</li>
                    <li>Çalışanlarımızın ve işyerimizin güvenliğini sağlamak amacıyla, yangından korunma tedbirlerini en üst seviyede uygulamayı, doğal afet risklerini en aza indirmek için gerekli tüm önlemleri almayı,</li>
                    <li>İş sağlığı ve güvenliğini sağlamak amacıyla çalışanların Kişisel Koruyucu Donanımları (KKD) eksiksiz ve doğru şekilde kullanımını sağlamayı,</li>
                    <li>Politika ve değerlerimiz doğrultusunda, gerekli kaynak ve organizasyonu sağlayarak, İş Güvenliği ve Çevre kavramını firmamızda sürdüreceğimizi taahhüt ederiz.</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-4">SOSYAL SORUMLULUK POLİTİKASI</h3>
                <p className="mb-4">
                    İBRAŞ KAUÇUK A.Ş, sahip olduğu öz değerlerinin ve ilkelerinin bir parçası olarak tüm faaliyetlerinde sosyal sorumluluk bilinciyle hareket etmeyi, yönetim anlayışının temel ve değişmez unsurlarından biri olarak kabul eder.
                </p>
                <p className="mb-4">
                    Sosyal sorumluluk anlayışımızı ve bu konudaki önceliklerimizi toplum ve çevre için en iyi olanı dikkate alarak belirleriz. Şirketimiz sosyal, çevresel ve ekonomik sorunları, faaliyetlerinin ve paydaşlarıyla ilişkilerinin bir parçası haline getirerek, tüm paydaşlarına karşı etik ve sorumlu davranır.
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-8 text-gray-300">
                    <li><strong className="text-white">Çocuk işçi çalıştırmanın önlenmesi:</strong> Çocuk işçi çalıştırılmasına müsaade etmemeyi ve desteklememeyi,</li>
                    <li><strong className="text-white">Zorla ve Zorunlu Çalışmanın Önlenmesi:</strong> Hiçbir çalışanımızı hiçbir konuda baskı altında ve borca dayalı çalıştırmamayı,</li>
                    <li><strong className="text-white">Temsil edilme özgürlüğü:</strong> Çalışanlarımızın temsil haklarına saygı göstermeyi,</li>
                    <li><strong className="text-white">Ayrımcılığın önlenmesi:</strong> Çalışanlarımızı istihdam ederken kişilere dil, din, ırk, cinsiyet ayrımı yapmamayı,</li>
                    <li><strong className="text-white">Kötü muamele ve tacizin önlenmesi:</strong> Her çalışanın kişiliğine ve onuruna saygı göstermeyi,</li>
                    <li><strong className="text-white">Ücretler ve sosyal haklar:</strong> Tüm çalışanlarımıza yasalar çerçevesinde belirlenen ücret ve sosyal hakları sağlamayı,</li>
                    <li><strong className="text-white">Eğitim:</strong> Çalışanların mesleki ve kişisel gelişimlerine destek olmak için eğitimler düzenlemeyi,</li>
                    <li><strong className="text-white">Rüşvetin Önlenmesi:</strong> Maddi kazanç sağlayan hiçbir hediye ve ödemeyi kabul etmemeyi taahhüt ederiz.</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-4">BİLGİ GÜVENLİĞİ YÖNETİM SİSTEMİ POLİTİKASI</h3>
                <p className="mb-4">
                    İbraş Kauçuk olarak; Müşteri memnuniyetine ve uluslararası kalite standartlarına uygun otomotiv hortum ve bağlantı elemanları üretiminde lider bir kuruluş olmanın sorumluluğuyla, bilgi güvenliğini kurumsal sürdürülebilirliğimizin ayrılmaz bir parçası olarak görmekteyiz.
                </p>
                <p className="mb-4">
                    Bu doğrultuda;
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-300">
                    <li>Bilgi Güvenliği Yönetim Sistemi (BGYS) kurar, sürdürür ve sürekli iyileştiririz.</li>
                    <li>Bilgi güvenliği hedeflerinin gerçekleştirilmesini periyodik olarak gözden geçiririz.</li>
                    <li>Yasal, düzenleyici ve sözleşmesel yükümlülüklere (KVKK, ISO/IEC 27001) tam uyum taahhüt ederiz.</li>
                    <li>Bilgi güvenliğinin sürekli iyileştirilmesini sağlamak amacıyla süreçlerimizi düzenli olarak değerlendiririz.</li>
                    <li>Bilgi güvenliği politikasının tüm organizasyon genelinde anlaşılmasını ve uygulanmasını temin ederiz.</li>
                    <li>Bilgi güvenliği olaylarının zamanında raporlanmasını ve etkili şekilde yönetilmesini sağlarız.</li>
                    <li>Tüm bilgi sistemleri ve varlıklar için güvenlik önlemleri alırız.</li>
                </ul>
                <p className="italic text-gray-500 mt-4">
                    Üst yönetim olarak, bu politikanın uygulanmasını destekler, gerekli kaynakları sağlar ve çalışanlarımızın bu politikanın gereklerine uygun hareket etmesini taahhüt ederiz.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {[
                        { title: "ISO 9001 Kalite Belgesi", file: "ISO 9001.pdf" },
                        { title: "ISO 14001 Çevre Belgesi", file: "ibras-ISO 14001.pdf" },
                        { title: "ISO 45001 İş Sağlığı ve Güvenliği Belgesi", file: "ibras-ISO 45001.pdf" },
                        { title: "ISO 14064 Sera Gazı Doğrulama Belgesi", file: "14064-dogrulama-beyani.pdf" },
                        { title: "IATF 16949 Otomotiv Kalite Belgesi", file: "ibras-IATF 16949.pdf" },
                        { title: "Tedarikçi El Kitabı", file: "IBRAS Tedarikci El Kitabi.v2.pdf" }
                    ].map((doc, i) => (
                        <a
                            key={i}
                            href={`/documents/${doc.file}`}
                            download
                            className="group relative flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#E30613]/50 transition-all duration-300 text-center gap-4 overflow-hidden h-[180px]"
                        >
                            <div className="flex flex-col items-center gap-4 transition-opacity duration-300 group-hover:opacity-0">
                                <div className="p-4 bg-white/5 rounded-full z-10">
                                    <FileText className="w-8 h-8 text-gray-300" />
                                </div>
                                <span className="text-sm font-medium text-gray-300 z-10 px-2">
                                    {doc.title}
                                </span>
                            </div>

                            {/* Hover Overlay - Only INDİR Button */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <span className="bg-[#E30613] text-white px-6 py-2 rounded-full font-bold text-sm tracking-wide shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                                    İNDİR
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </>
        ),
        details: []
    },
    {
        id: "hr",
        label: "İnsan Kaynakları",
        icon: Users,
        title: "İnsan Kaynakları",
        description: (
            <>
                <p className="mb-4">
                    Otomotiv sektöründe “müşteri memnuniyeti” ilkesi ile başarısını sürekli artıran İbraş Kaucuk Otomotiv A.Ş, İnsan Kaynakları yönetiminde de bu ilkeyi esas almaktadır. Şirketin başarısında ve rekabet üstünlüğü sağlamasında en büyük payın çalışanların olduğuna inanmakta ve çalışanlarımızı en değerli varlığımız olarak görmekteyiz.
                </p>
                <p className="mb-4">
                    Tüm İnsan Kaynakları politikalarımızı, yaratıcılığa ve sürekli gelişime önem veren, çağdaş, çalışanların da ortak hedeflere katıldığı bir ortam hazırlanması üzerine yapılandırmaktayız. Şirketimiz stratejik hedeflerini gerçekleştirirken, çalışanımızın da kendi gelişimine olanak sağlamasına fırsat vermek, İnsan Kaynakları politikalarımızın temel öğelerindendir.
                </p>
                <p className="mb-8">
                    Bu bilinçle amacımız, ortak hedefler doğrultusunda, çalışanlarımızın mutluluğunu ve iş verimini arttıracak etkili insan kaynakları sistemlerini yapılandırmak, sürekliliğini sağlamak ve çalışanlar tarafından benimsenmiş uluslararası standartlarda İnsan Kaynakları politikalarını uygulayarak, daha iyi bir geleceğe ulaşmaktır.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">İnsan Kaynakları Stratejimiz</h3>
                <p className="mb-8">
                    “İçinde bulunduğu sektörde” yüksek standartta insan kaynakları yönetim anlayışının benimsendiği, herkesin çalışmak istediği ve çalışmaktan gurur duyduğu bir şirket olmaktır.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">Seçme ve Yerleştirme</h3>
                <p className="mb-4">
                    İbraş Kauçuk Otomotiv’e başvuran adayların, bilgi ve becerilerinin, pozisyon ile uygun olması temel şart olarak esas alınır. Adayların eğitim düzeyleri, bilgi ve becerileri, deneyimleri dikkate alınarak değerlendirme yapılır.
                </p>
                <p className="mb-8">
                    İbraş Kauçuk Otomotiv’e başvuruda bulunmak için kariyer.net’i kullanabilirsiniz.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">Oryantasyon Eğitimi ve İşe Başlama</h3>
                <p className="mb-8">
                    İşe yeni başlayan çalışanlar, eğitim faaliyetlerine, şirkete hızlı ve kolay uyumunu sağlayan “Oryantasyon Programı” ile başlar. İş başı yapan kişi pozisyona bağlı olarak değişen oryantasyon programına alınır.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">Staj</h3>
                <p className="mb-8">
                    Üniversite ve/veya meslek okulu öğrencilerine belirli kontenjanlar dahilinde staj imkanı sağlanmaktadır.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">Eğitim ve Gelişim</h3>
                <p className="mb-4">
                    İbraş Kauçuk Otomotiv de eğitim hedefimiz “İnsana yapılan yatırım, en yüksek getirili yatırımdır” ilkesine inanarak, tüm çalışanlarımıza yüksek standartlarda geliştirme ve eğitim olanakları sunabilmek ve onların şirketin başarısındaki etkinliklerini sürekli kılmalarına ve arttırmalarına önemli katkı sağlamaktır.
                </p>
                <p className="mb-4">
                    Sürekli değişen rekabet koşullarında, şirketimizin konumunu korumak ve geliştirmek adına mesleki eğitimlere ve kişisel gelişim eğitimlerine verdiğimiz önemle, çalışanlarımızın kişisel gelişim sorumluluklarının farkında olacakları, yüksek performanslı bir çalışan kültürü yaratılmasına katkı sağlayarak, üzerimize düşen çağdaş insan kaynakları yönetimini gerçekleştirmeye çalışıyoruz.
                </p>
                <p className="mb-4">
                    Çalışanlarımızın bilgi, beceri ve tutumlarında, performansında, çalışma ortamında, motivasyonunda iyileştirmeyi ve kurum kültürünü yaygınlaştırmayı amaçlayan eğitim faaliyetleri aşağıdaki gibi gruplandırılmıştır:
                </p>
                <ul className="list-disc pl-5 space-y-4 mb-8 text-gray-300">
                    <li>
                        <strong className="text-white">Oryantasyon Eğitimi:</strong> İşe yeni başlayan her personele, firma ile ilgili genel bilgilerin verildiği eğitim programıdır.
                    </li>
                    <li>
                        <strong className="text-white">İç ve Dış Eğitim:</strong> Personelin, uzmanlık gerektiren konulardaki bilgi ve becerilerini geliştirmeye yönelik, firma dışında veya firma içinde organize edilen eğitim programlarıdır.
                        <ul className="list-[circle] pl-5 mt-2 space-y-2">
                            <li><span className="text-white font-medium">İç Eğitimlerimiz:</span> Teknik Beceri Eğitimleri, Kalite Sistemleri Eğitimleri, Kişisel Gelişim Eğitimleri ve İş Sağlığı ve İş Güvenliği Eğitimleri olmak üzere dört gruptan oluşmaktadır.</li>
                            <li><span className="text-white font-medium">Dış Eğitimlerimiz:</span> Yıl sonunda bölüm yöneticilerinin talep, ihtiyaç ve onayı ile oluşturulan eğitim bütçesi doğrultusunda, bir sonraki yıl içerisinde gerçekleştirilir. Ayrıca yıl içerisinde önceliklerin değişmesi ve yeni ihtiyaçlar çerçevesinde tüm çalışanlarımız için plan dışı eğitimler de sağlanmaktadır.</li>
                        </ul>
                    </li>
                    <li>
                        <strong className="text-white">İşbaşı eğitimleri:</strong> Çalışanlarımızın yaptığı işin niteliğine göre teknik konularda, üretim içerisinde uygulamalı olarak verilen işbilgisi, müşteri şikayetleri ve hataların değerlendirilmesine yönelik olarak gerçekleşen eğitimlerdir.
                    </li>
                    <li>
                        <strong className="text-white">Mesleki ve Teknik Eğitimleri:</strong> 3308 sayılı Mesleki ve Teknik Eğitim Kanunu’nda belirtilen beceri ve uyum eğitimleri/kursları.
                    </li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-4">Motivasyon Faaliyetleri</h3>
                <p className="mb-4">
                    Tanıma anketi gibi faaliyetlerin sonucunda elde edilen verilerle motivasyon aksiyon planı hazırlanır. Sportif, kültürel ve sosyal aktiviteler düzenlenir.
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-8 text-gray-300">
                    <li>Sportif Turnuvalar</li>
                    <li>Evlilik ve doğum yardımı yapılması</li>
                    <li>Ramazan Ayı Erzak Desteği</li>
                    <li>Aile Pikniği Organizasyonları</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-4">Öneri Sistemi</h3>
                <p className="mb-8">
                    Bu prosedürün amacı, İBRAŞ KAUÇUK OTOMOTİV AŞ bünyesinde SİS (Sürekli İyileştirme Süreci) düşünce ve davranış tarzını destekleme, iyileştirme önerilerinin devamlılığı, grup önerilerine öncelik verilmesi, fikirleri uygulamada motivasyonun arttırılması, değerlendirmenin daha kısa sürede ve basit bir şekilde gerçekleştirilmesi, mevcut potansiyelleri yakalayarak küçük adımlarla iyileştirmeye teşvik etmektir. Çalışanlar arasında motivasyonunu arttırmak; takım çalışması ve yardımlaşmayı özendirmek; çalışanların tanınma ve takdir edilmelerini sağlamak amacıyla çalışanların verdiklerin öneriler düzenli olarak değerlendirilerek ödüllendirilir.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">Ücret Yönetimi</h3>
                <p className="mb-4">
                    İbraş Kauçuk’da ücret sistemi adil ve rekabetçi bir politika üzerine kurgulanmıştır. Sektör bazında yapılan araştırmalar ve şirket içi dengeler gözetilerek ücret politikası her yıl gözden geçirilir.
                </p>
                <p className="mb-8">
                    İşe alımda ücret, temel olarak pozisyonun gerektirdiği ve kişilerin sahip olduğu yetkinliklere, iş bazında sorumluluklara, adayların eğitim ve iş tecrübelerine dayanarak yapılan değerlendirme sonucu belirlenir.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">İbraş'ta Çalışma Saatleri</h3>
                <ul className="list-disc pl-5 space-y-4 mb-8 text-gray-300">
                    <li>
                        <strong className="text-white">Beyaz Yaka:</strong> Çalışma günleri Pazartesi – Cuma (5 gün), çalışma saatleri hafta içi 07:30-17:30 arası, haftada 45 saat olarak belirlenmiştir.
                    </li>
                    <li>
                        <strong className="text-white">Mavi Yaka:</strong> 2 vardiya olarak çalışma günleri Pazartesi – Cuma (5 gün), günlük 9 saat üzerinden haftada 45 saat olarak belirlenmiştir.
                        <div className="mt-2 text-sm text-gray-400">
                            Vardiya 1: 07:30 – 17:30 <br />
                            Vardiya 2: 22:00 – 07:30
                        </div>
                    </li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-4">Yemek</h3>
                <ul className="list-disc pl-5 space-y-2 mb-8 text-gray-300">
                    <li>Haftada 2 defa sabah çay molasıyla beraber poğaça ikramı vardır.</li>
                    <li>Günde bir öğün, fazla mesai durumlarında ikinci bir öğün yemek verilir.</li>
                    <li>Günde 2 defa çay ikramı vardır.</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-4">Sağlık Hizmetleri</h3>
                <p className="mb-4">
                    Revir hizmeti ile çalışanların sağlık konusundaki problemlerinin çözümü için hizmet verilir.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    <a
                        href="https://www.linkedin.com/company/ibraskaucuk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-xl hover:border-[#E30613]/50 hover:bg-white/10 transition-all duration-300 gap-4"
                    >
                        <div className="p-4 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors duration-300">
                            {/* Custom LinkedIn SVG from Homepage */}
                            <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white group-hover:text-[#E30613] transition-colors duration-300">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </div>
                        <span className="text-lg font-bold text-white group-hover:text-[#E30613] transition-colors">LinkedIn Başvurusu</span>
                    </a>

                    <a
                        href="https://www.kariyer.net/firma-profil/ibras-kaucuk-oto-yan-san-ve-tic-a-s-43805-125516"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-xl hover:border-[#E30613]/50 hover:bg-white/10 transition-all duration-300 gap-4"
                    >
                        <div className="p-4 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors duration-300">
                            {/* Using Briefcase as a generic icon for Kariyer.net since no specific logo icon exists in standard set.
                                Kariyer.net distinct color is purple/magenta roughly #8a2be2 or similar, but user asked for RED hover.
                                "Add a hover effect that turns the logos red". Changing all hovers to red per request.
                             */}
                            <Briefcase className="w-10 h-10 text-white group-hover:text-[#E30613] transition-colors duration-300" />
                        </div>
                        <span className="text-lg font-bold text-white group-hover:text-[#E30613] transition-colors">Kariyer.net Başvurusu</span>
                    </a>
                </div>
            </>
        ),
        details: []
    },
    {
        id: "responsibility",
        label: "Sosyal Sorumluluk",
        icon: Leaf,
        title: "Sosyal Sorumluluk",
        description: (
            <>
                <p className="mb-8">
                    Bursa Teknik Üniversitesi bünyesinde kurulan C-ARF Elektrikli Araçlar ve Özerklik Topluluğu'na sponsorluk yoluyla destek verdik.
                </p>
                <div className="mb-8">
                    <img
                        src="/images/sosyal sor/social-responsibility.jpg"
                        alt="C-ARF Elektrikli Araçlar"
                        className="w-full max-w-xs rounded-lg shadow-lg border border-white/10 brightness-75 hover:brightness-100 hover:border-[#E30613]/30 transition-all duration-300"
                    />
                </div>
            </>
        ),
        details: []
    }
];

export default function CorporateTabs() {
    const activeTabObj = tabs[0];
    const [activeTab, setActiveTab] = useState(activeTabObj.id);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [activeTab]);

    return (
        <section className="pt-0 pb-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <div className="sticky top-20 z-40 bg-[#0a0a0a] border-b border-white/10 px-4 py-1 lg:p-0 lg:static lg:bg-transparent lg:border-none lg:col-span-1 flex flex-row lg:flex-col gap-3 lg:gap-0 lg:space-y-2 overflow-x-auto lg:overflow-visible h-fit -mx-0 lg:mx-0 scrollbar-hide snap-x">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-auto lg:w-full flex-shrink-0 snap-center whitespace-nowrap text-left px-6 py-4 rounded-xl flex items-center gap-4 transition-all duration-300 font-medium border ${activeTab === tab.id
                                ? "bg-[#E30613] text-white border-[#E30613] shadow-lg shadow-[#E30613]/20"
                                : "bg-white/5 text-white border-white/10 hover:bg-white/10 backdrop-blur-sm"
                                }`}
                        >
                            <tab.icon className="w-5 h-5" />
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="lg:col-span-3 min-h-[500px] relative pt-0 lg:pt-0">
                    <AnimatePresence mode="wait">
                        {tabs.map((tab) => (
                            tab.id === activeTab && (
                                <motion.div
                                    key={tab.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 h-full relative overflow-hidden"
                                >
                                    {/* Decorative Background Icon (Subtle) */}
                                    {/* Removed as per previous instructions for Know How, keeping clean */}

                                    <div className="flex items-start justify-between mb-8 relative z-10">
                                        <div>
                                            <h2 className="text-3xl font-bold text-white mb-2">{tab.title}</h2>
                                            <div className="h-1 w-20 bg-[#E30613] rounded-full" />
                                        </div>
                                        <tab.icon className="w-16 h-16 text-white/10" />
                                    </div>

                                    <div className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-12 whitespace-pre-line relative z-10">
                                        {tab.description}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                        {tab.details.map((detail, index) => (
                                            <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-black/20 border border-white/5 hover:border-[#E30613]/50 transition-colors group/item">
                                                <ChevronRight className="w-5 h-5 text-[#E30613] flex-shrink-0 group-hover/item:text-white transition-colors" />
                                                <span className="text-gray-200 font-medium">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
