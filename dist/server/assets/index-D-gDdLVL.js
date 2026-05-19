import { I as jsxRuntimeExports, Q as reactExports } from "./server-CWKwR-pv.js";
import { L as Link } from "./router-CcUIL5VK.js";
import { b as createLucideIcon, B as Button } from "./button-Drn6kLDF.js";
import { O as Orbit } from "./orbit-BBAS_1cu.js";
import { I as Info, U as Users, S as Sparkles } from "./users-CixbzTjz.js";
import { A as ArrowRight } from "./arrow-right-ovMKYx75.js";
import { T as Telescope } from "./telescope-BPxlxis8.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M12 18V5", key: "adv99a" }],
  ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
  ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
  ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
  ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
  ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
  ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
  ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }]
];
const Brain = createLucideIcon("brain", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
];
const Play = createLucideIcon("play", __iconNode);
const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";
function Landing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col text-foreground", style: {
    background: "var(--gradient-space)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stars, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl bg-[image:var(--gradient-brand)] flex items-center justify-center shadow-md shadow-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Orbit, { className: "h-5 w-5 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-lg tracking-tight", children: "Mission Astro AI" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-6 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "hover:text-foreground transition-colors flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-3.5 w-3.5" }),
          " About"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/developers", className: "hover:text-foreground transition-colors flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5" }),
          " Developers"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "hidden sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "rounded-full text-muted-foreground hover:text-foreground", children: "Log in" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "rounded-full gap-1.5 font-medium px-4 shadow-lg", style: {
          background: "linear-gradient(135deg, #f97316, #ef4444)",
          color: "white"
        }, children: [
          "Start Chat ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-10 flex-1 flex flex-col items-center px-4 sm:px-6 pt-10 pb-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur text-xs text-muted-foreground mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-primary" }),
        " Mission Astro Alpha • Now in preview"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-4xl text-center leading-[1.05] mb-6", children: [
        "Explore the Universe with",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[image:var(--gradient-brand)] bg-clip-text text-transparent", children: "Mission Astro Alpha" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-muted-foreground max-w-2xl text-center mb-8", children: "Your Advanced AI Assistant for Space Science & Research. Ask anything about the cosmos." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-3 mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "h-12 px-8 rounded-xl gap-2 text-base font-semibold shadow-xl", style: {
        background: "linear-gradient(135deg, #f97316, #ef4444)",
        color: "white"
      }, children: [
        "Get Started ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl w-full mb-20", children: [{
        icon: Telescope,
        t: "Deep-Sky Insights",
        d: "Query stars, galaxies, exoplanets and missions."
      }, {
        icon: Brain,
        t: "Research Copilot",
        d: "Summarize papers, derive equations, plan experiments."
      }, {
        icon: Orbit,
        t: "Mission Modes",
        d: "Fast, Super, Master and Image — tuned per task."
      }].map(({
        icon: Icon,
        t,
        d
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-card/40 backdrop-blur p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-1", children: t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: d })
      ] }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "w-full max-w-4xl mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-muted-foreground mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-yellow-400" }),
            " Students love it"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight", children: [
            "Most of Sri Lankan students love",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[image:var(--gradient-brand)] bg-clip-text text-transparent", children: "Mission Astro AI" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-lg mx-auto", children: "See how Mission Astro AI is transforming astronomy education across Sri Lanka." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-0.5 bg-[image:var(--gradient-brand)] opacity-20 blur-xl rounded-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-2xl overflow-hidden bg-black aspect-video pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&disablekb=1&playsinline=1&iv_load_policy=3`, title: "Mission Astro AI — Student Testimonials", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, className: "absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none", style: {
            border: "none"
          } }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "h-12 px-10 rounded-xl gap-2 text-base font-semibold shadow-xl", style: {
          background: "linear-gradient(135deg, #f97316, #ef4444)",
          color: "white"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
          " Start Your Mission"
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative z-10 border-t border-white/5 py-6 text-center text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-foreground transition-colors", children: "About" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/developers", className: "hover:text-foreground transition-colors", children: "Developers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "hover:text-foreground transition-colors", children: "Sign in" })
      ] }),
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Radapasa Astronomical Society · Mission Astro AI"
    ] })
  ] });
}
function Stars() {
  const canvasRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const stars = [];
    for (let i = 0; i < 180; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        o: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.01 + 2e-3
      });
    }
    let frame;
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
    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, "aria-hidden": true, className: "pointer-events-none fixed inset-0 w-full h-full", style: {
    opacity: 0.7
  } });
}
export {
  Landing as component
};
