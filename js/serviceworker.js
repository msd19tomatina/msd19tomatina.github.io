/******************
 * SERVICE WORKER *
 ******************/
var cacheName = 'lab04pwa-cache';
var filesToCache = [
  '../img/apple_splash_640.png',
  '../img/apple_splash_750.png',
  '../img/apple_splash_1125.png',
  '../img/apple_splash_1242.png',
  '../img/apple_splash_1536.png',
  '../img/apple_splash_1668.png',
  '../img/apple_splash_2048.png',
  '../img/touch-icon-iphone.png',
  '../img/lab04pwa48.png',
  '../img/lab04pwa72.png',
  '../img/lab04pwa96.png',
  '../img/lab04pwa144.png',
  '../index.html',
  '../css/style.css',
  'use_webworker.js',
  'use_serviceworker.js',
  'webworker.js',
  'main.js'
];

self.addEventListener("install", event => {
  console.log("Service Worker Lab 04 PWA installing.");
  event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener("activate", event => {
  console.log("Service Worker Lab 04 PWA activating.");
});

self.addEventListener('fetch', event => {
  console.log("Service Worker Lab 04 PWA fetching.");
  event.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
  );
});

