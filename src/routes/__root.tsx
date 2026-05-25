import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { useEffect, useState } from "react";
import appCss from "../styles.css?url";
import { AuthProvider } from "@/lib/auth-context";
import { Orbit } from "lucide-react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mission Astro AI" },
      { name: "description", content: "Mission Astro AI — Your Advanced Assistant for Space Science & Research." },
      { property: "og:title", content: "Mission Astro AI" },
      { property: "og:description", content: "Your Advanced Assistant for Space Science & Research." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "icon", href: "/Favorite%20Icon.ico", type: "image/x-icon" },
      { rel: "manifest", href: "/site.webmanifest" },
      { name: "theme-color", content: "#0ea5e9" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous" as const,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeSync />
        <PWAInstallManager />
        <Outlet />
      </AuthProvider>
    </QueryClientProvider>
  );
}

function ThemeSync() {
  useEffect(() => {
    const apply = (theme: string) => {
      document.documentElement.classList.toggle("dark", theme === "dark");
    };
    const saved = localStorage.getItem("astro_theme") ?? "dark";
    apply(saved);

    const handler = (e: Event) => {
      apply((e as CustomEvent<string>).detail);
    };
    window.addEventListener("astro-theme", handler);
    return () => window.removeEventListener("astro-theme", handler);
  }, []);
  return null;
}

function PWAInstallManager() {
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(reg => {
          console.log('SW registered:', reg);
        }).catch(err => {
          console.log('SW failed:', err);
        });
      });
    }

    const handler = (e: any) => {
      e.preventDefault();
      (window as any).deferredPrompt = e;
      window.dispatchEvent(new CustomEvent('pwa-installable'));
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  return <InstallButton />;
}

function InstallButton() {
  const [canInstall, setCanInstall] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsStandalone(window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone);
      setCanInstall(!!(window as any).deferredPrompt);
    };
    check();
    window.addEventListener('pwa-installable', check);
    window.addEventListener('appinstalled', () => setCanInstall(false));
    return () => window.removeEventListener('pwa-installable', check);
  }, []);

  const handleInstall = async () => {
    const prompt = (window as any).deferredPrompt;
    if (!prompt) return;
    prompt.prompt();
    const { outcome } = await prompt.userChoice;
    if (outcome === 'accepted') (window as any).deferredPrompt = null;
    setCanInstall(false);
  };

  if (isStandalone || !canInstall) return null;

  return (
    <div className="fixed bottom-20 right-6 z-50 animate-bounce-subtle">
      <button
        onClick={handleInstall}
        className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all font-semibold text-sm border-2 border-white/20"
      >
        <Orbit className="h-5 w-5" />
        Download App
      </button>
    </div>
  );
}
