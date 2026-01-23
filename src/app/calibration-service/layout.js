import siteUrl from "~/utils/siteUrl";

export const metadata = {
  title: "Calibration Service | Marine Equipment Calibration",
  description: "Professional calibration services for gas detection systems, pressure gauges, temperature sensors, ODME, OWS, and marine equipment.",
  alternates: {
    canonical: "/calibration-service",
  },
  openGraph: {
    title: "Calibration Service | Marine Equipment Calibration",
    description: "Professional calibration services for gas detection systems, pressure gauges, temperature sensors, ODME, OWS, and marine equipment.",
    url: `${siteUrl}/calibration-service`,
    images: [`${siteUrl}/main-assets/image/calibration.jpg`],
  },
};

export default function CalibrationServiceLayout({ children }) {
  return children;
}
