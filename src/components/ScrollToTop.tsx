import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Use requestAnimationFrame to ensure the scroll happens after the page has started rendering
    const requestRef = requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });

    return () => cancelAnimationFrame(requestRef);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
