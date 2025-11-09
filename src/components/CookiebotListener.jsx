'use client';

import { useEffect } from 'react';

const CookiebotListener = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleAccept = () => {
      if (!window.Cookiebot || !window.Cookiebot.consent) return;
      if (window.Cookiebot.consent.marketing) {
        // Placeholder for marketing scripts that require consent.
      }
      if (window.Cookiebot.consent.statistics) {
        // Placeholder for analytics scripts that require consent.
      }
    };

    window.addEventListener('CookiebotOnAccept', handleAccept);
    return () => window.removeEventListener('CookiebotOnAccept', handleAccept);
  }, []);

  return null;
};

export default CookiebotListener;


