# Dt. Muhammed Furkan Pazar — Klinik Web Sitesi

Genel diş hekimliği muayenehanesi için üç dilli (TR / RU / EN), tamamen statik, tek sayfalık tanıtım ve bilgilendirme sitesi.

> **Önemli:** Bu sitedeki her metin, sağlık hizmetlerinde tanıtım mevzuatına uygun olmak zorundadır.
> Herhangi bir içerik değişikliğinden önce **[docs/COMPLIANCE.md](docs/COMPLIANCE.md)** okunmalıdır.

## Özellikler

- **Üç dil:** Türkçe, Русский, English — `locales/*.json` dosyalarından client-side yüklenir; sayfa yapısı sabittir, yalnızca metin değişir.
- **Otomatik dil:** İlk ziyarette tarayıcı diline göre açılır (RU→Rusça, TR→Türkçe, diğer→İngilizce); seçim `localStorage`'da hatırlanır.
- **Randevu formu yok:** İletişim, sabit (floating) WhatsApp ve Telegram butonları üzerinden (`wa.me` / `t.me`).
- **Tamamen statik:** Backend yok, form submit yok, harici JS bağımlılığı yok. GitHub Pages'te barındırılır.
- **Mobil öncelikli:** Tasarım önce dar ekran için yazılmıştır.

## Proje Yapısı

```
├── index.html          # Tek sayfa — tüm bölümler
├── css/
│   └── style.css       # Tasarım sistemi (design tokens) + tüm stiller
├── js/
│   └── i18n.js         # Dil yükleme/değiştirme mantığı
├── locales/
│   ├── tr.json         # Türkçe metinler
│   ├── ru.json         # Rusça metinler
│   └── en.json         # İngilizce metinler
├── assets/             # Logo (SVG), favicon, ikonlar
└── docs/
    ├── PLAN.md         # Faz planı ve durum
    ├── COMPLIANCE.md   # ⚠ Mevzuat uyum rehberi — içerik yazmadan önce OKU
    └── DEPLOYMENT.md   # GitHub Pages + Cloudflare domain kurulumu
```

## Yerelde Çalıştırma

`fetch()` ile JSON yüklendiği için dosyayı doğrudan açmak yerine küçük bir sunucu gerekir:

```
python -m http.server 8000
# http://localhost:8000
```

## İçerik Güncelleme

1. Metin değişikliği → yalnızca `locales/` altındaki üç JSON dosyasını düzenle (üçü birden!).
2. Yeni metnin [docs/COMPLIANCE.md](docs/COMPLIANCE.md) kurallarıyla çelişmediğini doğrula.
3. Footer'daki "son güncelleme" tarihi `index.html` içinde güncellenir (mevzuat gereği zorunlu alan).

## Telefon Numaraları

WhatsApp/Telegram numaraları `index.html` içinde `https://wa.me/90XXXXXXXXXX` ve `https://t.me/XXXXXXX` placeholder'larındadır — yayına almadan önce doldurulmalıdır (bkz. docs/DEPLOYMENT.md kontrol listesi).
