import React from 'react'
import Comparison from '../../../../../components/comparison/index.tsx';
import { calenderData } from '../../../../../data/index.tsx';

const CalenderComparison = () => {
  return (
    <div>
        <Comparison comparisonData={calenderData.comparison} />
    </div>
  )
}

export default CalenderComparison