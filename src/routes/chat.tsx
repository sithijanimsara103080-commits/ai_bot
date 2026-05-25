import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { getDeviceId } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  ArrowUp, Menu, Plus, MessageSquare, Trash2, LogOut, Coins, X,
  Sparkles, Zap, Crown, Image as ImageIcon, Orbit, Sun, Moon,
  Paperclip, PanelLeft, FileText, File, Info, Users,
} from "lucide-react";

export const Route = createFileRoute("/chat")({
  head: () => ({ meta: [{ title: "Mission Control — Mission Astro AI" }] }),
  component: ChatPage,
});

// ── Types ─────────────────────────────────────────────────────────────────
type Mode = "Fast" | "Super" | "Master" | "Image";
interface Msg { role: "user" | "assistant"; content: string; fileName?: string; }
interface Conv { id: string; title: string; messages: Msg[]; updated: number; }

const MODE_ICONS: Record<Mode, any> = { Fast: Zap, Super: Sparkles, Master: Crown, Image: ImageIcon };
const API = "https://shtoltsgtifqihpyazzh.supabase.co/functions/v1/process-message";
const GUEST_LIMIT = 5;
const ACCEPTED_FILES = ".pdf,.txt,.md,.png,.jpg,.jpeg,.gif,.webp";

// ── Storage helpers ────────────────────────────────────────────────────────
function loadConvs(): Conv[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem("astro_convs") || "[]"); } catch { return []; }
}
function saveConvs(c: Conv[]) { localStorage.setItem("astro_convs", JSON.stringify(c)); }

// ── Theme helpers (defined at module level, never recreated) ───────────────
function applyTheme(theme: "dark" | "light") {
  document.documentElement.classList.toggle("dark", theme === "dark");
}
function doToggleTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  const next: "dark" | "light" = isDark ? "light" : "dark";
  localStorage.setItem("astro_theme", next);
  applyTheme(next);
  window.dispatchEvent(new CustomEvent("astro-theme", { detail: next }));
}

// ── Standalone components (defined OUTSIDE ChatPage — critical for focus) ──

function ThemeToggleButton({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const h = (e: Event) => setIsDark((e as CustomEvent<string>).detail === "dark");
    window.addEventListener("astro-theme", h);
    return () => window.removeEventListener("astro-theme", h);
  }, []);
  return (
    <button
      onClick={doToggleTheme}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`p-2 rounded-lg hover:bg-foreground/10 transition-colors ${className}`}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function FileBadge({ file, onRemove }: { file: File; onRemove: () => void }) {
  const isImage = file.type.startsWith("image/");
  const [preview, setPreview] = useState<string | null>(null);
  useEffect(() => {
    if (!isImage) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file, isImage]);

  return (
    <div className="relative inline-flex items-center gap-2 bg-card border border-border rounded-xl px-3 py-2 text-xs max-w-[200px] group shadow-sm">
      {isImage && preview ? (
        <img src={preview} alt={file.name} className="h-8 w-8 rounded-lg object-cover shrink-0" />
      ) : (
        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          {file.type === "application/pdf" ? (
            <FileText className="h-4 w-4 text-primary" />
          ) : (
            <File className="h-4 w-4 text-primary" />
          )}
        </div>
      )}
      <span className="truncate text-foreground font-medium text-[11px]">{file.name}</span>
      <button
        onClick={onRemove}
        className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-destructive text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <X className="h-2.5 w-2.5" />
      </button>
    </div>
  );
}

// Props interfaces for extracted components
interface InputBarProps {
  input: string;
  setInput: (v: string) => void;
  selectedFile: File | null;
  setSelectedFile: (f: File | null) => void;
  mode: Mode;
  setMode: (m: Mode) => void;
  sending: boolean;
  isGuestView: boolean;
  onSend: (text: string) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  showGuestFileTooltip: boolean;
  setShowGuestFileTooltip: (v: boolean) => void;
  isTyping: boolean;
}

