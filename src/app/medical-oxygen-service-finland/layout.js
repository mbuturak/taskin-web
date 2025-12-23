import siteUrl from "~/utils/siteUrl";

export const metadata = {
  title: "Medical Oxygen Service Finland | Marine Medical Oxygen Services",
  description: "Professional medical oxygen service including inspection, refilling, and hydrotesting of medical oxygen cylinders for marine vessels in Finland.",
  alternates: {
    canonical: "/medical-oxygen-service-finland",
  },
  openGraph: {
    title: "Medical Oxygen Service Finland | Marine Medical Oxygen Services",
    description: "Professional medical oxygen service including inspection, refilling, and hydrotesting of medical oxygen cylinders for marine vessels in Finland.",
    url: `${siteUrl}/medical-oxygen-service-finland`,
    images: [`${siteUrl}/main-assets/image/medical-2.jpg`],
  },
};

export default function MedicalOxygenServiceFinlandLayout({ children }) {
  return children;
}

