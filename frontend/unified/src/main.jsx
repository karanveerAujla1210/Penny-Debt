import React from 'react';
import ReactDOM from 'react-dom/client';

// Detect domain and load appropriate app
const hostname = window.location.hostname;
const isCRM = hostname.includes('crm');

// Dynamically import the correct app
const loadApp = async () => {
  if (isCRM) {
    const { default: CRMApp } = await import('@crm/App.jsx');
    return <CRMApp />;
  } else {
    const { default: WebsiteApp } = await import('@website/App.jsx');
    return <WebsiteApp />;
  }
};

// Root component
const Root = () => {
  const [App, setApp] = React.useState(null);

  React.useEffect(() => {
    loadApp().then(setApp);
  }, []);

  if (!App) return <div>Loading...</div>;
  return App;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
