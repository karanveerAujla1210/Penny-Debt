import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0070f3",
        color: "white",
        padding: "40px 20px",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: "40px",
      }}
    >
      <div style={{ flex: "1 1 250px", minWidth: "200px" }}>
        <h3>Penny & Debt</h3>
        <p>
          Helping you manage your debt and take back control of your finances.
        </p>
      </div>

      <div style={{ flex: "1 1 200px", minWidth: "180px" }}>
        <h4>Contact</h4>
        <address style={{ lineHeight: "1.6" }}>
          <div>Email: <a href="mailto:care@pennyanddebt.in" style={{ color: "white" }}>care@pennyanddebt.in</a></div>
          <div>Phone: <a href="tel:+919773921023" style={{ color: "white" }}>+91 9773921023</a></div>
        </address>
      </div>

      <div style={{ flex: "1 1 150px", minWidth: "150px" }}>
        <h4>Legal</h4>
        <p>
          <Link to="/terms" style={{ color: "white", textDecoration: "underline" }}>
            Terms & Conditions
          </Link>
          <br />
          <Link to="/privacy" style={{ color: "white", textDecoration: "underline" }}>
            Privacy Policy
          </Link>
        </p>
      </div>

      <div style={{ flex: "1 1 150px", minWidth: "150px" }}>
        <h4>Follow Us</h4>
        <p>
          <a href="https://www.instagram.com/pennydebt_?igsh=MWs3Mm1ic3k5djF0YQ==" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
            Instagram
          </a>
          <br />
          <a href="https://www.linkedin.com/company/pennydebt/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
            LinkedIn
          </a>
          <br />
          <a href="https://x.com/pennydebt" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
            X (Twitter)
          </a>
          <br />
          <a href="https://facebook.com/pennydebt" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
            Facebook
          </a>
        </p>
      </div>
    </footer>
  );
}
