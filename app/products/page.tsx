import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

const BASE_URL = "https://shreeganeshengimach.com";

export const metadata: Metadata = {
  title: "Bottle Packaging Machines | Filling, Capping, Labeling, Washing - Shree Ganesh Engimach",
  description:
    "Browse our complete range: automatic liquid filling machines, rotary ROPP capping machines, wrap-around labeling machines, bottle rinsing machines & spare parts. Best price in Ahmedabad, Gujarat.",
  keywords: [
    "buy filling machine Ahmedabad",
    "ROPP capping machine price India",
    "automatic labeling machine manufacturer",
    "bottle washing machine Gujarat",
    "packaging machine spare parts",
    "induction sealing machine",
    "volumetric piston filler",
    "screw cap closing machine",
    "liquid filling machine price",
  ],
  alternates: {
    canonical: `${BASE_URL}/products`,
  },
  openGraph: {
    title: "Bottle Packaging Machines | Shree Ganesh Engimach",
    description:
      "Complete range of filling, capping, labeling, washing machines & spare parts. Competitive prices. 500+ satisfied clients. Call: +91 97253 97262",
    url: `${BASE_URL}/products`,
    images: [
      {
        url: `${BASE_URL}/filling-machine.png`,
        width: 1200,
        height: 630,
        alt: "Bottle Filling Machine by Shree Ganesh Engimach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bottle Packaging Machines | Shree Ganesh Engimach",
    description:
      "Filling, capping, labeling, washing machines & spare parts. Best price guaranteed.",
    images: [`${BASE_URL}/filling-machine.png`],
  },
};

const productsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${BASE_URL}/products#webpage`,
  url: `${BASE_URL}/products`,
  name: "Bottle Packaging Machines - Shree Ganesh Engimach",
  description: "Complete range of bottle packaging machines including filling, capping, labeling and washing machines.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${BASE_URL}/products` },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Bottle Packaging Machines",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Automatic Liquid Filling Machine",
        url: `${BASE_URL}/products/filling-1`,
        description: "High-precision automatic liquid filling machine with servo-driven piston system.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rotary ROPP Capping Machine",
        url: `${BASE_URL}/products/capping-1`,
        description: "Fully automatic rotary ROPP capping machine with high-speed turntable.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Wrap-Around Labeling Machine",
        url: `${BASE_URL}/products/labeling-1`,
        description: "Servo-driven wrap-around labeling machine for cylindrical containers.",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Rotary Bottle Rinsing Machine",
        url: `${BASE_URL}/products/washing-1`,
        description: "High-pressure rotary bottle rinsing machine for complete internal and external cleaning.",
      },
    ],
  },
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
      <ProductsClient />
    </>
  );
}
