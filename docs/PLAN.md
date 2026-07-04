# Proje Planı ve Durum

Tek sayfalık, üç dilli, statik klinik sitesi. Her faz ayrı commit(ler) ile ilerler.

## Faz 0 — Temel ve Dokümantasyon ✅
- [x] git init, GitHub public repo
- [x] README.md, docs/PLAN.md, docs/COMPLIANCE.md, CLAUDE.md, .gitignore
- [x] Mevzuat kaynaklarının incelenmesi ve içerik kurallarının çıkarılması

## Faz 1 — İskelet ve Altyapı
- [ ] Logo: PDF → optimize SVG + favicon üretimi
- [ ] `index.html`: semantik bölüm iskeleti (hero, hizmetler, hekim, yaklaşım, SSS, iletişim, footer)
- [ ] `css/style.css`: design token'lar (antrasit palet, tipografi ölçeği, spacing), base stiller
- [ ] `js/i18n.js`: locale JSON yükleme, `data-i18n` uygulama, tarayıcı dili algılama, localStorage
- [ ] `locales/{tr,ru,en}.json` ilk sürüm

## Faz 2 — Bölümler ve İçerik
- [ ] Hero: logo, unvan, nötr tanıtım cümlesi, iletişim CTA'ları
- [ ] Hizmetler: ikonlu kartlar (dolgu, kanal, implant, protez, beyazlatma, çocuk, temizlik, çekim)
- [ ] Hekim tanıtımı (olgusal: unvan, eğitim, diller)
- [ ] Çalışma ilkeleri bölümü (hasta yorumları YERİNE — bkz. COMPLIANCE.md)
- [ ] SSS (accordion, eğitici üslup)
- [ ] İletişim: adres, Google Maps embed, çalışma saatleri
- [ ] Floating WhatsApp + Telegram butonları
- [ ] Üç dilde tam içerik, uyum denetimi

## Faz 3 — Polish, SEO, Güvenlik
- [ ] Mobil ince ayar (375px'den itibaren), tablet/desktop breakpoint'leri
- [ ] Erişilebilirlik: kontrast, focus, aria, klavye navigasyonu, `prefers-reduced-motion`
- [ ] SEO: title/description (3 dil), Open Graph, JSON-LD (`Dentist` şeması), canonical
- [ ] sitemap.xml, robots.txt, 404.html
- [ ] Güvenlik: CSP meta, referrer-policy, harici bağımlılık denetimi
- [ ] Tarayıcı önizleme testleri (mobil/desktop, üç dil)

## Faz 4 — Deploy
- [ ] GitHub Pages aktifleştirme (main / root)
- [ ] docs/DEPLOYMENT.md: Cloudflare domain + DNS + HTTPS adımları, yayın öncesi kontrol listesi
- [ ] CNAME dosyası (domain alınınca)

## Yayın Öncesi Bekleyenler (kullanıcı aksiyonu)
- [ ] WhatsApp numarası → `index.html` içindeki `wa.me` linki
- [ ] Telegram kullanıcı adı → `t.me` linki
- [ ] Klinik telefon numarası (iletişim bölümü)
- [ ] Hekim portre fotoğrafı (opsiyonel; eklenirse hasta içermeyen, yalın bir kare)
- [ ] Cloudflare'den domain + Pages custom domain ayarı
