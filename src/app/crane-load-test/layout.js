import siteUrl from "~/utils/siteUrl";

export const metadata = {
  title: "Crane Load Test | Marine Crane Testing Services",
  description: "IACS approved crane load testing services up to 1200 tons. Dynamic load tests for cargo cranes, accommodation ladders, and lifting appliances.",
  alternates: {
    canonical: "/crane-load-test",
  },
  openGraph: {
    title: "Crane Load Test | Marine Crane Testing Services",
    description: "IACS approved crane load testing services up to 1200 tons. Dynamic load tests for cargo cranes, accommodation ladders, and lifting appliances.",
    url: `${siteUrl}/crane-load-test`,
    images: [`${siteUrl}/main-assets/image/crane-load.jpeg`],
  },
};

export default function CraneLoadTestLayout({ children }) {
  return children;
}
