// src/hooks/useAnalytics.ts
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackEvent } from '../utils/analytics';

// Hook to automatically track page views
export const usePageTracking = () => {
  const location = useLocation();
  const startTime = useRef<number>(Date.now());

  useEffect(() => {
    // Track when entering a new page
    const pageName = getPageName(location.pathname);
    trackPageView(window.location.href, pageName);
    startTime.current = Date.now();

    // Track when leaving the page
    return () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      if (timeSpent > 5) { // Only if user stayed more than 5 seconds
        trackEvent('time_on_page', {
          category: 'engagement',
          label: pageName,
          value: timeSpent,
          page_name: pageName,
          time_seconds: timeSpent,
        });
      }
    };
  }, [location]);
};

// Convert pathname to friendly page name
const getPageName = (pathname: string): string => {
  const pageNames: { [key: string]: string } = {
    '/': 'Home Page',
    '/ProductsPage': 'Programs Page',
    '/PracticalTrainingPage': 'Practical Training',
    '/TestimonialsPage': 'Testimonials',
    '/Team': 'Team',
    '/About': 'About',
    '/Contact': 'Contact',
    '/FAQs': 'FAQs',
    '/Gallery': 'Gallery',
    '/Videos': 'Videos',
  };
  
  return pageNames[pathname] || `Page ${pathname}`;
};

// Hook to track scroll depth
export const useScrollTracking = () => {
  useEffect(() => {
    let maxScrollDepth = 0;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (documentHeight === 0) return; // Prevent division by zero
      
      const scrollPercent = Math.round((scrollTop / documentHeight) * 100);
      
      // Track every 25% scroll milestone
      if (scrollPercent > maxScrollDepth && scrollPercent % 25 === 0 && scrollPercent <= 100) {
        maxScrollDepth = scrollPercent;
        trackEvent('scroll_depth', {
          category: 'engagement',
          label: `${scrollPercent}%`,
          value: scrollPercent,
          scroll_depth: scrollPercent,
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};