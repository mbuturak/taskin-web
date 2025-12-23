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

export default function CalibrationServiceFinlandPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Calibration Service",
    "name": "Calibration Service Finland",
    "description": "Inspection of portable and fixed gas detection systems, services and repairs, components renewal, sensors and parts supply, calibration gases, temperature gauges calibration, UTI calibration, ODME calibration, OWS (15 ppm) calibration, alcoholmeter calibration, analogue or digital pressure gauge calibrations, dynamometer calibrations, torque wrench calibrations, fire hoses, fire nozzles in Finland.",
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
      "serviceUrl": `${siteUrl}/calibration-service-finland`
    }
  };

  const images = [
    { src: "/main-assets/image/calibration.jpg", alt: "Calibration service Finland marine equipment gas detection" },
    { src: "/main-assets/image/calibration-2.jpg", alt: "Gas detection system calibration Finland" },
    { src: "/main-assets/image/calibration-3.jpg", alt: "Pressure gauge calibration service Finland" },
    { src: "/main-assets/image/calibration-4.jpg", alt: "ODME OWS calibration service Finland" }
  ];

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HeaderFour />
      <Breadcumb title="CALIBRATION SERVICE FINLAND" bgImage="/main-assets/image/services-bg.jpg" />
      <div className="service-area-2 overflow-hidden shape-mockup-wrap background-image" style={{ backgroundImage: "url('/main-assets/img/bg/service-bg1-1.png')" }}>
        <div className="container" style={{ marginTop: '50px', marginBottom: '50px' }}>
          <div className="row">
            <div className="col-12">
              <h1 className="sec-title mb-4">Calibration Service Finland</h1>
              <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                Task-in Services provides professional calibration services for marine equipment throughout Finland. 
                Our certified technicians ensure all your detection systems, gauges, and instruments are accurately 
                calibrated and compliant with international standards.
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
              <h2 className="sec-title mb-3">Our Calibration Services Include:</h2>
              <ul style={{ fontSize: '16px', lineHeight: '2' }}>
                <li>Portable and fixed gas detection systems</li>
                <li>Services, repairs, and components renewal</li>
                <li>Sensors and parts supply</li>
                <li>Calibration gases</li>
                <li>Temperature gauges calibration</li>
                <li>UTI calibration</li>
                <li>ODME calibration</li>
                <li>OWS (15 ppm) calibration</li>
                <li>Alcoholmeter calibration</li>
                <li>Analogue or digital pressure gauge calibrations</li>
                <li>Dynamometer calibrations</li>
                <li>Torque wrench calibrations</li>
                <li>Fire hoses and fire nozzles</li>
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

