// Archived test page — moved to `_playground/Auth/IsolatedLogin.jsx`.
export { default } from '../_playground/Auth/IsolatedLogin';
          <button onClick={() => quickLogin('support@pennyanddebt.in', 'Support&2024!Help')} 
                  style={{ display: 'block', width: '100%', margin: '5px 0', padding: '10px', background: '#17a2b8', color: 'white', border: 'none', borderRadius: '5px' }}>
            Support Login
          </button>
        </div>

        <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
          <p>🔍 Check browser console for detailed logs</p>
          <p>📍 This uses inline authentication (no imports)</p>
        </div>
      </div>
    </div>
  );
};

export default IsolatedLogin;