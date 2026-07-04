/* i18n.js — client-side dil yönetimi
 * Metinler locales/{tr,ru,en}.json içinde yaşar; HTML'e metin gömülmez.
 * Sıra: localStorage 'lang' → tarayıcı dili → 'en'
 */
(function () {
  'use strict';

  var SUPPORTED = ['tr', 'ru', 'en'];
  var STORAGE_KEY = 'lang';
  var cache = {};

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) { /* private mode */ }

    var candidates = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < candidates.length; i++) {
      var code = String(candidates[i]).slice(0, 2).toLowerCase();
      if (SUPPORTED.indexOf(code) !== -1) return code;
    }
    return 'en';
  }

  function resolve(obj, path) {
    var parts = path.split('.');
    for (var i = 0; i < parts.length; i++) {
      if (obj == null) return undefined;
      obj = obj[parts[i]];
    }
    return typeof obj === 'string' ? obj : undefined;
  }

  function fetchLocale(lang) {
    if (cache[lang]) return Promise.resolve(cache[lang]);
    return fetch('locales/' + lang + '.json')
      .then(function (res) {
        if (!res.ok) throw new Error('locale ' + lang + ' yüklenemedi: ' + res.status);
        return res.json();
      })
      .then(function (data) {
        cache[lang] = data;
        return data;
      });
  }

  function apply(lang, t) {
    document.documentElement.lang = lang;

    var title = resolve(t, 'meta.title');
    if (title) document.title = title;

    var desc = resolve(t, 'meta.description');
    var metaDesc = document.querySelector('meta[name="description"]');
    if (desc && metaDesc) metaDesc.setAttribute('content', desc);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var text = resolve(t, el.getAttribute('data-i18n'));
      if (text !== undefined) el.textContent = text;
    });

    // data-i18n-attr="attr:key;attr2:key2"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var idx = pair.indexOf(':');
        if (idx === -1) return;
        var attr = pair.slice(0, idx).trim();
        var text = resolve(t, pair.slice(idx + 1).trim());
        if (text !== undefined) el.setAttribute(attr, text);
      });
    });

    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'en';
    return fetchLocale(lang)
      .then(function (t) {
        apply(lang, t);
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }
      })
      .catch(function (err) {
        // Yükleme başarısızsa HTML'deki Türkçe varsayılanlar görünür kalır.
        console.error(err);
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
      });
    });
    setLang(detectLang());
  });

  // ui.js'in (JSON-LD) erişimi için
  window.__i18n = { setLang: setLang, detectLang: detectLang };
})();
