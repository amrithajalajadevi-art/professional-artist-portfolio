import { CommissionStep, WorkshopService } from "@/types";

export const commissionStepsData: CommissionStep[] = [
  {
    stepNumber: "01",
    title: "Initial Consultation & Vision",
    subtitle: "Dialogue & Site Assessment",
    description: "An initial dialogue to understand your space, aesthetic vision, scale requirements, and cultural or personal themes for the artwork.",
    
  },
  {
    stepNumber: "02",
    title: "Concept Sketches & Color Studies",
    subtitle: "Preparatory Drawings & Composition",
    description: "Creation of detailed charcoal sketches, color studies, and digital scale mockups to visualize the mural or painting within its intended architectural environment.",
  },
  {
    stepNumber: "03",
    title: "Studio Painting & Mural Execution",
    subtitle: "Canvas & On-Site Wall Painting",
    description: "Handcrafting the artwork in Amritha's studio or on-site for public murals. Clients receive photographic documentation of the creative process.",
  },
  {
    stepNumber: "04",
    title: "Varnishing, Delivery & Installation",
    subtitle: "Professional Mounting & Care Guide",
    description: "Final protective varnishing, professional delivery, on-site installation, and issuance of a signed Certificate of Authenticity and Care Guide.",
  },
];

export const workshopServicesData: WorkshopService[] = [
  {
    id: "one-on-one-mentoring",
    title: "1-on-1 Artist Mentoring & Portfolio Review",
    category: "Mentoring",
    duration: "2-Hour Intensive Session (In-Person or Virtual)",
    skillLevel: "Emerging & Mid-Career Artists",
    location: "Leicester Studio or Virtual (Zoom)",
    description: "Tailored portfolio feedback, figurative painting critique, visual storytelling refinement, and exhibition strategy led personally by Amritha Jalaja Devi.",
    highlights: [
      "Portfolio critique & figurative drawing feedback",
      "UK & India exhibition strategy alignment",
      "Gallery representation & proposal drafting guidance",
    ],
  },
  {
    id: "figurative-drawing-painting",
    title: "Figurative Painting & Gesture Masterclass",
    category: "Painting Masterclass",
    duration: "2-Day Weekend Studio Workshop",
    skillLevel: "Intermediate to Advanced Painters",
    location: "Leicester Studio, UK",
    description: "Hands-on studio masterclass exploring life drawing, figurative oil painting, observing domestic posture, and communicating emotion on canvas.",
    highlights: [
      "Life drawing & anatomical gesture observation",
      "Oil & acrylic layering, glazing, and skin tone mixing",
      "Compositional balance and spatial narrative in figurative art",
    ],
  },
  {
    id: "public-mural-design",
    title: "Public Mural Design & Community Art Workshop",
    category: "Public Art Workshop",
    duration: "1-Day Saturday Studio Workshop",
    skillLevel: "All Skill Levels",
    location: "Leicester Studio & Community Space",
    description: "Explore large-scale mural composition, grid transfer methods, weather-resistant acrylic pigments, and community engagement in public art.",
    highlights: [
      "Scale projection & grid transfer techniques for murals",
      "Cultural heritage symbolism & community storytelling",
      "Surface prep, acrylic sealant, and outdoor weatherproofing",
    ],
  },
];
