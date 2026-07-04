/* ui.js — küçük arayüz davranışları: mobil menü, header gölgesi, yıl, JSON-LD */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    /* mobil menü */
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      nav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
          nav.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    /* kaydırınca header'a çizgi */
    var header = document.querySelector('.header');
    if (header) {
      var onScroll = function () {
        header.classList.toggle('is-scrolled', window.scrollY > 8);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    /* footer yılı */
    var year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());

    /* JSON-LD — CSP 'script-src self' nedeniyle inline yerine buradan eklenir.
       İçerik olgusal bilgilerle sınırlıdır (mevzuat: docs/COMPLIANCE.md). */
    var ld = {
      '@context': 'https://schema.org',
      '@type': 'Dentist',
      name: 'Dt. Muhammed Furkan Pazar',
      image: location.origin + '/assets/apple-touch-icon.png',
      url: location.origin + '/',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Taşucu Mahallesi, Fevzi Paşa Sokak No: 22A/A',
        addressLocality: 'Silifke',
        addressRegion: 'Mersin',
        addressCountry: 'TR'
      },
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:30'
      }],
      knowsLanguage: ['tr', 'ru', 'en']
    };
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(ld);
    document.head.appendChild(script);
  });
})();
