import React from 'react'
import Comparison from '../../../../../components/comparison/index.tsx';
import { connectData } from '../../../../../data/index.tsx';

const ConnectComparison = () => {
  return (
    <div>
        <Comparison comparisonData={connectData.comparison} />
    </div>
  )
}

export default ConnectComparison