import About from "~/sections/Home-2/About";
import Contact from "~/sections/Home-2/Contact";
import VideoHero from "~/sections/Home-2/VideoHero/VideoHero";
import Service from "~/sections/Home-2/Service";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import Locations from "~/sections/Home-2/Locations";
import Client from "~/sections/Home-5-op/Client/Client";


// Global CSS moved to app/layout.js for faster route transitions

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
    </div>
  );
}
