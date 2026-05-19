import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Telescope, Orbit, Brain, Play, Users, Info } from "lucide-react";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mission Astro AI — Explore the Universe" },
      { name: "description", content: "Mission Astro AI is your advanced assistant for space science and research, powered by Radapasa Astronomical Society." },
      { property: "og:title", content: "Mission Astro AI" },
      { property: "og:description", content: "Your Advanced Assistant for Space Science & Research." },
    ],
  }),
  component: Landing,
});

const YOUTUBE_VIDEO_ID = "UC7yQWZl0lk";

function Landing() {
  return (
    <div className="min-h-screen flex flex-col text-foreground" style={{ background: "var(--gradient-space)" }}>
      <Stars />

      {/* ── Navbar ── */}
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl bg-[image:var(--gradient-brand)] flex items-center justify-center shadow-md shadow-primary/20">
            <Orbit className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-lg tracking-tight">Mission Astro AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-foreground transition-colors flex items-center gap-1.5">
            <Info className="h-3.5 w-3.5" /> About
          </Link>
          <Link to="/developers" className="hover:text-foreground transition-colors flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" /> Developers
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/login" className="hidden sm:block">
            <Button variant="ghost" size="sm" className="rounded-full text-muted-foreground hover:text-foreground">Log in</Button>
          </Link>
          <Link to="/login">
            <Button
              size="sm"
              className="rounded-full gap-1.5 font-medium px-4 shadow-lg"
              style={{ background: "linear-gradient(135deg, #f97316, #ef4444)", color: "white" }}
            >
              Start Chat <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <main className="relative z-10 flex-1 flex flex-col items-center px-4 sm:px-6 pt-10 pb-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur text-xs text-muted-foreground mb-6">
          <Sparkles className="h-3 w-3 text-primary" /> Mission Astro Alpha • Now in preview
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-4xl text-center leading-[1.05] mb-6">
          Explore the Universe with{" "}
          <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">Mission Astro Alpha</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl text-center mb-8">
          Your Advanced AI Assistant for Space Science &amp; Research. Ask anything about the cosmos.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <Link to="/login">
            <Button
              size="lg"
              className="h-12 px-8 rounded-xl gap-2 text-base font-semibold shadow-xl"
              style={{ background: "linear-gradient(135deg, #f97316, #ef4444)", color: "white" }}
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl w-full mb-20">
          {[
            { icon: Telescope, t: "Deep-Sky Insights", d: "Query stars, galaxies, exoplanets and missions." },
            { icon: Brain, t: "Research Copilot", d: "Summarize papers, derive equations, plan experiments." },
            { icon: Orbit, t: "Mission Modes", d: "Fast, Super, Master and Image — tuned per task." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-card/40 backdrop-blur p-5">
              <Icon className="h-5 w-5 text-primary mb-3" />
              <div className="font-semibold mb-1">{t}</div>
              <div className="text-sm text-muted-foreground">{d}</div>
            </div>
          ))}
        </div>

        {/* ── Social Proof Video Section ── */}
        <section className="w-full max-w-4xl mb-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-muted-foreground mb-4">
              <Sparkles className="h-3 w-3 text-yellow-400" /> Students love it
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Most of Sri Lankan students love{" "}
              <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">Mission Astro AI</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              See how Mission Astro AI is transforming astronomy education across Sri Lanka.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <div className="absolute -inset-0.5 bg-[image:var(--gradient-brand)] opacity-20 blur-xl rounded-2xl" />
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video pointer-events-none">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&disablekb=1&playsinline=1&iv_load_policy=3`}
                title="Mission Astro AI — Student Testimonials"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
                style={{ border: "none" }}
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/login">
              <Button
                size="lg"
                className="h-12 px-10 rounded-xl gap-2 text-base font-semibold shadow-xl"
                style={{ background: "linear-gradient(135deg, #f97316, #ef4444)", color: "white" }}
              >
                <Play className="h-4 w-4" /> Start Your Mission
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        <div className="flex items-center justify-center gap-4 mb-2">
          <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link to="/developers" className="hover:text-foreground transition-colors">Developers</Link>
          <Link to="/login" className="hover:text-foreground transition-colors">Sign in</Link>
        </div>
        © {new Date().getFullYear()} Radapasa Astronomical Society · Mission Astro AI
      </footer>
    </div>
  );
}

function Stars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const stars: { x: number; y: number; r: number; o: number; speed: number }[] = [];
    for (let i = 0; i < 180; i++) {
      stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 1.5 + 0.3, o: Math.random() * 0.8 + 0.2, speed: Math.random() * 0.01 + 0.002 });
    }
    let frame: number;
    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.o * (0.6 + 0.4 * Math.sin(t * s.speed))})`;
        ctx.fill();
      });
      t++;
      frame = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", onResize); };
  }, []);
  return (
    <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 w-full h-full" style={{ opacity: 0.7 }} />
  );
}
