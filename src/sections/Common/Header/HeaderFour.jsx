"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MultiPageMobileMenu from "../MultiPageMobileMenu/MultiPageMobileMenu";
import Image from "next/image";

const HeaderFour = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(0); // Track viewport width for responsive slogan
    const sidebarRef = useRef(null);
    
    // When header becomes sticky, center the logo vertically
    const headerLogoStyle = isSticky
        ? { position: 'absolute', top: '50%', transform: 'translateY(-50%)', bottom: 'auto' }
        : undefined;


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Keep viewport width in state to adjust slogan size responsively
    useEffect(() => {
        const updateWidth = () => setViewportWidth(window.innerWidth);
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    // Determine slogan image size per breakpoints; keep aspect ratio of original 385x50
    const computeSloganWidth = () => {
        if (viewportWidth < 576) return 330;
        if (viewportWidth < 768) return 250;
        if (viewportWidth < 992) return 320;
        return 385;
    };
    
    const sloganWidth = computeSloganWidth();
    const sloganHeight = Math.round(sloganWidth * 50 / 385);
    const sloganRight = viewportWidth < 576 ? 0 : 20;


    const handleMobileMenuOpen = () => {
        setIsMenuOpen(true);
    }
   

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSideBarOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebarRef]);

    return (
        <div>
            <MultiPageMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <header className="nav-header header-layout2">
                <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`} style={{ paddingTop: '0', paddingBottom: '0' }}>
                    {/* Main Menu Area */}
                    <div className="menu-area" style={{ position: 'relative', padding: '15px 0' }}>
                        {/* Keep logo centered vertically in sticky state */}
                        <div className="header-navbar-logo d-none d-lg-block" style={headerLogoStyle}>
                            <Link href="/"> <Image src="/main-assets/image/logo.svg" alt="logo" width={155} height={100} /></Link>
                        </div>
                        {/* Slogan positioned in top-right corner; right offset adapts on mobile */}
                        <div className="header-slogan" style={{ position: 'absolute', top: '25px', right: sloganRight, zIndex: 1000, pointerEvents: 'none' }}>
                            {/* Slogan uses responsive width and proportional height */}
                            <Image src="/main-assets/image/slogan.png" alt="slogan" width={sloganWidth} height={sloganHeight} />
                        </div>
                        <div className="logo-bg"></div>
                        <div className="container">
                            <div className="row align-items-center justify-content-between home-two-header-justify-content-extra">
                                {/* Hide mobile logo entirely; desktop logo above remains visible */}
                                <div className="col-auto d-none">
                                    <div className="header-logo">
                                        <Link href="/"><Image src="/main-assets/img/logo.svg" alt="logo" width={120} height={60} /> </Link>
                                    </div>
                                </div>
                                <div className="col-auto ms-xxl-0">
                                    <nav className="main-menu d-none d-lg-inline-block">
                                        <ul>
                                            <li>
                                                <Link href="/">HOME</Link>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="#">COMPANY</Link>
                                                <ul className="sub-menu">
                                                    <li><Link href="/about">About Us</Link></li>
                                                    <li><Link href="/team">Our Team</Link></li>
                                                    <li><Link href="/facilities">Our Facilities</Link></li>
                                                    <li><Link href="/certifications">Certifications</Link></li>

                                                </ul>
                                            </li>
                                            <li><Link href="/services">SERVICES</Link></li>
                                            <li><Link href="/locations">LOCATIONS</Link></li>
                                            <li><Link href="/contact">CONTACT</Link></li>
                                        </ul>
                                    </nav>
                                    <div className="navbar-right d-inline-flex d-lg-none">
                                        <button onClick={handleMobileMenuOpen} type="button" className="menu-toggle icon-btn">
                                            <i className="ri-menu-line"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default HeaderFour;