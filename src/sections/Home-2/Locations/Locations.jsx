'use client';
import { useState, useEffect, useRef } from 'react';

// Task-In Services office locations
const officeLocations = [
  {
    id: 1,
    name: "Task-In Services (Headquarters)",
    address: "Koolhovenstraat 1",
    city: "3125 BT Schiedam",
    country: "Netherlands",
    phone: "+31 6 22 81 23 33",
    email: "info@taskinservices.com",
    contact: "Kemal Taskin – Managing Director",
    coordinates: { lat: 51.93385881017964, lng: 4.400146358946731 },
    //services: ["Marine Services", "Port Operations", "Logistics", "Management"]
  },
  {
    id: 2,
    name: "Task-In Baltic Services Oy",
    address: "Tiiriskankaantie 8",
    city: "15860 Hollola",
    country: "Finland",
    phone: "+358 44 902 38 53",
    email: "baltic@taskinservices.com",
    contact: "Capt. Egemen Bal – Branch Manager",
    coordinates: { lat: 61.00221998376059, lng: 25.539972131084586 },
    //services: ["Baltic Operations", "Marine Services", "Port Management"]
  },
  {
    id: 3,
    name: "Task-In Germany",
    address: "Theodor-Storm-Straße 1",
    city: "21218 Seevetal",
    country: "Germany",
    phone: "+49 15 25 68 59 134",
    email: "germany@taskinservices.com",
    contact: "Alper Kabaca – Branch Manager",
    coordinates: { lat: 53.383758289802365, lng: 9.988224654570441 },
    //services: ["European Operations", "Marine Services", "Logistics"]
  },
  {
    id: 4,
    name: "Task-In USA",
    address: "108 Alliant Dr Suite B",
    city: "Houston, TX 77032",
    country: "United States",
    phone: "+1 713 682 9324",
    mobile: "+1 281 348 6929",
    email: "ops@taskinusa.com",
    contact: "Cem Kara – Branch Manager",
    coordinates: { lat: 29.931808702304476, lng: -95.31948843727211 },
    //services: ["US Operations", "Marine Services", "Port Services", "Logistics"]
  }
];

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [InfoWindowClass, setInfoWindowClass] = useState(null);
  const [error, setError] = useState(null);
  const mapRef = useRef(null);
  const infoWindowRef = useRef(null);

  // Google Maps yükleme
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // API key kontrolü
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    
    if (!apiKey) {
      setError('Google Maps API key is not configured');
      setIsLoading(false);
      return;
    }

    // Google Maps script'i yükle
    const loadGoogleMapsScript = () => {
      return new Promise((resolve, reject) => {
        // Eğer zaten yüklenmişse
        if (window.google && window.google.maps) {
          resolve();
          return;
        }

        // Script tag oluştur
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&v=weekly&language=en&region=US`;
        script.async = true;
        script.defer = true;
        
        script.onload = () => {
          resolve();
        };
        
        script.onerror = (error) => {
          reject(error);
        };
        
        document.head.appendChild(script);
      });
    };

    // Google Maps'i yükle ve haritayı oluştur
    loadGoogleMapsScript()
      .then(() => {
        // Kısa bir gecikme verelim ki DOM tam render edilsin
        setTimeout(() => {
          if (!mapRef.current) {
            setError('Map container not found');
            setIsLoading(false);
            return;
          }

          try {
            const { Map, Marker, InfoWindow, Size } = window.google.maps;
            
            const googleMap = new Map(mapRef.current, {
              center: { lat: 54.0, lng: 10.0 }, // Europe center
              zoom: 4,
              language: 'en',
              region: 'US',
              styles: [
                {
                  
                  featureType: 'all',
                  elementType: 'geometry.fill',
                  stylers: [{ weight: '2.00' }]
                }
              ]
            });
            
            setMap(googleMap);
            setInfoWindowClass(() => InfoWindow);
            createMarkers(googleMap, Marker, InfoWindow, Size);
            
            // Haritayı resize et
            setTimeout(() => {
              window.google.maps.event.trigger(googleMap, 'resize');
            }, 200);
            
            setIsLoading(false);
            setError(null);
          } catch (mapError) {
            setError(`Failed to create map: ${mapError.message}`);
            setIsLoading(false);
          }
        }, 100);
        
      })
      .catch((err) => {
        setError(`Failed to load Google Maps: ${err.message}`);
        setIsLoading(false);
      });
  }, []);

  // Harita işaretleyicilerini oluştur
  const createMarkers = (googleMap, Marker, InfoWindow, Size) => {
    const newMarkers = officeLocations.map((location) => {
      const marker = new Marker({
        position: location.coordinates,
        map: googleMap,
        title: location.name,
        icon: {
          // Custom pin SVG without number; keeps UI clean as requested
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.25"/>
                </filter>
              </defs>
              <g filter="url(#shadow)">
                <path d="M18 2c-6.075 0-11 4.925-11 11 0 7.5 9.5 19 10.09 19.73a1.2 1.2 0 0 0 1.82 0C19.5 32 29 20.5 29 13 29 6.925 24.075 2 18 2z" fill="#27617A" stroke="#ffffff" stroke-width="2"/>
                <circle cx="18" cy="13" r="4.5" fill="#ffffff"/>
              </g>
            </svg>
          `),
          scaledSize: new Size(48, 48),
          // Anchor at the tip of the pin
          anchor: new window.google.maps.Point(18, 36)
        }
      });

      // Marker tıklama olayı
      marker.addListener('click', () => {
        setSelectedLocation(location);
        showInfoWindow(googleMap, marker, location);
      });

      return marker;
    });

    setMarkers(newMarkers);
  };

  // Bilgi penceresi göster
  const showInfoWindow = (googleMap, marker, location) => {
    if (!InfoWindowClass) return;
    
    // Önceki açık infoWindow'u kapat
    if (infoWindowRef.current) {
      infoWindowRef.current.close();
    }

    const infoWindowInstance = new InfoWindowClass({
      content: `
        <div style="padding: 20px; max-width: 350px; font-family: Arial, sans-serif; border-radius: 8px;">
          <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 20px; font-weight: bold; line-height: 1.2;">${location.name}</h3>
          <div style="margin-bottom: 12px; font-size: 14px; color: #4b5563; line-height: 1.4;">
            <div style="margin-bottom: 4px;"><strong>Address:</strong> ${location.address}</div>
            <div style="margin-bottom: 4px;"><strong>City:</strong> ${location.city}</div>
            <div><strong>Country:</strong> ${location.country}</div>
          </div>
          <div style="margin-bottom: 12px; font-size: 14px; color: #4b5563; line-height: 1.4;">
            <div style="margin-bottom: 4px;"><strong>Contact:</strong> ${location.contact}</div>
            <div style="margin-bottom: 4px;"><strong>Phone:</strong> <a href="tel:${location.phone}" style="color: #3B82F6; text-decoration: none;">${location.phone}</a></div>
            ${location.mobile ? `<div style="margin-bottom: 4px;"><strong>Mobile:</strong> <a href="tel:${location.mobile}" style="color: #3B82F6; text-decoration: none;">${location.mobile}</a></div>` : ''}
            <div><strong>Email:</strong> <a href="mailto:${location.email}" style="color: #3B82F6; text-decoration: none;">${location.email}</a></div>
          </div>
        </div>
      `
    });

    infoWindowInstance.open(googleMap, marker);
    infoWindowRef.current = infoWindowInstance;
  };

  // Adres tıklama fonksiyonu
  const handleAddressClick = (location) => {
    setSelectedLocation(location);
    
    if (map) {
      // Haritayı resize et
      setTimeout(() => {
        window.google.maps.event.trigger(map, 'resize');
      }, 100);
      
      // Haritayı seçilen konuma odakla
      map.setCenter(location.coordinates);
      map.setZoom(12);
      
      // İlgili marker'ı bul ve bilgi penceresini aç
      const marker = markers.find(m => {
        const pos = m.getPosition();
        return Math.abs(pos.lat() - location.coordinates.lat) < 0.001 &&
               Math.abs(pos.lng() - location.coordinates.lng) < 0.001;
      });
      if (marker) {
        showInfoWindow(map, marker, location);
      }
    }
  };

  return (
    <div className="locations-area-2 space overflow-hidden shape-mockup-wrap" id="locations-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="title-area mb-60 text-center">
              <h2 className="sec-title">OUR LOCATIONS</h2>
              <p className="sec-text" style={{ lineHeight: '1.5', textAlign: 'center' }}>
              Task-in Services is a globally operating marine safety service provider headquartered in the Netherlands, with three 
              strategically located branches. We extend our services across 60 ports in ARA, Europe, Scandinavia and the Baltics, and USA, providing fast, regulation-compliant support wherever needed.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ padding: '0 15px', maxWidth: '100%' }}>
        <div className="row">
          <div className="col-12">
            <div className="map-container" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              height: '600px', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              {/* Sol Panel - Adres Listesi */}
              <div className="address-list-responsive" style={{ 
                width: '100%',
                height: '50%',
                backgroundColor: 'white', 
                overflowY: 'auto',
                borderBottom: '1px solid #e5e7eb'
              }}>
                <div style={{ 
                  padding: '20px', 
                  borderBottom: '1px solid #e5e7eb',
                  backgroundColor: '#f8fafc'
                }}>
                  <h3 style={{ 
                    margin: 0, 
                    fontSize: '18px', 
                    fontWeight: 'bold', 
                    color: '#1f2937' 
                  }}>
                    Office Locations
                  </h3>
                  <p style={{ 
                    margin: '8px 0 0 0', 
                    fontSize: '14px', 
                    color: '#6b7280' 
                  }}>
                    Click on any location to view details
                  </p>
                </div>
                
                {officeLocations.map((location) => (
                  <div 
                    key={location.id}
                    onClick={() => handleAddressClick(location)}
                    style={{
                      padding: '20px',
                      borderBottom: '1px solid #f3f4f6',
                      cursor: 'pointer',
                      backgroundColor: selectedLocation?.id === location.id ? '#eff6ff' : 'white',
                      transition: 'background-color 0.2s ease',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedLocation?.id !== location.id) {
                        e.currentTarget.style.backgroundColor = '#f8fafc';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedLocation?.id !== location.id) {
                        e.currentTarget.style.backgroundColor = 'white';
                      }
                    }}
                  >
                    {/* Seçili konum göstergesi */}
                    {selectedLocation?.id === location.id && (
                      <div style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        bottom: '0',
                        width: '4px',
                        backgroundColor: '#3B82F6'
                      }} />
                    )}
                    
                    <h4 style={{ 
                      margin: '0 0 8px 0', 
                      fontSize: '16px', 
                      fontWeight: 'bold',
                      color: '#1f2937'
                    }}>
                      {location.name}
                    </h4>
                    <p style={{ 
                      margin: '0 0 4px 0', 
                      fontSize: '14px', 
                      color: '#6b7280'
                    }}>
                      {location.address}
                    </p>
                    <p style={{ 
                      margin: '0 0 4px 0', 
                      fontSize: '14px', 
                      color: '#6b7280'
                    }}>
                      {location.city}
                    </p>
                    <p style={{ 
                      margin: '0', 
                      fontSize: '14px', 
                      color: '#6b7280'
                    }}>
                      {location.country}
                    </p>
                  </div>
                ))}
              </div>

              {/* Sağ Panel - Harita */}
              <div className="map-wrapper-responsive" style={{ width: '100%', height: '50%', position: 'relative', minHeight: '300px' }}>
                {/* Map container div'ini her zaman render et ki ref her zaman mevcut olsun */}
                <div 
                  ref={mapRef} 
                  id="google-map-container"
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    minHeight: '300px',
                    position: 'relative',
                    zIndex: 1
                  }}
                />
                
                {/* Loading overlay */}
                {isLoading && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f3f4f6',
                    color: '#6b7280',
                    zIndex: 2
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        border: '4px solid #e5e7eb',
                        borderTop: '4px solid #3B82F6',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite',
                        margin: '0 auto 16px'
                      }} />
                      <p>Loading map...</p>
                    </div>
                  </div>
                )}
                
                {/* Error overlay */}
                {error && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f3f4f6',
                    color: '#dc2626',
                    padding: '20px',
                    textAlign: 'center',
                    zIndex: 2
                  }}>
                    <div>
                      <p style={{ margin: 0, fontWeight: 'bold', marginBottom: '8px' }}>Map Error</p>
                      <p style={{ margin: 0, fontSize: '14px' }}>{error}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* CSS Animasyon ve Responsive */}
              <style jsx>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
                
                @media (min-width: 768px) {
                  .map-container {
                    flex-direction: row !important;
                    height: 600px !important;
                  }
                  
                  .address-list-responsive {
                    width: 25% !important;
                    height: 100% !important;
                    border-right: 1px solid #e5e7eb !important;
                    border-bottom: none !important;
                  }
                  
                  .map-wrapper-responsive {
                    width: 100% !important;
                    height: 100% !important;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;

