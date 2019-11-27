self.addEventListener('install', function (event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
        // cache.add('/');
        // cache.add('/index.html');
        // cache.add('/src/js/app.js');
        cache.addAll([
          '/',
          '/index.html',
          '/assets/js/main.js',
          '/images/bg2.jpg',
          '/images/pic02.jpg',
          '/images/pic01.jpg',
          '/images/application.png',
          '/assets/js/breakpoints.min.js',
          '/assets/js/browser.min.js',
          '/assets/js/form-submission-handler.js',
          '/assets/js/jquery.min.js',
          '/assets/js/util.js',
          '/assets/css/main.css',
          '/assets/css/noscript.css',
          '/assets/css/fontawesome-all.min.css',
          '/sw.js',
          '/assets/sass/main.scss',
          '/manifest.json'

        ]);
      })
  );
});

self.addEventListener('activate', function () {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});