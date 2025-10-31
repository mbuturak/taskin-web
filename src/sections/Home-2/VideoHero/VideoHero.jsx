'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

const VideoHero = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      // Sağ tıklamayı engelle
      const handleContextMenu = (e) => {
        e.preventDefault();
        return false;
      };

      // Klavye kontrollerini engelle
      const handleKeyDown = (e) => {
        e.preventDefault();
        return false;
      };

      // Video kontrollerini tamamen devre dışı bırak
      const handleClick = (e) => {
        e.preventDefault();
        return false;
      };

      iframe.addEventListener('contextmenu', handleContextMenu);
      iframe.addEventListener('keydown', handleKeyDown);
      iframe.addEventListener('click', handleClick);

      return () => {
        iframe.removeEventListener('contextmenu', handleContextMenu);
        iframe.removeEventListener('keydown', handleKeyDown);
        iframe.removeEventListener('click', handleClick);
      };
    }
  }, []);

  return (
    <div 
      className="video-hero-wrapper" 
      style={{ 
        width: '100vw', 
        height: '100vh', 
        position: 'relative',
        userSelect: 'none',
        // Butonların tıklanabilmesi için wrapper etkileşim açık
        pointerEvents: 'auto',
        overflow: 'hidden',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)'
      }}
      onContextMenu={(e) => e.preventDefault()}
      onKeyDown={(e) => e.preventDefault()}
    >
      {/* Koyu overlay - videonun üzerinde yarı saydam katman */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.45)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* İçerik katmanı - başlık ve butonlar */
      }
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          // Sola hizalama
          alignItems: 'flex-start',
          justifyContent: 'center',
          textAlign: 'left',
          padding: '0 24px',
          zIndex: 2
        }}
      >
        <h1
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(28px, 5vw, 56px)',
            lineHeight: 1.2,
            margin: 0,
            fontWeight: 700
          }}
        >
          {/* Typing effect wrapper */}
          <span className="typing">WE MAKE YOUR FLEET SAFER</span>
        </h1>

        <div
          style={{
            marginTop: 24,
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        >
          <Link href="/locations" legacyBehavior>
            <a
              style={{
                backgroundColor: 'transparent',
                color: '#fff',
                padding: '10px 18px',
                borderRadius: 6,
                fontWeight: 600,
                textDecoration: 'none',
                border: '1px solid #E5E7EB'
              }}
            >
              See our offices
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                padding: '10px 18px',
                borderRadius: 6,
                fontWeight: 600,
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.7)'
              }}
            >
              Contact us
            </a>
          </Link>
        </div>
      </div>

      <iframe
        ref={iframeRef}
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/xezBIVsGVVs?autoplay=1&mute=1&loop=1&playlist=xezBIVsGVVs&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&cc_load_policy=0&start=0&end=0&vq=hd1080&disablekb=1&playsinline=1&enablejsapi=0&origin=null"
        title="Hero Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={false}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100vw',
          height: '56.25vw', // 16:9 aspect ratio
          minHeight: '100vh',
          minWidth: '177.77vh', // 16:9 aspect ratio
          transform: 'translate(-50%, -50%)',
          border: 'none',
          outline: 'none',
          pointerEvents: 'none',
          userSelect: 'none',
          objectFit: 'cover'
        }}
        onContextMenu={(e) => e.preventDefault()}
        onKeyDown={(e) => e.preventDefault()}
        onMouseDown={(e) => e.preventDefault()}
        onMouseUp={(e) => e.preventDefault()}
        onMouseMove={(e) => e.preventDefault()}
        onDoubleClick={(e) => e.preventDefault()}
      />
      {/* Scoped styles for typing effect */}
      <style jsx>{`
        /* Typewriter effect and blinking caret */
        .typing {
          display: inline-block;
          overflow: hidden; /* Hide the overflowing characters while typing */
          white-space: nowrap; /* Prevent text wrapping */
          border-right: 2px solid rgba(255,255,255,0.9); /* Caret */
          /* 24ch matches the character count of the string including spaces */
          width: 0;
          animation: typing 2.4s steps(24, end) 0.2s forwards, blink 0.9s step-end infinite;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 24ch; }
        }

        @keyframes blink {
          from, to { border-color: transparent; }
          50% { border-color: rgba(255,255,255,0.9); }
        }

        /* Respect smaller screens: slightly thinner caret */
        @media (max-width: 480px) {
          .typing { border-right-width: 1.5px; }
        }
      `}</style>
    </div>
  );
};

export default VideoHero;
