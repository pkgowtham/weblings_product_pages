import React from 'react'
import Comparison from '../../../../../components/comparison/index.tsx';
import { workSuiteData } from '../../../../../data/index.tsx';

const WorkSuiteComparison = () => {
  return (
    <div>
        <Comparison comparisonData={workSuiteData.comparison} />
    </div>
  )
}

export default WorkSuiteComparison