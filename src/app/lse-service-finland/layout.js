import siteUrl from "~/utils/siteUrl";

export const metadata = {
  title: "LSE Service Finland | Life Saving Equipment Services",
  description: "Professional LSE service including lifejackets, immersion suits, breathing apparatus, EEBD, and safety equipment inspections in Finland.",
  alternates: {
    canonical: "/lse-service-finland",
  },
  openGraph: {
    title: "LSE Service Finland | Life Saving Equipment Services",
    description: "Professional LSE service including lifejackets, immersion suits, breathing apparatus, EEBD, and safety equipment inspections in Finland.",
    url: `${siteUrl}/lse-service-finland`,
    images: [`${siteUrl}/main-assets/image/lse.jpg`],
  },
};

export default function LSEServiceFinlandLayout({ children }) {
  return children;
}

