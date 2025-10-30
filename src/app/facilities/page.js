import Breadcumb from "~/sections/About/Breadcumb";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";
import Facilities from "./facilities";
import Client from "~/sections/Home-5-op/Client/Client";


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

export default function AboutPage() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderFour />
            <Breadcumb title="TRAINING CENTER" bgImage="/main-assets/image/about-bg.jpg" />
            <Facilities />
            <Client />
            <FooterThree />
            <Scroll />
        </div>
    );
}
