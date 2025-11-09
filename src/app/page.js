import About from "~/sections/Home-2/About";
import Contact from "~/sections/Home-2/Contact";
import VideoHero from "~/sections/Home-2/VideoHero/VideoHero";
import Service from "~/sections/Home-2/Service";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import Locations from "~/sections/Home-2/Locations";
import Client from "~/sections/Home-5-op/Client/Client";
import { SpeedInsights } from "@vercel/speed-insights/next"


import "~/public/landing-assets/css/animate.css";
import "~/public/landing-assets/css/font-awesome.min.css";
import "~/public/landing-assets/css/mfp.min.css";
import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/react-adjustment.css";
import "~/public/main-assets/css/remixicon.css";
import "~/public/main-assets/css/slick.min.css";

// Slick carousel CSS (ServiceTwo için gerekli)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <HeaderFour />
      <VideoHero />
      <About />
      <Service />
      <Client />
      <Locations />
      <Contact />
      <FooterThree />
      <Scroll />
      <SpeedInsights />
    </div>
  );
}
