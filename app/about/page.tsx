import type { Metadata } from "next";
import AboutClient from "./AboutClient";

const BASE_URL = "https://shreeganeshengimach.com";

export const metadata: Metadata = {
  title: "About Us | Shree Ganesh Engimach - Packaging Machine Manufacturer Since 2019",
  description:
    "Shree Ganesh Engimach was established in 2019 in Ahmedabad. Learn our story, mission, team, and why 500+ clients across India trust us for premium bottle packaging machines.",
  keywords: [
    "about Shree Ganesh Engimach",
    "packaging machine manufacturer Ahmedabad",
    "bottle filling machine company Gujarat",
    "industrial machine manufacturer India since 2019",
  ],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Us | Shree Ganesh Engimach",
    description:
      "Established in 2019 in Ahmedabad. Learn our story, mission, and why 500+ clients trust us for premium bottle packaging machines.",
    url: `${BASE_URL}/about`,
    images: [
      {
        url: `${BASE_URL}/factory-interior.png`,
        width: 1200,
        height: 630,
        alt: "Shree Ganesh Engimach Manufacturing Facility Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Shree Ganesh Engimach",
    description: "Established in 2019. 500+ clients trust us for premium bottle packaging machines.",
    images: [`${BASE_URL}/factory-interior.png`],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${BASE_URL}/about#webpage`,
  url: `${BASE_URL}/about`,
  name: "About Shree Ganesh Engimach",
  description:
    "Learn about Shree Ganesh Engimach — our story, mission, and journey to becoming a leading bottle packaging machine manufacturer in India since 2019.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "About Us", item: `${BASE_URL}/about` },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutClient />
    </>
  );
}
