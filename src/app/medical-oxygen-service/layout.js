import siteUrl from "~/utils/siteUrl";

export const metadata = {
  title: "Medical Oxygen Service | Marine Medical Oxygen Services",
  description: "Professional medical oxygen service including inspection, refilling, and hydrotesting of medical oxygen cylinders for marine vessels.",
  alternates: {
    canonical: "/medical-oxygen-service",
  },
  openGraph: {
    title: "Medical Oxygen Service | Marine Medical Oxygen Services",
    description: "Professional medical oxygen service including inspection, refilling, and hydrotesting of medical oxygen cylinders for marine vessels.",
    url: `${siteUrl}/medical-oxygen-service`,
    images: [`${siteUrl}/main-assets/image/medical-2.jpg`],
  },
};

export default function MedicalOxygenServiceLayout({ children }) {
  return children;
}
