import React from 'react';
import Comparison from '../../../../../components/comparison/index.tsx';
import worksuiteDataJson from '../../../../../data/worksuite.json';

const WorkSuiteComparison = () => {
  return (
    <div>
      <Comparison comparisonData={worksuiteDataJson.comparison} />
    </div>
  );
};

export default WorkSuiteComparison;