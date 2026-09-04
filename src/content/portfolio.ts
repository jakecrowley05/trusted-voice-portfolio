// Portfolio and Projects. Add a project by adding an entry to `projects`.
// Leave `name` general where a transaction is confidential.

export const portfolioCategories = [
  "Venture", "Private Equity", "Infrastructure", "Data Centers", "Dual-Use", "Space",
  "Defense", "Sports", "Real Assets", "Secondaries", "Alternative Assets",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export interface Project {
  name: string;
  category: PortfolioCategory;
  summary: string;
  location?: string;
  year?: string;
  confidential?: boolean;
}

export const portfolio = {
  heading: "Portfolio and Projects",
  intro:
    "A selection of investments and strategic projects across the platform. Where transactions are confidential we describe the category and the thesis, not the counterparty.",
  projects: [
    {
      name: "Powered land, North Texas",
      category: "Data Centers",
      summary: "Institutional-scale land with power capacity for data center development.",
      location: "Texas",
      confidential: true,
    },
    {
      name: "Multi-club football ownership platform",
      category: "Sports",
      summary: "Ownership structure across multiple clubs with media, hospitality and real estate optionality.",
      confidential: true,
    },
    {
      name: "Motorsport consortium",
      category: "Sports",
      summary: "Strategic capital and partnership development around a Formula One platform.",
      confidential: true,
    },
    {
      name: "Commodities trade desk",
      category: "Alternative Assets",
      summary: "Physical and financial exposure across energy, metals and agriculture.",
      confidential: true,
    },
  ] as Project[],
};
