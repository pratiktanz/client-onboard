// Demo data for the V Mechanic customer portal.
// Replace these exports with API/database calls when the backend is connected.

export const brand = {
  name: "V Mechanic",
  tagline: "Expert care · Smoother ride",
  website: "https://vmechanicindia.com",
  phone: "+91 92707 81505",
  phoneHref: "tel:+919270781505",
  whatsappHref: "http://wa.link/1u4stb",
  email: "support@vmechanicindia.com",
};

export const customer = {
  firstName: "Arjun",
  name: "Arjun Mehta",
  initials: "AM",
  id: "VM1048",
  email: "arjun.mehta@example.com",
  phone: "+91 98XXX XX210",
  memberSince: "March 2024",
};

export const advisor = {
  name: "Rajesh H.",
  initials: "RH",
  role: "Senior service advisor",
  workshop: "V Mechanic Aundh",
};

export const locations = [
  "Aundh, Pune",
  "Baner, Pune",
  "Hadapsar, Pune",
  "Wanowrie, Pune",
  "Mapusa, North Goa",
] as const;

export const serviceTypes = [
  "Periodic service",
  "General car service",
  "Engine repair",
  "Denting & painting",
  "Suspension repair",
  "AC service",
  "Computer diagnostics",
  "Oil change",
  "Brake service",
  "Battery & electrical",
  "Wheel alignment & balancing",
  "Performance tuning",
  "Other",
] as const;

export type Vehicle = {
  id: string;
  make: string;
  model: string;
  shortName: string;
  year: number;
  fuel: string;
  plate: string;
  odometer: number;
  colour: string;
  vin: string;
  status: "in-service" | "ready";
  health: number;
  documents: { label: string; value: string; expiresInDays: number | null }[];
  history: ServiceRecord[];
};

export type ServiceRecord = {
  id: string;
  date: string;
  title: string;
  workshop: string;
  odometer: number;
  amount: number;
  invoiceId: string;
  items: string[];
  evidence?: { before: string; after: string; caption: string };
};

export const vehicles: Vehicle[] = [
  {
    id: "bmw-330i",
    make: "BMW",
    model: "330i M Sport",
    shortName: "BMW 330i",
    year: 2022,
    fuel: "Petrol",
    plate: "MH 12 XX 3301",
    odometer: 28460,
    colour: "Carbon Black",
    vin: "WBA5R1C0•••••3301",
    status: "in-service",
    health: 82,
    documents: [
      { label: "Insurance", value: "Valid till 18 Jan 2027", expiresInDays: 118 },
      { label: "PUC certificate", value: "Valid till 06 Jun 2027", expiresInDays: 257 },
      { label: "Registration (RC)", value: "Valid till 2037", expiresInDays: null },
      { label: "Extended warranty", value: "Valid till 14 Feb 2027", expiresInDays: 145 },
    ],
    history: [
      {
        id: "VM-260311",
        date: "11 Mar 2026",
        title: "Periodic service",
        workshop: "V Mechanic Aundh",
        odometer: 21980,
        amount: 18450,
        invoiceId: "INV-26-0311",
        items: ["Engine oil & filter", "Air and cabin filters", "Brake fluid top-up", "58-point inspection"],
      },
      {
        id: "VM-250920",
        date: "20 Sep 2025",
        title: "AC service & diagnostics",
        workshop: "V Mechanic Baner",
        odometer: 15210,
        amount: 7800,
        invoiceId: "INV-25-0920",
        items: ["AC gas recharge", "Condenser cleaning", "Computer diagnostics scan"],
      },
    ],
  },
  {
    id: "mb-s450",
    make: "Mercedes-Benz",
    model: "S 450 4MATIC",
    shortName: "Mercedes-Benz S 450",
    year: 2021,
    fuel: "Petrol",
    plate: "MH 12 VM 0450",
    odometer: 41120,
    colour: "Obsidian Black",
    vin: "W1K2231•••••0450",
    status: "ready",
    health: 94,
    documents: [
      { label: "Insurance", value: "Valid till 02 Oct 2026", expiresInDays: 10 },
      { label: "PUC certificate", value: "Valid till 21 Dec 2026", expiresInDays: 90 },
      { label: "Registration (RC)", value: "Valid till 2036", expiresInDays: null },
    ],
    history: [
      {
        id: "VM-260814",
        date: "14 Aug 2026",
        title: "Bumper & fender restoration",
        workshop: "V Mechanic Hadapsar",
        odometer: 40880,
        amount: 42600,
        invoiceId: "INV-26-0814",
        items: ["Front-right bumper repair", "Fender dent removal", "Colour-matched repaint", "Ceramic top coat"],
        evidence: {
          before: "evidence-before.jpg",
          after: "evidence-after.jpg",
          caption: "Front-right bumper and fender — scuffs removed and paint colour-matched.",
        },
      },
      {
        id: "VM-260102",
        date: "02 Jan 2026",
        title: "Periodic service",
        workshop: "V Mechanic Aundh",
        odometer: 34400,
        amount: 26900,
        invoiceId: "INV-26-0102",
        items: ["Engine oil & filter", "Spark plugs", "Wheel alignment", "58-point inspection"],
      },
    ],
  },
];

