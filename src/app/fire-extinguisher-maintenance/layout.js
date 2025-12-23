import siteUrl from "~/utils/siteUrl";

export const metadata = {
  title: "Fire Extinguisher Maintenance Finland | Marine Fire Safety Services",
  description: "Professional fire extinguisher maintenance, inspection, testing, and refilling services for marine vessels in Finland. Certified technicians, 24/7 support.",
  alternates: {
    canonical: "/fire-extinguisher-maintenance",
  },
  openGraph: {
    title: "Fire Extinguisher Maintenance Finland | Marine Fire Safety Services",
    description: "Professional fire extinguisher maintenance, inspection, testing, and refilling services for marine vessels in Finland. Certified technicians, 24/7 support.",
    url: `${siteUrl}/fire-extinguisher-maintenance`,
    images: [`${siteUrl}/main-assets/image/ffe-9.jpg`],
  },
};

export default function FireExtinguisherMaintenanceLayout({ children }) {
  return children;
}

