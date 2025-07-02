// src/utils/analytics.ts
// Global type definitions for Google Analytics
declare global {
    interface Window {
      gtag?: (...args: any[]) => void;
      dataLayer?: any[];
    }
  }
  
  // Your Google Analytics 4 Measurement ID
  export const GA_MEASUREMENT_ID = 'G-PLJH4H2XPM';
  
  // Initialize Google Analytics 4
  export const initGA = () => {
    if (typeof window !== 'undefined') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
  
      // Initialize gtag function
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      
      // Configure Google Analytics
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });
  
      console.log('🔥 Google Analytics 4 activated!');
    }
  };
  
  // Track page views
  export const trackPageView = (url: string, title: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: title,
        page_location: url,
      });
      
      window.gtag('event', 'page_view', {
        page_title: title,
        page_location: url,
      });
    }
  };
  
  // Track custom events
  export const trackEvent = (
    eventName: string,
    parameters?: {
      category?: string;
      label?: string;
      value?: number;
      [key: string]: any;
    }
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: parameters?.category || 'engagement',
        event_label: parameters?.label || '',
        value: parameters?.value || 0,
        ...parameters,
      });
    }
  };
  
  // Track form submissions
  export const trackFormSubmit = (formName: string, success: boolean = true) => {
    trackEvent('form_submit', {
      category: 'form',
      label: formName,
      value: success ? 1 : 0,
      form_name: formName,
      success: success,
    });
  };
  
  // Track button clicks
  export const trackButtonClick = (buttonName: string, location: string) => {
    trackEvent('button_click', {
      category: 'engagement',
      label: buttonName,
      button_name: buttonName,
      button_location: location,
    });
  };
  
  // Track WhatsApp clicks
  export const trackWhatsAppClick = (source: string) => {
    trackEvent('whatsapp_click', {
      category: 'contact',
      label: source,
      contact_method: 'whatsapp',
      source: source,
    });
  };