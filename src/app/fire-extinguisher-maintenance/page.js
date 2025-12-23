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

export default function FireExtinguisherMaintenancePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Fire Extinguisher Maintenance Service",
    "name": "Fire Extinguisher Maintenance Finland",
    "description": "Professional fire extinguisher maintenance, inspection, testing, and refilling services for marine vessels in Finland. Our certified technicians provide comprehensive fire extinguisher services including hydrostatic pressure testing, refilling, and compliance inspections.",
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
      "serviceUrl": `${siteUrl}/fire-extinguisher-maintenance`
    }
  };

  const images = [
    { src: "/main-assets/image/ffe-9.jpg", alt: "Fire extinguisher maintenance service Finland marine vessels" },
    { src: "/main-assets/image/ffe-10.jpg", alt: "Portable fire extinguisher inspection and testing Finland" },
    { src: "/main-assets/image/ffe-11.jpg", alt: "Fire extinguisher refilling service Finland" },
    { src: "/main-assets/image/ffe-12.jpg", alt: "Marine fire extinguisher hydrostatic testing Finland" },
    { src: "/main-assets/image/ffe-13.jpg", alt: "Stationary fire extinguisher maintenance Finland" },
    { src: "/main-assets/image/ffe-14.jpg", alt: "Fire extinguisher compliance inspection Finland" }
  ];

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HeaderFour />
      <Breadcumb title="FIRE EXTINGUISHER MAINTENANCE" bgImage="/main-assets/image/services-bg.jpg" />
      <div className="service-area-2 overflow-hidden shape-mockup-wrap background-image" style={{ backgroundImage: "url('/main-assets/img/bg/service-bg1-1.png')" }}>
        <div className="container" style={{ marginTop: '50px', marginBottom: '50px' }}>
          <div className="row">
            <div className="col-12">
              <h1 className="sec-title mb-4">Fire Extinguisher Maintenance Finland</h1>
              <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                Task-in Services offers professional fire extinguisher maintenance and inspection services 
                throughout Finland. Our certified technicians ensure your fire extinguishers are properly 
                maintained, tested, and compliant with all international maritime safety regulations.
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
              <h2 className="sec-title mb-3">Fire Extinguisher Services:</h2>
              <ul style={{ fontSize: '16px', lineHeight: '2' }}>
                <li>Portable fire extinguisher inspection and maintenance</li>
                <li>Stationary fire extinguisher systems</li>
                <li>Hydrostatic pressure testing</li>
                <li>Fire extinguisher refilling and recharge</li>
                <li>Annual inspections and certifications</li>
                <li>5-yearly, 10-yearly, and 20-yearly inspections</li>
                <li>Compliance documentation</li>
                <li>Emergency 24/7 service availability</li>
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

