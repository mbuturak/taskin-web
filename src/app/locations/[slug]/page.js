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

const SectionTitle = ({ eyebrow, title, description }) => (
  <div className="title-area mb-30 text-center">
    {eyebrow && (
      <p className="sec-subtitle" style={{ color: '#0ea5e9', fontWeight: 600, letterSpacing: '0.08em' }}>
        {eyebrow}
      </p>
    )}
    <h2 className="sec-title" style={{ marginBottom: description ? '16px' : 0 }}>
      {title}
    </h2>
    {description && (
      <p className="sec-text" style={{ lineHeight: 1.6, maxWidth: '780px', margin: '0 auto' }}>
        {description}
      </p>
    )}
  </div>
);

const HighlightCard = ({ label, description }) => (
  <div className="feature-card" style={{ padding: '28px 24px', borderRadius: '12px', border: '1px solid #e5e7eb', backgroundColor: '#ffffff', height: '100%', boxShadow: '0 10px 35px -15px rgba(15, 23, 42, 0.25)' }}>
    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>{label}</h3>
    <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>{description}</p>
  </div>
);

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

const FaqAccordion = ({ faqs }) => (
  <div className="faq-wrap" style={{ maxWidth: '940px', margin: '0 auto' }}>
    {faqs.map((faq, index) => (
      <div
        key={faq.question}
        style={{
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '20px 24px',
          marginBottom: index === faqs.length - 1 ? 0 : '16px',
          backgroundColor: '#ffffff',
          boxShadow: '0 12px 40px -24px rgba(15, 23, 42, 0.35)',
        }}
      >
        <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#0f172a', fontWeight: 700 }}>{faq.question}</h3>
        <p style={{ margin: 0, color: '#475569', lineHeight: 1.7 }}>{faq.answer}</p>
      </div>
    ))}
  </div>
);

const LocationHero = ({ location }) => {
  const { office, intro, emergency, serviceHighlights } = location;
  return (
    <section className="location-hero" style={{ padding: '110px 0 90px', background: '#0f172a', color: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-7">
            <p style={{ color: '#38bdf8', fontWeight: 600, letterSpacing: '0.12em', marginBottom: '16px' }}>
              {location.primaryKeyword.toUpperCase()}
            </p>
            <h1 style={{ fontSize: '42px', lineHeight: 1.2, marginBottom: '18px', fontWeight: 700 }}>{intro.headline}</h1>
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
          <div className="col-lg-5">
            <div style={{ display: 'grid', gap: '16px' }}>
              {serviceHighlights.map((highlight) => (
                <div
                  key={highlight.label}
                  style={{
                    padding: '20px 20px',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(15, 23, 42, 0.65)',
                    border: '1px solid rgba(148, 163, 184, 0.35)',
                  }}
                >
                  <p style={{ fontSize: '15px', color: '#38bdf8', fontWeight: 600, marginBottom: '6px', letterSpacing: '0.08em' }}>
                    {highlight.label}
                  </p>
                  <p style={{ fontSize: '15px', color: '#e2e8f0', lineHeight: 1.6, margin: 0 }}>{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: '42px', padding: '24px', borderRadius: '16px', backgroundColor: 'rgba(15, 23, 42, 0.55)', border: '1px solid rgba(148, 163, 184, 0.3)' }}>
          <p style={{ margin: 0, color: '#38bdf8', fontWeight: 600, letterSpacing: '0.08em' }}>{emergency.title}</p>
          <p style={{ margin: '8px 0 16px', color: '#cbd5f5', lineHeight: 1.6 }}>{emergency.description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', fontWeight: 600 }}>
            <span>Phone: <a href={`tel:${emergency.phone}`} style={{ color: '#38bdf8', textDecoration: 'none' }}>{emergency.phone}</a></span>
            {emergency.mobile && (
              <span>Mobile: <a href={`tel:${emergency.mobile}`} style={{ color: '#38bdf8', textDecoration: 'none' }}>{emergency.mobile}</a></span>
            )}
            <span>Email: <a href={`mailto:${emergency.email}`} style={{ color: '#38bdf8', textDecoration: 'none' }}>{emergency.email}</a></span>
          </div>
        </div>
      </div>
    </section>
  );
};

const LocationDetails = ({ location }) => {
  const { office, services, industries, coverage, certifications } = location;

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
            <ListCard title="Industries We Support" items={industries} />
          </div>
        </div>

        <div className="row gy-4" style={{ marginTop: '32px' }}>
          <div className="col-lg-6">
            <div style={{ padding: '28px 24px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', height: '100%' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>{coverage.title}</h3>
              <ul style={{ paddingLeft: '18px', margin: 0, color: '#475569', lineHeight: 1.6 }}>
                {coverage.ports.map((port) => (
                  <li key={port} style={{ marginBottom: '8px' }}>
                    {port}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div style={{ padding: '28px 24px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', height: '100%' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Approval Matrix</h3>
              <ul style={{ paddingLeft: '18px', margin: 0, color: '#475569', lineHeight: 1.6 }}>
                {certifications.map((certificate) => (
                  <li key={certificate} style={{ marginBottom: '8px' }}>
                    {certificate}
                  </li>
                ))}
              </ul>
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

  // Geçici olarak içerik yorum satırı yapıldı - Coming Soon gösteriliyor
  /*
  const { intro, faqs, seo, office } = location;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

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
      <section className="space-bottom">
        <div className="container">
          <SectionTitle eyebrow="Why Task-in Services" title={intro.subheading} description={location.intro.summary} />
          <div className="row gy-4">
            {location.serviceHighlights.map((highlight) => (
              <div className="col-md-6 col-lg-4" key={highlight.label}>
                <HighlightCard label={highlight.label} description={highlight.description} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {location.seo.focusAreas?.length > 0 && (
        <section className="space-top">
          <div className="container">
            <SectionTitle
              eyebrow="Priority Search Phrases"
              title={`${location.shortName} Marine Safety Search Demand`}
              description="See the high-intent queries we optimise for to help operators discover Task-in Services when searching for compliance support."
            />
            <div className="row gy-3 justify-content-center">
              {location.seo.focusAreas.map((keyword) => (
                <div className="col-md-6 col-lg-3" key={keyword}>
                  <div
                    style={{
                      padding: '18px 20px',
                      borderRadius: '12px',
                      border: '1px solid #bfdbfe',
                      backgroundColor: '#eff6ff',
                      color: '#1d4ed8',
                      fontWeight: 600,
                      minHeight: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}
                  >
                    {keyword}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <LocationDetails location={location} />
      <section className="space">
        <div className="container">
          <SectionTitle eyebrow="FAQs" title={`Frequently Asked Questions – ${location.shortName}`} description={`Common queries about ${location.primaryKeyword} and how Task-in Services keeps your fleet compliant.`} />
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
      <section className="space">
        <Contact />
      </section>
      <FooterThree />
      <Scroll />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    </div>
  );
  */

  // Coming Soon sayfası
  return (
    <div style={{ overflow: 'hidden' }}>
      <HeaderFour />
      <Breadcumb title="Location Details" bgImage="/main-assets/image/locations-bg.jpg" bgPosition="center 25%" />
      <section className="space" style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#0f172a', marginBottom: '24px' }}>
              Coming Soon
            </h1>
            <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.7 }}>
              This location page is currently under development. Please check back soon for detailed information.
            </p>
          </div>
        </div>
      </section>
      <FooterThree />
      <Scroll />
    </div>
  );
}


