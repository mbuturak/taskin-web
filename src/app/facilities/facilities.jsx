'use client';
import Link from "next/link";
import Slider from "react-slick";
import React, { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Image from 'next/image';

const Facilities = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const images = [
        { imgSrc: "/main-assets/image/f1.jpg" },
        { imgSrc: "/main-assets/image/f2.jpg" },
        { imgSrc: "/main-assets/image/f3.jpg" },
        { imgSrc: "/main-assets/image/f4.jpg" },
        { imgSrc: "/main-assets/image/f5.jpg" },
        { imgSrc: "/main-assets/image/f6.jpg" },
        { imgSrc: "/main-assets/image/f7.jpg" },
        { imgSrc: "/main-assets/image/f8.jpg" }
    ];

    const certifications = [
        {
            title: "Task-In - LR ISO23678 Certificate",
            image: "/main-assets/image/lloyd.svg",
            document: "/main-assets/docs/Task-In - LR ISO23678 Certificate.pdf"
        }

    ]

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1500,
        dots: true,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                /* Daha görünür bir ok için boyut, kontrast, gölge ve katman iyileştirmeleri */
                style={{
                    ...style,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.7)",
                    color: "#fff",
                    position: "absolute",
                    right: 20,
                    top: "45%",
                    transform: "translateY(-50%)",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
                    zIndex: 5,
                    border: "1px solid rgba(255,255,255,0.25)",
                    cursor: "pointer"
                }}
                onClick={onClick}
            >
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-prev-arrow`}
                /* Daha görünür bir ok için boyut, kontrast, gölge ve katman iyileştirmeleri */
                style={{
                    ...style,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.7)",
                    color: "#fff",
                    position: "absolute",
                    left: 20,
                    top: "58%",
                    transform: "translateY(-50%)",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
                    zIndex: 5,
                    border: "1px solid rgba(255,255,255,0.25)",
                    cursor: "pointer",
                }}
                onClick={onClick}
            >
            </div>
        );
    }

    return (
        <div className="portfolio-area-2 space" id="project-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title-area portfolio-area-content-text-extra-style text-center">
                            <p className="sec-text">Task-in Services has own training center with Loyd Register certificate as academy to train his own Service Engineers (Task-In - LR ISO23678 Certificate). This provides ship management with full confidence that a single company supports all makers and covers all types of their equipment.</p>
                        </div>
                        <section className="blog-area space-extra-bottom">
                            <div className="container">
                                <div className="row gy-4 justify-content-center">
                                    {certifications.map((certification, index) => (
                                        <div className="col-md-6 col-lg-4" key={index}>
                                            <div className="blog-card" style={{ cursor: "pointer" }} onClick={() => window.open(certification.document, '_blank')}>
                                                <div style={{ textAlign: "center", marginBottom: "8px", height: "90px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    <Image src={certification.image || "/main-assets/image/logo.svg"} alt="certification image" width={250} height={90} style={{ maxWidth: "250px", maxHeight: "90px", width: "auto", height: "auto", display: "inline-block", objectFit: "contain" }} />
                                                </div>
                                                <div className="blog-content" style={{ textAlign: "center", padding: "0 5px" }}>
                                                    <h3 className="blog-title" style={{ fontSize: "16px", marginTop: "0", marginBottom: "0" }}>
                                                        {certification.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="portfolio-slider2 overflow-hidden" style={{ position: "relative" }}>
                    <Slider {...settings} className="row gy-30 gx-30 global-carousel slider-shadow slick-initialized slick-slider">
                        {images.map((img, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className="portfolio-card style2">
                                    <div className="portfolio-card-thumb">
                                        {/* Tüm görseller için sabit yükseklik vererek slider yüksekliğini eşitliyoruz */}
                                        <Image src={img.imgSrc} alt={`project-${index + 1}`} width={800} height={480} style={{ width: "100%", height: 480, objectFit: "cover", display: "block" }} />
                                        <span className="portfolio-card-number">{`0${index + 1}`}</span>
                                        <button className="icon-btn popup-image" onClick={() => openLightbox(index)}>
                                            <i className="ri-eye-line"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <style jsx global>{`
                        /* Prev arrow konumunu zorla (slider CSS'sini bastır) */
                        .portfolio-slider2 .custom-prev-arrow { left: 24px !important; }
                    `}</style>
                </div>
            </div>
            <div className="extra-style">
                {lightboxOpen && (
                    <Lightbox
                        mainSrc={images[lightboxIndex].imgSrc}
                        nextSrc={images[(lightboxIndex + 1) % images.length].imgSrc}
                        prevSrc={images[(lightboxIndex + images.length - 1) % images.length].imgSrc}
                        onCloseRequest={() => setLightboxOpen(false)}
                        onMovePrevRequest={() =>
                            setLightboxIndex((lightboxIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setLightboxIndex((lightboxIndex + 1) % images.length)
                        }
                    />
                )}
            </div>
        </div>
    );
};

export default Facilities;
