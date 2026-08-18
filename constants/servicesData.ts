import { CommissionStep, WorkshopService } from "@/types";

export const commissionStepsData: CommissionStep[] = [
  {
    stepNumber: "01",
    title: "Initial Consultation & Vision",
    subtitle: "Dialogue & Site Assessment",
    description: "An initial dialogue to understand your architectural space, aesthetic vision, material preferences (bronze, terracotta, steel), and site-specific environmental requirements.",
  },
  {
    stepNumber: "02",
    title: "Concept Proposals & Scale Maquettes",
    subtitle: "3D Studies & Material Samples",
    description: "Creation of physical scale maquettes, digital spatial renderings, and mineral patina test samples to visualize the sculpture within its intended gallery or civic environment.",
  },
  {
    stepNumber: "03",
    title: "Studio Fabrication & Bronze Casting",
    subtitle: "Foundry Casting & Hand Patination",
    description: "Handcrafting and foundry casting in Amritha's Greenwich Peninsula studio. Clients receive periodic photographic documentation of lost-wax casting and hand-applied patinas.",
  },
  {
    stepNumber: "04",
    title: "Delivery, Installation & Certification",
    subtitle: "Professional Mounting & Provenance",
    description: "On-site installation supervision by the studio team, structural mounting verification, and issuance of a signed Certificate of Provenance and Material Care Guide.",
  },
];

export const workshopServicesData: WorkshopService[] = [
  {
    id: "one-on-one-mentoring",
    title: "1-on-1 Artist Mentoring & Portfolio Review",
    category: "Mentoring",
    duration: "2-Hour Intensive Session (In-Person or Virtual)",
    skillLevel: "Emerging & Mid-Career Artists",
    location: "London Studio or Virtual (Zoom)",
    description: "Tailored portfolio feedback, exhibition strategy, material refinement, and UK Global Talent Visa application guidance led personally by Amritha Jalaja Devi.",
    highlights: [
      "Portfolio critique & editing strategy",
      "GTV / Visa evidence alignment advice",
      "Gallery representation & contract guidance",
    ],
  },
  {
    id: "foundry-bronze-masterclass",
    title: "Bronze Casting & Mold Fabrication Masterclass",
    category: "Foundry Masterclass",
    duration: "2-Day Weekend Intensive Studio Workshop",
    skillLevel: "Intermediate to Advanced Sculptors",
    location: "Greenwich Peninsula Studio & Foundry, London SE10",
    description: "Hands-on studio masterclass covering lost-wax ceramic shell casting, silicone mold making, raw bronze finishing, and chemical oxide patination.",
    highlights: [
      "Hands-on lost-wax & ceramic shell molding",
      "Chemical oxide patina techniques (liver of sulfur, ferric nitrate)",
      "Safety, metal pouring, and cold-chasing demonstration",
    ],
  },
  {
    id: "architectural-ceramics-glaze",
    title: "Architectural Ceramics & Glaze Chemistry Workshop",
    category: "Ceramics Workshop",
    duration: "1-Day Saturday Studio Workshop",
    skillLevel: "All Skill Levels",
    location: "Greenwich Peninsula Studio, London SE10",
    description: "Explore high-fired terracotta slab building, mineral oxide glaze formulation, and architectural wall frieze creation.",
    highlights: [
      "Terracotta slab building & structural clay joinery",
      "Mineral glaze testing & earth pigment mixing",
      "Kiln firing schedules & weatherproofing guidance",
    ],
  },
  {
    id: "online-sculpture-masterclass",
    title: "Materiality & Spatial Thinking in Modern Sculpture",
    category: "Online Masterclass",
    duration: "4-Week Cohort Lecture Series (Live Zoom)",
    skillLevel: "All Art Enthusiasts & Students",
    location: "Online (Global Access)",
    description: "A comprehensive digital course exploring material theory, site-specificity, public commission proposal drafting, and contemporary European sculpture trends.",
    highlights: [
      "Live interactive lectures & Q&A sessions",
      "Recorded video archives & reading materials",
      "Group assignment critique & discussion",
    ],
  },
];
