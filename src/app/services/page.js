"use client";
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

import Link from "next/link";

export default function ServicesPage() {
    const services = [
        {
            title: "FFE SERVICES",
            href: "/",
            img: "/main-assets/image/ffe2.jpg",
            alt: "FFE Services",
            desc: "Complete marine firefighting packages, service of HP & LP Co2 systems, foam systems and foam concentrates analysis and supplies, portable foam applicators, alternative gas systems as Novec, FM200, Ansul servicing and inspection, portable and stationery fire extinguishers, dry powder systems, humidity analysis, galley Co2 and deep fat fryer systems, smoke detection systems, fire alarm systems, gaseous fire suppression systems, fire detection systems, smoke and heat detection systems, accommodation and engine water mist systems, hydrostatic pressure testing and refilling of cylinders, 5-yearly, 10-yearly and 20-yearly inspections and repairs, internal valve inspections",
            style: {
                objectPosition: 'center 70%'
            },
        },
        {
            title: "LSE SERVICES",
            href: "/",
            img: "/main-assets/image/lse.jpg",
            alt: "LSE Services",
            desc:
                "Lifejackets inspections and services, spare parts supply, immersion suits inspections and repairs, breathing apparatus services and air analyses, air compressors inspections and services, Emergency Escape Breathing Apparatus (EEBD) inspections and services, hydrostatic testing of steel and composite cylinders, inspection and supply of fireman suits, inspection and service of gastight chemical suits, inspection and supply of full body harnesses",
            style: {
               objectPosition: 'center 45%'
            },
        },
        {
            title: "LSA SERVICES",
            href: "/",
            img: "/main-assets/image/lsa.jpeg",
            alt: "LSA Services",
            desc:
                "Lifeboats, freefalls and rescue boats annual, 5-yearly inspections and services, release hook inspection and services, wire replacements with multi-brand OEM and service provider approvals",
            style: {
                width: '100%',
                height: '360px',
                objectFit: 'cover',
                borderRadius: '8px',
                display: 'block'
            },
        },
        {
            title: "CALIBRATION SERVICES",
            href: "/",
            img: "/main-assets/image/calibration.jpg",
            alt: "Calibration Services",
            desc:
                "Portable and fixed gas detection system inspection, services and repairs, components renewal, sensors and parts supply, calibration gases, temperature gauges calibration, UTI calibration, ODME calibration, OWS (15 ppm) calibration, alcoholmeter calibration, analogue or digital pressure gauge calibrations, dynamometer calibrations, torque wrench calibrations, fire hoses, fire nozzles, ",
            style: {
                width: '100%',
                height: '360px',
                objectFit: 'cover',
                borderRadius: '8px',
                display: 'block'
            },
        },
        {
            title: "CRANE LOAD TEST",
            href: "/",
            img: "/main-assets/image/crane-load.jpeg",
            alt: "Cargo Crane and Load Test",
            desc:
                "Dynamic load tests of cargo cranes, accommodation ladders, embarkation ladders, cargo hold hatches and other lifting appliances with fully IACS approved water bags/dynamometer and shackles. We maintain one of the largest stocks of water bags and dynamometers in Europe, with capacities up to 1,500 tons. Our load test team and equipment are considered a lifesaver by many heavy-lift crane operators. We can ship any load testing materials within 24 hours to the designated location. Leading companies such as SAL and the H&P Group rely on our services and have expressed high satisfaction with our performance.",
            style: {
                width: '100%',
                height: '360px',
                objectFit: 'cover',
                borderRadius: '8px',
                display: 'block'
            },
        },
        {
            title: "MEDICAL OXYGEN",
            href: "/",
            img: "https://oxygenwallah.com/wp-content/uploads/elementor/thumbs/Add-a-heading-11-rbcovcg8p1aze36i99lu4chdisce3byaqw6c9cjct0.webp",
            alt: "Medical Oxygen",
            desc:
                "Inspection of portable and fixed medical oxygen sets, refilling and hydrotesting of medical oxygen cylinders",
            style: {
                width: '100%',
                height: '360px',
                objectFit: 'cover',
                borderRadius: '8px',
                display: 'block'
            },
        },
        {
            title: "LADDERS",
            href: "/",
            img: "/main-assets/image/ladders.jpg",
            alt: "Ladder",
            desc: "Inspection of pilot ladders, embarkation ladders, accommodation ladders, wire replacement",
            style: {
                objectPosition: 'center 100%'
            },
        }
    ];

    return (
        <>
            <HeaderFour />
            <Breadcumb title="OUR SERVICES" bgImage="/main-assets/image/services-bg.jpg" />
            <div className="service-area-2 overflow-hidden shape-mockup-wrap background-image" style={{ backgroundImage: "url('/main-assets/img/bg/service-bg1-1.png')" }} id="service-sec">
                <div className="container" style={{ marginTop: '50px' }}>
                    {/* Full-width vertical cards with alternating image/text alignment */}
                    {services.map((item, index) => (
                        <div key={item.title} className="service-card style2 mb-5" style={{ background: '#fff', borderRadius: '8px', padding: '24px', textAlign: 'justify' }}>
                            <div className="row align-items-center">
                                {/* On even indexes (0-based), image left; on odd, image right */}
                                <div className={`col-md-6 ${index % 2 === 1 ? 'order-md-2' : ''}`}>
                                    <img
                                        src={item.img}
                                        alt={item.alt}
                                        style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '8px', display: 'block', ...item.style }}
                                    />
                                </div>
                                <div className={`col-md-6 ${index % 2 === 1 ? 'order-md-1' : ''}`}>
                                    <div className="service-card_content" style={{ padding: '16px 8px', textAlign: 'justify' }}>
                                        <h4 className="service-card_title" style={{ marginTop: 0, marginBottom: '12px' }}>
                                            <Link href={item.href}>{item.title}</Link>
                                        </h4>
                                        <p className="service-card_text" style={{ marginBottom: 0, textAlign: 'justify' }}>
                                            <div dangerouslySetInnerHTML={{ __html: item.desc }} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <FooterThree />
            <Scroll />
            {/* Override theme hover that turns text white on cards */}
            <style jsx global>{`
                .service-card.style2 .service-card_title a { color: #0F172A !important; text-decoration: none; }
                .service-card.style2 .service-card_text { color: #6B7280 !important; }
                .service-card.style2:hover .service-card_title a { color: #0F172A !important; }
                .service-card.style2:hover .service-card_text { color: #6B7280 !important; }
            `}</style>
        </>
    );
}
