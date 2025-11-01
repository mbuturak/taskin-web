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

import Slider from "react-slick";

import Link from "next/link";
import Image from "next/image";


export default function ServicesPage() {

    const services = [
        {
            title: "FFE SERVICES",
            href: "/",
            img: [
                { src: "/main-assets/image/ffe2.jpg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/ffe-2.jpg", style: { objectPosition: "center 25%" } },
                { src: "/main-assets/image/ffe-3.jpg", style: { objectPosition: "center 35%" } },
                { src: "/main-assets/image/ffe-4.jpg", style: { objectPosition: "center 85%" } },
                { src: "/main-assets/image/ffe-7.jpg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/ffe-8.jpg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/ffe-9.jpg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/ffe-10.jpg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/ffe-11.jpg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/ffe-12.jpg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/ffe-13.jpg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/ffe-14.jpg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/ffe-15.jpg", style: { objectPosition: "center 25%" } },
            ],
            alt: "FFE Services",
            desc: "Complete marine firefighting packages, inspection of HP & LP Co2 systems, foam systems and foam concentrates analysis and supplies, portable foam applicators, alternative gas systems as Novec, FM200, Ansul, portable and stationery fire extinguishers, dry powder systems, humidity analysis, galley Co2 and deep fat fryer systems, smoke detection systems, fire alarm systems, gaseous fire suppression systems, fire detection systems, smoke and heat detection systems, accommodation and engine water mist systems, hydrostatic pressure testing and refilling of cylinders, 5-yearly, 10-yearly and 20-yearly inspections and repairs, internal valve inspections",
        },
        {
            title: "LSE SERVICES",
            href: "/",
            img: [
                { src: "/main-assets/image/lse.jpg", style: { objectPosition: "center 45%" } },
                { src: "/main-assets/image/lse-2.jpg", style: { objectPosition: "center 75%" } },
                { src: "/main-assets/image/lse-3.jpg", style: { objectPosition: "center 45%" } },
                { src: "/main-assets/image/lse-4.jpg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/lse-5.jpg", style: { objectPosition: "center 45%" } }
            ],
            alt: "LSE Services",
            desc:
                "Inspection of lifejackets, spare parts supply, immersion suits, breathing apparatus and compressor air analyses, Emergency Escape Breathing Apparatus (EEBD), hydrostatic testing of steel and composite cylinders, fireman suits, gastight chemical suits, full body harnesses",
        },
        {
            title: "LSA SERVICES",
            href: "/",
            img: [
                { src: "/main-assets/image/lsa.jpeg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/lsa-2.jpg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/lsa-3.jpg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/lsa-4.jpg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/lsa-5.jpg", style: { objectPosition: "center 95%" } },
                { src: "/main-assets/image/lsa-6.jpg", style: { objectPosition: "center 30%" } }
            ],
            alt: "LSA Services",
            desc:
                "Inspection of lifeboats, freefalls and rescue boats annually and 5-yearly, release hook inspection and services, wire replacements with multi-brand OEM and service provider approvals",
        },
        {
            title: "CALIBRATION SERVICES",
            href: "/",
            img: [
                { src: "/main-assets/image/calibration.jpg", style: { objectPosition: "center 30%" } },
                { src: "/main-assets/image/calibration-2.jpg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/calibration-3.jpg", style: { objectPosition: "center 51%" } },
                { src: "/main-assets/image/calibration-4.jpg", style: { objectPosition: "center 40%" } }
            ],
            alt: "Calibration Services",
            desc:
                "Inspection of portable and fixed gas detection systems, services and repairs, components renewal, sensors and parts supply, calibration gases, temperature gauges calibration, UTI calibration, ODME calibration, OWS (15 ppm) calibration, alcoholmeter calibration, analogue or digital pressure gauge calibrations, dynamometer calibrations, torque wrench calibrations, fire hoses, fire nozzles",
        },
        {
            title: "CRANE LOAD TEST",
            href: "/",
            img: [
                { src: "/main-assets/image/crane-load.jpeg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/crane-3.jpg", style: { objectPosition: "center 100%" } },
                { src: "/main-assets/image/crane-4.jpg", style: { objectPosition: "center 65%" } },
                { src: "/main-assets/image/crane-5.jpg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/crane-6.jpg", style: { objectPosition: "center 85%" } }
            ],
            alt: "Cargo Crane and Load Test",
            desc:
                "Dynamic load tests of cargo cranes, accommodation ladders, embarkation ladders, cargo hold hatches and other lifting appliances up to 1200 tons with fully IACS approved water bags / dynamometer and shackles",
        },
        {
            title: "MEDICAL OXYGEN",
            href: "/",
            img: [
                { src: "https://oxygenwallah.com/wp-content/uploads/elementor/thumbs/Add-a-heading-11-rbcovcg8p1aze36i99lu4chdisce3byaqw6c9cjct0.webp", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/medical-2.jpg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/medical-3.jpg", style: { objectPosition: "center 75%" } },
            ],
            alt: "Medical Oxygen",
            desc:
                "Inspection of portable and fixed medical oxygen sets, refilling and hydrotesting of medical oxygen cylinders"
        },
        {
            title: "LADDERS",
            href: "/",
            img: [
                { src: "/main-assets/image/ladders.jpg", style: { objectPosition: "center 100%" } },
                { src: "/main-assets/image/ladders-2.jpg", style: { objectPosition: "center 60%" } },
                { src: "/main-assets/image/ladders-3.jpg", style: { objectPosition: "center 75%" } }
            ],
            alt: "Ladder",
            desc: "Inspection of pilot ladders, embarkation ladders, accommodation ladders, wire replacement"
        }
    ];

    const sliderSettings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1500,
        dots: true,
        arrows: false,
    };

    return (
        <>
            <HeaderFour />
            <Breadcumb title="OUR SERVICES" bgImage="/main-assets/image/services-bg.jpg" />
            <div className="service-area-2 overflow-hidden shape-mockup-wrap background-image" style={{ backgroundImage: "url('/main-assets/img/bg/service-bg1-1.png')" }} id="service-sec">
                <div className="container" style={{ marginTop: '50px' }}>
                    {/* Full-width vertical cards with alternating image/text alignment */}
                    {services.map((item, index) => {
                        const images = Array.isArray(item.img) ? item.img : [item.img];
                        return (
                            <div key={item.title} className="service-card style2 mb-5" style={{ background: '#fff', borderRadius: '8px', padding: '24px', textAlign: 'justify' }}>
                                <div className="row align-items-center">
                                    {/* On even indexes (0-based), image left; on odd, image right */}
                                    <div className={`col-md-6 ${index % 2 === 1 ? 'order-md-2' : ''}`}>
                                        {images.length > 1 ? (
                                            <Slider {...sliderSettings}>
                                                {images.map((imgItem, i) => (
                                                    <div key={`${item.title}-img-${i}`}>
                                                        <Image
                                                            src={typeof imgItem === 'string' ? imgItem : imgItem.src}
                                                            alt={`${item.alt}`}
                                                            width={1200}
                                                            height={360}
                                                            unoptimized={(typeof imgItem === 'string' ? imgItem : imgItem.src).startsWith('http')}
                                                            style={{
                                                                width: '100%',
                                                                height: '360px',
                                                                objectFit: 'cover',
                                                                borderRadius: '8px',
                                                                display: 'block',
                                                                ...item.style,
                                                                ...(typeof imgItem === 'object' && imgItem.style ? imgItem.style : {})
                                                            }}
                                                        />
                                                    </div>
                                                ))}
                                            </Slider>
                                        ) : (
                                            <Image
                                                src={typeof images[0] === 'string' ? images[0] : images[0].src}
                                                alt={`${item.alt}`}
                                                width={1200}
                                                height={360}
                                                unoptimized={(typeof images[0] === 'string' ? images[0] : images[0].src).startsWith('http')}
                                                style={{
                                                    width: '100%',
                                                    height: '360px',
                                                    objectFit: 'cover',
                                                    borderRadius: '8px',
                                                    display: 'block',
                                                    ...item.style,
                                                    ...(typeof images[0] === 'object' && images[0].style ? images[0].style : {})
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className={`col-md-6 ${index % 2 === 1 ? 'order-md-1' : ''}`}>
                                        <div className="service-card_content" style={{ padding: '16px 8px', textAlign: 'justify' }}>
                                            <h4 className="service-card_title" style={{ marginTop: 0, marginBottom: '12px' }}>
                                                <Link href={item.href}>{item.title}</Link>
                                            </h4>
                                            <div className="service-card_text" style={{ marginBottom: 0, textAlign: 'justify' }}>
                                                {item.desc}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

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
