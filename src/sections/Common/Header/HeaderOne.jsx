"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MultiPageMobileMenu from "../MultiPageMobileMenu/MultiPageMobileMenu";

const HeaderOne = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const sidebarRef = useRef(null);


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

    const handleSearchPopupOpen = () => {
        setIsPopupOpen(true);
    }
    const handleSearchPopupClose = () => {
        setIsPopupOpen(false);
    }

    const handleMobileMenuOpen = () => {
        setIsMenuOpen(true);
    }
    const handleSideBarClose = () => {
        setIsSideBarOpen(false);
    }

    const handleSideBarOpen = () => {
        setIsSideBarOpen(true);
    };

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
        <div className="header-decoration">
            <div className={`popup-search-box ${isPopupOpen ? 'show' : ''}`}>
                <button onClick={handleSearchPopupClose} className="searchClose"><i className="ri-close-line"></i></button>
                <form action="#">
                    <input type="text" placeholder="Search Here.." />
                    <button type="submit"><i className="ri-search-line"></i></button>
                </form>
            </div>
            <div className={`sidemenu-wrapper ${isSideBarOpen ? 'show' : ''}`}>
                <div ref={sidebarRef} className="sidemenu-content">
                    <button onClick={handleSideBarClose} className="closeButton sideMenuCls">
                        <i className="ri-close-line"></i>
                    </button>
                    <div className="widget widget-about footer-widget">
                        <div className="footer-logo footer-img">
                            <Link href="/pages/homepage/home-1">
                                <img src="/main-assets/img/logo.svg" alt="logo" width={100} height={50} />
                            </Link>
                        </div>
                        <p className="about-text mb-4">
                            A small business can be better than a big business because of agility and
                            adaptability due to their size and scale.
                        </p>

                        <p className="footer-text">
                            <Link href="tel:851555961658">
                                <i className="ri-phone-line space-right-sidebar-icon"></i>+85 155 596 1658
                            </Link>
                        </p>
                        <p className="contact-text">
                            <i className="ri-map-pin-line space-right-sidebar-icon"></i> Losangle, Street Road 24, New
                            York, USA - 67452
                        </p>
                        <p className="footer-text">
                            <Link href="mailto:support@gmail.com">
                                <i className="ri-mail-line space-right-sidebar-icon"></i>support@gmail.com
                            </Link>
                        </p>
                        <div className="social-btn style3 mt-30">
                            <Link href="https://www.twitter.com/"><i className="ri-twitter-x-line"></i></Link>
                            <Link href="https://instagram.com/"><i className="ri-instagram-line"></i></Link>
                            <Link href="https://facebook.com/"><i className="ri-facebook-fill"></i></Link>
                            <Link href="https://linkedin.com/"><i className="ri-linkedin-fill"></i></Link>
                        </div>
                        <div className="recent-post-wrap mt-40">
                            <div className="recent-post">
                                <div className="media-img">
                                    <Link href="/pages/innerpage/blog-details">
                                        <img src="/main-assets/img/blog/recent-post1.png" alt="Blog Image" width={100} height={100} />
                                    </Link>
                                </div>
                                <div className="media-body">
                                    <h4 className="post-title">
                                        <Link className="text-inherit" href="/pages/innerpage/blog-details">Best features of
                                            Building construction work</Link>
                                    </h4>
                                    <div className="recent-post-meta">
                                        <Link href="/pages/innerpage/blog">By Nicholes</Link>
                                        <Link href="/pages/innerpage/blog">30 min ago</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="recent-post">
                                <div className="media-img">
                                    <Link href="/pages/innerpage/blog-details">
                                        <img src="/main-assets/img/blog/recent-post2.png" alt="Blog Image" width={100} height={100} />
                                    </Link>
                                </div>
                                <div className="media-body">
                                    <h4 className="post-title">
                                        <Link className="text-inherit" href="/pages/innerpage/blog-details">The beast team is a
                                            around and how we make it</Link>
                                    </h4>
                                    <div className="recent-post-meta">
                                        <Link href="/pages/innerpage/blog">By Nicholes</Link>
                                        <Link href="/pages/innerpage/blog">2 days ago</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="recent-post">
                                <div className="media-img">
                                    <Link href="/pages/innerpage/blog-details">
                                        <img src="/main-assets/img/blog/recent-post4.png" alt="Blog Image" width={100} height={100} />
                                    </Link>
                                </div>
                                <div className="media-body">
                                    <h4 className="post-title">
                                        <Link className="text-inherit" href="/pages/innerpage/blog-details">A well designed
                                            construction website is user accessible</Link>
                                    </h4>
                                    <div className="recent-post-meta">
                                        <Link href="/pages/innerpage/blog">By Nicholes</Link>
                                        <Link href="/pages/innerpage/blog">3 week ago</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MultiPageMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}></MultiPageMobileMenu>
            <header className="nav-header header-layout1 header-decoration">
                <div className="header-top">
                    <div className="container">
                        <div className="row justify-content-center justify-content-lg-between align-items-center gy-2 ">
                            <div className="col-auto d-none d-lg-block">
                                <div className="header-top-left">
                                    <div className="header-links">
                                        <ul>
                                            <li>
                                                <div className="social-links">
                                                    <Link href="https://www.facebook.com/"><i className="ri-facebook-fill"></i></Link>
                                                    <Link href="https://www.twitter.com/"><i className="ri-twitter-x-fill"></i></Link>
                                                    <Link href="https://www.instagram.com/"><i className="ri-instagram-line"></i></Link>
                                                    <Link href="https://www.linkedin.com/"><i className="ri-linkedin-fill"></i></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="header-top-right">
                                    <div className="header-links ps-0">
                                        <ul>
                                            <li><i className="ri-time-line"></i>Mon - Sat / 8am : 12pm</li>
                                            <li><i className="ri-map-pin-line"></i><Link href="https://www.google.com/maps">96 Jones Street, New York, USA</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`}>
                    <div className="menu-area">
                        <div className="header-navbar-logo">
                            <Link href="/pages/homepage/home-1"><img src="/main-assets/img/logo.svg" alt="logo" /></Link>
                        </div>
                        <div className="logo-bg"></div>
                        <div className="container">
                            <div className="row align-items-center justify-content-lg-start justify-content-between">
                                <div className="col-auto d-xxl-none d-block">
                                    <div className="header-logo">
                                        <Link href="/pages/homepage/home-1"><img src="/main-assets/img/logo.svg" alt="logo" /></Link>
                                    </div>
                                </div>
                                <div className="col-auto menu-bar ms-xxl-0">
                                    <nav className="main-menu d-none d-lg-inline-block">
                                        <ul>
                                            <li className="menu-item-has-children">
                                                <Link href="#">HOME</Link>
                                                <ul className="sub-menu">
                                                    <li className="menu-item-has-children">
                                                        <Link href="#">Multipage</Link>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <Link href="/pages/homepage/home-1">Home 01</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/pages/homepage/home-2">Home 02</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/pages/homepage/home-3">Home 03</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/pages/homepage/home-4">Home 04</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/pages/homepage/home-5">Home 05</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <Link href="#">Onepage</Link>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <Link href="/pages/homepage/home-1-op">Home 01 Onepage</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/pages/homepage/home-2-op">Home 02 Onepage</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/pages/homepage/home-3-op">Home 03 Onepage</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/pages/homepage/home-4-op">Home 04 Onepage</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/pages/homepage/home-5-op">Home 05 Onepage</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/pages/innerpage/about">ABOUT</Link>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="#">SERVICES</Link>
                                                <ul className="sub-menu">
                                                    <li><Link href="/pages/innerpage/service">Service</Link></li>
                                                    <li><Link href="/pages/innerpage/service-details">Service Details</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="#">PAGES</Link>
                                                <ul className="sub-menu">
                                                    <li><Link href="/pages/innerpage/project">Project Page</Link></li>
                                                    <li><Link href="/pages/innerpage/project-details">Project Details</Link></li>
                                                    <li><Link href="/pages/innerpage/team">Team Page</Link></li>
                                                    <li><Link href="/pages/innerpage/team-details">Team Details</Link></li>
                                                    <li><Link href="/pages/innerpage/shop">Shop Page</Link></li>
                                                    <li><Link href="/pages/innerpage/shop-details">Shop Details</Link></li>
                                                    <li><Link href="/pages/innerpage/cart">Cart</Link></li>
                                                    <li><Link href="/pages/innerpage/checkout">Checkout</Link></li>
                                                    <li><Link href="/pages/innerpage/wishlist">Wishlist</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="#">NEWS</Link>
                                                <ul className="sub-menu">
                                                    <li><Link href="/pages/innerpage/blog">News</Link></li>
                                                    <li><Link href="/pages/innerpage/blog-details">News Details</Link></li>
                                                </ul>
                                            </li>

                                            <li>
                                                <Link href="/pages/innerpage/contact">CONTACT</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="navbar-right d-inline-flex d-lg-none">
                                        <button onClick={handleMobileMenuOpen} type="button" className="menu-toggle icon-btn"><i className="ri-menu-line"></i></button>
                                    </div>
                                </div>
                                <div className="col-auto d-xl-block d-none space-left">
                                    <div className="header-button">
                                        <Link href="/pages/innerpage/about" className="btn header-one-extra-style">GET IN TOUCH <i className="ri-arrow-right-up-line"></i></Link>
                                        <button onClick={handleSearchPopupOpen} type="button" className="search-btn searchBoxToggler simple-icon">
                                            <i className="ri-search-line"></i>
                                        </button>
                                        <button onClick={handleSideBarOpen} type="button" className="sidebar-btn sideMenuToggler simple-icon">
                                            <i className="ri-grid-fill"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-right-desc d-xxl-flex d-none" style={{ backgroundImage: "url('/main-assets/img/bg/header-1-bg.png')" }}>
                            <div className="icon-btn">
                                <i className="ri-phone-fill"></i>
                            </div>
                            <div className="navbar-right-desc-details">
                                <h6 className="title">Call us any time</h6>
                                <Link className="link" href="tel:+2590256215">+123 556 8824</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div >
    );
};

export default HeaderOne; 