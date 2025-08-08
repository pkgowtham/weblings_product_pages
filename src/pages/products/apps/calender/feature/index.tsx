import React from 'react'
import FeatureTemp from '../../../../../components/featureTemp/index.tsx';
import ComparisonTemp from '../../../../../components/comparationTemp/index.tsx';
import { calenderData } from '../../../../../data/index.tsx';



const CalenderFeature = () => {
  return (
    <div>
        <FeatureTemp jsonData={calenderData.feature} />
        <ComparisonTemp comparisonData={calenderData.comparison} />
    </div>
  )
}

export default CalenderFeature