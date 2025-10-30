'use client';

/**
 * Cookie Declaration Component
 * Cookiebot'in cookie bildirimi modalını gösterir
 */
export default function CookieDeclaration() {
  const handleShowCookieSettings = () => {
    // Cookiebot API'si hazır olup olmadığını kontrol et
    if (typeof window !== 'undefined' && window.Cookiebot) {
      // Cookiebot'un tüm API'sinin yüklendiğinden emin ol
      try {
        if (typeof window.Cookiebot.show === 'function') {
          window.Cookiebot.show();
        } else {
          // Eğer API henüz hazır değilse, biraz bekle ve tekrar dene
          setTimeout(() => {
            if (window.Cookiebot && typeof window.Cookiebot.show === 'function') {
              window.Cookiebot.show();
            }
          }, 100);
        }
      } catch (error) {
        // Hata durumunda sessizce devam et
      }
    }
  };

  return (
    <button
      type="button"
      className="cookie-declaration-btn"
      onClick={handleShowCookieSettings}
      style={{
        background: '#0066cc',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px',
      }}
    >
      Cookie Ayarları
    </button>
  );
}
