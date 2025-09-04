import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Précharger les ressources critiques
    const preloadCriticalResources = () => {
      // Précharger les polices
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Précharger les icônes critiques
      const iconLink = document.createElement('link');
      iconLink.rel = 'modulepreload';
      iconLink.href = '/src/components/SearchBar.tsx';
      document.head.appendChild(iconLink);
    };

    // Optimiser les images lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[loading="lazy"]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
              }
            }
          });
        }, {
          rootMargin: '50px 0px'
        });

        images.forEach((img) => imageObserver.observe(img));
      }
    };

    // Différer les scripts non critiques
    const deferNonCriticalScripts = () => {
      // Différer Google Analytics si présent
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach((script) => {
        const newScript = document.createElement('script');
        newScript.src = script.getAttribute('src') || '';
        newScript.async = true;
        document.head.appendChild(newScript);
      });
    };

    // Optimiser le cache du navigateur
    const optimizeBrowserCache = () => {
      // Ajouter des headers de cache via meta tags
      const cacheMetaTag = document.createElement('meta');
      cacheMetaTag.httpEquiv = 'Cache-Control';
      cacheMetaTag.content = 'public, max-age=31536000';
      document.head.appendChild(cacheMetaTag);
    };

    // Exécuter les optimisations
    preloadCriticalResources();
    optimizeImages();
    deferNonCriticalScripts();
    optimizeBrowserCache();

    // Mesurer les Core Web Vitals
    const measureWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      } catch (error) {
        console.log('Web Vitals not available');
      }
    };

    // Mesurer après le chargement complet
    if (document.readyState === 'complete') {
      measureWebVitals();
    } else {
      window.addEventListener('load', measureWebVitals);
    }

    return () => {
      window.removeEventListener('load', measureWebVitals);
    };
  }, []);

  return null; // Ce composant n'affiche rien
};

export default PerformanceOptimizer;