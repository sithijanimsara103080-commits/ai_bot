import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Get started — Mission Astro AI" }] }),
  component: Onboarding,
});

const GRADES = ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12", "Undergraduate", "Graduate", "Researcher", "Educator", "Enthusiast"];
const INTERESTS = [
  "Astrophysics", "Cosmology", "Planetary Science", "Exoplanets",
  "Black Holes", "Stellar Evolution", "Space Missions", "Astrobiology",
  "Observational Astronomy", "Astronomical Instruments",
];
const EXPERIENCE = ["Beginner", "Intermediate", "Advanced", "Professional"];

function Onboarding() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [school, setSchool] = useState("");
  const [notListed, setNotListed] = useState(false);
  const [grade, setGrade] = useState("");
  const [interest, setInterest] = useState("");
  const [experience, setExperience] = useState("");

  const total = 4;
  const progress = (step / total) * 100;

  const canNext =
    (step === 1 && (school.trim() || notListed)) ||
    (step === 2 && grade) ||
    (step === 3 && interest) ||
    (step === 4 && experience);

  const finish = () => {
    const data = { school: notListed ? "Not specified" : school, grade, interest, experience };
    localStorage.setItem("astro_onboarding", JSON.stringify(data));
    localStorage.setItem("astro_onboarding_done", "1");
    router.navigate({ to: "/chat" });
  };

  const handleNext = () => (step === total ? finish() : setStep(step + 1));

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--gradient-space)" }}>
      <div className="h-1.5 bg-white/5">
        <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      <div className="flex-1 flex items-start justify-center px-4 py-12">
        <div className="w-full max-w-xl">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => (step === 1 ? router.history.back() : setStep(step - 1))}
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            <span className="text-sm text-muted-foreground">Step {step} of {total}</span>
          </div>

          {step === 1 && (
            <div>
              <h2 className="text-3xl font-semibold tracking-tight mb-2">What's your school or institution?</h2>
              <p className="text-muted-foreground mb-6">We'll tailor explanations to your level.</p>
              <Input
                placeholder="e.g. MIT, Stanford, Cambridge..."
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                disabled={notListed}
                className="h-12 rounded-xl bg-white/5 border-white/10"
              />
              <label className="flex items-center gap-2 mt-4 cursor-pointer">
                <Checkbox checked={notListed} onCheckedChange={(v) => { setNotListed(!!v); if (v) setSchool(""); }} />
                <span className="text-sm">I'm not a student / Prefer not to say</span>
              </label>
            </div>
          )}

          {step === 2 && (
            <ChoiceStep title="Your level of study" subtitle="Helps tune explanations." options={GRADES} value={grade} onChange={setGrade} />
          )}
          {step === 3 && (
            <ChoiceStep title="Area of interest in astronomy" subtitle="Pick the topic you focus on most." options={INTERESTS} value={interest} onChange={setInterest} />
          )}
          {step === 4 && (
            <ChoiceStep title="Experience level" subtitle="Mission Astro AI will adapt depth to match." options={EXPERIENCE} value={experience} onChange={setExperience} />
          )}

          <div className="mt-10 flex justify-end">
            <Button onClick={handleNext} disabled={!canNext} className="h-11 rounded-xl px-6 gap-2">
              {step === total ? "Launch" : "Continue"} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChoiceStep({ title, subtitle, options, value, onChange }: { title: string; subtitle: string; options: string[]; value: string; onChange: (v: string) => void; }) {
  return (
    <div>
      <h2 className="text-3xl font-semibold tracking-tight mb-2">{title}</h2>
      <p className="text-muted-foreground mb-6">{subtitle}</p>
      <div className="grid grid-cols-2 gap-3">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`px-4 py-3 text-sm rounded-xl border transition text-left ${value === o ? "border-primary bg-primary/10 font-medium" : "border-white/10 bg-white/5 hover:border-white/30"}`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
