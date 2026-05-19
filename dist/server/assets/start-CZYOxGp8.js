import { a3 as useRouter, Q as reactExports, I as jsxRuntimeExports } from "./server-CWKwR-pv.js";
import { b as createLucideIcon, B as Button } from "./button-Drn6kLDF.js";
import { O as Orbit } from "./orbit-BBAS_1cu.js";
import { L as LoaderCircle } from "./loader-circle-CyNQ8mI2.js";
import { Z as Zap } from "./zap-DIzcMI-s.js";
import { C as Crown } from "./crown-DzSzQ0XU.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$5 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$5);
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$4);
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]
];
const LockKeyhole = createLucideIcon("lock-keyhole", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
      key: "u4xsad"
    }
  ],
  [
    "path",
    {
      d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
      key: "676m9"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" }]
];
const Rocket = createLucideIcon("rocket", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M12 19h8", key: "baeox8" }],
  ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }]
];
const Terminal = createLucideIcon("terminal", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
function CmdWindow({
  title,
  position,
  delay
}) {
  const [lines, setLines] = reactExports.useState([]);
  reactExports.useEffect(() => {
    let t = setTimeout(() => {
      const logsPool = ["kernel: [0.000000] Linux version 6.5.0-generic", "systemd[1]: Reached target Basic System.", "pci 0000:00:02.0: vgaarb: setting as boot VGA device", "sshd[1293]: Server listening on 0.0.0.0 port 22.", "dockerd[1300]: API listen on /run/docker.sock", "mount: /dev/sda1 mounted on /boot.", "auth: Successfully verified TLS certificate.", "syslog: connection established", "[ OK ] Started Network Manager.", "ufw: Enabled firewall block on port 80", "nginx[1041]: worker process 1045 started"];
      const intv = setInterval(() => {
        const log = logsPool[Math.floor(Math.random() * logsPool.length)];
        const ts = (/* @__PURE__ */ new Date()).toISOString().substring(11, 23);
        setLines((prev) => [...prev.slice(-9), `[${ts}] ${log}`]);
      }, 350);
      return () => clearInterval(intv);
    }, delay * 1e3);
    return () => clearTimeout(t);
  }, [delay]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `absolute ${position} w-80 h-48 bg-black/95 border border-green-900/50 rounded-md overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.15)] animate-in zoom-in duration-300 z-10 opacity-80 pointer-events-none`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 text-gray-300 text-[10px] px-2 py-1 flex justify-between items-center font-sans tracking-tight", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-red-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-yellow-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-green-500" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 font-mono text-[10px] leading-[1.3] text-green-500 flex flex-col gap-0.5 overflow-hidden h-full", children: lines.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: l }, i)) })
  ] });
}
function generateTerminalLine() {
  const actions = ["Mounting", "Verifying", "Extracting", "Executing", "Binding", "Initializing", "Pinging"];
  const modules = ["/dev/sda1", "SSL_Certificate", "rootfs.img", "sshd_config", "TCP_socket", "system_bus_socket"];
  const a = actions[Math.floor(Math.random() * actions.length)];
  const m = modules[Math.floor(Math.random() * modules.length)];
  const hex = "0x" + Math.random().toString(16).slice(2, 6).toUpperCase();
  const ms = Math.floor(Math.random() * 100) + 10;
  return `[ OK ] ${a} ${m} (port: ${hex}) ... ${ms}ms`;
}
function PasswordPrompt({
  onComplete
}) {
  const [password, setPassword] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("idle");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === "checking" || status === "success") return;
    setStatus("checking");
    setTimeout(() => {
      if (password === "RCCAstro@2026") {
        setStatus("success");
        setTimeout(() => onComplete(), 1500);
      } else {
        setStatus("failed");
        setTimeout(() => setStatus("idle"), 2e3);
      }
    }, 1500);
  };
  let borderColor = "border-blue-500";
  let textColor = "text-blue-400";
  let message = "AUTHENTICATION REQUIRED";
  let Icon = LockKeyhole;
  if (status === "failed") {
    borderColor = "border-red-500";
    textColor = "text-red-500";
    message = "ACCESS DENIED";
    Icon = TriangleAlert;
  } else if (status === "checking") {
    borderColor = "border-yellow-500";
    textColor = "text-yellow-400";
    message = "VERIFYING CREDENTIALS...";
    Icon = LoaderCircle;
  } else if (status === "success") {
    borderColor = "border-green-500";
    textColor = "text-green-500";
    message = "AUTHORIZED";
    Icon = CircleCheck;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-black/90 backdrop-blur-xl border ${borderColor} p-8 rounded-2xl shadow-2xl text-center w-full max-w-sm mx-auto animate-in zoom-in duration-500 transition-colors`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative mx-auto mt-4 mb-8 w-24 h-24 border-2 ${borderColor} border-dashed rounded-full flex items-center justify-center`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-10 h-10 ${textColor} ${status === "checking" ? "animate-spin" : status === "success" ? "animate-bounce" : ""}` }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-mono font-bold tracking-widest text-sm ${textColor} mb-6 uppercase`, children: message }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4 relative z-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), disabled: status !== "idle" && status !== "failed", className: "bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 font-mono text-center tracking-widest shadow-inner placeholder:text-gray-600 placeholder:tracking-normal", placeholder: "Enter Passkey", autoFocus: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: status === "checking" || status === "success" || !password, className: `w-full py-6 rounded-lg font-bold tracking-widest uppercase transition-all shadow-lg
            ${status === "failed" ? "bg-red-600 hover:bg-red-700 shadow-red-600/50" : status === "success" ? "bg-green-600 hover:bg-green-700 shadow-green-600/50" : "bg-blue-600 hover:bg-blue-700 shadow-blue-600/50"}`, children: status === "checking" ? "Verifying..." : status === "failed" ? "Failed" : status === "success" ? "Unlocked" : "Submit" })
    ] })
  ] });
}
function CinematicLaunch() {
  const router = useRouter();
  const [stage, setStage] = reactExports.useState(1);
  const [slide, setSlide] = reactExports.useState("stage1");
  const [loadingNext, setLoadingNext] = reactExports.useState(false);
  const [logs, setLogs] = reactExports.useState([]);
  const scrollRef = reactExports.useRef(null);
  const [cmdWindows, setCmdWindows] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (stage === 2) {
      const t = setInterval(() => {
        const slTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
          timeZone: "Asia/Colombo",
          hour12: false
        });
        setLogs((prev) => [...prev.slice(-40), `[SLT ${slTime}] ${generateTerminalLine()}`]);
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }, 150);
      const positions = ["top-10 left-[5%]", "bottom-12 right-[5%]", "top-1/4 right-[10%]", "bottom-1/3 left-[2%]", "top-[15%] left-[20%]"];
      const cmdTimer = setInterval(() => {
        setCmdWindows((prev) => {
          let updated = [...prev];
          if (updated.length > 3) updated.shift();
          updated.push({
            id: Math.random().toString(36).substr(2, 9),
            pos: positions[Math.floor(Math.random() * positions.length)],
            del: 0
          });
          return updated;
        });
      }, 2500);
      const endStage = setTimeout(() => {
        clearInterval(t);
        clearInterval(cmdTimer);
        setStage(3);
      }, 2e4);
      return () => {
        clearInterval(t);
        clearInterval(cmdTimer);
        clearTimeout(endStage);
      };
    }
  }, [stage]);
  const handleLaunchToChat = () => {
    setStage(4);
    setTimeout(() => {
      router.navigate({
        to: "/adminchat"
      });
    }, 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `min-h-screen text-white overflow-hidden relative flex flex-col transition-all duration-1000 ${stage === 4 ? "opacity-0 scale-125 blur-sm" : "opacity-100 scale-100 blur-0"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0 bg-black", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-purple-900/20 to-black animate-pulse", style: {
        animationDuration: "6s"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black opacity-60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-40 bg-repeat bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex-1 flex items-center justify-center p-4", children: [
      stage === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center animate-in fade-in zoom-in duration-1000", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Orbit, { className: "h-20 w-20 text-blue-500 mb-10 animate-spin", style: {
          animationDuration: "8s"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setStage(2), className: "px-10 py-5 rounded-full bg-blue-600/20 border border-blue-500/50 hover:bg-blue-600 hover:border-transparent text-white font-bold tracking-[0.2em] uppercase transition-all shadow-[0_0_50px_rgba(37,99,235,0.4)] hover:shadow-[0_0_80px_rgba(37,99,235,0.9)] active:scale-95 group relative overflow-hidden backdrop-blur-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 opacity-0 group-hover:opacity-20 transition-opacity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" }),
            "Initiate System Boot"
          ] })
        ] })
      ] }),
      stage === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center w-full max-w-3xl animate-in fade-in duration-700 relative h-full", children: [
        cmdWindows.map((cmd) => /* @__PURE__ */ jsxRuntimeExports.jsx(CmdWindow, { title: "root@sys:~ overrides", position: cmd.pos, delay: cmd.del }, cmd.id)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex justify-center mb-16 w-full z-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-blue-500/30 blur-[120px] rounded-full scale-150 animate-pulse", style: {
            animationDuration: "2s"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-40 w-40 md:h-56 md:w-56 rounded-full bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-800 flex items-center justify-center shadow-[0_0_100px_rgba(79,70,229,0.8)] animate-spin", style: {
            animationDuration: "3s"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-2 rounded-full border border-white/20 border-dashed animate-spin-reverse", style: {
              animationDuration: "10s"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 rounded-full border-t border-b border-cyan-400/50 animate-spin", style: {
              animationDuration: "1s"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Orbit, { className: "h-20 w-20 md:h-28 md:w-28 text-cyan-200" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full bg-black/80 backdrop-blur-2xl border border-cyan-500/60 rounded-xl p-5 font-mono text-xs md:text-sm text-cyan-400 h-64 overflow-y-auto shadow-[0_0_80px_rgba(6,182,212,0.3)] z-20", ref: scrollRef, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/50 mb-4 pb-2 border-b border-cyan-900/50", children: "SYSTEM INITIALIZATION SEQUENCE STARTED // SECURE TUNNEL ESTABLISHED" }),
          logs.map((log, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-0.5 opacity-90", children: log }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-pulse w-2 h-4 bg-cyan-400 mt-1" })
        ] })
      ] }),
      stage === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-2xl animate-in zoom-in-95 fade-in duration-1000", children: [
        slide === "stage1" && // LOW POWER - PROJECT ARCHITECT
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-b from-gray-900/80 to-black border border-gray-700/50 p-10 rounded-2xl shadow-xl text-center backdrop-blur-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 w-24 mx-auto rounded-full bg-gray-800 border-2 border-gray-600 mb-6 flex items-center justify-center overflow-hidden grayscale", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "h-10 w-10 text-gray-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-xs font-semibold uppercase tracking-[0.3em] mb-2", children: "Stage 1 / Project Architect" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-medium text-gray-200 mb-4 tracking-wide", children: "E.J. Sithija Nimsara" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm leading-relaxed mb-8 max-w-md mx-auto", children: "Lead full-stack developer. Orchestrated the neural integration and architecture for Mission Astro AI." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => {
            setLoadingNext(true);
            setTimeout(() => {
              setLoadingNext(false);
              setSlide("stage2");
            }, 2e3);
          }, disabled: loadingNext, variant: "outline", className: "w-full sm:w-1/2 rounded-full border-gray-600 text-gray-300 hover:bg-gray-800 transition-all font-semibold", children: [
            loadingNext ? "Establishing..." : "Establish Connection",
            loadingNext ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 ml-2 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 ml-1" })
          ] })
        ] }),
        slide === "stage2" && // MID POWER - TEACHER IN CHARGE
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-b from-blue-950/80 to-slate-900 border border-blue-500/30 p-10 rounded-3xl shadow-[0_0_40px_rgba(59,130,246,0.3)] text-center animate-in slide-in-from-right fade-in backdrop-blur-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-blue-500 blur-xl opacity-30 rounded-full scale-125" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-28 w-28 mx-auto rounded-full bg-slate-800 border-2 border-blue-400 mb-6 relative overflow-hidden shadow-lg shadow-blue-500/50 group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://ui-avatars.com/api/?name=Aruna+Wicramanayaka&background=0D8ABC&color=fff&size=150", alt: "Aruna Wicramanayaka", className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-blue-400 text-sm font-bold uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4" }),
            " Teacher-In-Charge"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-white mb-1 tracking-tight", children: "Mr. Aruna Wicramanayaka" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-blue-200/70 mb-5 tracking-widest uppercase", children: "Radapasa Astronomical Society" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100/80 text-base leading-relaxed mb-10 max-w-lg mx-auto", children: "A guiding star for our students. Deepest gratitude for your constant mentorship, profound dedication, and pushing the boundaries of astronomical science." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setSlide("scan"), className: "w-full sm:w-1/2 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/50 transition-all h-12", children: [
            "Escalate Privilege ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 ml-1" })
          ] })
        ] }),
        slide === "scan" && /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordPrompt, { onComplete: () => setSlide("stage3") }),
        slide === "stage3" && // HIGH POWER - PRINCIPAL
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-black border border-yellow-500/50 p-12 rounded-[2rem] shadow-[0_0_100px_rgba(234,179,8,0.4)] text-center animate-in slide-in-from-right duration-500 fade-in scale-105 z-50 overflow-hidden group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-yellow-900/30 via-red-900/20 to-black" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_2s_infinite]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-yellow-500 blur-2xl opacity-40 rounded-full scale-[1.5] animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-36 w-36 mx-auto rounded-full bg-black border-4 border-yellow-400 mb-8 relative flex shadow-[0_0_50px_rgba(234,179,8,0.7)] hover:shadow-[0_0_80px_rgba(234,179,8,1)] transition-shadow duration-500 overflow-hidden items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://ui-avatars.com/api/?name=Kumara+Piyathilaka&background=EAB308&color=000&size=200", alt: "Kumara Piyathilaka", className: "w-full h-full object-cover" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "absolute bottom-2 h-6 w-6 text-yellow-400" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-yellow-500 text-sm font-black uppercase tracking-[0.3em] mb-3 drop-shadow-md flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "h-5 w-5" }),
            " Chief Patron & Principal"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "relative z-10 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-200 mb-2 drop-shadow-lg tracking-tight", children: "Mr. Kumara Piyathilaka" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 text-sm text-yellow-200/80 mb-8 tracking-[0.2em] uppercase font-semibold", children: "Rajapaksa Central College" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative z-10 text-gray-300 text-lg leading-relaxed mb-12 max-w-xl mx-auto px-4", children: "Honoring your exceptional leadership and unwavering support. Your visionary guidance has empowered projects like Mission Astro AI to reach the cosmos." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleLaunchToChat, className: "relative z-10 w-full py-5 rounded-2xl text-white font-black text-xl tracking-[0.3em] uppercase transition-all shadow-[0_0_50px_rgba(239,68,68,0.8)] hover:shadow-[0_0_80px_rgba(239,68,68,1)] hover:scale-105 active:scale-95 flex items-center justify-center gap-3", style: {
            background: "linear-gradient(90deg, #f59e0b, #ef4444, #f97316)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Unlock, { className: "h-6 w-6" }),
            " OVERRIDE & LAUNCH"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: {
      __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `
    } })
  ] });
}
function Unlock(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 11V7a5 5 0 0 1 9.9-1" })
  ] });
}
export {
  CinematicLaunch as component
};
