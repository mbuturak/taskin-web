import ContactForm from "~/sections/Common/ContactForm/ContactForm";

const Contact = () => {
    return (
        <>

            {/* Contact Information Section */}
            <section className="contact-area-1 space bg-title overflow-hidden shape-mockup-wrap background-image" 
            style={{ backgroundImage: "url('/main-assets/img/bg/contact-bg1-1.png')",objectPosition: 'center 10%' }} id="contact-sec">
            <div className="section-animation-shape1-1 shape-mockup animation-infinite style-gray background-image" 
            style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')", top: '0px' }}>
            </div>
            <div className="container">
                <div className="row gy-60 justify-content-lg-between justify-content-center align-items-start">
                    <div className="col-xl-12">
                        <div className="title-area" style={{ marginBottom: '30px' }}>
                            <h2 className="sec-title text-white text-center">CONTACT US</h2>
                        </div>
                        <ContactForm theme="dark" />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Contact;