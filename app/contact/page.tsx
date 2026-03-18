import type { Metadata } from "next";
import ContactClient from "./ContactClient";

const BASE_URL = "https://shreeganeshengimach.com";

export const metadata: Metadata = {
  title: "Contact Us | Shree Ganesh Engimach - Get a Free Quote",
  description:
    "Contact Shree Ganesh Engimach for packaging machine inquiries, free quotations, spare parts orders, or factory visit scheduling. Call +91 97253 97262 or WhatsApp us. Located in Odhav, Ahmedabad.",
  keywords: [
    "contact Shree Ganesh Engimach",
    "packaging machine inquiry Ahmedabad",
    "filling machine quotation India",
    "bottle machine manufacturer contact",
    "get quote packaging machine Gujarat",
  ],
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us | Shree Ganesh Engimach - Get a Free Quote",
    description:
      "Call, WhatsApp or email us for a free quote on packaging machines. Factory in Odhav, Ahmedabad. Open Monday–Saturday, 9 AM–6 PM.",
    url: `${BASE_URL}/contact`,
    images: [
      {
        url: `${BASE_URL}/hero-bg.png`,
        width: 1200,
        height: 630,
        alt: "Contact Shree Ganesh Engimach - Packaging Machine Manufacturer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Shree Ganesh Engimach | Get a Free Quote",
    description: "Call or WhatsApp +91 97253 97262. Located in Odhav, Ahmedabad.",
    images: [`${BASE_URL}/hero-bg.png`],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${BASE_URL}/contact#webpage`,
  url: `${BASE_URL}/contact`,
  name: "Contact Shree Ganesh Engimach",
  description: "Get in touch with Shree Ganesh Engimach for packaging machine inquiries and quotations.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Contact Us", item: `${BASE_URL}/contact` },
    ],
  },
  mainEntity: {
    "@type": "Organization",
    name: "Shree Ganesh Engimach",
    telephone: "+91-9725397262",
    email: "rishipanchal1999@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shed No 22/A, Rameshwar Ind. Estate, NR. Jay Chemical, Odhav",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "382415",
      addressCountry: "IN",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </>
  );
}
