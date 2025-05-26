import React, { useState, Suspense } from 'react';

// If you want to use dynamic imports, you can map component names to import functions
const componentMap = {
  InfiniteScroll: React.lazy(() => import('../components/InfiniteScroll')),
  // Add more mappings as needed
};

export default function OutputPane({ screenshots = [], uiComponentName }) {
  const [tab, setTab] = useState('images');
  const images = Array.isArray(screenshots) ? screenshots.filter(src => typeof src === 'string') : [];

  // Dynamically resolve the UI component if present
  const UIComponent = uiComponentName && componentMap[uiComponentName] ? componentMap[uiComponentName] : null;

  return (
    <div style={{
      height: '100%',
      overflowY: 'auto',
      padding: 16,
      background: 'var(--surface)',
      borderRadius: 'var(--border-radius)',
      boxShadow: '0 1px 8px #0002'
    }}>
      {/* Tab Buttons */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <button
          onClick={() => setTab('images')}
          style={{
            padding: '8px 16px',
            borderRadius: 6,
            border: 'none',
            background: tab === 'images' ? 'var(--primary-accent)' : 'var(--surface)',
            color: tab === 'images' ? '#181a1b' : 'var(--text)',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Images
        </button>
        <button
          onClick={() => setTab('ui')}
          style={{
            padding: '8px 16px',
            borderRadius: 6,
            border: 'none',
            background: tab === 'ui' ? 'var(--primary-accent)' : 'var(--surface)',
            color: tab === 'ui' ? '#181a1b' : 'var(--text)',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          UI
        </button>
      </div>

      {/* Tab Content */}
      {tab === 'images' ? (
        images.length > 0 ? (
          <ImagesGallery images={images} />
        ) : (
          <div style={{ color: 'var(--text-muted)', padding: 32, textAlign: 'center' }}>
            Images not present.
          </div>
        )
      ) : (
        UIComponent ? (
          <Suspense fallback={<div style={{ color: 'var(--text-muted)', padding: 32 }}>Loading UI...</div>}>
            <UIComponent />
          </Suspense>
        ) : (
          <div style={{ color: 'var(--text-muted)', padding: 32, textAlign: 'center' }}>
            UI not present.
          </div>
        )
      )}
    </div>
  );
}

// Helper component for image gallery with modal
function ImagesGallery({ images }) {
  const [openIdx, setOpenIdx] = useState(null);
  const isOpen = openIdx !== null && images[openIdx];

  return (
    <>
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
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
