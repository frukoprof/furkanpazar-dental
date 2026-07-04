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
      alternateName: 'Diş Hekimi Muhammed Furkan PAZAR',
      image: location.origin + '/assets/apple-touch-icon.png',
      url: location.origin + '/',
      telephone: '+905550514455',
      email: 'info@mfurkanpazar.com',
      hasMap: 'https://maps.app.goo.gl/Kw6MkW7ue3kJLfRP6',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Taşucu Mahallesi, Fevzi Paşa Sokak No: 22A/A',
        addressLocality: 'Silifke',
        addressRegion: 'Mersin',
        addressCountry: 'TR'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 36.3225981,
        longitude: 33.8816941
      },
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
        opens: '10:00',
        closes: '20:00'
      }],
      knowsLanguage: ['tr', 'ru', 'en']
    };
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(ld);
    document.head.appendChild(script);
  });
})();
