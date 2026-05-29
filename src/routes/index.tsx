import { createFileRoute } from "@tanstack/react-router";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Master Thesis — Statistics & Findings" },
      {
        name: "description",
        content:
          "Empirische Auswertung und Statistiken aus der Masterthesis. Datensätze, Modelle und Ergebnisse im Überblick.",
      },
      { property: "og:title", content: "Master Thesis — Statistics & Findings" },
      {
        property: "og:description",
        content: "Empirische Auswertung und Statistiken aus der Masterthesis.",
      },
    ],
  }),
  component: Index,
});

const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

const datasetSizes = [
  { name: "Training", value: 8420 },
  { name: "Validation", value: 1052 },
  { name: "Test", value: 1052 },
];

const modelPerformance = [
  { model: "Baseline", accuracy: 71.2, f1: 68.4 },
  { model: "BERT-base", accuracy: 84.5, f1: 82.1 },
  { model: "RoBERTa", accuracy: 86.9, f1: 85.0 },
  { model: "Ours", accuracy: 91.3, f1: 90.2 },
];

const trainingCurve = [
  { epoch: 1, loss: 1.42, val: 1.31 },
  { epoch: 2, loss: 0.98, val: 0.94 },
  { epoch: 3, loss: 0.71, val: 0.72 },
  { epoch: 4, loss: 0.52, val: 0.58 },
  { epoch: 5, loss: 0.41, val: 0.49 },
  { epoch: 6, loss: 0.33, val: 0.44 },
  { epoch: 7, loss: 0.28, val: 0.42 },
  { epoch: 8, loss: 0.24, val: 0.41 },
];

function Stat({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="border-l-2 border-accent pl-5 py-2">
      <div className="font-serif text-5xl md:text-6xl text-foreground leading-none">{value}</div>
      <div className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">{label}</div>
      {sub && <div className="mt-1 text-xs text-muted-foreground/80 font-mono">{sub}</div>}
    </div>
  );
}

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-3 mb-8">
      <span className="font-mono text-xs text-accent">{n}</span>
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{children}</span>
      <span className="flex-1 h-px bg-border ml-2" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Master Thesis · 2026
            </span>
          </div>
          <a
            href="#"
            className="font-mono text-xs uppercase tracking-widest text-foreground hover:text-accent transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
          Empirical Study
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-4xl">
          Statistiken und Ergebnisse meiner{" "}
          <em className="text-accent">Masterthesis</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Eine empirische Untersuchung mit reproduzierbaren Experimenten. Alle
          Datensätze, Trainingsläufe und Auswertungs-Skripte liegen öffentlich
          auf GitHub.
        </p>
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs text-muted-foreground">
          <span>AUTOR: [Name]</span>
          <span>BETREUUNG: [Prof. Dr. ...]</span>
          <span>UNIVERSITÄT: [...]</span>
          <span>SEITEN: 124</span>
        </div>
      </section>

      {/* Key Stats */}
      <section className="border-y border-border bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <SectionLabel n="01">Key Figures</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            <Stat value="10 524" label="Samples" sub="annotated examples" />
            <Stat value="91.3%" label="Accuracy" sub="on held-out test set" />
            <Stat value="4" label="Models compared" sub="incl. ablations" />
            <Stat value="312" label="GPU hours" sub="A100 · mixed precision" />
          </div>
        </div>
      </section>

      {/* Model performance */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionLabel n="02">Model Performance</SectionLabel>
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <h2 className="font-serif text-3xl mb-4">Vergleich der Modelle</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Unser Ansatz übertrifft die Baseline um <span className="text-foreground font-medium">+20.1 Prozentpunkte</span> in der Accuracy und schlägt RoBERTa knapp um 4.4 Punkte.
            </p>
          </div>
          <div className="md:col-span-2 h-80 bg-card border border-border rounded-md p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={modelPerformance} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="model" stroke="var(--muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--muted-foreground)" fontSize={12} domain={[60, 100]} />
                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 4,
                    fontSize: 12,
                  }}
                />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="accuracy" fill="var(--chart-1)" name="Accuracy %" />
                <Bar dataKey="f1" fill="var(--chart-2)" name="F1 %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Training & Dataset */}
      <section className="border-t border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
          <div>
            <SectionLabel n="03">Training Curve</SectionLabel>
            <div className="h-72 bg-card border border-border rounded-md p-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trainingCurve}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="epoch" stroke="var(--muted-foreground)" fontSize={12} />
                  <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: 4,
                      fontSize: 12,
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Line type="monotone" dataKey="loss" stroke="var(--chart-1)" strokeWidth={2} dot={false} name="Train loss" />
                  <Line type="monotone" dataKey="val" stroke="var(--chart-2)" strokeWidth={2} dot={false} name="Val loss" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <SectionLabel n="04">Dataset Split</SectionLabel>
            <div className="h-72 bg-card border border-border rounded-md p-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={datasetSizes} dataKey="value" nameKey="name" innerRadius={55} outerRadius={95} paddingAngle={2}>
                    {datasetSizes.map((_, i) => (
                      <Cell key={i} fill={CHART_COLORS[i]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: 4,
                      fontSize: 12,
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Findings */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionLabel n="05">Findings</SectionLabel>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              n: "I.",
              title: "Domain-spezifisches Pretraining hilft.",
              body: "Continued pretraining auf 1.2M unlabeled in-domain Tokens verbessert die F1 um 3.8 Punkte gegenüber dem Off-the-shelf-Modell.",
            },
            {
              n: "II.",
              title: "Datenmenge mit abnehmendem Grenznutzen.",
              body: "Ab ~6 000 Samples flacht die Lernkurve deutlich ab. Die letzten 4 000 Beispiele bringen nur noch +1.4 Punkte Accuracy.",
            },
            {
              n: "III.",
              title: "Fehleranalyse: Long-tail Klassen.",
              body: "62 % aller Fehler entfallen auf die fünf seltensten Klassen. Class-Balanced Loss reduziert dies auf 41 %.",
            },
          ].map((f) => (
            <div key={f.n}>
              <div className="font-mono text-xs text-accent mb-3">{f.n}</div>
              <h3 className="font-serif text-2xl leading-tight mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Repo */}
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] opacity-60 mb-4">
              Reproducibility
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Code, Daten und Notebooks auf GitHub.
            </h2>
            <p className="mt-5 max-w-xl text-sm opacity-70 leading-relaxed">
              Alle Experimente sind seed-kontrolliert und lassen sich mit einem
              einzigen Befehl reproduzieren.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-primary-foreground/30 px-6 py-3 font-mono text-sm uppercase tracking-widest hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            View Repository ↗
          </a>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap justify-between gap-4 font-mono text-xs text-muted-foreground">
          <span>© 2026 · Masterthesis</span>
          <span>Last updated: {new Date().toLocaleDateString("de-DE")}</span>
        </div>
      </footer>
    </div>
  );
}
