import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// You can pick any theme you like
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodePane({ code, fileContent }) {
  // Defensive: default to empty string if fileContent is undefined
  const content = typeof fileContent === 'string' ? fileContent : '';

  if (!code?.language || !content) {
    return <div>Loading code...</div>;
  }

  return (
    <div style={{ height: '100vh', }}>
      {code.file && (
        <div style={{ fontSize: '0.9em', color: '#888', marginBottom: 4 }}>
          <strong>File:</strong> {code.file}
        </div>
      )}
      <SyntaxHighlighter
        language={code.language}
        style={vscDarkPlus}
        showLineNumbers
        wrapLongLines
        customStyle={{ borderRadius: 8, fontSize: 14 }}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
}
