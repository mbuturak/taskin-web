"use client";
import Breadcumb from "~/sections/About/Breadcumb";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";
import Script from "next/script";
import Image from "next/image";
import siteUrl from "~/utils/siteUrl";

import "~/public/landing-assets/css/animate.css";
import "~/public/landing-assets/css/font-awesome.min.css";
import "~/public/landing-assets/css/mfp.min.css";
import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/react-adjustment.css";
import "~/public/main-assets/css/remixicon.css";
import "~/public/main-assets/css/slick.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CraneLoadTestFinlandPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Crane Load Test Service",
    "name": "Crane Load Test Finland",
    "description": "Dynamic load tests of cargo cranes, accommodation ladders, embarkation ladders, cargo hold hatches and other lifting appliances up to 1200 tons with fully IACS approved water bags / dynamometer and shackles in Finland.",
    "provider": {
      "@type": "Organization",
      "name": "Task-in Services",
      "url": siteUrl,
      "logo": `${siteUrl}/main-assets/img/logo.svg`
    },
    "areaServed": {
      "@type": "Country",
      "name": "Finland"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `${siteUrl}/crane-load-test-finland`
    }
  };

  const images = [
    { src: "/main-assets/image/crane-load.jpeg", alt: "Crane load test service Finland IACS approved" },
    { src: "/main-assets/image/crane-3.jpg", alt: "Marine crane load testing Finland up to 1200 tons" },
    { src: "/main-assets/image/crane-4.jpg", alt: "Cargo crane dynamic load test Finland" },
    { src: "/main-assets/image/crane-5.jpg", alt: "Accommodation ladder load test Finland" },
    { src: "/main-assets/image/crane-6.jpg", alt: "Lifting appliance load test service Finland" }
  ];

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HeaderFour />
      <Breadcumb title="CRANE LOAD TEST FINLAND" bgImage="/main-assets/image/services-bg.jpg" />
      <div className="service-area-2 overflow-hidden shape-mockup-wrap background-image" style={{ backgroundImage: "url('/main-assets/img/bg/service-bg1-1.png')" }}>
        <div className="container" style={{ marginTop: '50px', marginBottom: '50px' }}>
          <div className="row">
            <div className="col-12">
              <h1 className="sec-title mb-4">Crane Load Test Finland</h1>
              <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                Task-in Services provides IACS approved crane load testing services throughout Finland. 
                Our certified technicians perform dynamic load tests for cargo cranes and lifting appliances 
                up to 1200 tons, ensuring compliance with all international safety standards.
              </p>
            </div>
          </div>

          <div className="row gy-4 mb-5">
            {images.map((img, index) => (
              <div key={index} className="col-md-4 col-sm-6">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-12">
              <h2 className="sec-title mb-3">Our Crane Load Test Services Include:</h2>
              <ul style={{ fontSize: '16px', lineHeight: '2' }}>
                <li>Dynamic load tests of cargo cranes</li>
                <li>Accommodation ladders load testing</li>
                <li>Embarkation ladders load testing</li>
                <li>Cargo hold hatches load testing</li>
                <li>Other lifting appliances up to 1200 tons</li>
                <li>Fully IACS approved water bags / dynamometer</li>
                <li>Shackles and equipment supply</li>
                <li>Certification and documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterThree />
      <Scroll />
    </>
  );
}

