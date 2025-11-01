'use client';
import Link from "next/link";
import Image from "next/image";
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

export default function AboutPage() {

    const certifications = [
        {
            title: "Task-In Services ABS FFE",
            image: "/main-assets/image/abs.svg",
            document: "/main-assets/docs/Task-In Services ABS FFE.pdf"
        },
        {
            title: "Task-In Services ABS LSA",
            image: "/main-assets/image/abs.svg",
            document: "/main-assets/docs/Task-In Services ABS LSA.pdf"
        },
        {
            title: "Task-In Services ABS SCBA",
            image: "/main-assets/image/abs.svg",
            document: "/main-assets/docs/Task-In Services ABS SCBA.pdf"
        },
        {
            title: "Task-In Services BAHAMA FLAG Approval",
            image: "/main-assets/image/bahama.png",
            document: "/main-assets/docs/Task-In Services BAHAMA FLAG.pdf"
        },
        {
            title: "Task-In Services BV FFE",
            image: "/main-assets/image/bureau-veritas.svg",
            document: "/main-assets/docs/Task-In Services BV FFE.pdf"
        },
        {
            title: "Task-In Services BV LSA",
            image: "/main-assets/image/bureau-veritas.svg",
            document: "/main-assets/docs/Task-In Services BV LSA.pdf"
        },
        {
            title: "Task-In Services DNV LSA",
            image: "/main-assets/image/dnv.svg",
            document: "/main-assets/docs/Task-In Services DNV LSA.pdf"
        },
        {
            title: "Task-In Services ILENT Dutch Flag Approval",
            image: "/main-assets/image/dutch.png",
            document: "/main-assets/docs/Task-In Services ILENT Dutch Flag Approval.PDF"
        },
        {
            title: "Task-In Services KR FFE",
            image: "/main-assets/image/kr.png",
            document: "/main-assets/docs/Task-In Services KR FFE.pdf"
        },
        {
            title: "Task-In Services KR LSA",
            image: "/main-assets/image/kr.png",
            document: "/main-assets/docs/Task-In Services KR LSA.pdf"
        },
        {
            title: "Task-In Services LR LSA-FFE",
            image: "/main-assets/image/lloyd.svg",
            document: "/main-assets/docs/Task-In Services LR LSA-FFE.pdf"
        },
        {
            title: "Task-In Services NK",
            image: "/main-assets/image/classnk.jpeg",
            document: "/main-assets/docs/Task-In Services NK.pdf"
        },
        {
            title: "Task-In Services PANAMA FLAG Approval",
            image: "/main-assets/image/panama.png",
            document: "/main-assets/docs/Task-In Services PANAMA FLAG.pdf"
        },
        {
            title: "Task-In Services RINA LSA FFE",
            image: "/main-assets/image/rina.svg",
            document: "/main-assets/docs/Task-In Services RINA LSA FFE.pdf"
        },
        {
            title: "Task-In Services LIBERIAN FLAG Approval",
            image: "/main-assets/image/liberian.png",
            document: "/main-assets/docs/Task-in Services LIBERIAN FLAG.pdf"
        },

    ]
    
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderFour />
            <Breadcumb title="CERTIFICATIONS" bgImage="/main-assets/image/certifications.jpg" />
            <section className="blog-area space-top space-extra-bottom">
                <div className="container">
                    <div className="row gy-4 justify-content-center">
                        {certifications.map((certification, index) => (
                            <div className="col-md-6 col-lg-4 mb-4" key={index}>
                                <div className="blog-card" style={{ border: "1px dashed gray", borderRadius: "10px", padding: "10px 5px", height: "100%", cursor: "pointer" }} onClick={() => window.open(certification.document, '_blank')}>
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
            <FooterThree />
            <Scroll />
        </div>
    );
}
