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
    image: "/real-filling-machine.jpeg",
    description: "High-precision fully automatic liquid filling machine with servo-driven piston system. Designed for water, juice, edible oil, chemicals, and pharmaceutical liquids with ±0.5% accuracy.",
    longDescription: "Our Automatic Liquid Filling Machine is engineered for high-speed, high-accuracy liquid packaging operations. Built with a robust SS 304/316 stainless steel frame and servo-driven piston filling mechanism, it delivers consistent fill volumes across every cycle. The machine is PLC-controlled with an HMI touchscreen interface for easy parameter setting and monitoring. Suitable for free-flowing liquids including water, carbonated drinks, juice, cold drinks, edible oil, lubricants, chemicals, disinfectants, and pharmaceutical syrups. It features a no-bottle-no-fill sensor, drip-free nozzle design, and tool-less changeover for quick product switchover. Ideal for small, medium, and large-scale production lines.",
    specs: {
      "Production Capacity": "500 – 5000 BPH",
      "Filling Range": "50 ml – 5000 ml",
      "Filling Accuracy": "±0.5%",
      "No. of Nozzles": "4 / 6 / 8 / 12 / 16 / 24",
      "Power Consumption": "2.2 kW",
      "Body Material": "SS 304 / SS 316",
      "Contact Parts": "SS 316L",
      "Drive System": "Servo Motor + PLC",
      "Air Pressure Required": "4–6 Bar",
      "Machine Dimensions": "1800 × 1200 × 1800 mm (approx.)"
    },
    industries: ["Beverages", "Pharmaceuticals", "Chemicals", "Food & FMCG", "Edible Oil", "Cosmetics"],
    badge: "Best Seller",
    badgeColor: "var(--secondary)",
    features: [
      "Servo-driven piston system for ±0.5% fill accuracy",
      "SS 316L food-grade contact parts",
      "PLC control panel with HMI touchscreen",
      "No bottle – no fill safety sensor",
      "Anti-drip / drip-free filling nozzles",
      "Tool-less changeover for different bottle sizes",
      "Adjustable filling speed and volume",
      "Compact design with easy maintenance access",
      "Compatible with glass, PET, HDPE bottles"
    ]
  },
  {
    id: "filling-2",
    category: "filling",
    name: "Volumetric Piston Filling Machine",
    image: "/real-machine1.jpeg",
    description: "Robust volumetric piston filling machine built for thick liquids, pastes, creams, sauces, and honey. Delivers precise dose filling with easy volume adjustment and full SS 316 construction.",
    longDescription: "The Volumetric Piston Filling Machine from Shree Ganesh Engimach is specially designed for viscous and semi-viscous products that cannot be handled by gravity or flow-meter fillers. Using a positive displacement piston cylinder mechanism, it accurately measures and dispenses thick products like tomato ketchup, mayonnaise, shampoo, hand sanitizer, ghee, paste, and thick syrups. The machine features adjustable piston stroke for volume control, heated hopper option for temperature-sensitive products, and is available in semi-automatic and fully automatic configurations. Constructed entirely in SS 316 for corrosion resistance and hygiene compliance.",
    specs: {
      "Production Capacity": "200 – 2000 BPH",
      "Filling Range": "20 ml – 2000 ml",
      "Filling Accuracy": "±1%",
      "No. of Heads": "2 / 4 / 6 / 8 / 12 / 16",
      "Power Consumption": "1.5 kW",
      "Body Material": "SS 316",
      "Contact Parts": "SS 316L",
      "Hopper Capacity": "50 – 200 litres (customizable)",
      "Product Viscosity": "Up to 1,00,000 cP",
      "Operation": "Semi-Auto / Fully Automatic"
    },
    industries: ["Food & Condiments", "Cosmetics & Personal Care", "FMCG", "Ayurveda & Herbal", "Dairy"],
    badge: "Heavy Duty",
    badgeColor: "#0891b2",
    features: [
      "Positive displacement piston for thick & viscous liquids",
      "Adjustable fill volume via mechanical stroke adjustment",
      "Wide viscosity range — pastes, creams, gels, sauces",
      "Optional heated jacketed hopper for warm products",
      "Drip-free ball valve nozzle",
      "Quick-release cylinder for easy cleaning",
      "CIP (Clean-in-Place) compatible design",
      "Available in semi-auto and fully automatic configurations"
    ]
  },
  {
    id: "capping-1",
    category: "capping",
    name: "Rotary ROPP Capping Machine",
    image: "/real-ropp-capping.jpeg",
    description: "Fully automatic rotary ROPP (Roll-On Pilfer Proof) capping machine. Ideal for aluminium screw caps on glass and PET bottles used in liquor, pharma, and beverages industry.",
    longDescription: "The Rotary ROPP Capping Machine is the industry standard for sealing bottles with aluminium roll-on pilfer-proof caps. This machine uses multiple capping heads mounted on a rotating turntable to apply and thread aluminium caps simultaneously at high speed. The pilfer-proof ring formed during capping provides tamper-evidence and consumer safety. Widely used in the liquor (whisky, vodka, rum), wine, mineral water, and pharmaceutical bottle packaging industries. The torque is fully adjustable to suit different cap diameters and materials. Built with heavy-duty SS 304 frame and precision engineering for long service life and minimal maintenance.",
    specs: {
      "Production Capacity": "1000 – 6000 BPH",
      "Cap Type": "ROPP Aluminium Caps",
      "No. of Capping Heads": "3 / 6 / 8",
      "Cap Diameter Range": "18 mm – 38 mm",
      "Torque Control": "Fully Adjustable",
      "Power Consumption": "1.5 kW",
      "Body Material": "SS 304",
      "Drive": "Geared Motor with Variable Speed",
      "Bottle Diameter": "25 – 120 mm",
      "Machine Height": "Adjustable per bottle"
    },
    industries: ["Liquor & Spirits", "Pharmaceuticals", "Beverages", "Mineral Water", "Wine"],
    badge: "Most Popular",
    badgeColor: "var(--primary)",
    features: [
      "High-speed rotary turntable design",
      "ROPP aluminium cap application with pilfer-proof ring",
      "Adjustable torque for consistent seal quality",
      "Multiple head options: 3, 6, 8 heads",
      "Suitable for glass and PET bottles",
      "Variable speed drive for production flexibility",
      "Heavy-duty SS 304 construction",
      "Minimal maintenance with long service life",
      "Tamper-evident seal compliance"
    ]
  },
  {
    id: "capping-2",
    category: "capping",
    name: "Screw Cap Closing Machine",
    image: "/real-screw-capping.jpeg",
    description: "Automatic screw cap closing machine for plastic and metal screw caps on PET, HDPE, and glass bottles. Features torque control, auto-cap feeding hopper, and adjustable chuck system.",
    longDescription: "The Screw Cap Closing Machine is a versatile and reliable solution for applying threaded plastic or metal screw caps to bottles of various sizes. Equipped with an automatic cap sorting and feeding hopper, the machine picks, orients, and applies caps consistently at high speed without manual intervention. The motorized torque-controlled chuck system ensures each cap is applied with the correct tightening force — preventing over-tightening (which can deform the cap) or under-tightening (which causes leakage). Suitable for mineral water, cold drink, ink, engine oil, chemical, edible oil, and FMCG packaging lines.",
    specs: {
      "Production Capacity": "500 – 4000 BPH",
      "Cap Types": "Plastic Screw / Metal Screw",
      "Cap Diameter Range": "20 mm – 100 mm",
      "Torque Control": "Motorized, Adjustable",
      "Power Consumption": "2.2 kW",
      "Body Material": "MS Powder Coated / SS 304",
      "Hopper": "Auto-sort cap feeder",
      "Drive": "Variable Speed Drive (VFD)",
      "Bottle Compatibility": "PET / HDPE / Glass",
      "Operation": "Fully Automatic"
    },
    industries: ["Beverages", "Chemicals", "Edible Oil", "FMCG", "Lubricants", "Personal Care"],
    badge: "Versatile",
    badgeColor: "#059669",
    features: [
      "Auto cap sorting and feeding hopper",
      "Motorized torque-controlled chuck for consistent sealing",
      "Wide cap size range: 20mm to 100mm",
      "Variable speed drive for flexible throughput",
      "Works with plastic and metal screw caps",
      "Compatible with PET, HDPE, and glass bottles",
      "Electronic torque monitoring system",
      "Quick chuck changeover for different cap sizes",
      "Suitable for round, square, and oval bottles"
    ]
  },
  {
    id: "capping-3",
    category: "capping",
    name: "Automatic Single Head Inline Capping Machine",
    image: "/real-capping-machine.jpeg",
    description: "Fully automatic single head inline capping machine with vibratory bowl cap feeder and conveyor. Applies plastic screw caps on PET and HDPE bottles with consistent torque — ideal for mid-speed production lines.",
    longDescription: "The Automatic Single Head Inline Capping Machine is a compact yet powerful solution for mid-speed bottle capping operations. It comes equipped with a vibratory bowl cap feeder that automatically sorts, orients, and delivers caps to the capping head in a continuous flow. Bottles are conveyed on an inline conveyor and held in position by a star wheel or guide rail while the single motorized capping head applies and tightens the plastic screw cap to the correct torque. The machine is built on a heavy-duty SS 304 frame and can handle round, square, and oval bottles of various sizes with simple changeover. Widely used in mineral water, edible oil, pharma, cosmetics, and FMCG packaging lines where consistent, reliable capping at moderate speeds is required.",
    specs: {
      "Production Capacity": "500 – 2500 BPH",
      "Cap Types": "Plastic Screw Caps (PP / PE)",
      "Cap Diameter Range": "18 mm – 80 mm",
      "Cap Feeder": "Vibratory Bowl Auto-Sorter",
      "Torque Control": "Motorized, Adjustable",
      "Power Consumption": "1.5 kW",
      "Body Material": "SS 304 / MS Powder Coated",
      "Drive": "Variable Speed Drive (VFD)",
      "Bottle Shape": "Round / Square / Oval",
      "Conveyor": "Inline flat belt conveyor"
    },
    industries: ["Mineral Water", "Beverages", "Edible Oil", "Pharmaceuticals", "Cosmetics", "FMCG"],
    badge: "Inline Model",
    badgeColor: "#d97706",
    features: [
      "Vibratory bowl auto-sorter for continuous cap feeding",
      "Single motorized capping head with torque control",
      "Inline flat belt conveyor for smooth bottle flow",
      "Star wheel bottle guide for precise cap placement",
      "Compatible with PP and PE plastic screw caps",
      "Works on round, square, and oval bottles",
      "VFD-controlled variable speed for production flexibility",
      "Compact footprint — ideal for small production spaces",
      "Easy height and torque adjustment for quick changeover"
    ]
  },
  {
    id: "sealing-1",
    category: "sealing",
    name: "Induction Cap Sealing Machine",
    image: "/real-capping-assembly.jpeg",
    description: "Electromagnetic induction cap sealing machine for tamper-evident, leak-proof packaging. Seals aluminium foil liner inside capped bottles without contact — for pharma, food, oil, and chemicals.",
    longDescription: "The Induction Cap Sealing Machine uses electromagnetic induction heating technology to bond the aluminium foil liner inside a plastic or metal cap to the bottle mouth — without any physical contact. This creates a hermetic, tamper-evident seal that prevents leakage, contamination, and adulteration. The bottle simply passes through or under the induction coil head after capping, and the foil is sealed instantly. Available in conveyor-type (in-line) and hand-held models. Widely used in pharmaceutical, nutraceutical, edible oil, pesticide, beverages, and FMCG packaging. The seal also extends product shelf life significantly.",
    specs: {
      "Sealing Speed": "50 – 300 bottles/min",
      "Power Output": "700W / 1KW / 2KW / 3KW / 5KW",
      "Induction Head Gap": "0 – 50 mm (adjustable)",
      "Cap / Foil Diameter": "15 mm – 120 mm",
      "Control System": "Digital microprocessor",
      "Cooling": "Water-cooled / Air-cooled",
      "Power Supply": "220V / 440V, 50 Hz",
      "Body Material": "SS 304 / Mild Steel",
      "Type": "Conveyor Inline / Handheld",
      "Seal Type": "Aluminium foil induction seal"
    },
    industries: ["Pharmaceuticals", "Nutraceuticals", "Food & Beverages", "Edible Oil", "Agro Chemicals", "FMCG"],
    badge: "Tamper-Proof",
    badgeColor: "#7c3aed",
    features: [
      "Non-contact electromagnetic induction sealing",
      "Hermetic, tamper-evident aluminium foil seal",
      "Works on all plastic and metal caps with foil liner",
      "Adjustable induction power for different foil sizes",
      "Digital microprocessor control for precise power setting",
      "Water-cooled induction head for continuous operation",
      "Available in inline conveyor and handheld models",
      "Extends product shelf life and prevents contamination",
      "No heat damage to bottle or product"
    ]
  },
  {
    id: "washing-1",
    category: "washing",
    name: "Rotary Bottle Washing & Rinsing Machine",
    image: "/real-machine2.jpeg",
    description: "Fully automatic rotary bottle washing and rinsing machine. Inverts, rinses, and air-dries bottles before filling using high-pressure water jets or ionized air for spotless, contamination-free bottles.",
    longDescription: "The Rotary Bottle Washing and Rinsing Machine is an essential pre-filling machine that ensures every bottle entering the filling line is clean, dust-free, and contamination-free. The machine grips each bottle, inverts it 180 degrees, rinses the interior using high-pressure fresh water, sterile water, or ionized compressed air jets, and then re-inverts it upright for the next stage. It is suitable for PET, glass, HDPE, and PP bottles of various shapes. Built with SS 316L food-grade stainless steel for hygienic operation. Available in linear and rotary configurations depending on production speed requirements.",
    specs: {
      "Production Capacity": "1000 – 12000 BPH",
      "Rinsing Media": "Fresh Water / RO Water / Ionized Air / Chemical",
      "Body Material": "SS 316L",
      "Contact Parts": "SS 316L",
      "Power Consumption": "1.1 – 2.2 kW",
      "Nozzle Type": "Multi-jet high-pressure nozzles",
      "Bottle Inversion": "180 degree invert & re-invert",
      "Bottle Compatibility": "PET / Glass / HDPE / PP",
      "Drive": "Geared Motor",
      "Type": "Rotary / Linear"
    },
    industries: ["Beverages & Cold Drinks", "Mineral Water", "Food & Sauces", "Pharmaceuticals", "Dairy", "Chemicals"],
    badge: "Pre-Filling Essential",
    badgeColor: "#0e7490",
    features: [
      "360 degree bottle inversion for thorough internal rinsing",
      "High-pressure multi-jet nozzle rinsing system",
      "Works with water, ionized air, or chemical rinse",
      "SS 316L food-grade construction throughout",
      "Suitable for PET, glass, HDPE, and PP bottles",
      "Adjustable grippers for different bottle neck sizes",
      "Low water consumption with recycling option",
      "Synchronized with filling line conveyor speed",
      "Easy access panels for cleaning and maintenance"
    ]
  },
  {
    id: "labeling-1",
    category: "labeling",
    name: "Wrap-Around Labeling Machine",
    image: "/real-giva-assembly.jpeg",
    description: "Servo-driven automatic wrap-around labeling machine for self-adhesive labels on cylindrical PET, glass, and HDPE bottles. High-speed precision label application with ±1mm accuracy.",
    longDescription: "The Wrap-Around Labeling Machine is designed for applying self-adhesive (pressure-sensitive) labels around the full circumference of round and cylindrical bottles. Using a precision servo motor drive with a label registration sensor, the machine peels the label from the liner and wraps it smoothly and evenly around the bottle, eliminating bubbles and misalignment. The label start and stop position is precisely controlled via a photocell and encoder system. Used extensively in the mineral water, cold drink, pharma syrup, oil, dairy, and FMCG industries. Available with date/batch coder and hot stamp coder integration.",
    specs: {
      "Labeling Speed": "100 – 3000 Bottles/Hour",
      "Label Type": "Self-Adhesive (PSL) Wrap-Around",
      "Label Width": "20 mm – 200 mm",
      "Label Length": "30 mm – 600 mm",
      "Accuracy": "±1 mm",
      "Drive": "Servo Motor",
      "Bottle Diameter": "20 mm – 120 mm",
      "Power Consumption": "0.5 kW",
      "Body Material": "SS 304 / MS Powder Coated",
      "Label Roll O.D.": "Max 300 mm"
    },
    industries: ["Mineral Water", "Beverages", "Pharmaceuticals", "Dairy", "Edible Oil", "FMCG & Personal Care"],
    badge: "High Accuracy",
    badgeColor: "#0891b2",
    features: [
      "Servo motor drive for ±1mm label placement accuracy",
      "Photocell + encoder label registration system",
      "Bubble-free smooth label application roller",
      "Adjustable for various bottle diameters and heights",
      "Compatible with all self-adhesive label materials",
      "Optional hot stamp / inkjet date coder integration",
      "Automatic label length detection",
      "No bottle no label sensor",
      "Easy reel loading and threading system"
    ]
  },
  {
    id: "labeling-2",
    category: "labeling",
    name: "Front & Back Labeling Machine",
    image: "/real-assembly.jpeg",
    description: "Automatic front and back labeling machine that simultaneously applies two self-adhesive labels on flat, oval, or square bottles. Servo-driven with ±0.5mm registration accuracy.",
    longDescription: "The Front and Back Labeling Machine is engineered to apply two separate self-adhesive labels — one on the front and one on the back — simultaneously in a single pass. This eliminates the need for two separate labeling stations and greatly increases line efficiency. Each label head has its own independent servo motor drive and tension control system, allowing different label sizes on front and back. Ideal for pharma syrups, health drinks, ketchup, honey, edible oil, shampoo, and any product requiring two-sided labeling. The machine includes a flat bottle guide system and precision hold-down belt for stable label application.",
    specs: {
      "Labeling Speed": "60 – 2000 Bottles/Hour",
      "Labels Applied": "Front + Back (simultaneously)",
      "Label Type": "Self-Adhesive (PSL)",
      "Label Accuracy": "±0.5 mm",
      "Drive": "Dual Independent Servo Motor",
      "Bottle Shape": "Flat / Square / Oval / Rectangular",
      "Bottle Height": "50 mm – 300 mm",
      "Power Consumption": "0.75 kW",
      "Body Material": "SS 304",
      "Sensor": "Photocell with Encoder"
    },
    industries: ["Food & Condiments", "Pharmaceuticals", "Cosmetics", "Chemicals", "Herbal & Ayurveda", "Personal Care"],
    badge: "Dual Label",
    badgeColor: "#7c3aed",
    features: [
      "Simultaneous front and back label application in one pass",
      "Dual independent servo motor heads",
      "±0.5mm label registration accuracy",
      "Suitable for flat, square, oval, and rectangular bottles",
      "Independent label tension control per head",
      "Photocell sensor for automatic label edge detection",
      "Flat bottle guide belt for stable handling",
      "Compatible with different label sizes on front and back",
      "Optional UV coder / hot stamp / inkjet integration"
    ]
  },
  {
    id: "spare-2",
    category: "spare-parts",
    name: "Precision Star Wheel Set",
    image: "/real-star-plate.jpeg",
    description: "Custom-profile Star Wheels for stable bottle handling.",
    specs: { "Material": "Nylon / SS 304", "Customizable": "Yes" },
    industries: ["Beverage", "Pharma"],
    badge: "CNC Precision",
    badgeColor: "#475569"
  },
  {
    id: "spare-3",
    category: "spare-parts",
    name: "Hardened ROPP Capping Head",
    image: "/New 1jpeg.jpeg",
    description: "Superior Ra value ROPP capping head.",
    specs: { "Material": "Hardened Tool Steel", "Compatibility": "22-38mm" },
    industries: ["Liquor", "Food"],
    badge: "Bestseller",
    badgeColor: "var(--secondary)"
  },
  {
    id: "spare-4",
    category: "spare-parts",
    name: "Integrated Spindle Unit",
    image: "/New2.jpeg",
    description: "Integrated spindle and head assembly.",
    specs: { "Material": "AISI 304", "Torque": "Adjustable" },
    industries: ["Oils", "Chemicals"],
    badge: "Durable",
    badgeColor: "#7c3aed"
  }
];
