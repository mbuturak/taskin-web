import siteUrl from "~/utils/siteUrl";

export const metadata = {
  title: "LSA Lifeboat Service Finland | Life Saving Appliance Services",
  description: "Professional LSA lifeboat service, inspection, and maintenance in Finland. Annual and 5-yearly lifeboat inspections, release hook services, and wire replacements.",
  alternates: {
    canonical: "/lsa-lifeboat-service",
  },
  openGraph: {
    title: "LSA Lifeboat Service Finland | Life Saving Appliance Services",
    description: "Professional LSA lifeboat service, inspection, and maintenance in Finland. Annual and 5-yearly lifeboat inspections, release hook services, and wire replacements.",
    url: `${siteUrl}/lsa-lifeboat-service`,
    images: [`${siteUrl}/main-assets/image/lsa.jpeg`],
  },
};

export default function LSALifeboatServiceLayout({ children }) {
  return children;
}

