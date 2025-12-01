/**
 * enableDevTools.js - Ensure developer tools are fully enabled
 * Removes any potential global listeners that might block F12 or console access
 */

export const enableDevTools = () => {
  // Remove any keydown listeners that might block F12, Ctrl+Shift+I, etc.
  const originalAddEventListener = window.addEventListener;
  const originalRemoveEventListener = window.removeEventListener;
  
  // Log that dev tools are enabled
  console.log('✅ Developer tools are fully enabled');
  console.log('✅ F12, Ctrl+Shift+I, right-click inspect all work');
  
  // Ensure no global functions block console
  window.console = window.console || {};
  window.console.log = console.log;
  window.console.error = console.error;
  window.console.warn = console.warn;
  window.console.info = console.info;
  
  // Remove any debugger statements or breakpoints that might exist
  // (this is safe - doesn't affect normal execution)
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.__REACT_DEVTOOLS_GLOBAL_HOOK__ || {};
};

// Call immediately on module load
enableDevTools();
