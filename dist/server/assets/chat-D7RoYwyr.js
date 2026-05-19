import { a3 as useRouter, Q as reactExports, I as jsxRuntimeExports } from "./server-qg7rGWzE.js";
import { u as useAuth, g as getDeviceId, L as Link } from "./router-C7nRG1Ze.js";
import { B as Button } from "./button-Bo9XLaI8.js";
import { X, d as Plus, T as Trash2, L as LogOut, P as PanelLeft, c as Paperclip, I as Image, A as ArrowUp, D as Dialog, a as DialogContent, b as FileText, F as File } from "./dialog-DsdXKHTC.js";
import { O as Orbit } from "./orbit-BQ__FUph.js";
import { M as MessageSquare } from "./message-square-BBplYLE6.js";
import { I as Info, U as Users, S as Sparkles } from "./users-C61wmeFZ.js";
import { S as Sun, M as Moon } from "./sun-DM8FvoJI.js";
import { C as Crown } from "./crown-CJAkA3hR.js";
import { Z as Zap } from "./zap-CO9zI6Bb.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-CMgte363.js";
const MODE_ICONS = {
  Fast: Zap,
  Super: Sparkles,
  Master: Crown,
  Image
};
const API = "https://shtoltsgtifqihpyazzh.supabase.co/functions/v1/process-message";
const GUEST_LIMIT = 5;
const ACCEPTED_FILES = ".pdf,.txt,.md,.png,.jpg,.jpeg,.gif,.webp";
function loadConvs() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("astro_convs") || "[]");
  } catch {
    return [];
  }
}
function saveConvs(c) {
  localStorage.setItem("astro_convs", JSON.stringify(c));
}
function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}
function doToggleTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  const next = isDark ? "light" : "dark";
  localStorage.setItem("astro_theme", next);
  applyTheme(next);
  window.dispatchEvent(new CustomEvent("astro-theme", {
    detail: next
  }));
}
function ThemeToggleButton({
  className = ""
}) {
  const [isDark, setIsDark] = reactExports.useState(true);
  reactExports.useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const h = (e) => setIsDark(e.detail === "dark");
    window.addEventListener("astro-theme", h);
    return () => window.removeEventListener("astro-theme", h);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: doToggleTheme, title: isDark ? "Switch to light mode" : "Switch to dark mode", className: `p-2 rounded-lg hover:bg-foreground/10 transition-colors ${className}`, children: isDark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" }) });
}
function FileBadge({
  file,
  onRemove
}) {
  const isImage = file.type.startsWith("image/");
  const [preview, setPreview] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!isImage) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file, isImage]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex items-center gap-2 bg-card border border-border rounded-xl px-3 py-2 text-xs max-w-[200px] group shadow-sm", children: [
    isImage && preview ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: preview, alt: file.name, className: "h-8 w-8 rounded-lg object-cover shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: file.type === "application/pdf" ? /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(File, { className: "h-4 w-4 text-primary" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-foreground font-medium text-[11px]", children: file.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onRemove, className: "absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-destructive text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-2.5 w-2.5" }) })
  ] });
}
function InputBar({
  input,
  setInput,
  selectedFile,
  setSelectedFile,
  mode,
  setMode,
  sending,
  isGuestView,
  onSend,
  onFileChange,
  textareaRef,
  fileInputRef,
  showGuestFileTooltip,
  setShowGuestFileTooltip,
  isTyping
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border bg-background/80 backdrop-blur-xl shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-3 sm:px-4 py-3", children: [
    selectedFile && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileBadge, { file: selectedFile, onRemove: () => setSelectedFile(null) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/80 backdrop-blur focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/30 transition-all shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1 px-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { title: isGuestView ? "Login to upload files" : "Attach file (PDF, image, text)", onClick: () => {
            if (isGuestView) {
              setShowGuestFileTooltip(true);
              setTimeout(() => setShowGuestFileTooltip(false), 2500);
              return;
            }
            fileInputRef.current?.click();
          }, className: `p-1.5 mt-0.5 rounded-lg transition-colors ${isGuestView ? "opacity-40 cursor-not-allowed" : "hover:bg-muted text-muted-foreground hover:text-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "h-4 w-4" }) }),
          showGuestFileTooltip && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-10 left-0 z-50 whitespace-nowrap bg-foreground text-background text-xs px-2.5 py-1.5 rounded-lg shadow-lg pointer-events-none", children: [
            "Login to upload files",
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-3 border-4 border-transparent border-t-foreground" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileInputRef, type: "file", accept: ACCEPTED_FILES, className: "hidden", onChange: onFileChange }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { ref: textareaRef, value: input, onChange: (e) => setInput(e.target.value), onKeyDown: (e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (!isTyping) onSend(input);
          }
        }, placeholder: isGuestView ? "Ask anything about space... (Guest)" : "Ask Mission Astro AI…", rows: 1, className: "flex-1 resize-none bg-transparent py-1.5 outline-none text-sm placeholder:text-muted-foreground max-h-40 leading-relaxed" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-2 pb-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 overflow-x-auto scrollbar-hide flex-1 pl-1", children: ["Fast", "Super", "Master", "Image"].map((m) => {
          const Icon = MODE_ICONS[m];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setMode(m), className: `inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all whitespace-nowrap ${mode === m ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3" }),
            " ",
            m
          ] }, m);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onSend(input), disabled: !input.trim() && !selectedFile || sending || isTyping, className: "h-8 w-8 shrink-0 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-4 w-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground text-center mt-2", children: "Mission Astro AI may produce inaccurate information. Verify critical data." })
  ] }) });
}
function TypingMessage({
  content,
  animate,
  onType,
  onComplete
}) {
  const [displayed, setDisplayed] = reactExports.useState(animate ? "" : content);
  const hasAnimated = reactExports.useRef(!animate);
  const timerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    let cancelled = false;
    if (hasAnimated.current) {
      setDisplayed(content);
      onComplete();
      return;
    }
    hasAnimated.current = true;
    let segments;
    try {
      if (typeof Intl.Segmenter === "function") {
        segments = Array.from(new Intl.Segmenter(void 0, {
          granularity: "grapheme"
        }).segment(content), (s) => s.segment);
      } else {
        segments = Array.from(content);
      }
    } catch {
      segments = Array.from(content);
    }
    let i = 0;
    const speed = 22;
    const step = () => {
      if (cancelled) return;
      i += 1;
      setDisplayed(segments.slice(0, i).join(""));
      onType();
      if (i < segments.length) {
        timerRef.current = window.setTimeout(step, speed);
      } else {
        onComplete();
      }
    };
    timerRef.current = window.setTimeout(step, speed);
    return () => {
      cancelled = true;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [content]);
  const handleFastForward = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setDisplayed(content);
    onComplete();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { onClick: handleFastForward, style: {
    cursor: "pointer"
  }, children: displayed });
}
function MessageList({
  msgs,
  sending,
  isTyping,
  onComplete,
  onScroll
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-3 sm:px-4 py-6 space-y-5", children: [
    msgs.map((m, i) => {
      const isAssistant = m.role === "assistant";
      const animate = isAssistant && i === msgs.length - 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-2.5 ${m.role === "user" ? "justify-end" : ""}`, children: [
        isAssistant && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-lg bg-[image:var(--gradient-brand)] shrink-0 flex items-center justify-center mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Orbit, { className: "h-3.5 w-3.5 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl px-3.5 py-2.5 max-w-[85%] sm:max-w-[78%] whitespace-pre-wrap text-sm leading-relaxed ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-card border border-border"}`, children: [
          m.fileName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1.5 flex items-center gap-1.5 text-[11px] opacity-70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "h-3 w-3" }),
            " ",
            m.fileName
          ] }),
          isAssistant ? /* @__PURE__ */ jsxRuntimeExports.jsx(TypingMessage, { content: m.content, animate, onType: onScroll, onComplete }) : m.content
        ] })
      ] }, i);
    }),
    sending && !isTyping && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-lg bg-[image:var(--gradient-brand)] shrink-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Orbit, { className: "h-3.5 w-3.5 text-white animate-spin" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl px-3.5 py-2.5 bg-card border border-border text-sm text-muted-foreground", children: "Computing trajectory…" })
    ] })
  ] });
}
function LimitDialog({
  open,
  onClose
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "max-w-sm mx-4 bg-card/95 backdrop-blur-xl border-border rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl bg-[image:var(--gradient-brand)] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Orbit, { className: "h-6 w-6 text-white" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold tracking-tight", children: "Free messages used up" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 leading-relaxed", children: "Sign in for unlimited access — image analysis, memory, longer responses, and all modes." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full h-11 rounded-xl", children: "Sign in to continue" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", className: "w-full h-11 rounded-xl", onClick: onClose, children: "Not now" })
    ] })
  ] }) }) });
}
function ChatPage() {
  const router = useRouter();
  const {
    user,
    isGuest,
    logout,
    loading
  } = useAuth();
  const [convs, setConvs] = reactExports.useState([]);
  const [activeId, setActiveId] = reactExports.useState(null);
  const [input, setInput] = reactExports.useState("");
  const [mode, setMode] = reactExports.useState("Fast");
  const [sending, setSending] = reactExports.useState(false);
  const [isTyping, setIsTyping] = reactExports.useState(false);
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(false);
  const [guestCount, setGuestCount] = reactExports.useState(0);
  const [showLimit, setShowLimit] = reactExports.useState(false);
  const [selectedFile, setSelectedFile] = reactExports.useState(null);
  const [showGuestFileTooltip, setShowGuestFileTooltip] = reactExports.useState(false);
  const scrollRef = reactExports.useRef(null);
  const textareaRef = reactExports.useRef(null);
  const fileInputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!loading) {
      if (!user && !isGuest) {
        router.navigate({
          to: "/login"
        });
      } else if (user) {
        const done = localStorage.getItem("astro_onboarding_done") === "1";
        if (!done) router.navigate({
          to: "/onboarding"
        });
      }
    }
  }, [loading, user, isGuest, router]);
  reactExports.useEffect(() => {
    const list = loadConvs();
    setConvs(list);
    setActiveId(list[0]?.id ?? null);
    setGuestCount(parseInt(localStorage.getItem("astro_guest_count") || "0", 10));
  }, []);
  const active = convs.find((c) => c.id === activeId);
  reactExports.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [active?.messages, sending]);
  reactExports.useEffect(() => {
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = "auto";
      ta.style.height = `${Math.min(ta.scrollHeight, 160)}px`;
    }
  }, [input]);
  const newChat = () => {
    setActiveId(null);
    setSidebarOpen(false);
    setSelectedFile(null);
  };
  const deleteConv = (id) => {
    const next = convs.filter((c) => c.id !== id);
    setConvs(next);
    saveConvs(next);
    if (activeId === id) setActiveId(next[0]?.id ?? null);
  };
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setSelectedFile(file);
    e.target.value = "";
  };
  const fileToBase64 = (file) => new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = () => res(reader.result.split(",")[1]);
    reader.onerror = rej;
    reader.readAsDataURL(file);
  });
  const send = reactExports.useCallback(async (text) => {
    const content = text.trim();
    if (!content && !selectedFile || sending || isTyping) return;
    if (!user && isGuest && guestCount >= GUEST_LIMIT) {
      setShowLimit(true);
      return;
    }
    const fileSnap = selectedFile;
    setInput("");
    setSelectedFile(null);
    setSending(true);
    const displayContent = content || (fileSnap ? `[File: ${fileSnap.name}]` : "");
    let conv = active;
    let list = [...convs];
    if (!conv) {
      conv = {
        id: crypto.randomUUID(),
        title: displayContent.slice(0, 40),
        messages: [],
        updated: Date.now()
      };
      list = [conv, ...list];
    }
    conv.messages = [...conv.messages, {
      role: "user",
      content: displayContent,
      fileName: fileSnap?.name
    }];
    conv.updated = Date.now();
    list = list.map((c) => c.id === conv.id ? conv : c);
    setConvs(list);
    setActiveId(conv.id);
    saveConvs(list);
    if (!user && isGuest) {
      const next = guestCount + 1;
      setGuestCount(next);
      localStorage.setItem("astro_guest_count", String(next));
    }
    try {
      const payload = {
        message: content || "",
        // required: user input
        userId: user?.uid ?? `guest_${getDeviceId()}`,
        // required: stable identity
        mode: mode.toLowerCase(),
        // required
        deviceId: getDeviceId()
        // required: device identifier
      };
      if (fileSnap) {
        payload.fileBase64 = await fileToBase64(fileSnap);
        payload.fileName = fileSnap.name;
        payload.fileType = fileSnap.type;
      }
      console.info("[Mission Astro] Sending payload:", JSON.stringify(payload, null, 2));
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 6e4);
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      clearTimeout(timeout);
      if (!res.ok) {
        const errBody = await res.text().catch(() => "");
        console.error(`[Mission Astro] API ${res.status} error. Body:`, errBody);
        throw new Error(`API error ${res.status}${errBody ? `: ${errBody.slice(0, 200)}` : ""}`);
      }
      const raw = await res.text();
      let reply = "I received your message but couldn't generate a response. Please try again.";
      try {
        const data = JSON.parse(raw);
        reply = data.reply ?? data.response ?? data.message ?? data.text ?? data.content ?? data.output ?? reply;
      } catch {
        if (raw && raw.length > 0 && raw.length < 5e4) reply = raw;
      }
      conv.messages = [...conv.messages, {
        role: "assistant",
        content: reply
      }];
    } catch (err) {
      const msg = err?.name === "AbortError" ? "Request timed out (60s). The server may be slow — please try again." : `Error: ${err?.message ?? "Unknown error"}. Please check your connection.`;
      conv.messages = [...conv.messages, {
        role: "assistant",
        content: msg
      }];
    }
    const updated = list.map((c) => c.id === conv.id ? conv : c);
    setConvs(updated);
    saveConvs(updated);
    setSending(false);
    setIsTyping(true);
  }, [active, convs, guestCount, isGuest, mode, selectedFile, sending, isTyping, user]);
  const greeting = user?.displayName?.split(" ")[0] || (isGuest ? "Explorer" : "there");
  const remaining = Math.max(0, GUEST_LIMIT - guestCount);
  const isGuestView = !user && isGuest;
  const inputBarProps = {
    input,
    setInput,
    selectedFile,
    setSelectedFile,
    mode,
    setMode,
    sending,
    isGuestView,
    onSend: send,
    onFileChange: handleFileChange,
    textareaRef,
    fileInputRef,
    showGuestFileTooltip,
    setShowGuestFileTooltip,
    isTyping
  };
  if (isGuestView) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-screen flex flex-col text-foreground", style: {
      background: "var(--gradient-space)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "shrink-0 border-b border-border bg-background/60 backdrop-blur-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 h-14 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-xl bg-[image:var(--gradient-brand)] flex items-center justify-center shadow-md shadow-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Orbit, { className: "h-4 w-4 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Mission Astro AI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: "Guest · Preview Mode" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex text-xs font-medium px-2.5 py-1 rounded-full bg-card border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold", children: remaining }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                "/",
                GUEST_LIMIT
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggleButton, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "rounded-full text-xs px-4 h-8 shadow-md", children: "Sign in free" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 bg-muted sm:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary transition-all duration-500", style: {
          width: `${(GUEST_LIMIT - remaining) / GUEST_LIMIT * 100}%`
        } }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "flex-1 overflow-y-auto", children: !active || active.messages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col items-center justify-center px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 rounded-2xl bg-[image:var(--gradient-brand)] flex items-center justify-center mb-5 shadow-xl shadow-primary/25", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Orbit, { className: "h-8 w-8 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl sm:text-3xl font-semibold tracking-tight", children: [
          "Welcome, ",
          greeting,
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 text-sm max-w-xs", children: "Your Advanced Assistant for Space Science & Research." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 px-2.5 py-1 rounded-full bg-card border border-border text-xs text-muted-foreground", children: [
          remaining,
          " free messages remaining"
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageList, { msgs: active.messages, sending, isTyping, onComplete: () => setIsTyping(false), onScroll: () => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InputBar, { ...inputBarProps }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LimitDialog, { open: showLimit, onClose: () => setShowLimit(false) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-screen flex text-foreground overflow-hidden", style: {
    background: "var(--gradient-space)"
  }, children: [
    sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/60 z-30 md:hidden", onClick: () => setSidebarOpen(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: `
        fixed md:relative inset-y-0 left-0 z-40
        w-72 bg-sidebar border-r border-border flex flex-col shrink-0
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex items-center justify-between border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 px-1 hover:opacity-80 transition-opacity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-[image:var(--gradient-brand)] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Orbit, { className: "h-4 w-4 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold tracking-tight text-sm", children: "Mission Astro" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggleButton, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "md:hidden p-2 rounded-lg hover:bg-muted", onClick: () => setSidebarOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: newChat, variant: "outline", className: "w-full justify-start gap-2 rounded-xl h-9 border-border bg-transparent hover:bg-muted text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " New mission"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto px-2 py-2 space-y-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground px-2 mb-1.5", children: "History" }),
        convs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 py-6 text-xs text-muted-foreground text-center", children: "No missions yet." }),
        convs.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer text-sm transition-colors ${activeId === c.id ? "bg-muted" : "hover:bg-muted/60"}`, onClick: () => {
          setActiveId(c.id);
          setSidebarOpen(false);
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate flex-1 text-[13px]", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "shrink-0 p-1 rounded hover:bg-destructive/15 transition-colors", title: "Delete", onClick: (e) => {
            e.stopPropagation();
            deleteConv(c.id);
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5 text-muted-foreground hover:text-destructive" }) })
        ] }, c.id))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2 py-2 border-t border-border space-y-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "flex items-center gap-2 px-2 py-2 rounded-lg text-[13px] text-muted-foreground hover:bg-muted hover:text-foreground transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-3.5 w-3.5" }),
          " About"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/developers", className: "flex items-center gap-2 px-2 py-2 rounded-lg text-[13px] text-muted-foreground hover:bg-muted hover:text-foreground transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5" }),
          " Developers"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border p-3 space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-primary/10 border border-border flex items-center justify-center text-xs font-semibold text-primary", children: (user?.displayName || user?.email || "G")[0].toUpperCase() }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", children: user?.displayName || user?.email || "Guest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Signed in" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => logout().then(() => router.navigate({
          to: "/"
        })), className: "p-1.5 rounded hover:bg-muted", title: "Sign out", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4 text-muted-foreground" }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 flex flex-col min-w-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "h-13 border-b border-border flex items-center gap-2 px-3 bg-background/60 backdrop-blur-xl shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSidebarOpen((v) => !v), className: "md:hidden p-2 rounded-lg hover:bg-muted transition-colors", title: sidebarOpen ? "Hide sidebar" : "Show sidebar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLeft, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm flex-1", children: "Mission Astro AI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggleButton, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "flex-1 overflow-y-auto", children: !active || active.messages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col items-center justify-center px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-2xl bg-[image:var(--gradient-brand)] flex items-center justify-center mb-5 shadow-lg shadow-primary/25", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Orbit, { className: "h-7 w-7 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl sm:text-3xl font-semibold tracking-tight", children: [
          "Welcome, ",
          greeting,
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 text-sm sm:text-base", children: "Your Advanced Assistant for Space Science & Research." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageList, { msgs: active.messages, sending, isTyping, onComplete: () => setIsTyping(false), onScroll: () => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InputBar, { ...inputBarProps })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LimitDialog, { open: showLimit, onClose: () => setShowLimit(false) })
  ] });
}
export {
  ChatPage as component
};
