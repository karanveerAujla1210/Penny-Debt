import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

// Detect domain and load appropriate app
const hostname = window.location.hostname;
const isCRM = hostname.includes('crm');

// Dynamically import the correct app
const loadApp = async () => {
  if (isCRM) {
    const module = await import('../../crm/src/App.jsx');
    return <module.default />;
  } else {
    const module = await import('../../website/src/App.jsx');
    return <module.default />;
  }
};

// Root component
const Root = () => {
  const [App, setApp] = React.useState(null);

  React.useEffect(() => {
    loadApp().then(setApp);
  }, []);

  if (!App) return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
  return App;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
