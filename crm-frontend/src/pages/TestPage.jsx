import React from 'react';
import { testConnection } from '../utils/testGoogleSheets';

const TestPage = () => {
  const handleTest = async () => {
    const result = await testConnection();
    alert(JSON.stringify(result, null, 2));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Segoe UI' }}>
      <h1>Google Sheets Test</h1>
      <button 
        onClick={handleTest}
        style={{
          padding: '10px 20px',
          background: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Test Google Sheets Connection
      </button>
      <p>Check browser console for detailed logs</p>
    </div>
  );
};

export default TestPage;