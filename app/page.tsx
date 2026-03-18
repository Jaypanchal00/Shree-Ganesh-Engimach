import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ProductsSection from "@/components/home/ProductsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ManufacturingProcess from "@/components/home/ManufacturingProcess";
import GallerySection from "@/components/home/GallerySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import InquiryCTA from "@/components/home/InquiryCTA";

const BASE_URL = "https://shreeganeshengimach.com";

export const metadata: Metadata = {
  title: "Shree Ganesh Engimach | Bottle Packaging Machines & Spare Parts in Ahmedabad",
  description:
    "Shree Ganesh Engimach — leading manufacturer of bottle filling machines, capping machines, labeling machines, bottle washing machines & spare parts in Ahmedabad, Gujarat. 500+ satisfied clients since 2019.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Shree Ganesh Engimach | Bottle Packaging Machines & Spare Parts",
    description:
      "Leading manufacturer of bottle filling, capping, washing & labeling machines in Ahmedabad. 500+ installations. Call: +91 97253 97262",
    url: BASE_URL,
    images: [
      {
        url: `${BASE_URL}/hero-bg.png`,
        width: 1200,
        height: 630,
        alt: "Shree Ganesh Engimach - Bottle Packaging Machines Manufacturer Ahmedabad",
      },
    ],
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: "Shree Ganesh Engimach - Bottle Packaging Machines Manufacturer",
  description:
    "Premier manufacturer of bottle filling, capping, washing and labeling machines in Ahmedabad, Gujarat, India since 2019.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <WhyChooseUs />
      <ManufacturingProcess />
      <GallerySection />
      <TestimonialsSection />
      <InquiryCTA />
    </>
  );
}
