import React from 'react';
import SplitPane from 'react-split-pane';

export default function SplitView({ left, right }) {
  return (
    <SplitPane
      split="vertical"
      minSize={150}
      defaultSize="90%"             
      style={{ position: 'relative', height: '100%' }}
      paneStyle={{ overflow: 'auto' }}
      resizerStyle={{
        background: '#ccc',
        width: '6px',
        cursor: 'col-resize',
        zIndex: 10,
        boxSizing: 'border-box',
        borderLeft: '2px solid #eee',
        borderRight: '2px solid #eee'
      }}
    >
      <div style={{ height: '100%' }}>{left}</div>
      <div style={{ height: '100%' }}>{right}</div>
    </SplitPane>
  );
}
