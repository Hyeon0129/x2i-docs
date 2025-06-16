import React, { useState } from 'react';
import OriginalDocSidebar from '@theme-original/DocSidebar';

export default function DocSidebar(props) {
  const [isDiscordHovered, setIsDiscordHovered] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* 스크롤 가능한 메뉴 영역 */}
      
      <div 
      className="sidebar-scrollable"
      style={{ flexGrow: 1, overflowY: 'auto', overflowX: 'hidden'}}>
        <OriginalDocSidebar {...props} />
      </div>

      {/* Build Version */}
      <div style={{
        width: '100%',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '0.6rem 0rem',
        color: '#aaa',
        fontSize: '0.88rem',
        fontWeight: '400',
        paddingLeft: '1.5rem',
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span>Build Version:</span>
          <span style={{ color: '#16A34A', fontWeight: '500' }}>v1.1.3</span>
        </div>
      </div>

      {/* 연락처 */}
      <div style={{
        borderTop: '1px solid #333',
        lineHeight: '1.9',
        padding: '1.5rem 1rem 1.4rem 1.5rem',
        fontSize: '0.85rem',
        color: '#aaa',
      }}>
        {/* Discord */}
        <a
          href="https://discord.gg/tenstorrent"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: isDiscordHovered ? '#fff' : '#aaa',
            fontWeight: '400',
            transition: 'color 0.2s',
          }}
          onMouseEnter={() => setIsDiscordHovered(true)}
          onMouseLeave={() => setIsDiscordHovered(false)}
        >
          <img
            src="/img/discord.svg"
            alt="Discord Icon"
            width="22"
            style={{
              filter: isDiscordHovered ? 'invert(100%)' : 'invert(60%)',
              transition: 'filter 0.2s',
            }}
          />
          Tenstorrent Developer Discord
        </a>

        {/* Email */}
        <a
          href="mailto:taehyeon@example.com"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginTop: '0.6rem',
            textDecoration: 'none',
            color: isEmailHovered ? '#fff' : '#aaa',
            fontWeight: '400',
            transition: 'color 0.2s',
          }}
          onMouseEnter={() => setIsEmailHovered(true)}
          onMouseLeave={() => setIsEmailHovered(false)}
        >
          <img
            src="/img/email.svg"
            alt="Email Icon"
            width="24"
            style={{
              filter: isEmailHovered ? 'invert(100%)' : 'invert(60%)',
              transition: 'filter 0.2s',
            }}
          />
          Email Support
        </a>
      </div>
    </div>
  );
}
