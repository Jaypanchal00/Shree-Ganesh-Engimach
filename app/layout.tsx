import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const BASE_URL = "https://shreeganeshengimach.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Shree Ganesh Engimach | Bottle Packaging Machines & Spare Parts",
    template: "%s | Shree Ganesh Engimach",
  },
  description:
    "Premier manufacturer of bottle filling, capping, washing, labeling machines & spare parts in Ahmedabad, India. 500+ installations, export-ready packaging solutions since 2019.",
  keywords: [
    "bottle packaging machine",
    "filling machine manufacturer Ahmedabad",
    "capping machine India",
    "labeling machine manufacturer",
    "ROPP capping machine",
    "volumetric filling machine",
    "liquid filling machine",
    "bottle washing machine",
    "packaging machinery Gujarat",
    "Shree Ganesh Engimach",
    "induction sealing machine",
    "spare parts packaging machine",
    "automatic filling machine",
    "bottle packing machine",
    "industrial packaging solutions India",
  ],
  authors: [{ name: "Shree Ganesh Engimach", url: BASE_URL }],
  creator: "Shree Ganesh Engimach",
  publisher: "Shree Ganesh Engimach",
  category: "Industrial Machinery & Packaging Equipment",
  applicationName: "Shree Ganesh Engimach",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [{ url: "/logo.png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Shree Ganesh Engimach | Bottle Packaging Machines & Spare Parts",
    description:
      "Premier manufacturer of bottle filling, capping, washing & labeling machines in Ahmedabad. 500+ installations. Export-ready quality since 2019.",
    type: "website",
    url: BASE_URL,
    siteName: "Shree Ganesh Engimach",
    locale: "en_IN",
    images: [
      {
        url: `${BASE_URL}/hero-bg.png`,
        width: 1200,
        height: 630,
        alt: "Shree Ganesh Engimach - Bottle Packaging Machines",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Ganesh Engimach | Bottle Packaging Machines",
    description:
      "Premier manufacturer of bottle filling, capping, washing & labeling machines in Ahmedabad, India.",
    images: [`${BASE_URL}/hero-bg.png`],
    creator: "@shreeganeshengimach",
    site: "@shreeganeshengimach",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad",
    "geo.position": "23.0225;72.5714",
    "ICBM": "23.0225, 72.5714",
    "rating": "general",
    "revisit-after": "7 days",
    "language": "English",
    "DC.title": "Shree Ganesh Engimach",
    "DC.description": "Manufacturer of bottle packaging machines and spare parts in Ahmedabad, Gujarat, India.",
    "DC.subject": "Industrial Packaging Machines",
    "DC.creator": "Shree Ganesh Engimach",
    "DC.publisher": "Shree Ganesh Engimach",
    "DC.language": "en",
    "DC.coverage": "India",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Shree Ganesh Engimach",
  alternateName: "SGE Packaging Machines",
  description:
    "Manufacturer of bottle filling, capping, washing, labeling machines and spare parts in Ahmedabad, India.",
  vatID: "24FGYPP3784D1Z0",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/main-logo.png`,
    width: 320,
    height: 70,
  },
  image: `${BASE_URL}/hero-bg.png`,
  foundingDate: "2019",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9725397262",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9725397262",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shed No 22/A, Rameshwar Ind. Estate, NR. Jay Chemical, Odhav",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382415",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.0225",
    longitude: "72.5714",
  },
  sameAs: [
    "https://wa.me/919725397262",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  name: "Shree Ganesh Engimach",
  description:
    "Manufacturer and supplier of high-quality bottle packaging machines including filling, capping, washing, labeling machines and spare parts. Serving industries across India since 2019.",
  url: BASE_URL,
  telephone: "+91-9725397262",
  email: "rishipanchal1999@gmail.com",
  priceRange: "₹₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Bank Transfer, Cheque",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shed No 22/A, Rameshwar Ind. Estate, NR. Jay Chemical, Odhav",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382415",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.0225",
    longitude: "72.5714",
  },
  hasMap: "https://maps.google.com/?q=Shree+Ganesh+Engimach+Odhav+Ahmedabad",
  image: [`${BASE_URL}/hero-bg.png`, `${BASE_URL}/Factory1.jpeg`],
  logo: `${BASE_URL}/main-logo.png`,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Shree Ganesh Engimach",
  description:
    "Manufacturer of bottle packaging machines & spare parts in Ahmedabad, India.",
  publisher: { "@id": `${BASE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/products?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Viewport & Theme */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#0F3D5E" />
        <meta name="msapplication-TileColor" content="#0F3D5E" />
        <meta name="format-detection" content="telephone=yes" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
