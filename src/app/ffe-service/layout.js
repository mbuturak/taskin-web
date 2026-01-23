import siteUrl from "~/utils/siteUrl";

export const metadata = {
  title: "FFE Service | Fire Fighting Equipment Services",
  description: "Complete marine firefighting packages, inspection of HP & LP Co2 systems, foam systems, portable and stationary fire extinguishers, and fire detection systems.",
  alternates: {
    canonical: "/ffe-service",
  },
  openGraph: {
    title: "FFE Service | Fire Fighting Equipment Services",
    description: "Complete marine firefighting packages, inspection of HP & LP Co2 systems, foam systems, portable and stationary fire extinguishers, and fire detection systems.",
    url: `${siteUrl}/ffe-service`,
    images: [`${siteUrl}/main-assets/image/ffe2.jpg`],
  },
};

export default function FFEServiceLayout({ children }) {
  return children;
}
