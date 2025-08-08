import React from 'react'
import FeatureTemp from '../../../../../components/featureTemp/index.tsx';
import ComparisonTemp from '../../../../../components/comparationTemp/index.tsx';
import { streamlineData } from '../../../../../data/index.tsx';



const StreamlineFeature = () => {
  return (
    <div>
        <FeatureTemp jsonData={streamlineData.feature} />
        <ComparisonTemp comparisonData={streamlineData.comparison} />
    </div>
  )
}

export default StreamlineFeature