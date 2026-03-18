import { Metadata } from "next";
import { products } from "@/constants/products";
import ProductDetailClient from "./ProductDetailClient";
import { notFound } from "next/navigation";

const BASE_URL = "https://shreeganeshengimach.com";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const params = await props.params;
  const product = products.find((p) => p.id === params.id);
  if (!product) return { title: "Product Not Found" };

  const categoryLabel = product.category.charAt(0).toUpperCase() + product.category.slice(1).replace("-", " ");

  return {
    title: `${product.name} | ${categoryLabel} Machine - Shree Ganesh Engimach`,
    description: `${product.description} Available in Ahmedabad, Gujarat. Contact for best price: +91 97253 97262.`,
    keywords: [
      product.name,
      `${product.name} price India`,
      `${product.name} manufacturer Ahmedabad`,
      `${product.category} machine Gujarat`,
      "bottle packaging machine India",
      "Shree Ganesh Engimach",
      ...product.industries.map((ind) => `${ind} packaging machine`),
    ],
    alternates: {
      canonical: `${BASE_URL}/products/${product.id}`,
    },
    openGraph: {
      title: `${product.name} | Shree Ganesh Engimach`,
      description: `${product.description} Best price guaranteed. Call: +91 97253 97262`,
      url: `${BASE_URL}/products/${product.id}`,
      images: [
        {
          url: `${BASE_URL}${product.image}`,
          width: 800,
          height: 600,
          alt: `${product.name} - Shree Ganesh Engimach`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Shree Ganesh Engimach`,
      description: `${product.description} Best price. Call: +91 97253 97262`,
      images: [`${BASE_URL}${product.image}`],
    },
  };
}

export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const product = products.find((p) => p.id === params.id);
  if (!product) notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${BASE_URL}/products/${product.id}#product`,
    name: product.name,
    description: product.description,
    image: `${BASE_URL}${product.image}`,
    url: `${BASE_URL}/products/${product.id}`,
    sku: product.id.toUpperCase(),
    brand: {
      "@type": "Brand",
      name: "Shree Ganesh Engimach",
    },
    manufacturer: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Shree Ganesh Engimach",
    },
    category: product.category,
    additionalProperty: Object.entries(product.specs).map(([name, value]) => ({
      "@type": "PropertyValue",
      name,
      value,
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Shree Ganesh Engimach",
        url: BASE_URL,
      },
      url: `${BASE_URL}/contact`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${BASE_URL}/products` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${BASE_URL}/products/${product.id}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
