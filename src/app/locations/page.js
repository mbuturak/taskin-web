import Breadcumb from "~/sections/About/Breadcumb";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";
import Locations from "~/sections/Home-2/Locations";
import Contact from "~/sections/Home-2/Contact";
import Client from "~/sections/Home-5-op/Client/Client";

// Global CSS moved to app/layout.js for faster route transitions

export default function LocationsPage() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderFour />
            <Breadcumb title="LOCATIONS" bgImage="/main-assets/image/locations-bg.jpg" bgPosition="center 22%" />
            <Locations />
            <Client />
            <Contact />
            <FooterThree />
            <Scroll />
        </div>
    );
}
