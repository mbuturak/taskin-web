import Link from "next/link";


const Service = () => {
    return (
        <div className="service-area-2 space-top overflow-hidden shape-mockup-wrap background-image" style={{ backgroundImage: "url('/main-assets/img/bg/service-bg1-1.png')" }} id="service-sec">
            <div className="container">
                <div className="row justify-content-xl-start justify-content-center">
                    <div className="col-12">
                        <h2 className="sec-title" style={{ textAlign: 'center' }}>OUR SERVICES</h2>
                    </div>
                </div>
                <div className="service-card-wrap2 mb-5">
                    <div className="row justify-content-center" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {/* Kart 1 */}
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-4 service-card-list" style={{ display: 'flex' }}>
                            <div className="service-card style2" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <div className="service-card_content" style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
                                    <div className="service-card_icon" style={{ margin: 0, padding: 0, marginBottom: 0 }}>
                                        <img
                                            src="/main-assets/image/ffe.jpeg"
                                            alt="FFE Services"
                                            style={{
                                                width: '100%',
                                                height: '325px',
                                                objectFit: 'cover',
                                                borderRadius: '8px',
                                                display: 'block'
                                            }}
                                        />
                                    </div>
                                    <h4 className="service-card_title" style={{ marginTop: '15px', textAlign: 'center' }}>
                                        <Link href="/ffe-service-finland">FFE SERVICES</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>

                        {/* Kart 2 */}
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-4 service-card-list" style={{ display: 'flex' }}>
                            <div className="service-card style2" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <div className="service-card_content" style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
                                    <div className="service-card_icon" style={{ margin: 0, padding: 0, marginBottom: 0 }}>
                                        <img
                                            src="/main-assets/image/lse.jpeg"
                                            alt="LSE Services"
                                            style={{
                                                width: '100%',
                                                height: '325px',
                                                objectFit: 'cover',
                                                borderRadius: '8px',
                                                display: 'block'
                                            }}
                                        />
                                    </div>
                                    <h4 className="service-card_title" style={{ marginTop: '15px', marginBottom: '10px', textAlign: 'center' }}>
                                        <Link href="/lse-service-finland">LSE SERVICES</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>

                        {/* Kart 3 */}
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-4 service-card-list" style={{ display: 'flex' }}>
                            <div className="service-card style2" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <div className="service-card_content" style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
                                    <div className="service-card_icon" style={{ margin: 0, padding: 0, marginBottom: 0 }}>
                                        <img
                                            src="/main-assets/image/lsa.jpeg"
                                            alt="LSA Services"
                                            style={{
                                                width: '100%',
                                                height: '325px',
                                                objectFit: 'cover',
                                                borderRadius: '8px',
                                                display: 'block'
                                            }}
                                        />
                                    </div>
                                    <h4 className="service-card_title" style={{ marginTop: '15px', marginBottom: '10px', textAlign: 'center' }}>
                                        <Link href="/lsa-lifeboat-service">LSA SERVICES</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>

                        {/* Kart 4 */}
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-4 service-card-list" style={{ display: 'flex' }}>
                            <div className="service-card style2" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <div className="service-card_content" style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
                                    <div className="service-card_icon" style={{ margin: 0, padding: 0, marginBottom: 0 }}>
                                        <img
                                            src="/main-assets/image/calibration.jpg"
                                            alt="Calibration Services"
                                            style={{
                                                width: '100%',
                                                height: '325px',
                                                objectFit: 'cover',
                                                borderRadius: '8px',
                                                display: 'block'
                                            }}
                                        />
                                    </div>
                                    <h4 className="service-card_title" style={{ marginTop: '15px', marginBottom: '10px', textAlign: 'center' }}>
                                        <Link href="/calibration-service-finland">CALIBRATION SERVICES</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>

                        {/* Kart 5 */}
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-4 service-card-list" style={{ display: 'flex' }}>
                            <div className="service-card style2" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <div className="service-card_content" style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
                                    <div className="service-card_icon" style={{ margin: 0, padding: 0, marginBottom: 0 }}>
                                        <img
                                            src="/main-assets/image/crane-home.jpg"
                                            alt="Cargo Crane and Load Test"
                                            style={{
                                                width: '100%',
                                                height: '325px',
                                                objectFit: 'cover',
                                                borderRadius: '8px',
                                                display: 'block',
                                                objectPosition: 'center 80%'
                                            }}
                                        />
                                    </div>
                                    <h4 className="service-card_title" style={{ marginTop: '15px', marginBottom: '10px', textAlign: 'center' }}>
                                        <Link href="/crane-load-test-finland">LOAD TEST</Link>
                                    </h4>

                                </div>
                            </div>
                        </div>

                        {/* Kart 6 */}
                        <div className="col-xl-4 col-md-6 col-sm-12 mb-4 service-card-list" style={{ display: 'flex' }}>
                            <div className="service-card style2" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <div className="service-card_content" style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
                                    <div className="service-card_icon" style={{ margin: 0, padding: 0, marginBottom: 0 }}>
                                        <img
                                            src="https://portmarine.com.my/media/2025/07/marine-safety-equipments.jpg"
                                            alt="Safety Equipment Supply"
                                            style={{
                                                width: '100%',
                                                height: '325px',
                                                objectFit: 'cover',
                                                borderRadius: '8px',
                                                display: 'block'
                                            }}
                                        />
                                    </div>
                                    <h4 className="service-card_title" style={{ marginTop: '15px', marginBottom: '10px', textAlign: 'center' }}>
                                        <Link href="/services">SAFETY SUPPLIES</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;