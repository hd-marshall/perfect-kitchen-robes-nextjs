// components/FontAwesomeScript.tsx
'use client';

import { useEffect } from 'react';

export default function FontAwesomeScript() {
  useEffect(() => {
    // Load Font Awesome script
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null;
}
