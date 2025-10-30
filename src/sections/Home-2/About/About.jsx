'use client';
import Link from "next/link";
import CountUp from "react-countup";
const About = () => {
    return (
        <div className="about-area-2 space overflow-hidden shape-mockup-wrap no-anim-bar" id="about-sec">
            <div className="container">
                <div className="row gx-60 align-items-center flex-row-reverse">
                    <div className="col-xl-6">
                        <div className="about-thumb2 mb-60 mb-xl-0">
                            <div className="about-img-1">
                                <img src="/main-assets/image/About-us.jpeg" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="title-area mb-25">
                            <h3 className="sec-title">MARINE SAFETY EQUIPMENT INSPECTION & SERVICES</h3>
                            <p className="sec-text">We provide high-quality LSA, FFE, and safety equipment solutions with certifications from leading maritime authorities worldwide.
                            </p>
                        </div>
                        <div className="checklist mb-35">
                            <ul>
                                <li><img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Complete LSA Solutions (LSA)
                                </li>
                                <li><img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Complete Fire Fighting Equipment Services(FFE)</li>
                                <li><img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Long-term Collaboration with Fleet Management Services</li>
                                <li><Link href="/facilities"><img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Training engineers in-house Training Facility (LR Approved)</Link></li>
                                <li><img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Safety equipment supplies and services</li>
                            </ul>
                        </div>
                        <div className="about-grid-wrap">
                            <div className="icon">
                                <img src="/main-assets/img/icon/about-grid-icon1-1.svg" alt="img" />
                            </div>
                            <div className="about-grid-details">
                                <h4 className="title">Our Mission</h4>
                                <p className="text">To ensure maritime safety by providing reliable and certified safety equipment solutions that meet international standards.</p>
                            </div>
                        </div>
                        <div className="about-grid-wrap">
                            <div className="icon">
                                <img src="/main-assets/img/icon/about-grid-icon1-2.svg" alt="img" />
                            </div>
                            <div className="about-grid-details">
                                <h4 className="title">Our Vision</h4>
                                <p className="text">To become a leading global provider of maritime safety equipment, recognized for quality, compliance, and excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;