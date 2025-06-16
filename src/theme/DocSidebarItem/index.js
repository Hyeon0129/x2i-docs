import React from 'react';
import OriginalDocSidebarItem from '@theme-original/DocSidebarItem';

export default function DocSidebarItemWrapper(props) {
  const isNew = props.item?.customProps?.isNew;

  return (
    <div style={{ position: 'relative' }}>
      <OriginalDocSidebarItem {...props} />
      {isNew && (
        <span
        style={{
          position: 'absolute',
          top: '50%',
          right: '0.9rem',
          transform: 'translateY(-50%)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          backgroundColor: '#fff', 
          color: '#000',
          fontSize: '11px',
          fontWeight: 400,
          padding: '0 6px',
          borderRadius: '9999px',
          whiteSpace: 'nowrap',
          border: '1px solid transparent', 
        }}
        >
          new
        </span>
      )}
    </div>
  );
}
