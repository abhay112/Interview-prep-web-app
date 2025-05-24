/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function OutputPane({ screenshots = [] }) {
  const [openIdx, setOpenIdx] = useState(null);

  // Filter only valid image sources
  const images = Array.isArray(screenshots) ? screenshots.filter(src => typeof src === 'string') : [];

  const isOpen = openIdx !== null && images[openIdx];

  return (
    <div style={{
      height: '100%',
      overflowY: 'auto',
      padding: 16,
      background: 'var(--surface)',
      borderRadius: 'var(--border-radius)',
      boxShadow: '0 1px 8px #0002'
    }}>
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Screenshot ${idx + 1}`}
          style={{
            maxWidth: '100%',
            marginBottom: 16,
            border: '1px solid #ccc',
            borderRadius: 8,
            display: 'block',
            cursor: 'pointer'
          }}
          onClick={() => setOpenIdx(idx)}
        />
      ))}

      {isOpen && (
        <div
          onClick={() => setOpenIdx(null)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
        >
          <img
            src={images[openIdx]}
            alt={`Modal Screenshot ${openIdx + 1}`}
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: 8,
              boxShadow: '0 0 12px rgba(255,255,255,0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {screenshots.map((fileObj, idx) => (
        typeof fileObj === 'object' && fileObj !== null && fileObj.file ? (
          <div
            key={fileObj.file}
            style={{
              marginBottom: 32,
              background: idx % 2 === 0 ? 'rgba(100,108,255,0.03)' : 'rgba(97,218,251,0.02)',
              borderRadius: 8,
              padding: 16,
              boxShadow: '0 1px 6px #0001'
            }}
          >
            {fileObj.heading && (
              <div style={{
                fontWeight: 600,
                fontSize: 18,
                color: 'var(--primary-accent)',
                marginBottom: 8,
                letterSpacing: 0.5
              }}>
                {fileObj.heading}
              </div>
            )}
            <div style={{
              fontSize: '0.95em',
              color: '#888',
              marginBottom: 6
            }}>
              <strong>File:</strong> {fileObj.file}
            </div>
            <SyntaxHighlighter
              language={fileObj.language}
              style={vscDarkPlus}
              showLineNumbers
              wrapLongLines
              customStyle={{
                borderRadius: 8,
                fontSize: 14,
                margin: 0,
                background: 'var(--surface)'
              }}
            >
              {fileObj.content || 'Loading...'}
            </SyntaxHighlighter>
          </div>
        ) : null
      ))}
    </div>
  );
}