function InputBar({
  input, setInput, selectedFile, setSelectedFile,
  mode, setMode, sending, isGuestView, onSend,
  onFileChange, textareaRef, fileInputRef,
  showGuestFileTooltip, setShowGuestFileTooltip,
  isTyping,
}: InputBarProps) {
  return (
    <div className="border-t border-border bg-background/80 backdrop-blur-xl shrink-0">
      <div className="max-w-3xl mx-auto px-3 sm:px-4 py-3">
        {selectedFile && (
          <div className="mb-2">
            <FileBadge file={selectedFile} onRemove={() => setSelectedFile(null)} />
          </div>
        )}
        <div className="rounded-2xl border border-border bg-card/80 backdrop-blur focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/30 transition-all shadow-sm">
          <div className="flex items-start gap-1 px-2 pt-2">
            {/* Attach button */}
            <div className="relative shrink-0">
              <button
                title={isGuestView ? "Login to upload files" : "Attach file (PDF, image, text)"}
                onClick={() => {
                  if (isGuestView) {
                    setShowGuestFileTooltip(true);
                    setTimeout(() => setShowGuestFileTooltip(false), 2500);
                    return;
                  }
                  fileInputRef.current?.click();
                }}
                className={`p-1.5 mt-0.5 rounded-lg transition-colors ${isGuestView
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
              >
                <Paperclip className="h-4 w-4" />
              </button>
              {showGuestFileTooltip && (
                <div className="absolute bottom-10 left-0 z-50 whitespace-nowrap bg-foreground text-background text-xs px-2.5 py-1.5 rounded-lg shadow-lg pointer-events-none">
                  Login to upload files
                  <div className="absolute top-full left-3 border-4 border-transparent border-t-foreground" />
                </div>
              )}
            </div>
            <input ref={fileInputRef} type="file" accept={ACCEPTED_FILES} className="hidden" onChange={onFileChange} />
            {/* Textarea */}
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); if (!isTyping) onSend(input); } }}
              placeholder={isGuestView ? "Ask anything about space... (Guest)" : "Ask Mission Astro AI…"}
              rows={1}
              className="flex-1 resize-none bg-transparent py-1.5 outline-none text-sm placeholder:text-muted-foreground max-h-40 leading-relaxed"
            />
          </div>
          {/* Bottom: modes + send */}
          <div className="flex items-center justify-between px-2 pb-2 gap-2">
            <div className="flex gap-0.5 overflow-x-auto scrollbar-hide flex-1 pl-1">
              {(["Fast", "Super", "Master", "Image"] as Mode[]).map((m) => {
                const Icon = MODE_ICONS[m];
                return (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all whitespace-nowrap ${mode === m ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                  >
                    <Icon className="h-3 w-3" /> {m}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => onSend(input)}
              disabled={(!input.trim() && !selectedFile) || sending || isTyping}
              className="h-8 w-8 shrink-0 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
        <p className="text-[10px] text-muted-foreground text-center mt-2">
          Mission Astro AI may produce inaccurate information. Verify critical data.
        </p>
      </div>
    </div>
  );
}

function TypingMessage({ content, animate, onType, onComplete }: { content: string, animate: boolean, onType: () => void, onComplete: () => void }) {
  const [displayed, setDisplayed] = useState(animate ? "" : content);
  const hasAnimated = useRef(!animate);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    // If already animated (older messages), show full content
    if (hasAnimated.current) {
      setDisplayed(content);
      onComplete();
      return;
    }
    hasAnimated.current = true;

    // Segment by grapheme clusters when available to avoid breaking Unicode glyphs
    let segments: string[];
    try {
      // @ts-ignore Intl maybe undefined in some environments
      if (typeof (Intl as any).Segmenter === "function") {
        // @ts-ignore
        segments = Array.from(new (Intl as any).Segmenter(undefined, { granularity: 'grapheme' }).segment(content), (s: any) => s.segment);
      } else {
        segments = Array.from(content);
      }
    } catch {
      segments = Array.from(content);
    }

    let i = 0;
    const speed = 22; // ms per segment
    const step = () => {
      if (cancelled) return;
      i += 1;
      setDisplayed(segments.slice(0, i).join(''));
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

  // fast-forward handler
  const handleFastForward = () => {
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
    setDisplayed(content);
    onComplete();
  };

  return <span onClick={handleFastForward} style={{ cursor: 'pointer' }}>{displayed}</span>;
}

interface MessageListProps { msgs: Msg[]; sending: boolean; isTyping: boolean; onComplete: () => void; onScroll: () => void; }
function MessageList({ msgs, sending, isTyping, onComplete, onScroll }: MessageListProps) {
  return (
    <div className="max-w-3xl mx-auto px-3 sm:px-4 py-6 space-y-5">
      {msgs.map((m, i) => {
        const isAssistant = m.role === "assistant";
        // Only animate the very last assistant message if it was JUST added (sending state just finished)
        const animate = isAssistant && i === msgs.length - 1 && isTyping;
        return (
          <div key={i} className={`flex gap-2.5 ${m.role === "user" ? "justify-end" : ""}`}>
            {isAssistant && (
              <div className="h-7 w-7 rounded-lg bg-[image:var(--gradient-brand)] shrink-0 flex items-center justify-center mt-0.5">
                <Orbit className="h-3.5 w-3.5 text-white" />
              </div>
            )}
            <div className={`rounded-2xl px-3.5 py-2.5 max-w-[85%] sm:max-w-[78%] whitespace-pre-wrap text-sm leading-relaxed ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-card border border-border"
              }`}>
              {m.fileName && (
                <div className="mb-1.5 flex items-center gap-1.5 text-[11px] opacity-70">
                  <Paperclip className="h-3 w-3" /> {m.fileName}
                </div>
              )}
              {isAssistant ? <TypingMessage content={m.content} animate={animate} onType={onScroll} onComplete={onComplete} /> : m.content}
            </div>
          </div>
        )
      })}
      {(sending && !isTyping) && (
        <div className="flex gap-2.5">
          <div className="h-7 w-7 rounded-lg bg-[image:var(--gradient-brand)] shrink-0 flex items-center justify-center">
            <Orbit className="h-3.5 w-3.5 text-white animate-spin" />
          </div>
          <div className="rounded-2xl px-3.5 py-2.5 bg-card border border-border text-sm text-muted-foreground">
            Computing trajectory…
          </div>
        </div>
      )}
    </div>
  );
}

interface LimitDialogProps { open: boolean; onClose: () => void; }
function LimitDialog({ open, onClose }: LimitDialogProps) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-sm mx-4 bg-card/95 backdrop-blur-xl border-border rounded-2xl">
        <div className="text-center py-2">
          <div className="h-12 w-12 rounded-2xl bg-[image:var(--gradient-brand)] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30">
            <Orbit className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold tracking-tight">Free messages used up</h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Sign in for unlimited access — image analysis, memory, longer responses, and all modes.
          </p>
          <div className="flex flex-col gap-2 mt-6">
            <Link to="/login" onClick={onClose}>
              <Button className="w-full h-11 rounded-xl">Sign in to continue</Button>
            </Link>
            <Button variant="ghost" className="w-full h-11 rounded-xl" onClick={onClose}>Not now</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ── Main ChatPage ──────────────────────────────────────────────────────────
function ChatPage() {
  const router = useRouter();
  const { user, isGuest, logout, loading } = useAuth();
  const [convs, setConvs] = useState<Conv[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("Fast");
  const [sending, setSending] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const [showLimit, setShowLimit] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showGuestFileTooltip, setShowGuestFileTooltip] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auth guard
  useEffect(() => {
    if (!loading) {
      if (!user && !isGuest) {
        router.navigate({ to: "/login" });
      } else if (user) {
        const done = localStorage.getItem("astro_onboarding_done") === "1";
        if (!done) router.navigate({ to: "/onboarding" });
      }
    }
  }, [loading, user, isGuest, router]);

  // Load data
  useEffect(() => {
    const list = loadConvs();
    setConvs(list);
    // Modified: Default to null (new chat) every time the page is entered/reloaded
    setActiveId(null);
    setGuestCount(parseInt(localStorage.getItem("astro_guest_count") || "0", 10));
  }, []);

  const active = convs.find((c) => c.id === activeId);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [active?.messages, sending]);

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (ta) { ta.style.height = "auto"; ta.style.height = `${Math.min(ta.scrollHeight, 160)}px`; }
  }, [input]);

  const newChat = () => { setActiveId(null); setSidebarOpen(false); setSelectedFile(null); };
  const deleteConv = (id: string) => {
    const next = convs.filter((c) => c.id !== id);
    setConvs(next); saveConvs(next);
    if (activeId === id) setActiveId(next[0]?.id ?? null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSelectedFile(file);
    e.target.value = "";
  };

  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = () => res((reader.result as string).split(",")[1]);
      reader.onerror = rej;
      reader.readAsDataURL(file);
    });

  const send = useCallback(async (text: string) => {
    const content = text.trim();
    if ((!content && !selectedFile) || sending || isTyping) return;

    // Limits check - Only for guests
    if (!user && isGuest) {
      if (guestCount >= GUEST_LIMIT) {
        setShowLimit(true);
        return;
      }
    }

    const fileSnap = selectedFile;
    setInput(""); setSelectedFile(null); setSending(true);

    const displayContent = content || (fileSnap ? `[File: ${fileSnap.name}]` : "");
    let conv = active;
    let list = [...convs];
    if (!conv) {
      conv = { id: crypto.randomUUID(), title: displayContent.slice(0, 40), messages: [], updated: Date.now() };
      list = [conv, ...list];
    }
    conv.messages = [...conv.messages, { role: "user", content: displayContent, fileName: fileSnap?.name }];
    conv.updated = Date.now();
    list = list.map((c) => (c.id === conv!.id ? conv! : c));
    setConvs(list); setActiveId(conv.id); saveConvs(list);

    if (!user && isGuest) {
      const next = guestCount + 1;
      setGuestCount(next);
      localStorage.setItem("astro_guest_count", String(next));
    }

    try {
      // Build a minimal payload with ONLY the 4 required fields
      // Extra fields (conversationHistory, onboardingData) stripped to avoid 400
      const payload: Record<string, any> = {
        message: content || "",                          // required: user input
        userId: user?.uid ?? `guest_${getDeviceId()}`,  // required: stable identity
        mode: mode.toLowerCase() as "fast" | "super" | "master" | "image", // required
        deviceId: getDeviceId(),                         // required: device identifier
      };

      // Optionally attach file data only when a file is present
      if (fileSnap) {
        payload.fileBase64 = await fileToBase64(fileSnap);
        payload.fileName = fileSnap.name;
        payload.fileType = fileSnap.type;
      }

      // Log payload to console so it's visible in browser DevTools if a 400 occurs
      console.info("[Mission Astro] Sending payload:", JSON.stringify(payload, null, 2));

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 60_000);
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
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
        if (raw && raw.length > 0 && raw.length < 50_000) reply = raw;
      }
      conv.messages = [...conv.messages, { role: "assistant", content: reply }];
    } catch (err: any) {
      const msg = err?.name === "AbortError"
        ? "Request timed out (60s). The server may be slow — please try again."
        : `Error: ${err?.message ?? "Unknown error"}. Please check your connection.`;
      conv.messages = [...conv.messages, { role: "assistant", content: msg }];
    }

    const updated = list.map((c) => (c.id === conv!.id ? conv! : c));
    setConvs(updated); saveConvs(updated); setSending(false); setIsTyping(true);
  }, [active, convs, guestCount, isGuest, mode, selectedFile, sending, isTyping, user]);

  const greeting = user?.displayName?.split(" ")[0] || (isGuest ? "Explorer" : "there");
  const remaining = Math.max(0, GUEST_LIMIT - guestCount);
  const isGuestView = !user && isGuest;

  // Shared InputBar props
  const inputBarProps: InputBarProps = {
    input, setInput, selectedFile, setSelectedFile,
    mode, setMode, sending, isGuestView, onSend: send,
    onFileChange: handleFileChange, textareaRef, fileInputRef,
    showGuestFileTooltip, setShowGuestFileTooltip,
    isTyping,
  };

  // ── GUEST VIEW ────────────────────────────────────────────────────────────
  if (isGuestView) {
    return (
      <div className="h-screen flex flex-col text-foreground" style={{ background: "var(--gradient-space)" }}>
        <header className="shrink-0 border-b border-border bg-background/60 backdrop-blur-xl">
          <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-[image:var(--gradient-brand)] flex items-center justify-center shadow-md shadow-primary/20">
                <Orbit className="h-4 w-4 text-white" />
              </div>
              <div className="leading-none">
                <div className="text-sm font-semibold">Mission Astro AI</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">Guest · Preview Mode</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex text-xs font-medium px-2.5 py-1 rounded-full bg-card border border-border">
                <span className="text-primary font-bold">{remaining}</span>
                <span className="text-muted-foreground">/{GUEST_LIMIT}</span>
              </div>
              <ThemeToggleButton />
              <Link to="/login">
                <Button size="sm" className="rounded-full text-xs px-4 h-8 shadow-md">Sign in free</Button>
              </Link>
            </div>
          </div>
          <div className="h-0.5 bg-muted sm:hidden">
            <div className="h-full bg-primary transition-all duration-500" style={{ width: `${((GUEST_LIMIT - remaining) / GUEST_LIMIT) * 100}%` }} />
          </div>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto">
          {!active || active.messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center px-6 text-center">
              <div className="h-16 w-16 rounded-2xl bg-[image:var(--gradient-brand)] flex items-center justify-center mb-5 shadow-xl shadow-primary/25">
                <Orbit className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Welcome, {greeting}.</h2>
              <p className="text-muted-foreground mt-2 text-sm max-w-xs">Your Advanced Assistant for Space Science &amp; Research.</p>
              <span className="mt-4 px-2.5 py-1 rounded-full bg-card border border-border text-xs text-muted-foreground">
                {remaining} free messages remaining
              </span>
            </div>
          ) : (
            <MessageList
              msgs={active.messages}
              sending={sending}
              isTyping={isTyping}
              onComplete={() => setIsTyping(false)}
              onScroll={() => {
                if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
              }}
            />
          )}
        </div>

        <InputBar {...inputBarProps} />
        <LimitDialog open={showLimit} onClose={() => setShowLimit(false)} />
      </div>
    );
  }

  // ── AUTHENTICATED VIEW ────────────────────────────────────────────────────
  return (
    <div className="h-screen flex text-foreground overflow-hidden" style={{ background: "var(--gradient-space)" }}>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:relative inset-y-0 left-0 z-40
        w-72 bg-sidebar border-r border-border flex flex-col shrink-0
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        <div className="p-3 flex items-center justify-between border-b border-border">
          <Link to="/" className="flex items-center gap-2 px-1 hover:opacity-80 transition-opacity">
            <div className="h-8 w-8 rounded-lg bg-[image:var(--gradient-brand)] flex items-center justify-center">
              <Orbit className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-sm">Mission Astro</span>
          </Link>
          <div className="flex items-center gap-1">
            <ThemeToggleButton />
            <button className="md:hidden p-2 rounded-lg hover:bg-muted" onClick={() => setSidebarOpen(false)}>
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="px-3 py-2">
          <Button onClick={newChat} variant="outline" className="w-full justify-start gap-2 rounded-xl h-9 border-border bg-transparent hover:bg-muted text-sm">
            <Plus className="h-4 w-4" /> New mission
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground px-2 mb-1.5">History</div>
          {convs.length === 0 && <div className="px-2 py-6 text-xs text-muted-foreground text-center">No missions yet.</div>}
          {convs.map((c) => (
            <div
              key={c.id}
              className={`flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer text-sm transition-colors ${activeId === c.id ? "bg-muted" : "hover:bg-muted/60"}`}
              onClick={() => { setActiveId(c.id); setSidebarOpen(false); }}
            >
              <MessageSquare className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
              <span className="truncate flex-1 text-[13px]">{c.title}</span>
              <button className="shrink-0 p-1 rounded hover:bg-destructive/15 transition-colors" title="Delete" onClick={(e) => { e.stopPropagation(); deleteConv(c.id); }}>
                <Trash2 className="h-3.5 w-3.5 text-muted-foreground hover:text-destructive" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom nav links */}
        <div className="px-2 py-2 border-t border-border space-y-0.5">
          <Link to="/about" className="flex items-center gap-2 px-2 py-2 rounded-lg text-[13px] text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <Info className="h-3.5 w-3.5" /> About
          </Link>
          <Link to="/developers" className="flex items-center gap-2 px-2 py-2 rounded-lg text-[13px] text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <Users className="h-3.5 w-3.5" /> Developers
          </Link>
        </div>

        <div className="border-t border-border p-3 space-y-2">
          <div className="flex items-center gap-2 px-2">
            <div className="h-8 w-8 rounded-full bg-primary/10 border border-border flex items-center justify-center text-xs font-semibold text-primary">
              {(user?.displayName || user?.email || "G")[0].toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{user?.displayName || user?.email || "Guest"}</div>
              <div className="text-[10px] text-muted-foreground">Signed in</div>
            </div>
            <button onClick={() => logout().then(() => router.navigate({ to: "/" }))} className="p-1.5 rounded hover:bg-muted" title="Sign out">
              <LogOut className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-13 border-b border-border flex items-center gap-2 px-3 bg-background/60 backdrop-blur-xl shrink-0">
          <button onClick={() => setSidebarOpen((v) => !v)} className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors" title={sidebarOpen ? "Hide sidebar" : "Show sidebar"}>
            <PanelLeft className="h-5 w-5" />
          </button>
          <span className="font-semibold text-sm flex-1">Mission Astro AI</span>
          <ThemeToggleButton />
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto">
          {!active || active.messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center px-6 text-center">
              <div className="h-14 w-14 rounded-2xl bg-[image:var(--gradient-brand)] flex items-center justify-center mb-5 shadow-lg shadow-primary/25">
                <Orbit className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Welcome, {greeting}.</h2>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">Your Advanced Assistant for Space Science &amp; Research.</p>
            </div>
          ) : (
            <MessageList
              msgs={active.messages}
              sending={sending}
              isTyping={isTyping}
              onComplete={() => setIsTyping(false)}
              onScroll={() => {
                if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
              }}
            />
          )}
        </div>

        <InputBar {...inputBarProps} />
      </main>

      <LimitDialog open={showLimit} onClose={() => setShowLimit(false)} />
    </div>
  );
}
