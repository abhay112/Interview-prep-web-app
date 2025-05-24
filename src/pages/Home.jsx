import React, { useState } from 'react';
import { questions } from '../data/questions';
import QuestionSelect from '../components/QuestionSelect';
import CodePane from '../components/CodePane';
import OutputPane from '../components/OutputPane';
import SplitView from '../components/SplitView';
import { files } from '../fileLoader'; // adjust path as needed

export default function Home() {
  const [selectedId, setSelectedId] = useState(questions[0].id);
  const selected = questions.find(q => q.id === selectedId);

  // Get file content for the selected question
  let fileContent = '';
  if (selected?.code?.file && files[selected.code.file]) {
    fileContent = files[selected.code.file];
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <QuestionSelect value={selectedId} onChange={setSelectedId} />
      <div style={{ flex: 1, minHeight: 0 }}>
        {selected?.code &&
          <SplitView
            left={<CodePane code={selected.code} fileContent={fileContent} />}
            right={<OutputPane screenshots={selected.screenshots} />}
          />}
      </div>
    </div>
  );
}
