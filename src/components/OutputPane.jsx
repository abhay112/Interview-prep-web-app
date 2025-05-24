import React from 'react';

export default function OutputPane({ screenshots = [] }) {
  console.log("Screenshots prop:", screenshots);
  return (
    <div style={{ padding: 16, height: '100%', overflow: 'auto' }}>
      {screenshots.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Screenshot ${idx + 1}`}
          style={{
            maxWidth: '100%',
            marginBottom: 16,
            border: '1px solid #ccc',
            borderRadius: 4
          }}
        />
      ))}
    </div>
  );
}
