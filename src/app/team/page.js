"use client";
import Link from "next/link";
import Image from "next/image";
import Breadcumb from "~/sections/About/Breadcumb";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";
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

export default function TeamPage() {

    const teams = [
        {
            name: "Martijn,",
            position: "Sales Representative",
            image: "/main-assets/image/JMartijn.jpg",
            description: `I joined Task-in Services in June 2023, working from our Rotterdam headquarters. 
                        My focus is on helping customers find practical solutions and keeping communication clear and friendly across time zones. 
                        By staying in close contact with coordinators and technicians, I make sure requests are handled efficiently and that the process 
                        from quotation to service runs smoothly. Many of my colleagues are former Chief Engineers, Captains, Chief Officers, or DPAs, whose experience 
                        makes it easy to learn and solve things quickly. They are like walking libraries, always ready to share their knowledge and help find the right solution.`,
            style: {
                width: '100%',
                height: '600px',
                objectFit: 'cover',
                backgroundColor: '#f8f9fa',
                padding: '0',
                borderRadius: '8px',
            },
        },
    ];


    return (
        <>
            <HeaderFour />
            <Breadcumb title="MEET OUR TEAM"  bgImage="/main-assets/image/contacus2.jpg" bgPosition="center 70%"  />
            <div className="container">
                <div className="row justify-content-center">   
                    <div className="col-12">
                        <div className="title-area mb-60 text-center" style={{ marginTop: '50px' }}>
                            <p className="sec-text" style={{ lineHeight: '1.5', textAlign: 'center' }}>
                            At Task-in, everyone has a role in keeping people safe. Whether you work in sales, service, logistics, engineering, or 
                            the office, we all come together with one goal – protecting lives around the world.
                            A career here means joining an interdisciplinary team, learning new things every day, and doing work that genuinely matters. 
                            From making sure safety equipment is always ready to helping customers wherever they are, every role gives you the chance to grow and make a real difference.
                            Meet some of our amazing colleagues and get a glimpse of what it’s like to be part of the Task-in family.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-area-2 overflow-hidden shape-mockup-wrap background-image" id="service-sec">

                <div className="container">
                    {/* Full-width vertical cards with alternating image/text alignment */}
                    {teams.map((item, index) => (
                        <div key={item.name} className="service-card style2 mb-5" style={{ background: '#fff', borderRadius: '8px', padding: '10px', marginTop: '25px' }}>
                            <div className="row align-items-start">
                                {/* Image always on the left */}
                                <div className="col-md-8">
                                    <Image
                                        src={item.image || "/main-assets/image/logo.svg"}
                                        alt={item.name}
                                        width={1000}
                                        height={1000}
                                        style={{ 
                                            width: '100%', 
                                            objectFit: item.image ? 'cover' : 'contain', 
                                            backgroundColor: '#f8f9fa',
                                            padding: item.image ? '0' : '20px',
                                            borderRadius: '8px', 
                                            display: 'block', 
                                            ...item.style 
                                        }}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <div className="service-card_content" style={{ padding: '16px 8px', width: '100%' }}>
                                        <h4 className="service-card_title" style={{ marginTop: 0, marginBottom: '12px' }}>
                                            <Link href={item.name}>{item.name} {item.position}</Link>
                                        </h4>
                                        <div className="service-card_text" style={{ marginBottom: 0, width: '100%', textAlign: 'justify', lineHeight: '1.6' }}>
                                            <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <Client />
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
