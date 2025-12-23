import siteUrl from "~/utils/siteUrl";

export const metadata = {
  title: "FFE Service Finland | Fire Fighting Equipment Services",
  description: "Complete marine firefighting packages, inspection of HP & LP Co2 systems, foam systems, portable and stationary fire extinguishers, and fire detection systems in Finland.",
  alternates: {
    canonical: "/ffe-service-finland",
  },
  openGraph: {
    title: "FFE Service Finland | Fire Fighting Equipment Services",
    description: "Complete marine firefighting packages, inspection of HP & LP Co2 systems, foam systems, portable and stationary fire extinguishers, and fire detection systems in Finland.",
    url: `${siteUrl}/ffe-service-finland`,
    images: [`${siteUrl}/main-assets/image/ffe2.jpg`],
  },
};

export default function FFEServiceFinlandLayout({ children }) {
  return children;
}

