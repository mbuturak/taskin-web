"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Client = () => {
    // Slick carousel ayarları
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
        arrows: false,
        centerMode: false,
        variableWidth: false,
        adaptiveHeight: true,
        cssEase: "linear",
        swipeToSlide: true,
        touchMove: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                }
            }
        ]
    };

    // Logo verileri
    const logos = [
        { src: "/main-assets/image/abs.svg", alt: "ABS", width: 175, height: 100, href: "https://ww2.eagle.org/en.html" },
        { src: "/main-assets/image/bureau-veritas.svg", alt: "Bureau Veritas", width: 100, height: 100, href: "https://group.bureauveritas.com/" },
        { src: "/main-assets/image/ccs.png", alt: "CCS", width: 175, height: 100, href: "https://www.ccs.org.cn/ccswzen/" },
        { src: "/main-assets/image/dnv.svg", alt: "DNV", width: 175, height: 100, href: "https://www.dnv.com/" },
        { src: "/main-assets/image/germanischer-lloyd.svg", alt: "Germanischer Lloyd", width: 100, height: 100, href: "/" },
        { src: "/main-assets/image/lloyd.svg", alt: "Lloyd's Register", width: 100, height: 100, href: "https://www.lr.org/en/" },
        { src: "/main-assets/image/rina.svg", alt: "RINA", width: 160, height: 100, href: "https://www.rina.org/en" },
        { src: "/main-assets/image/classnk.jpeg", alt: "ClassNK", width: 175, height: 100, href: "https://www.classnk.or.jp/hp/en/index.html" },
        { src: "/main-assets/image/kr.png", alt: "Korean Register", width: 175, height: 100, href: "https://www.krs.co.kr/eng/"  },
        { src: "/main-assets/image/rms.png", alt: "RMS", width: 135, height: 100, href: "https://rs-class.org/en/" },
        { src: "/main-assets/image/drager.svg", alt: "Drager", width: 135, height: 100, href: "https://www.draeger.com/en_neeur/Home" },
        { src: "/main-assets/image/3mscot.svg", alt: "3MScot", width: 200, height: 150, href: "https://www.3m.com/" },
        { src: "/main-assets/image/mobiak.jpg", alt: "MobiAk", width: 200, height: 150, href: "https://www.mobiakfire.com/" },
        { src: "/main-assets/image/rk.svg", alt: "RK", width: 200, height: 150, href: "https://www.rikenkeiki.co.jp/english" },
        { src: "/main-assets/image/shf.webp", alt: "SHF", width: 200, height: 150, href: "https://shfangzhan.com/" },
        { src: "/main-assets/image/shipserv.jpeg", alt: "Shipserv", width: 200, height: 150, href: "https://www.shipserv.com/" },
        { src: "/main-assets/image/msa.jpg", alt: "MSA", width: 200, height: 150, href: "https://www.msasafety.com/global" },
    ];

    return (
        <div className="client-area-1 text-center space bg-title overflow-hidden">
            <div className="container">
                <Slider {...settings} className="row global-carousel client-slider1">
                    {logos.map((logo, index) => (
                        <div key={index}>
                            <div className="client-logo" style={{ 
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                height: '100px',
                                padding: '10px'
                            }}>
                                <Link href={logo.href} target="_blank" rel="noopener noreferrer">
                                    <img 
                                        src={logo.src} 
                                        width={logo.width} 
                                        height={logo.height} 
                                        alt={logo.alt}
                                        style={{ 
                                            maxWidth: '100%', 
                                            maxHeight: '200px',
                                            width: 'auto',
                                            height: 'auto',
                                            objectFit: 'contain',
                                            display: 'block',
                                            backgroundColor: 'transparent',
                                            minHeight: '60px',
                                            minWidth: '80px'
                                        }}
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Client;