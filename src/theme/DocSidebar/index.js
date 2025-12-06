import React, { useState } from 'react';
import OriginalDocSidebar from '@theme-original/DocSidebar';

export default function DocSidebar(props) {
  const [hover, setHover] = useState({
    github: false,
    linkedin: false,
    email: false,
  });

  const iconStyle = (key) => ({
    width: 18,
    height: 18,
    stroke: hover[key] ? '#ffffff' : 'rgba(255,255,255,0.55)',
    transition: 'stroke 0.2s ease',
  });

  const linkStyle = (key) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2px',
    color: hover[key] ? '#fff' : 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      
      {/* Main Scrollable Sidebar */}
      <div
        className="sidebar-scrollable"
        style={{
          flexGrow: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <OriginalDocSidebar {...props} />
      </div>

      {/* Last Updated */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '0.9rem 1.2rem 0.7rem',
          textAlign: 'center',
          fontSize: '0.78rem',
          color: 'rgba(255,255,255,0.65)',
        }}
      >
        <span>Last Updated:&nbsp;</span>
        <span style={{ color: '#16A34A', fontWeight: 500 }}>DEC 4, 2025</span>
      </div>

      {/* CONTACT ICONS – replaced with footer SVGs */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '0.9rem 1.2rem 1.1rem',
          display: 'flex',
          gap: '18px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* GitHub */}
        <a
          href="https://github.com/Hyeon0129"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={linkStyle('github')}
          onMouseEnter={() => setHover((h) => ({ ...h, github: true }))}
          onMouseLeave={() => setHover((h) => ({ ...h, github: false }))}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            style={iconStyle('github')}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={linkStyle('linkedin')}
          onMouseEnter={() => setHover((h) => ({ ...h, linkedin: true }))}
          onMouseLeave={() => setHover((h) => ({ ...h, linkedin: false }))}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            style={iconStyle('linkedin')}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:zhtmah6795@gmail.com"
          aria-label="Email"
          style={linkStyle('email')}
          onMouseEnter={() => setHover((h) => ({ ...h, email: true }))}
          onMouseLeave={() => setHover((h) => ({ ...h, email: false }))}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            style={iconStyle('email')}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
}