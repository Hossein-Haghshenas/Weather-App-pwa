const CACHE = "weather-app-v-0.0.1";
const urlToCache = ["index.html", "offline.html", "offline.css"];
const self = this;

// Install SW
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlToCache);
    })
  );
});

// Listen for request

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(() => {
      return fetch(e.request).catch(() => caches.match("offline.html"));
    })
  );
});

// Activate the SW

self.addEventListener("activate", (e) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE);

  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
