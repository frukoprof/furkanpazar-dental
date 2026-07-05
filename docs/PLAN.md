# Proje Planı ve Durum

Tek sayfalık, üç dilli, statik klinik sitesi. Her faz ayrı commit(ler) ile ilerler.

## Faz 0 — Temel ve Dokümantasyon ✅
- [x] git init, GitHub public repo
- [x] README.md, docs/PLAN.md, docs/COMPLIANCE.md, CLAUDE.md, .gitignore
- [x] Mevzuat kaynaklarının incelenmesi ve içerik kurallarının çıkarılması

## Faz 1 — İskelet ve Altyapı ✅
- [x] Logo: PDF → optimize SVG (currentColor) + favicon üretimi (32/64/apple-touch)
- [x] `index.html`: semantik bölüm iskeleti (hero, hizmetler, hekim, yaklaşım, SSS, iletişim, footer)
- [x] `css/style.css`: design token'lar (antrasit palet, tipografi ölçeği, spacing), base stiller
- [x] Self-hosted Manrope (latin + latin-ext + kiril subsetleri, `css/fonts.css`)
- [x] `js/i18n.js`: locale JSON yükleme, `data-i18n` uygulama, tarayıcı dili algılama, localStorage
- [x] `locales/{tr,ru,en}.json` — eşitlik `scripts/check_locales.py` ile denetlenir

## Faz 2 — Bölümler ve İçerik ✅
- [x] Hero: logo, unvan, nötr tanıtım cümlesi, iletişim CTA'ları
- [x] Hizmetler: ikonlu kartlar (dolgu, kanal, implant, protez, beyazlatma, çocuk, temizlik, çekim)
- [x] Hekim tanıtımı (olgusal: unvan, alan, diller) — koyu bölüm
- [x] Çalışma ilkeleri bölümü (hasta yorumları YERİNE — bkz. COMPLIANCE.md)
- [x] SSS (details/summary accordion, eğitici üslup)
- [x] İletişim: adres, Google Maps embed, çalışma saatleri
- [x] Floating WhatsApp + Telegram butonları (numaralar placeholder)
- [x] Üç dilde tam içerik, uyum denetimi

## Faz 3 — Polish, SEO, Güvenlik ✅
- [x] Mobil test (375px) + desktop; TR/RU/EN geçişleri tarayıcıda doğrulandı
- [x] Erişilebilirlik: skip link, aria-pressed/label, focus-visible, `prefers-reduced-motion`
- [x] SEO: title/description (3 dil, JS ile), Open Graph, JSON-LD (`Dentist`), canonical
- [x] sitemap.xml, robots.txt, 404.html
- [x] Güvenlik: CSP meta, referrer-policy; harici bağımlılık yok (font self-hosted)

## Faz 4 — Deploy ✅
- [x] GitHub Pages aktif: https://frukoprof.github.io/furkanpazar-dental/
- [x] docs/DEPLOYMENT.md: Cloudflare domain + DNS + HTTPS adımları, yayın öncesi kontrol listesi
- [x] CNAME dosyası (`mfurkanpazar.com`)

## Faz 5 — Kişiselleştirme ✅
- [x] Hekim portresi (transparan kesim, WebP) hero'nun sağına — filigran diş logosu arkada
- [x] Hekim bölümü hero'nun hemen ardına taşındı; birinci ağızdan biyografi (2 paragraf)
- [x] 5 olgu kartı: mezuniyet (İKÇÜ 2021), Taşucu (2021'den beri), muayenehane (2025),
      Mersin Diş Hekimleri Odası üyeliği, iletişim dilleri — üç dilde
- [x] Metinler COMPLIANCE.md süzgecinden geçirildi (övgü sıfatları nötrleştirildi)
- [x] JSON-LD `foundingDate` eklendi
- [ ] Klinik içi galeri + ilk ziyaret bölümü (işlenmiş fotoğraflar masaüstünde hazır; kullanıcı onayı bekliyor)

## Yayın Öncesi Bekleyenler (kullanıcı aksiyonu)
- [ ] WhatsApp numarası → `index.html` içindeki `wa.me` linki
- [ ] Telegram kullanıcı adı → `t.me` linki
- [ ] Klinik telefon numarası (iletişim bölümü)
- [ ] Hekim portre fotoğrafı (opsiyonel; eklenirse hasta içermeyen, yalın bir kare)
- [ ] Cloudflare'den domain + Pages custom domain ayarı
