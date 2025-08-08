import React from 'react'
import Comparison from '../../../../../components/comparison/index.tsx';
import { streamlineData } from '../../../../../data/index.tsx';

const StreamlineComparison = () => {
  return (
    <div>
        <Comparison comparisonData={streamlineData.comparison} />
    </div>
  )
}

export default StreamlineComparison