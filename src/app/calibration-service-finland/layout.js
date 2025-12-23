import siteUrl from "~/utils/siteUrl";

export const metadata = {
  title: "Calibration Service Finland | Marine Equipment Calibration",
  description: "Professional calibration services for gas detection systems, pressure gauges, temperature sensors, ODME, OWS, and marine equipment in Finland.",
  alternates: {
    canonical: "/calibration-service-finland",
  },
  openGraph: {
    title: "Calibration Service Finland | Marine Equipment Calibration",
    description: "Professional calibration services for gas detection systems, pressure gauges, temperature sensors, ODME, OWS, and marine equipment in Finland.",
    url: `${siteUrl}/calibration-service-finland`,
    images: [`${siteUrl}/main-assets/image/calibration.jpg`],
  },
};

export default function CalibrationServiceFinlandLayout({ children }) {
  return children;
}

