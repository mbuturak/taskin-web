import Link from "next/link";


const CtaThree = () => {
    return (
        <div className="cta-area-3">
            <div className="container">
                <div className="cta-wrap3 text-center" style={{ backgroundImage: "url('/main-assets/img/bg/cta-bg3-1.png')" }} data-overlay="title" data-opacity="6">
                    <div className="title-area mb-30">
                        <span className="sub-title text-white">We have won many factory awards <i className="ri-arrow-right-down-line"></i></span>
                        <h2 className="cta-title style2">Your Renovation</h2>
                        <h3 className="cta-title text-white">Starts Here</h3>
                    </div>
                    <div className="btn-wrap justify-content-center">
                        <Link href="/pages/innerpage/contact" className="btn">Get in Touch <i className="ri-arrow-right-up-line"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaThree;