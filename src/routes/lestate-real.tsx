import { createFileRoute } from "@tanstack/react-router";
import { company, pillars, golzheim, team } from "@/content/lestate";
import { ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/lestate-real")({
  head: () => ({
    meta: [
      { title: "Lestate Real — Das Unternehmen" },
      { name: "description", content: "Vertikal integrierter Real-Estate-Investor: systematische Transformation von Bestandsimmobilien." },
    ],
  }),
  component: LestateRealPage,
});

function LestateRealPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-10 space-y-10">
      <section className="glass p-8 md:p-14 fade-up">
        <p className="lr-label mb-4">das unternehmen</p>
        <h1 className="lr-headline text-[clamp(36px,5.5vw,64px)] mb-6 max-w-3xl">
          <span className="text-accent">lestate real.</span>
          <br />
          {company.oneLiner}
        </h1>
        <p className="text-[17px] leading-[26px] text-[rgba(0,0,0,0.70)] max-w-2xl">
          {company.thesis}
        </p>
      </section>

      <section className="fade-up" style={{ animationDelay: "0.06s" }}>
        <p className="lr-label mb-5">die drei säulen</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="glass pillar-card p-6 flex flex-col">
              <div
                className="w-8 h-8 rounded-[8px] mb-4 flex items-center justify-center"
                style={{ background: `${pillar.color}18` }}
              >
                <div className="w-3 h-3 rounded-sm" style={{ background: pillar.color }} />
              </div>
              <h2
                className="font-display font-bold text-[20px] leading-[25px] mb-1 lowercase"
                style={{ letterSpacing: "-0.01em", color: pillar.color }}
              >
                {pillar.name}
              </h2>
              <p className="text-[13px] text-[rgba(60,60,67,0.55)] mb-4 font-mono uppercase tracking-wider">
                {pillar.tagline}
              </p>
              <p className="text-[15px] leading-[22px] text-[rgba(0,0,0,0.70)] mb-5">
                {pillar.description}
              </p>
              <ul className="space-y-2 mt-auto">
                {pillar.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={13} className="mt-0.5 flex-shrink-0" style={{ color: pillar.color }} />
                    <span className="text-[13px] leading-[18px] text-[rgba(60,60,67,0.75)]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="fade-up" style={{ animationDelay: "0.10s" }}>
        <p className="lr-label mb-5">proof point</p>
        <div className="glass p-8 border-l-[3px]" style={{ borderLeftColor: "#007AFF" }}>
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div>
              <h2
                className="font-display font-bold text-[24px] leading-[30px] mb-1 lowercase"
                style={{ letterSpacing: "-0.01em" }}
              >
                {golzheim.title}
              </h2>
              <p className="text-[14px] text-[rgba(60,60,67,0.60)]">{golzheim.subtitle}</p>
            </div>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold"
              style={{ background: "rgba(52,199,89,0.12)", color: "#1a8a3d" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#34C759]" />
              Aktiver Deal
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
            {golzheim.stats.map((stat) => (
              <div key={stat.label}>
                <p className="lr-label mb-1">{stat.label}</p>
                <p className="font-display font-bold text-[18px] leading-[24px] text-black">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[15px] leading-[22px] text-[rgba(0,0,0,0.70)] max-w-2xl">
            {golzheim.description}
          </p>
        </div>
      </section>

      <section className="fade-up" style={{ animationDelay: "0.14s" }}>
        <p className="lr-label mb-5">das team</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {team.map((member) => (
            <div key={member.name} className="glass pillar-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-[16px] text-white"
                  style={{ background: "linear-gradient(135deg, #007AFF, #5856D6)" }}
                >
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h3 className="font-semibold text-[16px] text-black">{member.name}</h3>
                  <p className="text-[13px] text-[#007AFF] font-mono uppercase tracking-wider">{member.role}</p>
                </div>
              </div>
              <p className="text-[14px] leading-[20px] text-[rgba(60,60,67,0.70)] mb-4">
                {member.background}
              </p>
              <div className="flex flex-wrap gap-2">
                {member.focus.map((f) => (
                  <span
                    key={f}
                    className="px-2 py-1 rounded text-[11px] font-medium"
                    style={{ background: "rgba(0,122,255,0.08)", color: "#007AFF" }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="fade-up" style={{ animationDelay: "0.18s" }}>
        <div className="glass p-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="lr-label mb-1">akademischer kontext</p>
            <p className="font-display font-bold text-[18px] text-black lowercase" style={{ letterSpacing: "-0.01em" }}>
              WHU – Otto Beisheim School of Management
            </p>
            <p className="text-[14px] text-[rgba(60,60,67,0.60)] mt-1">
              PTMiM 27 · Betreut von {company.supervisors.join(" und ")}
            </p>
          </div>
          <a
            href="mailto:benjamin.boehme@whu.edu"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[12px] text-[14px] font-semibold text-white transition-opacity hover:opacity-85"
            style={{ background: "#007AFF", minHeight: "44px" }}
          >
            Kontakt <ArrowUpRight size={13} />
          </a>
        </div>
      </section>
    </div>
  );
}
