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

export default function MedicalOxygenServiceFinlandPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Medical Oxygen Service",
    "name": "Medical Oxygen Service Finland",
    "description": "Inspection of portable and fixed medical oxygen sets, refilling and hydrotesting of medical oxygen cylinders for marine vessels in Finland.",
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
      "serviceUrl": `${siteUrl}/medical-oxygen-service-finland`
    }
  };

  const images = [
    { src: "/main-assets/image/medical-2.jpg", alt: "Medical oxygen service Finland marine vessels" },
    { src: "/main-assets/image/medical-3.jpg", alt: "Medical oxygen cylinder refilling Finland" },
    { src: "/main-assets/image/medical-2.jpg", alt: "Medical oxygen inspection service Finland" },
    { src: "/main-assets/image/medical-3.jpg", alt: "Medical oxygen hydrotesting Finland" }
  ];

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HeaderFour />
      <Breadcumb title="MEDICAL OXYGEN SERVICE FINLAND" bgImage="/main-assets/image/services-bg.jpg" />
      <div className="service-area-2 overflow-hidden shape-mockup-wrap background-image" style={{ backgroundImage: "url('/main-assets/img/bg/service-bg1-1.png')" }}>
        <div className="container" style={{ marginTop: '50px', marginBottom: '50px' }}>
          <div className="row">
            <div className="col-12">
              <h1 className="sec-title mb-4">Medical Oxygen Service Finland</h1>
              <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                Task-in Services provides professional medical oxygen services for marine vessels throughout Finland. 
                Our certified technicians inspect, refill, and hydrotest medical oxygen cylinders to ensure 
                compliance with all health and safety regulations.
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
              <h2 className="sec-title mb-3">Our Medical Oxygen Services Include:</h2>
              <ul style={{ fontSize: '16px', lineHeight: '2' }}>
                <li>Inspection of portable medical oxygen sets</li>
                <li>Inspection of fixed medical oxygen systems</li>
                <li>Medical oxygen cylinder refilling</li>
                <li>Hydrotesting of medical oxygen cylinders</li>
                <li>Compliance documentation</li>
                <li>Emergency service availability</li>
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

