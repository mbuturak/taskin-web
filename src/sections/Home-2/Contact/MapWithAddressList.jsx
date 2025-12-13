'use client';
import { useState, useEffect, useRef } from 'react';
import { setOptions, importLibrary } from '@googlemaps/js-api-loader';

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
    services: ["Marine Services", "Port Operations", "Logistics", "Management"]
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
    services: ["Baltic Operations", "Marine Services", "Port Management"]
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
    services: ["European Operations", "Marine Services", "Logistics"]
  },
];

const MapWithAddressList = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [InfoWindowClass, setInfoWindowClass] = useState(null);
  const mapRef = useRef(null);
  const infoWindowRef = useRef(null);

  // Google Maps yükleme
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // API key kontrolü
    if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
      console.error('Google Maps API key is not defined');
      setIsLoading(false);
      return;
    }

    // API key'i ayarla
    setOptions({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: 'weekly'
    });

    // Maps ve Places kütüphanelerini yükle
    Promise.all([
      importLibrary('maps'),
      importLibrary('places')
    ]).then(([{ Map, Marker, InfoWindow, Size }]) => {
      if (!mapRef.current) {
        console.error('Map container is not available');
        setIsLoading(false);
        return;
      }

      const googleMap = new Map(mapRef.current, {
        center: { lat: 54.0, lng: 10.0 }, // Europe center
        zoom: 4,
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
      setIsLoading(false);
    }).catch((error) => {
      console.error('Error loading Google Maps:', error);
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
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="12" fill="#3B82F6" stroke="#ffffff" stroke-width="2"/>
              <text x="16" y="20" text-anchor="middle" fill="white" font-size="12" font-weight="bold">${location.id}</text>
            </svg>
          `),
          scaledSize: new Size(32, 32)
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
        <div style="padding: 15px; max-width: 300px; font-family: Arial, sans-serif;">
          <h3 style="margin: 0 0 10px 0; color: #1f2937; font-size: 18px; font-weight: bold;">${location.name}</h3>
          <div style="margin-bottom: 8px; font-size: 14px; color: #4b5563;">
            <strong>Address:</strong> ${location.address}<br>
            <strong>City:</strong> ${location.city}<br>
            <strong>Country:</strong> ${location.country}
          </div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #4b5563;">
            <strong>Contact:</strong> ${location.contact}<br>
            <strong>Phone:</strong> <a href="tel:${location.phone}" style="color: #3B82F6; text-decoration: none;">${location.phone}</a>${location.mobile ? `<br><strong>Mobile:</strong> <a href="tel:${location.mobile}" style="color: #3B82F6; text-decoration: none;">${location.mobile}</a>` : ''}<br>
            <strong>Email:</strong> <a href="mailto:${location.email}" style="color: #3B82F6; text-decoration: none;">${location.email}</a>
          </div>
          <div style="margin-bottom: 15px; font-size: 14px; color: #4b5563;">
            <strong>Services:</strong><br>
            ${location.services.map(service => `• ${service}`).join('<br>')}
          </div>
          <button style="background: #3B82F6; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; width: 100%; font-size: 14px; font-weight: bold;">
            REQUEST SERVICE
          </button>
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
      // Haritayı seçilen konuma odakla
      map.setCenter(location.coordinates);
      map.setZoom(12);
      
      // İlgili marker'ı bul ve bilgi penceresini aç
      const marker = markers.find(m => 
        Math.abs(m.getPosition().lat() - location.coordinates.lat) < 0.001 &&
        Math.abs(m.getPosition().lng() - location.coordinates.lng) < 0.001
      );
      if (marker) {
        showInfoWindow(map, marker, location);
      }
    }
  };

  return (
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
        height: '40%',
        backgroundColor: 'white', 
        overflowY: 'auto',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{ 
          padding: '20px', 
          borderBottom: '1px solid #e5e7eb',
          backgroundColor: '#f8fafc'
        }}>
          <h2 style={{ 
            margin: 0, 
            fontSize: '20px', 
            fontWeight: 'bold', 
            color: '#1f2937' 
          }}>
            OUR OFFICE LOCATIONS
          </h2>
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
            
            <h3 style={{ 
              margin: '0 0 8px 0', 
              fontSize: '16px', 
              fontWeight: 'bold',
              color: '#1f2937'
            }}>
              {location.name}
            </h3>
            <p style={{ 
              margin: '0 0 4px 0', 
              fontSize: '14px', 
              color: '#6b7280',
              textDecoration: 'underline'
            }}>
              {location.address}
            </p>
            <p style={{ 
              margin: '0 0 4px 0', 
              fontSize: '14px', 
              color: '#6b7280',
              textDecoration: 'underline'
            }}>
              {location.city}
            </p>
            <p style={{ 
              margin: '0', 
              fontSize: '14px', 
              color: '#6b7280',
              textDecoration: 'underline'
            }}>
              {location.country}
            </p>
          </div>
        ))}
      </div>

      {/* Sağ Panel - Harita */}
      <div className="map-wrapper-responsive" style={{ width: '100%', height: '60%', position: 'relative' }}>
        {isLoading ? (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            backgroundColor: '#f3f4f6',
            color: '#6b7280'
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
        ) : (
          <div 
            ref={mapRef} 
            style={{ width: '100%', height: '100%' }}
          />
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
          }
          
          .address-list-responsive {
            width: 35% !important;
            height: 100% !important;
            border-right: 1px solid #e5e7eb !important;
            border-bottom: none !important;
          }
          
          .map-wrapper-responsive {
            width: 65% !important;
            height: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MapWithAddressList;
