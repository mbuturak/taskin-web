"use client";
import Link from "next/link";
import Image from "next/image";
import Breadcumb from "~/sections/About/Breadcumb";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";
import Client from "~/sections/Home-5-op/Client/Client";


// Global CSS moved to app/layout.js for faster route transitions

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
        {
            name: "Ceren,",
            position: "Sales Executive",
            image: "/main-assets/image/ceren.jpg",
            description: `I joined Task-in Services in 2022. With a Master’s degree in International Relations from Portugal, I enjoy working in multicultural environments and finding flexible and practical solutions for our customers.
                            At Task-in Services, I focus on clear and friendly communication to make sure every request runs smoothly from start to finish. Growing up in a family that values safety at sea gave me a strong understanding of how important our work is, not only for operations but also for protecting lives. I am proud to be part of a supportive team that values flexibility, teamwork, and doing things the right way.
                            `,
            style: {
                width: '100%',
                height: '600px',
                objectFit: 'cover',
                backgroundColor: '#f8f9fa',
                padding: '0',
                borderRadius: '8px',
                objectPosition: 'center 58%',
            },
        },
        {
            name: "Turab,",
            position: "Accounting",
            image: "/main-assets/image/turab.jpg",
            description: `I joined Task-in Services in 2023. With a background in System Engineering and Master’s degrees in Human Resources Management and Occupational Health and Safety, I focus on creating safe, efficient, and people-centered workplaces. My experience in both the military and private sectors has helped me develop a structured and solution-oriented mindset that fits well within our operations.

At Task-in Services, I concentrate on maintaining clear communication, supporting our teams, and ensuring that every process meets the highest safety standards. I truly value the cooperative atmosphere we have and take pride in being part of a company that places people, quality, and safety at the core of everything we do.`,
            style: {
                width: '100%',
                height: '600px',
                objectFit: 'cover',
                backgroundColor: '#f8f9fa',
                padding: '0',
                borderRadius: '8px',
                objectPosition: 'center 40%',
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
                                <div className="col-md-8 team-image-col">
                                    <Image
                                        src={item.image || "/main-assets/image/logo.svg"}
                                        alt={item.name}
                                        width={1000}
                                        height={1000}
                                        className="team-card-img"
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
                /* Center image column and image on small screens */
                @media (max-width: 575px) {
                  .team-image-col { display: flex; justify-content: center; }
                  .team-card-img { height: auto !important; max-width: 100%; margin: 0 auto; }
                }
            `}</style>
        </>
    );
}
