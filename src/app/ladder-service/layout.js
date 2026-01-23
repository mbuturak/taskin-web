import siteUrl from "~/utils/siteUrl";

export const metadata = {
  title: "Ladder Service | Marine Ladder Inspection & Maintenance",
  description: "Professional ladder service including pilot ladders, embarkation ladders, accommodation ladders inspection, and wire replacement.",
  alternates: {
    canonical: "/ladder-service",
  },
  openGraph: {
    title: "Ladder Service | Marine Ladder Inspection & Maintenance",
    description: "Professional ladder service including pilot ladders, embarkation ladders, accommodation ladders inspection, and wire replacement.",
    url: `${siteUrl}/ladder-service`,
    images: [`${siteUrl}/main-assets/image/ladders.jpg`],
  },
};

export default function LadderServiceLayout({ children }) {
  return children;
}
