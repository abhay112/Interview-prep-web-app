// src/components/CenteredDarkPage.jsx
import React from 'react';

export default function CenteredDarkPage({ children }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--background)',
      color: 'var(--text)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <div style={{
        background: 'var(--surface)',
        borderRadius: 'var(--border-radius)',
        boxShadow: '0 2px 12px #0003',
        padding: 32,
        minWidth: 360,
        maxWidth: 600,
        width: '100%'
      }}>
        {children}
      </div>
    </div>
  );
}
