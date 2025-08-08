import React from 'react'
import { eofficeData } from '../../../../../data/index.tsx';
import Comparison from '../../../../../components/comparison/index.tsx';

const EofficeComparison = () => {
  return (
    <div>
        <Comparison comparisonData={eofficeData.comparison} />
    </div>
  )
}

export default EofficeComparison