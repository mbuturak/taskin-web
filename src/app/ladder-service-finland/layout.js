import siteUrl from "~/utils/siteUrl";

export const metadata = {
  title: "Ladder Service Finland | Marine Ladder Inspection & Maintenance",
  description: "Professional ladder service including pilot ladders, embarkation ladders, accommodation ladders inspection, and wire replacement in Finland.",
  alternates: {
    canonical: "/ladder-service-finland",
  },
  openGraph: {
    title: "Ladder Service Finland | Marine Ladder Inspection & Maintenance",
    description: "Professional ladder service including pilot ladders, embarkation ladders, accommodation ladders inspection, and wire replacement in Finland.",
    url: `${siteUrl}/ladder-service-finland`,
    images: [`${siteUrl}/main-assets/image/ladders.jpg`],
  },
};

export default function LadderServiceFinlandLayout({ children }) {
  return children;
}

