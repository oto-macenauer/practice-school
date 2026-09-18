// Service worker: network-first with cache fallback, so the app works offline
// after the first visit. Paths are relative to the SW scope (works on GitHub
// Pages subpath and at the root of a Docker/nginx host alike).
const CACHE_NAME = "practice-school-v1";

const PRECACHE = [
  "./",
  "index.html",
  "css/app.css",
  "js/util.js",
  "js/store.js",
  "js/catalog.js",
  "js/engine.js",
  "js/print.js",
  "js/legacy-import.js",
  "js/views.js",
  "js/app.js",
  "js/update-checker.js",
  "content/subjects.js",
  "content/catalog.js",
  "manifest.webmanifest",
  "images/icons/icon-192.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(PRECACHE)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.url.indexOf("version.json") !== -1) return; // always network
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req))
  );
});
