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

export default function LSALifeboatServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Life Saving Appliance Service",
    "name": "LSA Lifeboat Service Finland",
    "description": "Inspection of lifeboats, freefalls and rescue boats annually and 5-yearly, release hook inspection and services, wire replacements with multi-brand OEM and service provider approvals in Finland.",
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
      "serviceUrl": `${siteUrl}/lsa-lifeboat-service`
    }
  };

  const images = [
    { src: "/main-assets/image/lsa.jpeg", alt: "LSA lifeboat service Finland marine safety inspection" },
    { src: "/main-assets/image/lsa-2.jpg", alt: "Lifeboat inspection and maintenance service Finland" },
    { src: "/main-assets/image/lsa-3.jpg", alt: "Rescue boat service Finland marine vessels" },
    { src: "/main-assets/image/lsa-4.jpg", alt: "Lifeboat release hook inspection Finland" },
    { src: "/main-assets/image/lsa-5.jpg", alt: "Freefall lifeboat service Finland" },
    { src: "/main-assets/image/lsa-6.jpg", alt: "LSA wire replacement service Finland" }
  ];

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HeaderFour />
      <Breadcumb title="LSA LIFEBOAT SERVICE FINLAND" bgImage="/main-assets/image/services-bg.jpg" />
      <div className="service-area-2 overflow-hidden shape-mockup-wrap background-image" style={{ backgroundImage: "url('/main-assets/img/bg/service-bg1-1.png')" }}>
        <div className="container" style={{ marginTop: '50px', marginBottom: '50px' }}>
          <div className="row">
            <div className="col-12">
              <h1 className="sec-title mb-4">LSA Lifeboat Service Finland</h1>
              <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                Task-in Services provides comprehensive Life Saving Appliance (LSA) services for lifeboats 
                and rescue boats throughout Finland. Our certified technicians perform annual and 5-yearly 
                inspections, ensuring your life-saving equipment meets all SOLAS requirements.
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
              <h2 className="sec-title mb-3">Our LSA Services Include:</h2>
              <ul style={{ fontSize: '16px', lineHeight: '2' }}>
                <li>Inspection of lifeboats (annual and 5-yearly)</li>
                <li>Freefall lifeboat inspections</li>
                <li>Rescue boat inspections and maintenance</li>
                <li>Release hook inspection and services</li>
                <li>Wire replacements with multi-brand OEM approvals</li>
                <li>Service provider certifications</li>
                <li>SOLAS compliance documentation</li>
                <li>Emergency response services</li>
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

