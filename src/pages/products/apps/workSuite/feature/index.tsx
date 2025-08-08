import React from 'react'
import FeatureTemp from '../../../../../components/featureTemp/index.tsx';
import ComparisonTemp from '../../../../../components/comparationTemp/index.tsx';
import { workSuiteData } from '../../../../../data/index.tsx';



const WorkSuiteFeature = () => {
  return (
    <div>
        <FeatureTemp jsonData={workSuiteData.feature} />
        <ComparisonTemp comparisonData={workSuiteData.comparison} />
    </div>
  )
}

export default WorkSuiteFeature