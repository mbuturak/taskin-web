import { CookieDeclaration } from '~/components';
import Image from 'next/image';

const FooterThree = () => {
    return (
        <footer className="footer-wrapper footer-layout2 bg-title shape-mockup-wrap">
            <div className="container">
                <div className="widget-area">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-xl-4">
                            <div className="widget widget-about footer-widget">
                                <div className="footer-logo">
                                    <a href="/"><Image src="/main-assets/img/logo-white.svg" alt="Construz" width={400} height={40} style={{marginTop: '12px'}} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto d-xxl-block d-none">
                            <div className="widget-divider"></div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title"></h3>
                                <div className="menu-all-pages-container grid-style" style={{ marginTop: '75px' }}>
                                    <ul className="menu">
                                        <li><a href="/about">ABOUT</a></li>
                                        <li><a href="/services">SERVICES</a></li>
                                        <li><a href="/certifications">CERTIFICATIONS</a></li>
                                    </ul>
                                    <ul className="menu">
                                    <li><a href="/training-center">FACILITIES</a></li>
                                        <li><a href="/locations">LOCATIONS</a></li>
                                        <li><a href="/contact">CONTACT</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto d-xxl-block d-none">
                            <div className="widget-divider"></div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title" style={{ fontSize: '18px', marginBottom: '12px',marginTop: '70px' }}>Follow Us</h3>
                                <p className="footer-text" style={{ fontSize: '13px', marginBottom: '15px' }}>Stay connected with us on social media for the latest updates and news.</p>
                                <div className="social-btn style3" style={{ marginTop: '15px' }}>
                                <a href="https://www.linkedin.com/company/task-in-services/" target="_blank" rel="noopener noreferrer">
                                        <i className="ri-linkedin-fill"></i>
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <i className="ri-twitter-x-line"></i>
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <i className="ri-instagram-line"></i>
                                    </a>                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row gy-3 justify-content-center">
                        <div className="col-auto align-self-center"><p className="copyright-text text-center">© 2025 <a href="#">Task-In Services</a>  |  All rights reserved</p></div>
                    </div>
                </div>
            </div>
            <CookieDeclaration />
        </footer>
    );
};

export default FooterThree;