import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { FaIndustry, FaCogs, FaMicroscope, FaWrench, FaBuilding, FaTruck } from "react-icons/fa";

const BASE_URL = "https://shreeganeshengimach.com";

export const metadata: Metadata = {
  title: "Manufacturing Infrastructure | Shree Ganesh Engimach - CNC Machining, 20,000 Sq.Ft Facility",
  description:
    "Explore Shree Ganesh Engimach's 20,000 sq.ft manufacturing facility in Ahmedabad GIDC with 12 CNC machining centers, in-house quality lab, TIG/MIG welding, and full dispatch capabilities.",
  keywords: [
    "packaging machine manufacturing facility Ahmedabad",
    "CNC machining center Gujarat",
    "industrial factory GIDC Ahmedabad",
    "bottle machine production unit India",
    "quality control lab packaging machinery",
  ],
  alternates: {
    canonical: `${BASE_URL}/infrastructure`,
  },
  openGraph: {
    title: "Manufacturing Infrastructure | Shree Ganesh Engimach",
    description:
      "20,000 sq.ft facility with 12 CNC machining centers, quality lab, welding shop and overhead cranes in Ahmedabad GIDC.",
    url: `${BASE_URL}/infrastructure`,
    images: [
      {
        url: `${BASE_URL}/factory-interior.png`,
        width: 1200,
        height: 630,
        alt: "Shree Ganesh Engimach Manufacturing Facility - CNC Machining Center Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing Infrastructure | Shree Ganesh Engimach",
    description: "20,000 sq.ft facility with 12 CNC machines, quality lab & welding shop in Ahmedabad.",
    images: [`${BASE_URL}/factory-interior.png`],
  },
};

const infrastructureSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/infrastructure#webpage`,
  url: `${BASE_URL}/infrastructure`,
  name: "Manufacturing Infrastructure - Shree Ganesh Engimach",
  description: "State-of-the-art 20,000 sq.ft manufacturing facility with CNC machining, quality control lab and full fabrication capabilities.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Infrastructure", item: `${BASE_URL}/infrastructure` },
    ],
  },
};

import InfrastructureClient from "./InfrastructureClient";

export default function InfrastructurePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(infrastructureSchema) }}
      />
      <InfrastructureClient />
    </>
  );
}