export const activeJob = {
  id: "VM-260922",
  title: "Periodic service & brake inspection",
  vehicleId: "bmw-330i",
  workshop: "V Mechanic Aundh",
  eta: "Tomorrow, 5:00 PM",
  estimateValidUntil: "6:00 PM today",
};

export type Step = { title: string; time: string; detail: string };

export const serviceSteps: Step[] = [
  { title: "Vehicle received", time: "Today, 9:42 AM", detail: "Checked in at Aundh with 28,460 km and 3/4 fuel." },
  { title: "Initial inspection", time: "Today, 11:20 AM", detail: "58-point digital inspection completed." },
  { title: "Estimate approval", time: "Waiting for your approval", detail: "Approve the work you want us to carry out." },
  { title: "Service in progress", time: "Not started", detail: "Technicians begin once work is approved." },
  { title: "Quality check & delivery", time: "Not started", detail: "Road test, wash and handover." },
];

export type InspectionStatus = "good" | "attention" | "urgent";

export const inspection: { area: string; status: InspectionStatus; note: string }[] = [
  { area: "Front brake pads", status: "urgent", note: "85% worn — 2.4 mm remaining" },
  { area: "Engine oil", status: "attention", note: "Due at 30,000 km — replace now" },
  { area: "Tyres", status: "attention", note: "Uneven wear on front pair" },
  { area: "Battery", status: "good", note: "12.6 V · healthy" },
  { area: "Suspension", status: "good", note: "No play or leaks" },
  { area: "AC & cabin filter", status: "good", note: "Cooling within spec" },
  { area: "Lights & electricals", status: "good", note: "All working" },
  { area: "Coolant & fluids", status: "good", note: "Levels normal" },
];

export type EstimateItem = {
  id: number;
  name: string;
  note: string;
  amount: number;
  priority: "Urgent" | "Recommended";
};

export const estimateItems: EstimateItem[] = [
  { id: 1, name: "Engine oil and filter replacement", note: "Routine service · Castrol EDGE 0W-30", amount: 12800, priority: "Recommended" },
  { id: 2, name: "Front brake pad replacement", note: "Wear level 85% · OEM pads", amount: 19600, priority: "Urgent" },
  { id: 3, name: "Wheel alignment and balancing", note: "Uneven front tyre wear", amount: 3200, priority: "Recommended" },
];

export type Invoice = {
  id: string;
  jobId: string;
  date: string;
  vehicle: string;
  description: string;
  amount: number;
  status: "paid" | "due";
};

export const invoices: Invoice[] = [
  { id: "INV-26-0814", jobId: "VM-260814", date: "14 Aug 2026", vehicle: "Mercedes-Benz S 450", description: "Bumper & fender restoration", amount: 42600, status: "due" },
  { id: "INV-26-0311", jobId: "VM-260311", date: "11 Mar 2026", vehicle: "BMW 330i", description: "Periodic service", amount: 18450, status: "paid" },
  { id: "INV-26-0102", jobId: "VM-260102", date: "02 Jan 2026", vehicle: "Mercedes-Benz S 450", description: "Periodic service", amount: 26900, status: "paid" },
  { id: "INV-25-0920", jobId: "VM-250920", date: "20 Sep 2025", vehicle: "BMW 330i", description: "AC service & diagnostics", amount: 7800, status: "paid" },
];

export const maintenancePlan = [
  { label: "Next routine service", value: "March 2027 or 38,000 km", detail: "BMW 330i · 9,540 km to go", progress: 45 },
  { label: "Insurance renewal", value: "02 October 2026", detail: "Mercedes-Benz S 450 · in 10 days", progress: 96 },
  { label: "PUC renewal", value: "21 December 2026", detail: "Mercedes-Benz S 450", progress: 70 },
  { label: "Tyre rotation", value: "At 32,000 km", detail: "BMW 330i · 3,540 km to go", progress: 62 },
];

export const faqs = [
  {
    q: "Will any work start without my approval?",
    a: "No. We only begin work you approve in the portal. If our technicians find anything new, you'll receive a revised estimate first.",
  },
  {
    q: "Do you offer pick-up and drop?",
    a: "Yes — free pick-up and drop is available across our Pune and Goa service areas. Choose “Pickup required” when booking.",
  },
  {
    q: "Is there a warranty on repairs?",
    a: "All repairs carry a V Mechanic workmanship warranty. Genuine and OEM parts also keep their manufacturer warranty.",
  },
  {
    q: "How do I pay?",
    a: "Pay online by UPI or card from the Invoices page, or at the workshop on delivery. A GST tax invoice is issued for every job.",
  },
  {
    q: "Can I get my service records for resale?",
    a: "Yes. Every job, invoice and photo is stored under My cars and can be downloaded as a complete service history.",
  },
];

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;
