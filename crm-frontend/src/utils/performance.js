/**
 * Performance monitoring and optimization utilities
 */

// Track Web Vitals
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/**
 * Track performance metrics
 * @param {string} name - Name of the metric
 * @param {number} value - Value of the metric
 * @param {string} [category='Performance'] - Category of the metric
 */
const trackMetric = (name, value, category = 'Performance') => {
  // Send to analytics or monitoring service
  if (window.gtag) {
    window.gtag('event', 'perf_metric', {
      event_category: category,
      value: Math.round(name === 'CLS' ? value * 1000 : value), // Convert CLS to integer
      metric_id: name,
      metric_value: value,
      metric_delta: value,
    });
  }
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${name}:`, value);
  }
};

/**
 * Measure time taken by a function
 * @param {Function} fn - Function to measure
 * @param {string} name - Name of the measurement
 * @returns {*} - The result of the function
 */
const measure = (fn, name) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  
  trackMetric(name, end - start, 'Function Timing');
  return result;
};

/**
 * Debounce function to limit the rate at which a function can fire
 * @param {Function} func - Function to debounce
 * @param {number} wait - Time to wait in milliseconds
 * @returns {Function} - Debounced function
 */
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function to limit the rate at which a function can fire
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Check if the current device is a mobile device
 * @returns {boolean} - True if the device is a mobile device
 */
const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export {
  reportWebVitals,
  trackMetric,
  measure,
  debounce,
  throttle,
  isMobileDevice,
};
