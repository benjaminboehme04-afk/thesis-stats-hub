import { createFileRoute } from "@tanstack/react-router";
import { parts, getOverallProgress, STATUS_ORDER, LAST_UPDATED } from "@/content/chapters";
import StatusBadge from "@/components/StatusBadge";

const BAR_COLORS: Record<string, string> = {
  "final": "#14532d",
  "in-review": "#9333ea",
  "entwurf": "#FFF176",
  "in-arbeit": "#DCEDC8",
  "geplant": "rgba(120,120,128,0.18)",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lestate Real — Masterthesis Status" },
      { name: "description", content: "Interaktive Thesis-Statusseite für Lestate Real | WHU PTMiM 27" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const progress = getOverallProgress();
  const advanced =
    (progress.byStatus["final"] || 0) +
    (progress.byStatus["in-review"] || 0) +
    (progress.byStatus["entwurf"] || 0);

  return (
    <div className="max-w-[860px] mx-auto px-5 py-10 space-y-5">
      {/* Cover-page header */}
      <header className="glass px-10 py-10 fade-up">
        <div className="flex justify-end mb-8">
          <img
            src="/whu-logo.png"
            alt="WHU – Otto Beisheim School of Management"
            className="object-contain object-right"
            style={{ height: "64px", width: "auto" }}
          />
        </div>

        <p
          className="text-center mb-10"
          style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "15px", color: "#000000" }}
        >
          Master Thesis
        </p>

        <div className="text-center mb-10">
          <h1
            style={{
              fontFamily: "'Times New Roman', Times, serif",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(18px, 2.8vw, 26px)",
              lineHeight: 1.35,
              color: "#1B3A78",
              letterSpacing: "0.01em",
            }}
          >
            Leveraging the Transformation of the Built Environment:
          </h1>
          <p
            style={{
              fontFamily: "'Times New Roman', Times, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(16px, 2.4vw, 22px)",
              lineHeight: 1.35,
              color: "#1B3A78",
              marginTop: "4px",
            }}
          >
            A Business Plan for a Tech-Driven Real Estate Investment Firm
          </p>
        </div>

        <div className="text-center mb-12">
          <p style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "15px", color: "#000000", marginBottom: "4px" }}>
            WHU – Otto Beisheim School of Management
          </p>
          <p
            style={{
              fontFamily: "'Times New Roman', Times, serif",
              fontStyle: "italic",
              fontSize: "14px",
              color: "#000000",
            }}
          >
            Academic Year 2026
          </p>
        </div>

        <div className="text-center mb-12">
          <p style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "14px", fontWeight: 600, color: "#000000", marginBottom: "4px" }}>
            Supervisors:
          </p>
          <p
            style={{
              fontFamily: "'Times New Roman', Times, serif",
              fontStyle: "italic",
              fontSize: "14px",
              color: "#000000",
              lineHeight: 1.6,
            }}
          >
            Prof. Dr. Burcin Yurtoglu<br />
            Prof. Dr. Peter Witt
          </p>
        </div>

        <p
          className="text-center mb-8"
          style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontStyle: "italic",
            fontSize: "14px",
            color: "#000000",
          }}
        >
          By
        </p>

        <div className="flex justify-center gap-16 text-center">
          {[
            { last: "Leuker", first: "Jan Philipp", dob: "10.08.2001" },
            { last: "Böhme", first: "Benjamin", dob: "01.04.2004" },
          ].map((a) => (
            <div key={a.last}>
              <p style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "14px", color: "#000000" }}>{a.last}</p>
              <p style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "14px", color: "#000000" }}>{a.first}</p>
              <p style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "13px", color: "#000000", marginTop: "4px" }}>{a.dob}</p>
              <p style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "12px", color: "#000000", marginTop: "2px" }}>
                Part-Time Master in Management (MA)
              </p>
            </div>
          ))}
        </div>
      </header>

      {/* Thesis Tracker heading */}
      <div className="flex items-baseline justify-between px-1 pt-2 fade-up" style={{ animationDelay: "0.04s" }}>
        <h2 className="font-display font-bold text-black" style={{ fontSize: "22px", letterSpacing: "-0.01em" }}>
          Thesis Tracker
        </h2>
        <span className="lr-label">Last updated: {LAST_UPDATED}</span>
      </div>

      {/* Progress card */}
      <div className="glass p-6 fade-up" style={{ animationDelay: "0.06s" }}>
        <div
          className="h-2 rounded-full overflow-hidden flex mb-4"
          style={{ background: "rgba(120,120,128,0.10)" }}
        >
          {STATUS_ORDER.map((s) => {
            const pct = ((progress.byStatus[s] || 0) / progress.total) * 100;
            if (!pct) return null;
            return <div key={s} className="h-full" style={{ width: `${pct}%`, background: BAR_COLORS[s] }} />;
          })}
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {STATUS_ORDER.map((s) =>
            (progress.byStatus[s] || 0) > 0 ? (
              <div key={s} className="flex items-center gap-2">
                <StatusBadge status={s} size="sm" />
                <span className="font-mono text-[11px] text-[rgba(60,60,67,0.45)]">
                  {progress.byStatus[s]}
                </span>
              </div>
            ) : null,
          )}
          <span className="font-mono text-[11px] text-[rgba(60,60,67,0.35)] ml-auto">
            {advanced} / {progress.total} sections drafted or further
          </span>
        </div>
      </div>

      {/* Table of Contents heading */}
      <div className="px-1 pt-2 fade-up" style={{ animationDelay: "0.08s" }}>
        <h2 className="font-display font-bold text-black" style={{ fontSize: "22px", letterSpacing: "-0.01em" }}>
          Table of Contents
        </h2>
      </div>

      {/* Single TOC card */}
      <div className="glass p-8 fade-up" style={{ animationDelay: "0.10s" }}>
        {parts.map((part, pi) => (
          <div key={part.id} className={pi > 0 ? "mt-12" : ""}>
            <div className="flex items-center gap-3 mb-7">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-[#007AFF]">
                {part.label}
              </span>
              <div className="flex-1 h-px" style={{ background: "rgba(0,122,255,0.15)" }} />
            </div>

            {part.chapters.map((chapter, ci) => (
              <div
                key={chapter.number}
                className={[
                  ci > 0 ? "mt-8 pt-8" : "",
                  ci > 0 ? "border-t border-[rgba(0,0,0,0.05)]" : "",
                ].join(" ")}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="font-mono text-[12px] text-[rgba(60,60,67,0.32)] shrink-0 pt-[2px] w-5">
                    {chapter.number}.
                  </span>
                  <h3
                    className="font-display font-bold flex-1 text-black leading-[1.2]"
                    style={{ fontSize: "15px", letterSpacing: "-0.005em" }}
                  >
                    {chapter.title}
                  </h3>
                  <div className="shrink-0 pt-[1px]">
                    <StatusBadge status={chapter.status} />
                  </div>
                </div>

                <div className="pl-8 mb-4">
                  {chapter.subchapters.map((sub, si) => (
                    <div
                      key={sub.number}
                      className="flex items-center gap-3 py-[6px]"
                      style={{
                        borderBottom:
                          si < chapter.subchapters.length - 1
                            ? "0.5px solid rgba(0,0,0,0.05)"
                            : "none",
                      }}
                    >
                      <span className="font-mono text-[10px] text-[rgba(60,60,67,0.28)] shrink-0 w-8">
                        {sub.number}
                      </span>
                      <span className="text-[13px] text-[rgba(0,0,0,0.62)] flex-1 leading-[17px]">
                        {sub.title}
                      </span>
                      <StatusBadge status={sub.status} size="sm" />
                    </div>
                  ))}
                </div>

                <div className="pl-8">
                  <p
                    className="font-mono text-[10px] font-semibold uppercase tracking-[0.07em] mb-2"
                    style={{ color: "rgba(60,60,67,0.38)" }}
                  >
                    Chapter Contents
                  </p>
                  <ul className="space-y-1.5">
                    {chapter.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-2.5">
                        <span
                          className="shrink-0 font-mono text-black"
                          style={{ fontSize: "13px", lineHeight: "18px" }}
                        >
                          -
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            lineHeight: "18px",
                            color: "rgba(60,60,67,0.62)",
                          }}
                        >
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
