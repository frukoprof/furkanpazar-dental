# Yayınlama Rehberi (GitHub Pages + Cloudflare)

## Mevcut Durum

- Site GitHub Pages'te yayında: **https://frukoprof.github.io/furkanpazar-dental/**
- Kaynak: `main` dalı, kök dizin. Her `git push` sonrası ~1 dk içinde otomatik yayınlanır.
- Build adımı yoktur; push edilen dosyalar olduğu gibi sunulur.

## Yayın Öncesi Kontrol Listesi

Alan adına geçmeden / siteyi duyurmadan önce:

- [x] **WhatsApp numarası**: `wa.me/905550514455` (index.html, 2 yer)
- [x] **Telegram**: `t.me/+905550514455` (index.html, 2 yer)
- [x] **Çalışma saatleri**: Cuma hariç her gün 10:00–20:00 (locales + JSON-LD)
- [x] **Sorumlu e-posta**: `info@mfurkanpazar.com` (footer + JSON-LD; Cloudflare Email Routing -> pazarmf@gmail.com)
- [x] **Harita**: iframe işletme kaydına ve koordinata (36.3225981, 33.8816941) bağlandı;
      "Haritada aç" linki Google işletme kaydına gider (https://maps.app.goo.gl/Kw6MkW7ue3kJLfRP6);
      JSON-LD'de `hasMap` + `geo` mevcut
- [ ] **Harita canlı test**: telefonda iframe'in doğru pin gösterdiğini doğrula
- [ ] `python scripts/check_locales.py` → OK
- [ ] Footer'daki son güncelleme tarihi güncel

## Cloudflare'den Alan Adı Bağlama

1. **Cloudflare Registrar**'dan alan adını al (ör. `drfurkanpazar.com`).
2. Cloudflare DNS'e şu kayıtları ekle (Proxy: **DNS only** başlangıçta; sertifika oturunca proxy açılabilir):
   ```
   CNAME  @    frukoprof.github.io   (veya apex için A kayıtları: 185.199.108.153,
                                      185.199.109.153, 185.199.110.153, 185.199.111.153)
   CNAME  www  frukoprof.github.io
   ```
3. GitHub → repo → Settings → Pages → **Custom domain** alanına alan adını yaz
   (bu, repoya `CNAME` dosyası ekler) ve **Enforce HTTPS**'i işaretle.
4. Alternatif komut: `gh api repos/frukoprof/furkanpazar-dental/pages -X PUT -f cname=ALANADI`

### Alan adı sonrası dosya güncellemeleri

Alan adı: **mfurkanpazar.com** — aşağıdaki güncellemeler yapıldı:

- [x] `index.html`: `<link rel="canonical">`, `og:url`, `og:image` → https://mfurkanpazar.com/
- [x] `robots.txt`: `Sitemap:` satırı
- [x] `sitemap.xml`: `<loc>`

> Not: Site içi tüm yollar göreli olduğundan alan adı değişikliği başka bir şey bozmaz.

### Cloudflare önerilen ayarlar

- SSL/TLS modu: **Full (strict)**
- "Always Use HTTPS": açık
- İsteğe bağlı sıkılaştırma: Cloudflare **Response Header Transform Rule** ile şu başlıklar
  eklenebilir (GitHub Pages kendi başlık ayarına izin vermez; CSP zaten meta olarak gömülü):
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- Analitik istenirse yalnızca çerezsiz Cloudflare Web Analytics kullan
  (KVKK gereği site şu an bilinçli olarak izleyicisizdir; eklemeden önce docs/COMPLIANCE.md'ye bak).

## Arama Motorları

- Google Search Console'a alan adını ekleyip `sitemap.xml` gönder.
- **Dikkat (mevzuat)**: Arama motorlarında *sponsorlu/ücretli* sağlık reklamı yasaktır
  (Yönetmelik m.5/1-i). Organik kayıt serbesttir; Google Ads vb. kullanma.
- Yandex Webmaster'a da eklemek Rus hastalar için faydalıdır (organik).
