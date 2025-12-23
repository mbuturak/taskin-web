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

export default function LSEServiceFinlandPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Life Saving Equipment Service",
    "name": "LSE Service Finland",
    "description": "Inspection of lifejackets, spare parts supply, immersion suits, breathing apparatus and compressor air analyses, Emergency Escape Breathing Apparatus (EEBD), hydrostatic testing of steel and composite cylinders, fireman suits, gastight chemical suits, full body harnesses in Finland.",
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
      "serviceUrl": `${siteUrl}/lse-service-finland`
    }
  };

  const images = [
    { src: "/main-assets/image/lse.jpg", alt: "LSE life saving equipment service Finland marine safety" },
    { src: "/main-assets/image/lse-2.jpg", alt: "Lifejacket inspection service Finland" },
    { src: "/main-assets/image/lse-3.jpg", alt: "Breathing apparatus service Finland" },
    { src: "/main-assets/image/lse-4.jpg", alt: "Immersion suit inspection Finland" },
    { src: "/main-assets/image/lse-5.jpg", alt: "EEBD emergency escape breathing apparatus Finland" }
  ];

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HeaderFour />
      <Breadcumb title="LSE SERVICE FINLAND" bgImage="/main-assets/image/services-bg.jpg" />
      <div className="service-area-2 overflow-hidden shape-mockup-wrap background-image" style={{ backgroundImage: "url('/main-assets/img/bg/service-bg1-1.png')" }}>
        <div className="container" style={{ marginTop: '50px', marginBottom: '50px' }}>
          <div className="row">
            <div className="col-12">
              <h1 className="sec-title mb-4">LSE Service Finland</h1>
              <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                Task-in Services provides comprehensive Life Saving Equipment (LSE) services throughout Finland. 
                Our certified technicians inspect and maintain all life-saving equipment to ensure compliance 
                with international maritime safety standards.
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
              <h2 className="sec-title mb-3">Our LSE Services Include:</h2>
              <ul style={{ fontSize: '16px', lineHeight: '2' }}>
                <li>Inspection of lifejackets</li>
                <li>Spare parts supply</li>
                <li>Immersion suits inspection</li>
                <li>Breathing apparatus and compressor air analyses</li>
                <li>Emergency Escape Breathing Apparatus (EEBD)</li>
                <li>Hydrostatic testing of steel and composite cylinders</li>
                <li>Fireman suits inspection</li>
                <li>Gastight chemical suits</li>
                <li>Full body harnesses</li>
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

