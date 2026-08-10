import React from 'react';
import Comparison from '../../../../../components/comparison/index.tsx';
import chatDataJson from '../../../../../data/chat.json';

const ConnectComparison = () => {
  return (
    <div>
      <Comparison comparisonData={chatDataJson.comparison} />
    </div>
  );
};

export default ConnectComparison;