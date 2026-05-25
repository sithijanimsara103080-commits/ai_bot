// Advanced Service Worker for Mission Astro AI
const CACHE_NAME = 'astro-ai-v1';
const OFFLINE_URL = '/offline.html';

const ASSETS = [
    '/',
    '/index.html',
    OFFLINE_URL,
    '/site.webmanifest',
    '/Favorite Icon.ico'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Only handle GET requests for navigation
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => {
                return caches.open(CACHE_NAME).then((cache) => {
                    return cache.match(OFFLINE_URL);
                });
            })
        );
        return;
    }

    // Generic assets caching
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
