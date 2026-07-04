# Klinik Web Sitesi — Ajan Talimatları

Statik, üç dilli (TR/RU/EN), tek sayfalık diş hekimi muayenehane sitesi. Vanilla HTML/CSS/JS; build adımı, framework ve harici JS bağımlılığı YOK.

## ⚠ Önce oku
Sitedeki her metin sağlıkta tanıtım mevzuatına tabidir. **İçerik yazmadan/değiştirmeden önce [docs/COMPLIANCE.md](docs/COMPLIANCE.md) oku ve kurallarına uy.** Özellikle: hasta yorumu yok, övgü/üstünlük sıfatı yok, fiyat/kampanya yok, sonuç vaadi yok, unvan yalnızca "Dt. / Diş Hekimi".

## Kurallar
- Metinler yalnızca `locales/tr.json`, `locales/ru.json`, `locales/en.json` içinde yaşar; HTML'e hard-coded kullanıcı metni yazma. Üç dosya her zaman aynı anahtar setine sahip olmalı.
- Sayfa yapısı/tasarım dilden bağımsız sabittir; dil değişimi `js/i18n.js` ile client-side yapılır.
- Randevu/iletişim formu ekleme — iletişim yalnızca floating WhatsApp/Telegram butonları ve telefon.
- Analitik, çerez, izleme scripti ekleme.
- Metin değişince footer'daki son güncelleme tarihini (`index.html`) güncelle.
- Mobil öncelikli: yeni CSS önce dar ekran için yazılır, genişletmeler `min-width` media query ile.
- Faz durumu [docs/PLAN.md](docs/PLAN.md) içinde işaretlenir; anlamlı iş = ayrı commit.
