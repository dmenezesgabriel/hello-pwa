// serviceWorker
// service workers only have permission to access files
// in the same directory and sub - directories.

var cacheName = "hello-pwa";
var filesToCache = [
  "/",
  "index.html",
  "/assets/css/styles.css",
  "/assets/js/main.js",
];

// service workers only have permission to access files in the same directory and sub-directories.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// service workers only have permission to access files in the same directory and sub-directories.
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
