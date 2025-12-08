import { notFound } from 'next/navigation';

import Breadcumb from '~/sections/About/Breadcumb';
import HeaderFour from '~/sections/Common/Header/HeaderFour';
import FooterThree from '~/sections/Common/Footer/FooterThree';
import Scroll from '~/sections/Common/Scroll';
import Contact from '~/sections/Home-2/Contact';

import { getLocationBySlug, locationSlugs } from '~/data/locations';
import siteUrl from '~/utils/siteUrl';

import '~/public/landing-assets/css/animate.css';
import '~/public/landing-assets/css/font-awesome.min.css';
import '~/public/landing-assets/css/mfp.min.css';
import '~/public/main-assets/css/bootstrap.min.css';
import '~/public/main-assets/css/style.css';
import '~/public/main-assets/css/react-adjustment.css';
import '~/public/main-assets/css/remixicon.css';
import '~/public/main-assets/css/slick.min.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function generateStaticParams() {
  return locationSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const location = getLocationBySlug(params.slug);
  if (!location) {
    return {};
  }

  const { seo, office } = location;

  const keywords = [
    location.primaryKeyword,
    `${office.city} marine safety`,
    `${office.country} lifeboat service`,
    `${office.country} fire-fighting equipment`,
    `${office.country} SOLAS service station`,
    `${office.country} Liferaft services`,
    `${office.country} LSA service`,
    `${office.country} Life saving equipment`,
    `${office.country} Pilot ladder inspection`,
    `${office.country} Fixed fire system maintenance`,
    `${office.country} Portable fire extinguisher service`,
    `${office.country} Breathing apparatus inspection`,
    `${office.country} EEBD inspection`,
    `${office.country} Gas detection system calibration`,
    `${office.country} Crane load testing`,
    `${office.country} Marine safety inspection`,
    `${office.country} Marine safety equipment supply`,
    `${office.country} Marine safety equipment repair`,
    `${office.country} Marine safety equipment maintenance`,
    `${office.country} Marine safety equipment calibration`,
    `${office.country} Marine safety equipment inspection`,
    `${office.country} Marine safety equipment service`,
    `${office.country} Fire extinguisher inspection`,
    `${office.country} Fire extinguisher service`,
    `${office.country} Fire extinguisher supply`,
    `${office.country} Fire extinguisher repair`,
    `${office.country} Fire extinguisher maintenance`,
    `${office.country} Fire extinguisher inspection`,
    `${office.country} Co2 system inspection`,
    `${office.country} Gas detector calibration`,
    `${office.country} Fire detection system calibration`,
    `${office.country} Fire alarm system calibration`,
    `${office.country} Fire alarm system repair`,
    `${office.country} Fire alarm system maintenance`,
    `${office.country} Fire alarm system inspection`,
    `${office.country} Fire alarm system service`,
    `${office.country} Fire alarm system supply`,
    `${office.country} Fire alarm system repair`,
    `${office.country} Fire hose testing`,
    `${office.country} Fire nozzle testing`,
    `${office.country} Fire pump testing`,
    `${office.country} Fire pump maintenance`,
    `${office.country} Fire pump inspection`,
    `${office.country} Fire pump service`,
    `${office.country} Fire pump supply`,
    `${office.country} Fire pump repair`,
    `${office.country} Fire pump maintenance`,
    `${office.country} Foam quality testing`,
    `${office.country} Foam analysis`,
    `${office.country} Self contained breathing apparatus inspection`,
    `${office.country} Self contained breathing apparatus service`,
    `${office.country} Self contained breathing apparatus supply`,
    `${office.country} Self contained breathing apparatus repair`,
    `${office.country} Self contained breathing apparatus maintenance`,
    `${office.country} Self contained breathing apparatus inspection`,
    `${office.country} Self contained breathing apparatus service`,
    `${office.country} Self contained breathing apparatus supply`,
    `${office.country} Self contained breathing apparatus repair`,
    `${office.country} Self contained breathing apparatus maintenance`,
    `${office.country} Emergency escape breathing apparatus inspection`,
    `${office.country} Emergency escape breathing apparatus service`,
    `${office.country} Emergency escape breathing apparatus supply`,
    `${office.country} Emergency escape breathing apparatus repair`,
    `${office.country} Emergency escape breathing apparatus maintenance`,
    `${office.country} Emergency escape breathing apparatus inspection`,
    `${office.country} Emergency escape breathing apparatus service`,
    `${office.country} Emergency escape breathing apparatus supply`,
    `${office.country} Emergency escape breathing apparatus repair`,
    `${office.country} Inflatable lifejackets inspection`,
    `${office.country} Inflatable lifejackets service`,
    `${office.country} Inflatable lifejackets supply`,
    `${office.country} Inflatable lifejackets repair`,
    `${office.country} Inflatable lifejackets maintenance`,
    `${office.country} Inflatable lifejackets inspection`,
    `${office.country} Inflatable lifejackets service`,
    `${office.country} Inflatable lifejackets supply`,
    `${office.country} Immersion suit inspection`,
    `${office.country} Immersion suit service`,
    `${office.country} Immersion suit supply`,
    `${office.country} Immersion suit repair`,
    `${office.country} Immersion suit maintenance`,
    `${office.country} Immersion suit inspection`,
    `${office.country} Immersion suit service`,
    `${office.country} Immersion suit supply`,
    `${office.country} Chemical suit inspection`,
    `${office.country} Chemical suit service`,
    `${office.country} Chemical suit supply`,
    `${office.country} Chemical suit repair`,
    `${office.country} Chemical suit maintenance`,
    `${office.country} Chemical suit inspection`,
    `${office.country} Chemical suit service`,
    `${office.country} Chemical suit supply`,
    `${office.country} Chemical suit repair`,
    `${office.country} Fireman suit inspection`,
    `${office.country} Fireman suit service`,
    `${office.country} Fireman suit supply`,
    `${office.country} Fireman suit repair`,
    `${office.country} Fireman suit maintenance`,
    `${office.country} Fireman suit inspection`,
    `${office.country} Fireman suit service`,
    `${office.country} Fireman suit supply`,
    `${office.country} Fireman suit repair`,
    `${office.country} Life saving equipment inspection`,
    `${office.country} Life saving equipment service`,
    `${office.country} Life saving equipment supply`,
    `${office.country} Life saving equipment repair`,
    `${office.country} Life saving equipment maintenance`,
    `${office.country} Life saving equipment inspection`,
    `${office.country} Life saving equipment service`,
    `${office.country} Life saving equipment supply`,
    `${office.country} Life saving equipment repair`,
    `${office.country} Rescue boat inspection`,
    `${office.country} Rescue boat service`,
    `${office.country} Rescue boat supply`,
    `${office.country} Rescue boat repair`,
    `${office.country} Rescue boat maintenance`,
    `${office.country} Rescue boat inspection`,
    `${office.country} Rescue boat service`,
    `${office.country} Rescue boat supply`,
    `${office.country} Rescue boat repair`,
    `${office.country} Free fall boat inspection`,
    `${office.country} Free fall boat service`,
    `${office.country} Free fall boat supply`,
    `${office.country} Free fall boat repair`,
    `${office.country} Free fall boat maintenance`,
    `${office.country} Free fall boat inspection`,
    `${office.country} Free fall boat service`,
    `${office.country} Free fall boat supply`,
    `${office.country} Fire pump maintenance`

  ].filter(Boolean);

  const canonicalUrl = seo.canonical || `${siteUrl}/locations/${location.slug}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'website',
      url: canonicalUrl,
      locale: 'en_US',
      siteName: 'Task-in Services',
      images: [
        {
          url: `${siteUrl}/main-assets/img/logo-white.svg`,
          width: 600,
          height: 315,
          alt: 'Task-in Services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [`${siteUrl}/main-assets/img/logo-white.svg`],
    },
  };
}

const ListCard = ({ title, items }) => (
  <div className="feature-card" style={{ padding: '28px 24px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', height: '100%' }}>
    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>{title}</h3>
    <ul style={{ paddingLeft: '18px', margin: 0, color: '#475569', lineHeight: 1.6 }}>
      {items.map((item) => (
        <li key={item} style={{ marginBottom: '10px' }}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const LocationHero = ({ location }) => {
  const { office, intro } = location;
  return (
    <section className="location-hero" style={{ padding: '110px 0 90px', background: '#0f172a', color: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-12">
            <p style={{ color: '#38bdf8', fontWeight: 600, letterSpacing: '0.12em', marginBottom: '16px' }}>
              {location.primaryKeyword.toUpperCase()}
            </p>
            <h1 style={{ fontSize: '42px', lineHeight: 1.2, marginBottom: '18px', fontWeight: 700, color: '#ffffff' }}>{location.seo.title}</h1>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#cbd5f5', marginBottom: '26px' }}>{intro.summary}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <a
                href={`tel:${office.phone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  borderRadius: '900px',
                  backgroundColor: '#38bdf8',
                  color: '#0f172a',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                Call {office.phone}
              </a>
              <a
                href={`mailto:${office.email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  borderRadius: '900px',
                  border: '1px solid rgba(148, 163, 184, 0.5)',
                  color: '#e2e8f0',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Email {office.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LocationDetails = ({ location }) => {
  const { office, services, coverage } = location;

  return (
    <section className="space">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div style={{ padding: '32px', borderRadius: '16px', backgroundColor: '#ffffff', boxShadow: '0 25px 60px -30px rgba(15, 23, 42, 0.35)', border: '1px solid #e2e8f0', height: '100%' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '18px' }}>Service Station</h3>
              <div style={{ display: 'grid', gap: '12px', color: '#475569', lineHeight: 1.6 }}>
                <div><strong>Address:</strong> {office.addressLine1}</div>
                <div><strong>City / Region:</strong> {[office.city, office.region].filter(Boolean).join(', ')}</div>
                <div><strong>Postal Code:</strong> {office.postalCode || '—'}</div>
                <div><strong>Country:</strong> {office.country}</div>
                <div><strong>Contact:</strong> {office.contact}</div>
                <div><strong>Telephone:</strong> <a href={`tel:${office.phone}`} style={{ color: '#1d4ed8', textDecoration: 'none' }}>{office.phone}</a></div>
                {office.mobile && (
                  <div><strong>Mobile:</strong> <a href={`tel:${office.mobile}`} style={{ color: '#1d4ed8', textDecoration: 'none' }}>{office.mobile}</a></div>
                )}
                <div><strong>Email:</strong> <a href={`mailto:${office.email}`} style={{ color: '#1d4ed8', textDecoration: 'none' }}>{office.email}</a></div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="ratio ratio-16x9" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 60px -30px rgba(15, 23, 42, 0.35)', border: '1px solid #e2e8f0' }}>
              <iframe
                src={location.mapEmbedUrl}
                title={`${office.name} map`}
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="row gy-4" style={{ marginTop: '48px' }}>
          <div className="col-lg-6">
            <ListCard title="Core Services" items={services} />
          </div>
          <div className="col-lg-6">
            <div style={{ padding: '28px 24px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', height: '100%' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>{coverage.title}</h3>
              <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>
                {location.harbours && location.harbours.length > 0 
                  ? [...coverage.ports, ...location.harbours].join(', ')
                  : coverage.ports.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function LocationDetailPage({ params }) {
  const location = getLocationBySlug(params.slug);

  if (!location) {
    notFound();
  }

  const { intro, seo, office } = location;


  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: office.name,
    description: seo.description,
    url: seo.canonical || `${siteUrl}/locations/${location.slug}`,
    image: `${siteUrl}/main-assets/img/logo-white.svg`,
    telephone: office.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.addressLine1,
      addressLocality: office.city,
      addressRegion: office.region,
      postalCode: office.postalCode,
      addressCountry: office.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.geo.lat,
      longitude: location.geo.lng,
    },
    serviceArea: location.coverage?.ports?.map((port) => ({
      '@type': 'Place',
      name: port,
    })),
    areaServed: location.coverage?.ports,
    sameAs: [
      'https://www.linkedin.com/company/task-in-services/',
      'https://www.facebook.com/taskinservices',
    ],
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <HeaderFour />
      <Breadcumb title={intro.headline} bgImage="/main-assets/image/locations-bg.jpg" bgPosition="center 25%" />
      <LocationHero location={location} />
      <LocationDetails location={location} />
      <FooterThree />
      <Scroll />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    </div>
  );
}


