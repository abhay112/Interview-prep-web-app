import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CenteredDarkPage from './components/CenteredDarkPage';

// Lazy load your components
const InfiniteScroll = lazy(() => import('./components/InfiniteScroll'));
// You can do the same for other pages/components

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{
        minHeight: '100vh',
        color: 'var(--text)',
        background: 'var(--background)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/InfiniteScroll" element={
              <CenteredDarkPage>
                <InfiniteScroll />
              </CenteredDarkPage>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
