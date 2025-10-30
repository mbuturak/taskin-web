import OfficeLocations from "@/sections/Common/OfficeLocations/OfficeLocations";

export const metadata = {
    title: "Our Office Locations - Task-In Services",
    description: "Find our offices worldwide and get in touch with our local teams. Task-In Services has offices in Netherlands, Finland, Germany, and USA.",
};

const LocationsPage = () => {
    return (
        <div>
            {/* Breadcrumb Section */}
            <section className="breadcrumb-area" style={{ padding: '120px 0 80px', backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content">
                                <h1 className="breadcrumb-title">Our Office Locations</h1>
                                <p className="breadcrumb-desc">Find our offices worldwide and get in touch with our local teams</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Locations Section */}
            <section className="space" style={{ padding: '80px 0' }}>
                <div className="container">
                    <OfficeLocations />
                </div>
            </section>

            {/* Additional Information Section */}
            <section className="space" style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="title-area text-center mb-50">
                                <h2 className="sec-title">Why Choose Task-In Services?</h2>
                                <p className="sec-text">With offices strategically located across Europe and North America, we provide comprehensive marine services and logistics solutions worldwide.</p>
                            </div>
                            <div className="row gy-30">
                                <div className="col-lg-6">
                                    <div className="feature-card" style={{ padding: '30px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                                        <div className="feature-icon" style={{ fontSize: '40px', color: '#3B82F6', marginBottom: '20px' }}>
                                            <i className="ri-global-line"></i>
                                        </div>
                                        <h4 style={{ marginBottom: '15px', color: '#1f2937' }}>Global Presence</h4>
                                        <p style={{ color: '#6b7280', margin: 0 }}>Strategic locations across Europe and North America ensure we're always close to our clients.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="feature-card" style={{ padding: '30px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                                        <div className="feature-icon" style={{ fontSize: '40px', color: '#3B82F6', marginBottom: '20px' }}>
                                            <i className="ri-customer-service-2-line"></i>
                                        </div>
                                        <h4 style={{ marginBottom: '15px', color: '#1f2937' }}>Local Expertise</h4>
                                        <p style={{ color: '#6b7280', margin: 0 }}>Each office is staffed with local experts who understand regional regulations and market conditions.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="feature-card" style={{ padding: '30px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                                        <div className="feature-icon" style={{ fontSize: '40px', color: '#3B82F6', marginBottom: '20px' }}>
                                            <i className="ri-time-line"></i>
                                        </div>
                                        <h4 style={{ marginBottom: '15px', color: '#1f2937' }}>24/7 Support</h4>
                                        <p style={{ color: '#6b7280', margin: 0 }}>Round-the-clock support across all time zones ensures your operations never stop.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="feature-card" style={{ padding: '30px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                                        <div className="feature-icon" style={{ fontSize: '40px', color: '#3B82F6', marginBottom: '20px' }}>
                                            <i className="ri-shield-check-line"></i>
                                        </div>
                                        <h4 style={{ marginBottom: '15px', color: '#1f2937' }}>Certified Services</h4>
                                        <p style={{ color: '#6b7280', margin: 0 }}>All our offices maintain the highest industry standards and certifications.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LocationsPage;
