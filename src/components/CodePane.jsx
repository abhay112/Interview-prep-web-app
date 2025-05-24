import React from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodePane({ files = [] , link}) {
  if (!Array.isArray(files) || files.length === 0) {
    return <div>Loading code...</div>;
  }

  return (
    <div style={{
      height: 'fit-content',
      overflowY: 'auto',
      padding: 16,
      background: 'var(--surface)',
      borderRadius: 'var(--border-radius)',
      boxShadow: '0 1px 8px #0002'
    }}>
       {link && (
        <div style={{ marginBottom: 16 }}>
          <Link to={link} style={{ color: 'var(--primary-accent)', fontWeight: 600 }}>
            Open this question as a page
          </Link>
        </div>
      )}
      {files.map((fileObj, idx) => (
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
      ))}
    </div>
  );
}
