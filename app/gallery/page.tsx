import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

const BASE_URL = "https://shreeganeshengimach.com";

export const metadata: Metadata = {
  title: "Photo Gallery | Shree Ganesh Engimach - Factory, Machines & Manufacturing Unit",
  description:
    "View photos of Shree Ganesh Engimach's manufacturing facility, bottle packaging machines, CNC production area, assembly department, and finished machines ready for dispatch.",
  keywords: [
    "packaging machine factory photos Ahmedabad",
    "filling machine images India",
    "bottle packaging machine gallery",
    "manufacturing unit Ahmedabad photos",
    "capping machine pictures",
  ],
  alternates: {
    canonical: `${BASE_URL}/gallery`,
  },
  openGraph: {
    title: "Photo Gallery | Shree Ganesh Engimach",
    description:
      "Factory photos, machine images, and manufacturing unit visuals from Shree Ganesh Engimach, Ahmedabad.",
    url: `${BASE_URL}/gallery`,
    images: [
      {
        url: `${BASE_URL}/factory-interior.png`,
        width: 1200,
        height: 630,
        alt: "Shree Ganesh Engimach Factory Interior - Manufacturing Unit Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Shree Ganesh Engimach",
    description: "Factory, machine & manufacturing unit photos from Shree Ganesh Engimach.",
    images: [`${BASE_URL}/factory-interior.png`],
  },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": `${BASE_URL}/gallery#webpage`,
  url: `${BASE_URL}/gallery`,
  name: "Shree Ganesh Engimach Photo Gallery",
  description: "Photos of manufacturing facility, machines, and production unit.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Gallery", item: `${BASE_URL}/gallery` },
    ],
  },
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <GalleryClient />
    </>
  );
}
