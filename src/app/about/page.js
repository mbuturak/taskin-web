import Breadcumb from "~/sections/About/Breadcumb";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";

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

import Image from "next/image";

export default function AboutPage() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderFour />
            <Breadcumb title="ABOUT US" bgImage="/main-assets/image/about-bg.jpg" />
            <div className="about-area-2 space-top overflow-hidden">
                <div className="container">
                    <div className="row gx-60 align-items-center flex-row-reverse">
                        <div className="col-xl-6">
                            <div className="about-thumb2 mb-60 mb-xl-0">
                                <div className="about-img-1">
                                    {/* Next.js Image for optimization */}
                                    <Image src="/main-assets/image/About-us.jpeg" alt="About us" width={1200} height={800} priority />
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="title-area mb-25">
                                <h2 className="sec-title">
                                    Your Safety, Our Priority
                                </h2>
                                <p className="sec-text" style={{ lineHeight: '1.5',textAlign: 'justify' }}>
                                    We are a dedicated company, specializing in inspection, maintenance, and calibration services for marine safety equipment. Our team is committed to delivering fast, regulation-compliant service with a focus on operational reliability and environmental responsibility.

                                    Our Head Office in Rotterdam, Netherlands, we have fully operational branches in Finland, Germany and USA. With our dynamic team, we provide services in over 60 ports across Europe, the Baltics, the U.S., and more.

                                    We offer the following services across these regions without restrictions:
                                    <br/>
                                    <br/>
                                    •	FFE & LSA inspections (Annual, Biennial, 5-yearly, 10-yearly)
                                    <br/>
                                    •	Lifeboat & Davit services (MSC.402(96) compliant)
                                    <br/>
                                    •	Calibration Services (Portable , Fixed, ODME, OWS and etc)
                                    <br/>
                                    •	Crane load testing (up to 12000 tons)
                                    <br/>
                                    •	Marine safety equipment supply
                                    <br/>
                                    <br/>

                                    We also operate an in-house training and testing facility, where our engineers undergo continuous technical training to stay ahead of evolving regulations and client expectations.

                                    Task-in Services is approved by major class societies such as ABS, BV, DNV, NK RINA, LR, and KR, and authorized by leading flag states including Panama, The Netherlands, Liberia, and Bahamas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterThree />
            <Scroll />
        </div>
    );
}
