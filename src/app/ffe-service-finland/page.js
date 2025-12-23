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

export default function FFEServiceFinlandPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Fire Fighting Equipment Service",
    "name": "FFE Service Finland",
    "description": "Complete marine firefighting packages, inspection of HP & LP Co2 systems, foam systems and foam concentrates analysis and supplies, portable foam applicators, alternative gas systems as Novec, FM200, Ansul, portable and stationary fire extinguishers, dry powder systems, humidity analysis, galley Co2 and deep fat fryer systems, smoke detection systems, fire alarm systems, gaseous fire suppression systems, fire detection systems, smoke and heat detection systems, accommodation and engine water mist systems, hydrostatic pressure testing and refilling of cylinders, 5-yearly, 10-yearly and 20-yearly inspections and repairs, internal valve inspections",
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
      "serviceUrl": `${siteUrl}/ffe-service-finland`
    }
  };

  const images = [
    { src: "/main-assets/image/ffe2.jpg", alt: "FFE fire fighting equipment service Finland marine safety" },
    { src: "/main-assets/image/ffe-2.jpg", alt: "Fire extinguisher maintenance and inspection Finland" },
    { src: "/main-assets/image/ffe-3.jpg", alt: "Co2 fire suppression system service Finland" },
    { src: "/main-assets/image/ffe-4.jpg", alt: "Foam fire fighting system inspection Finland" },
    { src: "/main-assets/image/ffe-7.jpg", alt: "Marine fire detection system service Finland" },
    { src: "/main-assets/image/ffe-8.jpg", alt: "Portable fire extinguisher testing Finland" }
  ];

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HeaderFour />
      <Breadcumb title="FFE SERVICE FINLAND" bgImage="/main-assets/image/services-bg.jpg" />
      <div className="service-area-2 overflow-hidden shape-mockup-wrap background-image" style={{ backgroundImage: "url('/main-assets/img/bg/service-bg1-1.png')" }}>
        <div className="container" style={{ marginTop: '50px', marginBottom: '50px' }}>
          <div className="row">
            <div className="col-12">
              <h1 className="sec-title mb-4">FFE Service Finland</h1>
              <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                Task-in Services provides comprehensive Fire Fighting Equipment (FFE) services throughout Finland. 
                Our certified technicians deliver complete marine firefighting packages, ensuring your vessel meets 
                all international safety standards and regulations.
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
              <h2 className="sec-title mb-3">Our FFE Services Include:</h2>
              <ul style={{ fontSize: '16px', lineHeight: '2' }}>
                <li>Complete marine firefighting packages</li>
                <li>Inspection of HP & LP Co2 systems</li>
                <li>Foam systems and foam concentrates analysis and supplies</li>
                <li>Portable foam applicators</li>
                <li>Alternative gas systems (Novec, FM200, Ansul)</li>
                <li>Portable and stationary fire extinguishers</li>
                <li>Dry powder systems</li>
                <li>Humidity analysis</li>
                <li>Galley Co2 and deep fat fryer systems</li>
                <li>Smoke detection systems</li>
                <li>Fire alarm systems</li>
                <li>Gaseous fire suppression systems</li>
                <li>Fire detection systems</li>
                <li>Smoke and heat detection systems</li>
                <li>Accommodation and engine water mist systems</li>
                <li>Hydrostatic pressure testing and refilling of cylinders</li>
                <li>5-yearly, 10-yearly and 20-yearly inspections and repairs</li>
                <li>Internal valve inspections</li>
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

