import siteUrl from "~/utils/siteUrl";

export const metadata = {
  title: "Crane Load Test Finland | Marine Crane Testing Services",
  description: "IACS approved crane load testing services up to 1200 tons in Finland. Dynamic load tests for cargo cranes, accommodation ladders, and lifting appliances.",
  alternates: {
    canonical: "/crane-load-test-finland",
  },
  openGraph: {
    title: "Crane Load Test Finland | Marine Crane Testing Services",
    description: "IACS approved crane load testing services up to 1200 tons in Finland. Dynamic load tests for cargo cranes, accommodation ladders, and lifting appliances.",
    url: `${siteUrl}/crane-load-test-finland`,
    images: [`${siteUrl}/main-assets/image/crane-load.jpeg`],
  },
};

export default function CraneLoadTestFinlandLayout({ children }) {
  return children;
}

