export interface Product {
    id: string;
    category: string;
    name: string;
    image: string;
    description: string;
    specs: { [key: string]: string };
    industries: string[];
    badge: string;
    badgeColor: string;
    longDescription?: string;
    features?: string[];
  }
  
  export const products: Product[] = [
    {
      id: "filling-1",
      category: "filling",
      name: "Automatic Liquid Filling Machine",
      image: "/filling-machine.png",
      description: "High-precision automatic liquid filling machine with servo-driven piston system for water, juice, oil, chemicals, and pharmaceutical liquids.",
      specs: { "Capacity": "500–5000 BPH", "Filling Range": "50–5000 ml", "Accuracy": "±0.5%", "Power": "2.2 kW", "Body": "SS 304/316", "Nozzles": "4–24 nos" },
      industries: ["Beverages", "Pharma", "Chemicals", "Food"],
      badge: "Best Seller",
      badgeColor: "var(--secondary)",
      features: [
        "Servo-driven piston for high accuracy",
        "SS 316 contact parts",
        "PLC control with HMI touchscreen",
        "No bottle - no fill protection",
        "Tool-less changeover"
      ]
    },
    {
      id: "filling-2",
      category: "filling",
      name: "Volumetric Piston Filling Machine",
      image: "/filling-machine.png",
      description: "Volumetric piston filling machine ideal for thick liquids, pastes, creams, and sauces with accurate dose control.",
      specs: { "Capacity": "200–2000 BPH", "Filling Range": "20–2000 ml", "Accuracy": "±1%", "Power": "1.5 kW", "Body": "SS 316", "Heads": "2–16 nos" },
      industries: ["Food", "Cosmetics", "FMCG"],
      badge: "",
      badgeColor: "",
    },
    {
      id: "capping-1",
      category: "capping",
      name: "Rotary ROPP Capping Machine",
      image: "/capping-machine.png",
      description: "Fully automatic rotary ROPP (Roll-On Pilfer Proof) capping machine with high-speed turntable and torque control mechanism.",
      specs: { "Capacity": "1000–6000 BPH", "Cap Types": "ROPP", "Torque": "Adjustable", "Power": "1.5 kW", "Body": "SS 304", "Heads": "3, 6, 8 heads" },
      industries: ["Pharma", "Liquor", "Beverages"],
      badge: "New Model",
      badgeColor: "var(--primary)",
    },
    {
      id: "capping-2",
      category: "capping",
      name: "Screw Cap Closing Machine",
      image: "/capping-machine.png",
      description: "Heavy-duty screw cap closing machine for plastic, metal, and glass bottles with torque control and auto-feed hopper.",
      specs: { "Capacity": "500–3000 BPH", "Cap Types": "Plastic/Metal Screw", "Power": "2.2 kW", "Cap Size": "20–100mm", "Body": "MS Powder Coated" },
      industries: ["Beverages", "Chemicals", "FMCG"],
      badge: "",
      badgeColor: "",
    },
    {
      id: "sealing-1",
      category: "sealing",
      name: "Induction Cap Sealing Machine",
      image: "/sealing-machine.png",
      description: "Electromagnetic induction sealing for tamper-evident packaging. Works on all bottle sizes with foil-lined caps automatically.",
      specs: { "Speed": "50–300 BPH", "Power": "700W–5KW", "Gap": "0–50mm", "Cap Size": "15–120mm", "Control": "Digital" },
      industries: ["Pharma", "Food", "Beverages"],
      badge: "Premium",
      badgeColor: "#7c3aed",
    },
    {
      id: "washing-1",
      category: "washing",
      name: "Rotary Bottle Rinsing Machine",
      image: "/washing-machine.png",
      description: "High-pressure rotary bottle rinsing machine for complete internal and external cleaning before filling operations.",
      specs: { "Capacity": "1000–10000 BPH", "Media": "Water/Air/Chemical", "Body": "SS 316L", "Power": "1.1 kW", "Nozzles": "Multi-jet" },
      industries: ["Beverages", "Food", "Pharma"],
      badge: "",
      badgeColor: "",
    },
    {
      id: "labeling-1",
      category: "labeling",
      name: "Wrap-Around Labeling Machine",
      image: "/labeling-machine.png",
      description: "Servo-driven wrap-around labeling machine for cylindrical containers. Handles self-adhesive labels with precision placement.",
      specs: { "Speed": "100–3000 LPH", "Label Size": "Any size", "Drive": "Servo motor", "Accuracy": "±1mm", "Container": "Cylindrical" },
      industries: ["Beverages", "FMCG", "Pharma"],
      badge: "",
      badgeColor: "",
    },
    {
      id: "labeling-2",
      category: "labeling",
      name: "Front & Back Labeling Machine",
      image: "/labeling-machine.png",
      description: "Simultaneous front and back labeling machine for flat/oval/square bottles with independent label tension control.",
      specs: { "Speed": "60–2000 BPH", "Labels": "Front + Back", "Drive": "Servo", "Accuracy": "±0.5mm" },
      industries: ["Food", "Cosmetics", "Chemicals"],
      badge: "Multi-Use",
      badgeColor: "#0891b2",
    },
    {
      id: "spare-1",
      category: "spare-parts",
      name: "Filling Valve Assembly",
      image: "/filling-machine.png",
      description: "Original replacement filling valve assemblies for gravity, pressure, and vacuum fillers. Available in SS 316L.",
      specs: { "Material": "SS 316L", "Types": "Gravity/Pressure/Vacuum", "Sizes": "Custom", "Compatibility": "All brands" },
      industries: ["All Industries"],
      badge: "",
      badgeColor: "",
    },
    {
      id: "spare-2",
      category: "spare-parts",
      name: "Capping Chuck / Star Wheel",
      image: "/capping-machine.png",
      description: "Heavy-duty capping chucks and star wheels for all types of cap closers. Fast changeover, extended service life.",
      specs: { "Material": "Nylon / Urethane", "Cap Types": "ROPP, Screw, Crown", "Bore": "Custom bore sizes" },
      industries: ["All Industries"],
      badge: "",
      badgeColor: "",
    },
  ];
