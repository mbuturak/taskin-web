"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const MultiPageMobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
    // Company dropdown menu state
    const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);

    // Close mobile menu
    const handleMobileMenuClose = () => {
        setIsMenuOpen(false);
    }

    // Menu styles for company submenu
    const [companyMenuStyle, setCompanyMenuStyle] = useState({
        opacity: 0,
        transition: 'opacity 0.5s ease',
        display: 'none',
    });

    // Company submenu toggle
    useEffect(() => {
        if (isCompanyMenuOpen) {
            setCompanyMenuStyle((prevStyle) => ({
                ...prevStyle,
                display: 'block',
            }));
            setTimeout(() => {
                setCompanyMenuStyle((prevStyle) => ({
                    ...prevStyle,
                    opacity: 1,
                }));
            }, 100);
        } else {
            setCompanyMenuStyle((prevStyle) => ({
                ...prevStyle,
                opacity: 0,
            }));
            setTimeout(() => {
                setCompanyMenuStyle((prevStyle) => ({
                    ...prevStyle,
                    display: 'none',
                }));
            }, 300);
        }
    }, [isCompanyMenuOpen]);
    return (
        <div className={`mobile-menu-wrapper ${isMenuOpen ? 'body-visible' : ''}`}>
                <div className="mobile-menu-area">
                <div className="mobile-logo">
                    <Link href="/">
                        <Image src="/main-assets/img/logo.svg" alt="Task.in Services" width={120} height={60} />
                    </Link>
                    <button onClick={handleMobileMenuClose} className="menu-toggle">
                        <i className="ri-close-line"></i>
                    </button>
                </div>
                <div className="mobile-menu">
                    <ul>
                        <li><Link href="/">HOME</Link></li>
                        <li className={`menu-item-has-children submenu-item-has-children ${isCompanyMenuOpen ? 'active-class' : ''}`}>
                            <Link onClick={() => setIsCompanyMenuOpen(!isCompanyMenuOpen)} href="#">COMPANY <span className="mean-expand-class"></span></Link>
                            <ul className={`sub-menu submenu-class ${isCompanyMenuOpen ? 'menu-open' : ''}`} style={companyMenuStyle}>
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
                </div>
            </div>
        </div>
    );
};

export default MultiPageMobileMenu;