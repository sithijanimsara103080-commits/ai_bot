import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider, githubProvider } from "@/lib/firebase";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Github, Mail, Orbit, Loader2, Sun, Moon } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — Mission Astro AI" }] }),
  component: LoginPage,
});

function GoogleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A10.99 10.99 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.43.34-2.1V7.07H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.93l3.66-2.83z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  );
}

function friendlyError(msg: string): string {
  if (msg.includes("popup-closed-by-user")) return "Sign-in popup was closed. Please try again.";
  if (msg.includes("account-exists-with-different-credential")) return "An account already exists with this email using a different sign-in method.";
  if (msg.includes("popup-blocked")) return "Popup was blocked by your browser. Please allow popups for this site.";
  if (msg.includes("wrong-password") || msg.includes("invalid-credential")) return "Incorrect email or password.";
  if (msg.includes("user-not-found")) return "No account found with this email.";
  if (msg.includes("email-already-in-use")) return "This email is already registered. Try logging in.";
  if (msg.includes("weak-password")) return "Password must be at least 6 characters.";
  if (msg.includes("network-request-failed")) return "Network error. Check your connection and try again.";
  return msg;
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const handler = (e: Event) => setIsDark((e as CustomEvent<string>).detail === "dark");
    window.addEventListener("astro-theme", handler);
    return () => window.removeEventListener("astro-theme", handler);
  }, []);
  const toggle = () => {
    const isDarkNow = document.documentElement.classList.contains("dark");
    const next = isDarkNow ? "light" : "dark";
    localStorage.setItem("astro_theme", next);
    document.documentElement.classList.toggle("dark", !isDarkNow);
    window.dispatchEvent(new CustomEvent("astro-theme", { detail: next }));
  };
  return (
    <button onClick={toggle} className="p-2 rounded-lg hover:bg-foreground/10 transition-colors" title="Toggle theme">
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function LoginPage() {
  const router = useRouter();
  const { user, setGuest } = useAuth();
  const [view, setView] = useState<"options" | "email">("options");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  // If already logged in, redirect
  useEffect(() => {
    if (user) {
      const done = localStorage.getItem("astro_onboarding_done") === "1";
      router.navigate({ to: done ? "/chat" : "/onboarding" });
    }
  }, [user, router]);

  const next = () => {
    const done = localStorage.getItem("astro_onboarding_done") === "1";
    router.navigate({ to: done ? "/chat" : "/onboarding" });
  };

  const withProvider = async (provider: typeof googleProvider | typeof githubProvider, name: string) => {
    setErr(""); setLoadingProvider(name);
    try {
      await signInWithPopup(auth, provider);
      next();
    } catch (e: any) {
      setErr(friendlyError(e.message || "Sign-in failed."));
    } finally {
      setLoadingProvider(null);
    }
  };

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(""); setLoading(true);
    try {
      if (isSignup) await createUserWithEmailAndPassword(auth, email, password);
      else await signInWithEmailAndPassword(auth, email, password);
      next();
    } catch (e: any) {
      setErr(friendlyError(e.message || "Authentication failed."));
    } finally {
      setLoading(false);
    }
  };

  const handleGuest = () => {
    setGuest(true);
    router.navigate({ to: "/chat" });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--gradient-space)" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Home
        </Link>
        <ThemeToggle />
      </div>

      {/* Starfield */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden -z-0">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, white, transparent), radial-gradient(1px 1px at 80% 60%, white, transparent), radial-gradient(1.5px 1.5px at 50% 80%, white, transparent), radial-gradient(1px 1px at 70% 20%, white, transparent), radial-gradient(1px 1px at 10% 70%, white, transparent), radial-gradient(2px 2px at 90% 35%, white, transparent)",
          backgroundSize: "800px 800px",
        }} />
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-6 relative z-10">
        <div className="w-full max-w-sm sm:max-w-md">
          <div className="bg-card/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="flex flex-col items-center mb-8">
              <div className="h-14 w-14 rounded-2xl bg-[image:var(--gradient-brand)] flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
                <Orbit className="h-7 w-7 text-white" />
              </div>
              <h1 className="text-2xl font-semibold tracking-tight">Mission Astro AI</h1>
              <p className="text-sm text-muted-foreground mt-1.5">
                {view === "email" ? (isSignup ? "Create your account" : "Welcome back") : "Sign in to continue your research."}
              </p>
            </div>

            {view === "options" && (
              <div className="space-y-3">
                <Button
                  id="btn-google-signin"
                  onClick={() => withProvider(googleProvider, "google")}
                  disabled={loadingProvider !== null}
                  variant="outline"
                  className="w-full h-11 rounded-xl gap-3 font-medium border-white/15 bg-white/5 hover:bg-white/10"
                >
                  {loadingProvider === "google" ? <Loader2 className="h-4 w-4 animate-spin" /> : <GoogleIcon />}
                  Continue with Google
                </Button>

                <Button
                  id="btn-github-signin"
                  onClick={() => withProvider(githubProvider, "github")}
                  disabled={loadingProvider !== null}
                  variant="outline"
                  className="w-full h-11 rounded-xl gap-3 font-medium border-white/15 bg-white/5 hover:bg-white/10"
                >
                  {loadingProvider === "github" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Github className="h-5 w-5" />}
                  Continue with GitHub
                </Button>

                <div className="relative my-3">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10" /></div>
                  <div className="relative flex justify-center text-xs"><span className="bg-card px-2 text-muted-foreground">or</span></div>
                </div>

                <Button
                  id="btn-guest"
                  onClick={handleGuest}
                  variant="ghost"
                  className="w-full h-11 rounded-xl text-muted-foreground hover:text-foreground"
                >
                  Continue as Guest <span className="ml-1 text-xs opacity-60">(5 free messages)</span>
                </Button>
              </div>
            )}

            {view === "email" && (
              <form id="form-email-auth" onSubmit={handleEmail} className="space-y-3">
                <Input
                  id="input-email"
                  type="email"
                  placeholder="Email address"
                  required
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 rounded-xl bg-white/5 border-white/10"
                />
                <Input
                  id="input-password"
                  type="password"
                  placeholder="Password (min. 6 characters)"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 rounded-xl bg-white/5 border-white/10"
                />
                <Button
                  id="btn-email-submit"
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 rounded-xl gap-2"
                >
                  {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                  {loading ? "Please wait…" : isSignup ? "Create account" : "Log in"}
                </Button>
                <div className="flex items-center justify-between text-sm pt-1">
                  <button type="button" onClick={() => { setView("options"); setErr(""); }} className="text-muted-foreground hover:text-foreground transition-colors">
                    ← Back
                  </button>
                  <button type="button" onClick={() => setIsSignup(!isSignup)} className="text-primary hover:underline">
                    {isSignup ? "Already have an account? Log in" : "New here? Create account"}
                  </button>
                </div>
              </form>
            )}

            {err && (
              <div className="mt-4 rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-3">
                <p className="text-sm text-destructive text-center">{err}</p>
              </div>
            )}
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6">
            By continuing, you agree to our{" "}
            <span className="underline cursor-pointer hover:text-foreground">Terms</span> and{" "}
            <span className="underline cursor-pointer hover:text-foreground">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
