export const LAST_UPDATED = "29 May 2026";

export type Status = "geplant" | "in-arbeit" | "entwurf" | "in-review" | "final";

export interface Subchapter {
  number: string;
  title: string;
  status: Status;
}

export interface Chapter {
  number: number;
  title: string;
  status: Status;
  bullets: string[];
  subchapters: Subchapter[];
}

export interface Part {
  id: "A" | "B";
  label: string;
  chapters: Chapter[];
}

export const STATUS_LABELS: Record<Status, string> = {
  "geplant": "Planned",
  "in-arbeit": "Started",
  "entwurf": "Draft",
  "in-review": "In Review",
  "final": "Finished",
};

export const STATUS_ORDER: Status[] = ["geplant", "entwurf", "in-arbeit", "in-review", "final"];

export const parts: Part[] = [
  {
    id: "A",
    label: "A: Theoretical Part",
    chapters: [
      {
        number: 1,
        title: "Introduction",
        status: "entwurf",
        bullets: [
          "Frames the thesis as an entrepreneurial business plan — a written stress-test of the venture before committing capital and reputation",
          "Observes the digital-to-physical value rotation: AI commoditises, physical world underinvestment creates the next decade's opportunity",
          "Introduces Lestate Real as the market's missing integrated operator: capital discipline + software backbone + construction execution",
          "Outlines the five-component value architecture (RE assets, Realaize, Werkr, brokerage, PM) and the structure of this thesis",
        ],
        subchapters: [
          { number: "1.1", title: "The Shift From Digital to Physical Value Creation", status: "entwurf" },
          { number: "1.2", title: "The Mismatch That Became the Thesis", status: "entwurf" },
          { number: "1.3", title: "Bricks, Buildings, Real Estate", status: "entwurf" },
          { number: "1.4", title: "Lestate Real: Our Venture at a Glance", status: "entwurf" },
          { number: "1.5", title: "Structure of this Business Plan", status: "geplant" },
        ],
      },
      {
        number: 2,
        title: "Transformation Imperative: Market & Regulation",
        status: "geplant",
        bullets: [
          "~43.8M dwellings, ~75% pre-1979: Europe's largest ageing residential stock — physical obsolescence is the primary investment driver, energy class secondary",
          "Renovation backlog runs at one-third of the required rate; 200,000+ unfilled trade positions create both constraint and structural opportunity",
          "Regulatory architecture (GEG 2023, EPBD, KfW BEG subsidies up to €150k/unit) enlarges the addressable market with every legislative cycle",
          "Düsseldorf & NRW anchor market: +29% transactions YoY, vacancy ~0.9%, 15–25% value uplift post-transformation; NRW B-cities at 4.5–6%+ gross yield",
        ],
        subchapters: [
          { number: "2.1", title: "The Existing Stock: Scale and Composition", status: "geplant" },
          { number: "2.2", title: "Functional Obsolescence & Habitability Deficits", status: "geplant" },
          { number: "2.3", title: "Demand Shifts: What the Market No Longer Accepts", status: "geplant" },
          { number: "2.4", title: "Densification: The Untapped Potential", status: "geplant" },
          { number: "2.5", title: "The Renovation Backlog", status: "geplant" },
          { number: "2.6", title: "The Value-Add Premium: What Transformation Delivers in Numbers", status: "geplant" },
          { number: "2.7", title: "Regulatory Tailwinds & Subsidy Programmes", status: "geplant" },
          { number: "2.8", title: "Target Market: Düsseldorf & NRW as Primary Geography", status: "geplant" },
        ],
      },
    ],
  },
  {
    id: "B",
    label: "B: Empirical Part",
    chapters: [
      {
        number: 3,
        title: "Investment Strategy & Asset Lifecycle",
        status: "geplant",
        bullets: [
          "Defines acquisition mandate: Düsseldorf primary, Ruhrgebiet secondary; €5–10M/deal; Value-Add to Opportunistic risk class",
          "Full deal lifecycle in four parts: Acquisition → Conversion → Divestment & Reporting — each phase fully operationalised through Realaize",
          "Target KPIs: NIY >4.5%, Development IRR >20%, Hold IRR >12%, equity multiple >1.5x, LP preferred return >8% p.a.",
          "Golzheim, Düsseldorf as live proof-of-concept case study anchoring every subchapter with real acquisition data, financials, and Gantt",
        ],
        subchapters: [
          { number: "3.1", title: "Acquisition Profile & Investment Mandate", status: "geplant" },
          { number: "3.2", title: "Deal Sourcing: Channels & Pipeline Build", status: "geplant" },
          { number: "3.3", title: "Market Research & Underwriting Guidelines", status: "geplant" },
          { number: "3.4", title: "Target KPIs & Return Thresholds", status: "geplant" },
          { number: "3.5", title: "Acquisition Process", status: "geplant" },
          { number: "3.6", title: "Financing Structure", status: "geplant" },
          { number: "3.7", title: "Planning, Concept & Permit Strategy", status: "geplant" },
          { number: "3.8", title: "Project Management: Tenders, Timeline & Budget Control", status: "geplant" },
          { number: "3.9", title: "Letting: Approach & Channels", status: "geplant" },
          { number: "3.10", title: "Valuation", status: "geplant" },
          { number: "3.11", title: "Sale, Exit & Capital Redeployment", status: "geplant" },
          { number: "3.12", title: "Asset Reporting", status: "geplant" },
          { number: "3.13", title: "Portfolio construction and multi-SPV logic", status: "geplant" },
          { number: "3.14", title: "Case Study: Golzheim, Düsseldorf", status: "geplant" },
        ],
      },
      {
        number: 4,
        title: "Realaize: Operational leverage & Single Source of Truth",
        status: "geplant",
        bullets: [
          "Seven-module connected investment stack: one data entry flows from Market Research Agent through all phases to Reporting — zero re-entry",
          "Single source of truth: change the purchase price and every downstream output (IRR, LP return, covenants, investor reports) updates simultaneously across all SPVs",
          "Data flywheel: each deal writes back actual benchmarks — self-calibrating assumptions after 10 deals, proprietary Capex benchmarks after 50 Werkr jobs",
          "Efficiency case: <15 FTE for €100M AUM vs. 40–60 FTE at a traditional operator — Golzheim time audit as the first turn of the flywheel",
        ],
        subchapters: [
          { number: "4.1", title: "The Origin: One Interconnected System", status: "geplant" },
          { number: "4.2", title: "Architecture: The Connected Investment Stack & Data Flywheel", status: "geplant" },
          { number: "4.3", title: "Market Research Agent: The Data Foundation", status: "geplant" },
          { number: "4.4", title: "Deal Radar & Screening: The Hero Workflow Begins", status: "geplant" },
          { number: "4.5", title: "Underwriting: The Interlinked Model", status: "geplant" },
          { number: "4.6", title: "Acquisition Pipeline Management", status: "geplant" },
          { number: "4.7", title: "Development Management: Budget, Gantt & Controlling", status: "geplant" },
          { number: "4.8", title: "Portfolio, Debt & Covenant Monitoring", status: "geplant" },
          { number: "4.9", title: "Cash Flow, Reporting & Investor Communication", status: "geplant" },
          { number: "4.10", title: "AI Copilot: The Conversational Layer", status: "geplant" },
          { number: "4.11", title: "Werkr App: Shared Technology Foundation", status: "geplant" },
          { number: "4.12", title: "The Efficiency Case: 15 People, 100M€ AUM", status: "geplant" },
        ],
      },
      {
        number: 5,
        title: "Corporate Structure & Value Architecture",
        status: "geplant",
        bullets: [
          "Four-entity architecture (HoldCo / OpCo / PropCo / IPCo) as intentional value design: IP protection, Gewerbesteuerkürzung, investor separation, exit optionality",
          "One SPV per acquisition: KAGB-compliant ring-fenced deal structure, LP participation via Genussrechte (€200k+ ticket, max 5–6 investors)",
          "Werkr franchise infrastructure: Meister-level tradespeople, 50% capacity guarantee to Lestate Real, SaaS subscription + royalty revenue model",
          "Vertical integration as compounding moat: cost, data, and speed advantages grow with every deal added and every franchisee onboarded",
        ],
        subchapters: [
          { number: "5.1", title: "The Logic Behind the Structure", status: "geplant" },
          { number: "5.2", title: "Why The Corporate Structure: HoldCo / OpCo / PropCo / IPCo", status: "geplant" },
          { number: "5.3", title: "SPV Architecture: Deal-Level Structure & KAGB Compliance", status: "geplant" },
          { number: "5.4", title: "Team & Governance", status: "geplant" },
          { number: "5.5", title: "Werkr: The full model", status: "geplant" },
          { number: "5.6", title: "Vertical Integration as Moat", status: "geplant" },
        ],
      },
      {
        number: 6,
        title: "Funding, Financial Model & Fundraising",
        status: "geplant",
        bullets: [
          "Deal economics waterfall: €7M representative investment → >50% value uplift → GDV ~€10.5M+ → ~30% net equity profit on cost after LP return and financing",
          "Three monetisation paths: sale (capital gain, LP repayment, equity recycled), refinancing (equity extracted, asset retained), NOI hold (yield portfolio)",
          "Equity redeployment loop: no HoldCo dilution per deal — €100M AUM achievable from a €2M seed raise through recycled SPV capital",
          "HoldCo raise: €2M for 20% at €10M post-money; SPV raises per deal via KAGB-compliant Genussrechte with 8% LP preferred return",
        ],
        subchapters: [
          { number: "6.1", title: "Business Model & Revenue Streams", status: "geplant" },
          { number: "6.2", title: "Deal Economics: The Value Creation Waterfall", status: "geplant" },
          { number: "6.3", title: "The Three Monetisation Paths: Sale, Refinancing & NOI", status: "geplant" },
          { number: "6.4", title: "LP Return Model & Capital Allocation", status: "geplant" },
          { number: "6.5", title: "The Equity Redeployment & the Self-Sustaining Portfolio", status: "geplant" },
          { number: "6.6", title: "Five-Year Financial Projection", status: "geplant" },
          { number: "6.7", title: "Third-Party Mandates: Fee Income Extension", status: "geplant" },
          { number: "6.8", title: "HoldCo Raise: Mechanics & Use of Proceeds", status: "geplant" },
          { number: "6.9", title: "Valuation Rationale", status: "geplant" },
          { number: "6.10", title: "SPV Raise: Club Deal Mechanics & Track Record Build", status: "geplant" },
          { number: "6.11", title: "Dataroom Overview", status: "geplant" },
        ],
      },
      {
        number: 7,
        title: "Scale Path: From Seed to 100M€ Platform",
        status: "geplant",
        bullets: [
          "AUM roadmap: proof-of-concept today (Golzheim, €500k NAV) → €10–15M by year 3 → €100M+ by year 6–7, deal-by-deal with specific operational triggers",
          "NRW B-city expansion in three waves: Düsseldorf anchor → Essen + Dortmund → Münster + Bonn + Aachen; entry requires 3 pipeline deals + Werkr franchisee active",
          "Werkr national rollout: pilot Düsseldorf → 10 NRW franchisees by year 3 → 50 franchisees national by year 5–6 → independently VC-fundable",
          "Closing argument in four points: the market is right · the model is proven · the window is open · the team is built for it",
        ],
        subchapters: [
          { number: "7.1", title: "AUM Milestone Roadmap", status: "geplant" },
          { number: "7.2", title: "NRW B-City Expansion: The Geographic Scale Path", status: "geplant" },
          { number: "7.3", title: "Werkr: Franchise Rollout and Calculations", status: "geplant" },
          { number: "7.4", title: "Realaize Product Roadmap", status: "geplant" },
          { number: "7.5", title: "Broker & Property Management Network", status: "geplant" },
          { number: "7.6", title: "Team Scaling", status: "geplant" },
          { number: "7.7", title: "The Case for Lestate Real: Closing Argument", status: "geplant" },
        ],
      },
    ],
  },
];

// Flat array (for StatusBadge and any legacy usage)
export const chapters = parts.flatMap(p => p.chapters);

export function getOverallProgress(): { total: number; byStatus: Record<Status, number> } {
  const allSubchapters = chapters.flatMap(c => c.subchapters);
  const byStatus: Record<Status, number> = {
    "geplant": 0,
    "in-arbeit": 0,
    "entwurf": 0,
    "in-review": 0,
    "final": 0,
  };
  for (const sub of allSubchapters) {
    byStatus[sub.status]++;
  }
  return { total: allSubchapters.length, byStatus };
}
