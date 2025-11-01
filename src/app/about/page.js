import Breadcumb from "~/sections/About/Breadcumb";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";

// Global CSS moved to app/layout.js for faster route transitions

import Image from "next/image";

export default function AboutPage() {
    const kemalBoxHeight = 580;
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderFour />
            <Breadcumb title="ABOUT US" bgImage="/main-assets/image/about-bg.jpg" />
            <div className="about-area-2 space-top overflow-hidden no-anim-bar">
                <div className="container">
                    <div className="row gx-60 align-items-center flex-row-reverse">
                        <div className="col-xl-6">
                            <div className="about-thumb2 mb-60 mb-xl-0">
                                <div className="about-img-1">
                                    {/* Next.js Image for optimization */}
                                    <Image src="/main-assets/image/about.jpg" alt="About us" width={1200} height={800} priority />
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="title-area mb-25">
                                <h2 className="sec-title">
                                    Your Safety, Our Priority
                                </h2>
                                <p className="sec-text about-desc" style={{ lineHeight: '1.5', textAlign: 'justify' }}>
                                    We are a dedicated company, specializing in inspection, maintenance, and calibration services for marine safety equipment. Our team is committed to delivering fast, regulation-compliant service with a focus on operational reliability and environmental responsibility.

                                    Our Head Office in Rotterdam, Netherlands, we have fully operational branches in Finland, Germany and USA. With our dynamic team, we provide services in over 60 ports across Europe, the Baltics, the U.S., and more.

                                    We offer the following services across these regions without restrictions:
                                    <br />
                                    <br />
                                    •	FFE & LSA inspections (Annual, Biennial, 5-yearly, 10-yearly)
                                    <br />
                                    •	Lifeboat & Davit services (MSC.402(96) compliant)
                                    <br />
                                    •	Calibration Services (Portable , Fixed, ODME, OWS and etc)
                                    <br />
                                    •	Crane load testing (up to 1200 tons)
                                    <br />
                                    •	Marine safety equipment supply
                                    <br />
                                    <br />

                                    We also operate an in-house training and testing facility, where our engineers undergo continuous technical training to stay ahead of evolving regulations and client expectations.

                                    Task-in Services is approved by major class societies such as ABS, BV, DNV, NK RINA, LR, and KR, and authorized by leading flag states including Panama, The Netherlands, Liberia, and Bahamas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">   <hr style={{ border: '0.5px dotted #000', margin: '20px 0' }} /> </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap', padding: '20px 0' }}>
                        <div style={{ flex: '1 1 520px', maxWidth: '800px' }}>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', height: kemalBoxHeight }}>
                                <Image src="/main-assets/image/ceo.jpg" alt="About us" width={1200} height={800} priority style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div style={{ flex: '1 1 520px', maxWidth: '800px' }}>
                            <div style={{ background: '#fff', padding: '20px 24px', borderRadius: '12px', height: kemalBoxHeight, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
                                <h2 style={{ fontSize: '32px', lineHeight: 1.2, margin: '0 0 14px 0', fontWeight: 600 }}>Our Director</h2>
                                <p style={{ lineHeight: 1.5, textAlign: 'justify', margin: 0 }}>
                                    Kemal Taşkın is the Director and Founder of Task-in Services, established in 2021 in the Netherlands. He is an accomplished Marine Engineer with extensive expertise in ship machinery operations, safety systems, and technical maintenance.
                                    <br />
                                    <br />
                                    Graduating from Istanbul Technical University’s Faculty of Maritime – Marine Engineering Department, Kemal began his career at sea, serving for several years as a ship engineer. This experience provided him with in-depth practical knowledge of engine room operations, mechanical systems, and onboard safety management.
                                    <br />
                                    <br />
                                    Since founding Task-in Services, Kemal has led the company’s development into a trusted provider of marine and industrial safety solutions across Europe and the United States. The company delivers comprehensive inspection, maintenance, and certification services for life-saving and fire-fighting equipment, ensuring reliability, compliance, and operational safety for a wide range of clients.
                                    <br />
                                    <br />
                                    Recognized for his hands-on leadership and commitment to quality, Kemal brings together strong technical insight with real-world experience to achieve consistent, high results. Outside of his professional endeavors, he is a devoted father of three, balancing his family life with a deep dedication to excellence and safety in every aspect of his work.
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
