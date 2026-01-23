import siteUrl from "~/utils/siteUrl";

export const metadata = {
  title: "LSE Service | Life Saving Equipment Services",
  description: "Professional LSE service including lifejackets, immersion suits, breathing apparatus, EEBD, and safety equipment inspections.",
  alternates: {
    canonical: "/lse-service",
  },
  openGraph: {
    title: "LSE Service | Life Saving Equipment Services",
    description: "Professional LSE service including lifejackets, immersion suits, breathing apparatus, EEBD, and safety equipment inspections.",
    url: `${siteUrl}/lse-service`,
    images: [`${siteUrl}/main-assets/image/lse.jpg`],
  },
};

export default function LSEServiceLayout({ children }) {
  return children;
}
