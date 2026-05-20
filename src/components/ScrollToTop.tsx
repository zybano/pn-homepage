import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToHash = () => {
      if (hash) {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          target.scrollIntoView({ block: 'start' });
          return true;
        }

        return false;
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      return true;
    };

    const requestRef = requestAnimationFrame(() => {
      if (scrollToHash()) {
        return;
      }

      window.setTimeout(scrollToHash, 100);
    });

    return () => cancelAnimationFrame(requestRef);
  }, [hash, pathname]);

  return null;
};

export default ScrollToTop;
