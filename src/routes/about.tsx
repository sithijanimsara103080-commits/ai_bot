import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageSquare, Orbit, Telescope, Star, Globe, Zap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
    head: () => ({
        meta: [
            { title: "About — Mission Astro AI" },
            { name: "description", content: "Learn about Mission Astro AI and the Radapasa Astronomical Society." },
        ],
    }),
    component: AboutPage,
});

function AboutPage() {
    return (
        <div className="min-h-screen text-foreground relative" style={{ background: "var(--gradient-space)" }}>
            {/* Starfield */}
            <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute inset-0" style={{
                    backgroundImage: [
                        "radial-gradient(1.5px 1.5px at 10% 15%, rgba(255,255,255,0.8), transparent)",
                        "radial-gradient(1px 1px at 25% 55%, rgba(255,255,255,0.6), transparent)",
                        "radial-gradient(2px 2px at 40% 25%, rgba(255,255,255,0.9), transparent)",
                        "radial-gradient(1px 1px at 55% 70%, rgba(255,255,255,0.5), transparent)",
                        "radial-gradient(1.5px 1.5px at 70% 10%, rgba(255,255,255,0.7), transparent)",
                        "radial-gradient(1px 1px at 80% 80%, rgba(255,255,255,0.6), transparent)",
                        "radial-gradient(2px 2px at 90% 40%, rgba(255,255,255,0.8), transparent)",
                        "radial-gradient(1px 1px at 15% 85%, rgba(255,255,255,0.5), transparent)",
                        "radial-gradient(1.5px 1.5px at 60% 45%, rgba(255,255,255,0.7), transparent)",
                        "radial-gradient(1px 1px at 35% 90%, rgba(255,255,255,0.6), transparent)",
                    ].join(", "),
                    backgroundSize: "700px 700px",
                }} />
                <div className="absolute top-0 left-1/3 h-[600px] w-[600px] rounded-full opacity-10 blur-[120px]" style={{ background: "var(--gradient-brand)" }} />
                <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full opacity-8 blur-[100px] bg-cyan-500" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-8">
                {/* Header nav */}
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
                        <Orbit className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                        About{" "}
                        <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">
                            Mission Astro AI
                        </span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        An AI-powered research companion built for astronomers, students, and space enthusiasts
                        across Sri Lanka and beyond.
                    </p>
                </div>

                {/* Mission statement */}
                <div className="bg-card/60 backdrop-blur-xl border border-border rounded-3xl p-8 mb-8 shadow-xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Star className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-xl font-semibold">Our Mission</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base">
                        Mission Astro AI was created with a singular, passionate purpose:{" "}
                        <strong className="text-foreground">
                            to empower students and space enthusiasts with advanced AI-driven research tools for Astronomy.
                        </strong>{" "}
                        We believe that the wonders of the cosmos should be accessible to everyone — from a Grade 8 student
                        gazing at the night sky for the first time, to a graduate researcher modeling stellar evolution.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base mt-4">
                        By combining cutting-edge large language models with deep domain knowledge in astrophysics,
                        cosmology, planetary science, and space exploration, Mission Astro AI serves as an always-available
                        research copilot — ready to explain black holes, derive orbital mechanics equations, summarize
                        recent papers, or simply spark curiosity about the universe.
                    </p>
                </div>

                {/* Founding organization */}
                <div className="bg-card/60 backdrop-blur-xl border border-border rounded-3xl p-8 mb-8 shadow-xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-xl font-semibold">Founded by Radapasa Astronomical Society</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base">
                        Mission Astro AI is an initiative of the{" "}
                        <strong className="text-foreground">Radapasa Astronomical Society</strong> — a pioneering
                        student-led astronomical organization in Sri Lanka dedicated to promoting astronomy education,
                        scientific research, and public outreach.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base mt-4">
                        The Society organizes observation nights, workshops, and educational programs to bring the
                        science of the universe closer to young Sri Lankans. Mission Astro AI extends this mission
                        into the digital realm, providing 24/7 AI assistance for astronomical queries, research
                        support, and learning at every level.
                    </p>
                </div>

                {/* Features grid */}
                <h2 className="text-2xl font-semibold text-center mb-6">What Mission Astro AI Can Do</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {[
                        { icon: Telescope, title: "Deep-Sky Research", desc: "Query detailed information about stars, galaxies, nebulae, exoplanets, and active space missions in real time." },
                        { icon: BookOpen, title: "Paper Summarization", desc: "Paste arXiv abstracts or research questions and get clear, jargon-free summaries and explanations." },
                        { icon: Zap, title: "Multi-Mode Intelligence", desc: "Choose from Fast, Super, Master, and Image modes — each tuned for different depths of analysis and response quality." },
                        { icon: Star, title: "Personalized Learning", desc: "Onboarding adapts the AI's explanations to your grade level, institution, and area of astronomical interest." },
                    ].map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="bg-card/40 backdrop-blur border border-border rounded-2xl p-6 hover:bg-card/60 transition-colors">
                            <Icon className="h-6 w-6 text-primary mb-3" />
                            <h3 className="font-semibold mb-2">{title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center py-8">
                    <Link to="/chat">
                        <Button size="lg" className="rounded-xl px-8 h-12 gap-2 shadow-lg shadow-primary/20">
                            <MessageSquare className="h-5 w-5" /> Start Exploring
                        </Button>
                    </Link>
                </div>

                <footer className="text-center text-xs text-muted-foreground py-6 border-t border-border mt-4">
                    © {new Date().getFullYear()} Radapasa Astronomical Society · Mission Astro AI
                </footer>
            </div>
        </div>
    );
}
