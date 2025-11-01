import Breadcumb from "~/sections/About/Breadcumb";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";
import Facilities from "./facilities";
import Client from "~/sections/Home-5-op/Client/Client";


// Global CSS moved to app/layout.js for faster route transitions

export default function AboutPage() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderFour />
            <Breadcumb title="TRAINING CENTER" bgImage="/main-assets/image/tc.jpg" bgPosition="center 71%"/>
            <Facilities />
            <Client />
            <FooterThree />
            <Scroll />
        </div>
    );
}
