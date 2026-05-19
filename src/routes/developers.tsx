import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageSquare, Orbit, Github, Globe, Code2, Layers, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/developers")({
    head: () => ({
        meta: [
            { title: "Developers — Mission Astro AI" },
            { name: "description", content: "Meet the team behind Mission Astro AI." },
        ],
    }),
    component: DevelopersPage,
});

const team = [
    {
        name: "E.J. Sithija Nimsara",
        role: "Project Lead & Full-Stack Developer",
        initials: "SN",
        gradient: "linear-gradient(135deg, oklch(0.5 0.22 270), oklch(0.62 0.2 250), oklch(0.78 0.14 210))",
        bio: "Visionary architect of Mission Astro AI. Sithija leads the full-stack engineering effort — from designing the real-time AI inference pipeline to crafting the immersive space-themed UI. Passionate about making advanced space science tools accessible to every Sri Lankan student.",
        skills: ["React", "TypeScript", "Firebase", "Supabase", "AI/ML APIs", "UI/UX Design"],
        links: { github: "https://github.com", website: null },
        badge: "Founder",
    },
];

function DevelopersPage() {
    return (
        <div className="min-h-screen text-foreground relative" style={{ background: "var(--gradient-space)" }}>
            {/* Starfield */}
            <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute inset-0" style={{
                    backgroundImage: [
                        "radial-gradient(1.5px 1.5px at 8% 12%, rgba(255,255,255,0.8), transparent)",
                        "radial-gradient(1px 1px at 22% 60%, rgba(255,255,255,0.5), transparent)",
                        "radial-gradient(2px 2px at 45% 20%, rgba(255,255,255,0.9), transparent)",
                        "radial-gradient(1px 1px at 60% 75%, rgba(255,255,255,0.6), transparent)",
                        "radial-gradient(1.5px 1.5px at 75% 8%, rgba(255,255,255,0.7), transparent)",
                        "radial-gradient(1px 1px at 88% 85%, rgba(255,255,255,0.5), transparent)",
                        "radial-gradient(2px 2px at 95% 38%, rgba(255,255,255,0.8), transparent)",
                        "radial-gradient(1px 1px at 50% 50%, rgba(255,255,255,0.4), transparent)",
                    ].join(", "),
                    backgroundSize: "600px 600px",
                }} />
                <div className="absolute top-0 right-1/3 h-[500px] w-[500px] rounded-full opacity-10 blur-[100px]" style={{ background: "var(--gradient-brand)" }} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-8">
                {/* Nav */}
                <div className="flex items-center justify-between mb-12">
                    <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Home
                    </Link>
                    <Link to="/chat">
                        <Button size="sm" className="rounded-full gap-2">
                            <MessageSquare className="h-3.5 w-3.5" /> Back to Chat
                        </Button>
                    </Link>
                </div>

                {/* Hero */}
                <div className="text-center mb-16">
                    <div className="inline-flex h-16 w-16 rounded-2xl bg-[image:var(--gradient-brand)] items-center justify-center mb-6 shadow-2xl shadow-primary/30">
                        <Code2 className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                        Meet the{" "}
                        <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">
                            Visionaries
                        </span>
                    </h1>
                    <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
                        The passionate minds who built Mission Astro AI — combining deep technical expertise
                        with a love for space science.
                    </p>
                </div>

                {/* Team cards */}
                <div className="flex flex-col gap-6">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="bg-card/60 backdrop-blur-xl border border-border rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow"
                        >
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                {/* Avatar */}
                                <div className="relative shrink-0">
                                    <div
                                        className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-xl"
                                        style={{ background: member.gradient }}
                                    >
                                        {member.initials}
                                    </div>
                                    {/* Orbit decoration */}
                                    <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-xl bg-[image:var(--gradient-brand)] flex items-center justify-center shadow-lg">
                                        <Orbit className="h-4 w-4 text-white" />
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex-1 text-center sm:text-left">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                                        <h2 className="text-2xl font-bold">{member.name}</h2>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/15 text-primary border border-primary/20">
                                            {member.badge}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-muted-foreground mb-4">{member.role}</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{member.bio}</p>

                                    {/* Skills */}
                                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-5">
                                        {member.skills.map((skill) => (
                                            <span key={skill} className="px-2.5 py-1 rounded-full text-xs bg-card border border-border text-muted-foreground">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3 justify-center sm:justify-start">
                                        {member.links.github && (
                                            <a
                                                href={member.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-sm hover:bg-muted transition-colors"
                                            >
                                                <Github className="h-4 w-4" /> GitHub
                                            </a>
                                        )}
                                        {member.links.website && (
                                            <a
                                                href={member.links.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-sm hover:bg-muted transition-colors"
                                            >
                                                <Globe className="h-4 w-4" /> Website
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech stack */}
                <div className="mt-12 bg-card/40 backdrop-blur border border-border rounded-3xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Layers className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-xl font-semibold">Technology Stack</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[
                            { name: "React 19", cat: "Frontend" },
                            { name: "TypeScript", cat: "Language" },
                            { name: "TanStack Router", cat: "Routing" },
                            { name: "Tailwind CSS v4", cat: "Styling" },
                            { name: "Firebase Auth", cat: "Auth" },
                            { name: "Supabase Edge Fn", cat: "AI Backend" },
                        ].map(({ name, cat }) => (
                            <div key={name} className="bg-card/60 border border-border rounded-xl px-4 py-3">
                                <div className="text-sm font-medium">{name}</div>
                                <div className="text-[11px] text-muted-foreground mt-0.5">{cat}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI section */}
                <div className="mt-6 bg-card/40 backdrop-blur border border-border rounded-3xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Cpu className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-xl font-semibold">AI Architecture</h2>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Mission Astro AI is powered by a multi-model inference pipeline running on Supabase Edge Functions.
                        The system dynamically selects between Fast (optimized for speed), Super (balanced), Master (maximum
                        depth), and Image (vision-capable) reasoning modes. Conversation memory, onboarding context, and
                        device identification ensure each response is personalized and contextually aware.
                    </p>
                </div>

                <div className="text-center py-8 mt-4">
                    <Link to="/chat">
                        <Button size="lg" className="rounded-xl px-8 h-12 gap-2 shadow-lg shadow-primary/20">
                            <MessageSquare className="h-5 w-5" /> Launch Mission Control
                        </Button>
                    </Link>
                </div>

                <footer className="text-center text-xs text-muted-foreground py-6 border-t border-border">
                    © {new Date().getFullYear()} Radapasa Astronomical Society · Mission Astro AI
                </footer>
            </div>
        </div>
    );
}
