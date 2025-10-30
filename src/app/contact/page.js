import Breadcumb from "~/sections/About/Breadcumb";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";
import ContactForm from "~/sections/Common/ContactForm/ContactForm";

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

export default function ContactPage() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <HeaderFour />
            {/* Görseli yukarı kaydırmak için background-position Y eksenini %20 yap ve biraz zoom-out */}
            <Breadcumb 
                title="CONTACT US" 
                bgImage="/main-assets/image/contact.jpeg" 
                bgPosition="center 64%" 
                
            />
            
            {/* Contact Introduction Section */}
            <div className="contact-area-2 space-top overflow-hidden">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="title-area text-center mb-40">
                                <p className="sec-text" style={{ lineHeight: '1.5', textAlign: 'center' }}>
                                    We&apos;re here to help! Whether you need inspection, maintenance, or calibration services for your marine safety equipment, our team is ready to assist you. 
                                    Contact us through the form below or reach out to one of our global offices.
                                </p>
                            </div>
                        </div>
                    </div>
                    <ContactForm theme="light" />                  
                </div>
            </div>
            <FooterThree />
            <Scroll />
        </div>
    );
}
