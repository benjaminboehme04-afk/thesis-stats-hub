export interface Pillar {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  color: string;
}

export interface TeamMember {
  name: string;
  role: string;
  background: string;
  focus: string[];
}

export interface ProofPoint {
  title: string;
  subtitle: string;
  stats: { label: string; value: string }[];
  description: string;
}

export const company = {
  name: "Lestate Real",
  oneLiner:
    "vertikal integrierter Real-Estate-Investor — systematische Transformation von Bestandsimmobilien, die das Markt noch nicht eingepreist hat.",
  tagline: "elevating real estate.",
  thesis:
    "Das digitale Jahrzehnt hat Kapital, Talent und Bewertungsprämien in Richtung Software gelenkt. KI wird zur Commodity — die außerordentlichen Renditen des Zyklus gehen nicht an weitere Softwareschichten. Sie gehen an Operatoren, die digitale Werkzeuge einsetzen, um messbaren Wert in der physischen Welt zu schaffen. Lestate Real ist dieser Operator im deutschen Bestandsimmobilienmarkt.",
  thesisPremise:
    "~43,8 Mio. Wohnungen. ~75 % vor 1979. 215.900 Baugenehmigungen 2024 — 15-Jahres-Tief. GEG + EPBD erzeugen zwingenden Investitionsdruck. Das physische Asset ist da. Der systematische Operator fehlt.",
  context: "WHU – Otto Beisheim School of Management · PTMiM 27",
  supervisors: ["Prof. Dr. Burcin Yurtogulu", "Prof. Dr. Peter Witt"],
  location: "Düsseldorf",
};

export const pillars: Pillar[] = [
  {
    id: "real-estate",
    name: "Real Estate Transformation",
    tagline: "buy below. transform. recycle capital.",
    description:
      "Systematischer Erwerb, Transformation und Repositionierung von Bestandswohnimmobilien. Deal by Deal, SPV by SPV — jedes Asset ring-gefenced, jeder Exit recycled das Eigenkapital in den nächsten Deal ohne HoldCo-Verwässerung.",
    bullets: [
      "Value-Add bis Opportunistic; €5–10M pro Deal (SPV-Ebene)",
      "Geografie: Düsseldorf primär, NRW B-Städte Phase 2",
      "Transformationstypen: Renovierung, Modernisierung, Büro-zu-Wohnen, Aufstockung",
      "KPI-Ziele: NIY >4,5%, Development IRR >20%, Hold IRR >12%, Equity Multiple >1,5x",
      "LP-Struktur: Genussrechte, KAGB-konform, 8% Preferred Return",
    ],
    color: "#007AFF",
  },
  {
    id: "realaize",
    name: "realaize",
    tagline: "one input. every output. automatically.",
    description:
      "Das proprietäre Investment-Betriebssystem von Lestate Real. Kein SaaS-Produkt für den Markt — ein maßgeschneidertes System, in dem ein Deal einmal eingegeben wird und ohne Re-Eingabe durch alle 7 Module fließt. Der Wettbewerbsvorteil liegt nicht in der Software, sondern in den proprietären Daten und der kalibrierten Logik darin.",
    bullets: [
      "7 Module: Market Research → Deal Radar → Underwriting → Pipeline → Development → Portfolio/Debt → Reporting",
      "Data Flywheel: jeder Deal kalibriert die Annahmen — nach 10 Deals portfolio-getestete Benchmarks",
      "KI-Copilot mit vollem Portfolio-Kontext für Natural Language Queries",
      "<15 FTE bei €100M AUM vs. 40–60 FTE traditionell",
      "Roadmap: SaaS-Kommerzialisierung → PropTech-Exit-Optionalität via elevaite GmbH",
    ],
    color: "#5856D6",
  },
  {
    id: "werkr",
    name: "Werkr",
    tagline: "business-in-a-box. für den deutschen Handwerker.",
    description:
      "Werkr löst das operativste Wachstumshindernis von Lestate Real — zuverlässige Handwerkskapazität — und baut dabei ein eigenständiges Franchise-Geschäft auf. Lestate Real beteiligt sich am Cap Table der Handwerker-GmbH, liefert 50% Kapazitätsauslastung und gibt jedem Meister ein vollständiges Business-in-a-Box.",
    bullets: [
      "Franchise-Modell: Lestate Real → Kapitalerhöhung → 10–25% Equity je GmbH",
      "Business-in-a-Box: Software, Fahrzeuge, Werkzeug, DATEV, Steuerberater",
      "50%-Kapazitätsgarantie durch Lestate Real — über realaize automatisch befüllt",
      "Gewerk-Wellen: Elektro + SHK → Maler + Trockenbau; deprioritisiert: Dachdecker",
      "Ziel: 50 Franchisees national bis Jahr 5–6 — eigenständig VC-fundbar",
    ],
    color: "#34C759",
  },
];

export const golzheim: ProofPoint = {
  title: "Golzheim, Düsseldorf",
  subtitle: "Erster vollständig durch realaize betriebener Deal",
  stats: [
    { label: "Kaufpreis", value: "~€371.000" },
    { label: "Renovierungsbudget", value: "~€75.000" },
    { label: "Zielwert nach Transformation", value: "~€700.000" },
    { label: "Ziel-ROI (gross)", value: "~57 %" },
    { label: "Status", value: "kurz vor Abschluss" },
  ],
  description:
    "Golzheim ist der erste Proof Point der Lestate Real Investitionsstrategie: Von Market Alert über Underwriting bis LP-Reporting vollständig durch realaize operationalisiert. Der Deal demonstriert die Wertaufwertungsthese in der Praxis — vom strukturell unterbewerteten Bestand zum repositionierten Asset.",
};

export const team: TeamMember[] = [
  {
    name: "Benjamin Böhme",
    role: "Co-Founder",
    background:
      "VC-Analyst Background mit direktem Exposure zu führenden KI-Transaktionen im europäischen Venture-Umfeld.",
    focus: [
      "Capital Raising & Investor Relations",
      "Strategische Partnerschaften",
      "Wachstum & Skalierung",
      "realaize Product Strategy",
    ],
  },
  {
    name: "Jan Leuker",
    role: "Co-Founder",
    background:
      "Real Estate Private Equity Background (Redevco) mit operativer Erfahrung in Deal Execution und Asset Management.",
    focus: [
      "Deal Execution & Underwriting",
      "Asset Management",
      "Development Oversight",
      "LP-Beziehungen",
    ],
  },
];
