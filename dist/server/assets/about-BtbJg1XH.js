import { I as jsxRuntimeExports } from "./server-qg7rGWzE.js";
import { L as Link } from "./router-C7nRG1Ze.js";
import { b as createLucideIcon, B as Button } from "./button-Bo9XLaI8.js";
import { A as ArrowLeft } from "./arrow-left-DGrlcovN.js";
import { M as MessageSquare } from "./message-square-BBplYLE6.js";
import { O as Orbit } from "./orbit-BQ__FUph.js";
import { G as Globe } from "./globe-KWtC-G8d.js";
import { T as Telescope } from "./telescope-BB9vRLRt.js";
import { Z as Zap } from "./zap-CO9zI6Bb.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen text-foreground relative", style: {
    background: "var(--gradient-space)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        backgroundImage: ["radial-gradient(1.5px 1.5px at 10% 15%, rgba(255,255,255,0.8), transparent)", "radial-gradient(1px 1px at 25% 55%, rgba(255,255,255,0.6), transparent)", "radial-gradient(2px 2px at 40% 25%, rgba(255,255,255,0.9), transparent)", "radial-gradient(1px 1px at 55% 70%, rgba(255,255,255,0.5), transparent)", "radial-gradient(1.5px 1.5px at 70% 10%, rgba(255,255,255,0.7), transparent)", "radial-gradient(1px 1px at 80% 80%, rgba(255,255,255,0.6), transparent)", "radial-gradient(2px 2px at 90% 40%, rgba(255,255,255,0.8), transparent)", "radial-gradient(1px 1px at 15% 85%, rgba(255,255,255,0.5), transparent)", "radial-gradient(1.5px 1.5px at 60% 45%, rgba(255,255,255,0.7), transparent)", "radial-gradient(1px 1px at 35% 90%, rgba(255,255,255,0.6), transparent)"].join(", "),
        backgroundSize: "700px 700px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/3 h-[600px] w-[600px] rounded-full opacity-10 blur-[120px]", style: {
        background: "var(--gradient-brand)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full opacity-8 blur-[100px] bg-cyan-500" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          " Home"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/chat", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "rounded-full gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3.5 w-3.5" }),
          " Back to Chat"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-16 w-16 rounded-2xl bg-[image:var(--gradient-brand)] items-center justify-center mb-6 shadow-2xl shadow-primary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Orbit, { className: "h-8 w-8 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl font-bold tracking-tight mb-4", children: [
          "About",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[image:var(--gradient-brand)] bg-clip-text text-transparent", children: "Mission Astro AI" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: "An AI-powered research companion built for astronomers, students, and space enthusiasts across Sri Lanka and beyond." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card/60 backdrop-blur-xl border border-border rounded-3xl p-8 mb-8 shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Our Mission" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed text-base", children: [
          "Mission Astro AI was created with a singular, passionate purpose:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "to empower students and space enthusiasts with advanced AI-driven research tools for Astronomy." }),
          " ",
          "We believe that the wonders of the cosmos should be accessible to everyone — from a Grade 8 student gazing at the night sky for the first time, to a graduate researcher modeling stellar evolution."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-base mt-4", children: "By combining cutting-edge large language models with deep domain knowledge in astrophysics, cosmology, planetary science, and space exploration, Mission Astro AI serves as an always-available research copilot — ready to explain black holes, derive orbital mechanics equations, summarize recent papers, or simply spark curiosity about the universe." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card/60 backdrop-blur-xl border border-border rounded-3xl p-8 mb-8 shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-5 w-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Founded by Radapasa Astronomical Society" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed text-base", children: [
          "Mission Astro AI is an initiative of the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Radapasa Astronomical Society" }),
          " — a pioneering student-led astronomical organization in Sri Lanka dedicated to promoting astronomy education, scientific research, and public outreach."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-base mt-4", children: "The Society organizes observation nights, workshops, and educational programs to bring the science of the universe closer to young Sri Lankans. Mission Astro AI extends this mission into the digital realm, providing 24/7 AI assistance for astronomical queries, research support, and learning at every level." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-center mb-6", children: "What Mission Astro AI Can Do" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12", children: [{
        icon: Telescope,
        title: "Deep-Sky Research",
        desc: "Query detailed information about stars, galaxies, nebulae, exoplanets, and active space missions in real time."
      }, {
        icon: BookOpen,
        title: "Paper Summarization",
        desc: "Paste arXiv abstracts or research questions and get clear, jargon-free summaries and explanations."
      }, {
        icon: Zap,
        title: "Multi-Mode Intelligence",
        desc: "Choose from Fast, Super, Master, and Image modes — each tuned for different depths of analysis and response quality."
      }, {
        icon: Star,
        title: "Personalized Learning",
        desc: "Onboarding adapts the AI's explanations to your grade level, institution, and area of astronomical interest."
      }].map(({
        icon: Icon,
        title,
        desc
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card/40 backdrop-blur border border-border rounded-2xl p-6 hover:bg-card/60 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-2", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: desc })
      ] }, title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/chat", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "rounded-xl px-8 h-12 gap-2 shadow-lg shadow-primary/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-5 w-5" }),
        " Start Exploring"
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "text-center text-xs text-muted-foreground py-6 border-t border-border mt-4", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Radapasa Astronomical Society · Mission Astro AI"
      ] })
    ] })
  ] });
}
export {
  AboutPage as component
};
